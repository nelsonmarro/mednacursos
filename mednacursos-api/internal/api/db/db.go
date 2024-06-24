package db

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"

	"github.com/nelsonmarro/mednacursos/mednacursos-api/internal/api/models"
)

var DB *gorm.DB

func ConnectDatabase(dsn string) {
	var err error
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Error connecting to database")
	}

	DB.AutoMigrate(&models.User{}, &models.Address{}, &models.Role{})
}
