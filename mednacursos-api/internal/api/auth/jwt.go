package auth

import (
	"time"

	"github.com/golang-jwt/jwt/v5"

	"github.com/nelsonmarro/mednacursos/mednacursos-api/internal/api/config"
)

type Claims struct {
	jwt.RegisteredClaims
	Email  string   `json:"email"`
	Roles  []string `json:"roles"`
	UserID uint     `json:"user_id"`
}

var jwtKey []byte

func init() {
	jwtKey = []byte(config.C.JWTSecret)
}

func GenerateJwt(userID uint, email string, roles []string) (string, error) {
	expiresAt := jwt.NewNumericDate(time.Now().Add(time.Hour * 1))

	claims := Claims{
		UserID: userID,
		Email:  email,
		Roles:  roles,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: expiresAt,
			Subject:   "auth",
			IssuedAt:  jwt.NewNumericDate(time.Now()),
			NotBefore: jwt.NewNumericDate(time.Now()),
			Issuer:    "mednacursos-api",
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(jwtKey)
}

func ValidateJwt(tokenString string) (*Claims, error) {
	token, err := jwt.ParseWithClaims(
		tokenString,
		&Claims{},
		func(token *jwt.Token) (interface{}, error) {
			return jwtKey, nil
		},
	)
	if err != nil {
		return nil, err
	} else if claims, ok := token.Claims.(*Claims); ok && token.Valid {
		return claims, nil
	} else {
		return nil, err
	}
}
