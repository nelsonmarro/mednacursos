package user

import (
	"github.com/nelsonmarro/mednacursos/mednacursos-api/internal/api/db"
	"github.com/nelsonmarro/mednacursos/mednacursos-api/internal/api/models"
)

func getAllUsers() (*[]models.User, error) {
	var users []models.User
	err := db.DB.Find(&users).Error
	return &users, err
}

func getUserByID(userID uint) (*models.User, error) {
	var user models.User

	err := db.DB.Preload("Address").
		Preload("Roles").
		First(&user, "ID = ?", userID).
		Error

	return &user, err
}

func getUserByEmail(email string) (*models.User, error) {
	var user models.User
	err := db.DB.Preload("Address").
		Preload("Roles").
		First(&user, "email = ?", email).
		Error
	return &user, err
}

func createUser(user *models.User) error {
	return db.DB.Create(user).Error
}

func findRolesByIDs(ids []uint) ([]*models.Role, error) {
	var roles []*models.Role
	err := db.DB.Where("id IN ?", ids).Find(&roles).Error
	return roles, err
}

func assingRoleToUser(user *models.User, role *models.Role) error {
	return db.DB.Model(user).Association("Roles").Append(role)
}

func assingRolesToUser(user *models.User, roleIDs []uint) error {
	roles, err := findRolesByIDs(roleIDs)
	if err != nil {
		return err
	}
	return db.DB.Model(user).Association("Roles").Append(roles)
}
