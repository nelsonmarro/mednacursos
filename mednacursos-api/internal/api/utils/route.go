package utils

import (
	"encoding/json"
	"fmt"
	"strings"

	"github.com/go-playground/locales/en"
	ut "github.com/go-playground/universal-translator"
	"github.com/go-playground/validator/v10"
)

func ParseErrors(errs ...error) []string {
	var out []string
	for _, err := range errs {
		switch typedError := any(err).(type) {
		case validator.ValidationErrors:
			for _, e := range typedError {
				out = append(out, parseFieldError(e))
			}
		case *json.UnmarshalTypeError:
			out = append(out, parseMarshallingError(*typedError))
		default:
			out = append(out, err.Error())
		}
	}
	return out
}

func parseFieldError(e validator.FieldError) string {
	fieldPrefix := fmt.Sprintf("The field %s", e.Field())
	tag := strings.Split(e.Tag(), "|")[0]
	switch tag {
	case "required":
		return fmt.Sprintf("%s is required", fieldPrefix)
	case "email":
		return fmt.Sprintf("%s must be a valid email address", fieldPrefix)
	case "len":
		return fmt.Sprintf(
			"%s must be %s characters long",
			fieldPrefix,
			e.Param(),
		)
	case "eqfield":
		return fmt.Sprintf(
			"%s must be equal to the field %s",
			fieldPrefix,
			e.Param(),
		)
	default:
		english := en.New()
		translator := ut.New(english, english)
		if translatorInstance, found := translator.GetTranslator("en"); found {
			return e.Translate(translatorInstance)
		} else {
			return fmt.Errorf("%v", e).Error()
		}
	}
}

func parseMarshallingError(e json.UnmarshalTypeError) string {
	return fmt.Sprintf("The field %s must be of type %s", e.Field, e.Type)
}
