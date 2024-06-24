package user

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/nelsonmarro/mednacursos/mednacursos-api/internal/api/auth"
	"github.com/nelsonmarro/mednacursos/mednacursos-api/internal/api/models"
	"github.com/nelsonmarro/mednacursos/mednacursos-api/internal/api/utils"
)

func RegisterPublicUserRoutes(group *gin.RouterGroup) {
	group.POST("/login", loginUserHandler)
	group.POST("/register", registerUserHandler)
}

func RegisterSecuredUserRoutes(group *gin.RouterGroup) {
	group.GET("/profile", getProfileHandler)
}

func registerUserHandler(c *gin.Context) {
	var registerDto RegisterUserDto

	if err := c.ShouldBindJSON(&registerDto); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": utils.ParseErrors(err)})
		return
	}

	user := models.User{
		FirstName:  registerDto.FirstName,
		LastName:   registerDto.LastName,
		Cedula:     registerDto.Cedula,
		Phone:      registerDto.Phone,
		Email:      registerDto.Email,
		University: registerDto.University,
		Password:   registerDto.Password,
		Address: models.Address{
			AddressLine1: registerDto.AddressLine1,
			AddressLine2: registerDto.AddressLine2,
			City:         registerDto.City,
			State:        registerDto.State,
		},
	}

	if err := RegisterUser(&user); err != nil {

		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	if err := assingRolesToUser(&user, registerDto.Roles); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, user)
}

func loginUserHandler(c *gin.Context) {
	var loginDto LoginDto

	if err := c.ShouldBindJSON(&loginDto); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": utils.ParseErrors(err)})
		return
	}

	user, success := LoginUser(loginDto.Email, loginDto.Password)
	if !success {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
		return
	}

	roleNames := utils.Map(user.Roles, func(role *models.Role) string {
		return role.RoleName
	})

	token, err := auth.GenerateJwt(user.ID, user.Email, roleNames)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": token})
}

func getProfileHandler(c *gin.Context) {
	// esta llave user_id es la que se setea en el auth middleware
	userID := c.MustGet("user_id").(uint)

	user, err := getUserByID(userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, user)
}
