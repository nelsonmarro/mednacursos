package middleware

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"

	"github.com/nelsonmarro/mednacursos/mednacursos-api/internal/api/auth"
	"github.com/nelsonmarro/mednacursos/mednacursos-api/internal/api/constants"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		tokenStr := c.GetHeader(constants.HeaderAuthorization)
		if tokenStr == "" {
			c.JSON(
				http.StatusUnauthorized,
				gin.H{"error": "No se encontró el token de autorización"},
			)
			c.Abort()
			return
		}

		// The token should be prefixed with "Bearer "
		tokenParts := strings.Split(tokenStr, " ")
		if len(tokenParts) != 2 || tokenParts[0] != "Bearer" {
			c.JSON(
				http.StatusUnauthorized,
				gin.H{"error": "Token inválido"},
			)
			c.Abort()
			return
		}

		tokenStr = tokenParts[1]

		claims, err := auth.ValidateJwt(tokenStr)
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Token inválido"})
			c.Abort()
			return
		}

		c.Set("user_id", claims.UserID)
		c.Set("email", claims.Email)
		c.Set("roles", claims.Roles)
		c.Next()
	}
}
