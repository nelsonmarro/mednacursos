package user

import (
	"golang.org/x/crypto/bcrypt"

	"github.com/nelsonmarro/mednacursos/mednacursos-api/internal/api/models"
)

func HashPassowrd(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

func RegisterUser(user *models.User) error {
	hashedPassword, err := HashPassowrd(user.Password)
	if err != nil {
		return err
	}

	user.Password = hashedPassword
	return createUser(user)
}

func LoginUser(email, password string) (*models.User, bool) {
	user, err := getUserByEmail(email)
	if err != nil {
		return nil, false
	}

	if CheckPasswordHash(password, user.Password) {
		return user, true
	}

	return nil, false
}
