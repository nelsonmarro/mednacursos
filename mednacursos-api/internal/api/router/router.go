package router

import (
	"github.com/gin-gonic/gin"

	"github.com/nelsonmarro/mednacursos/mednacursos-api/internal/api/bussiness/user"
	"github.com/nelsonmarro/mednacursos/mednacursos-api/internal/api/middleware"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	publicRoutes := r.Group("/api/public")
	user.RegisterPublicUserRoutes(publicRoutes)

	securedRoutes := r.Group("/api/secure")
	securedRoutes.Use(middleware.AuthMiddleware())

	user.RegisterSecuredUserRoutes(securedRoutes)

	return r
}
