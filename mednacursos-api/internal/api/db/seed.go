package db

import (
	"log"

	"gorm.io/gorm"

	"github.com/nelsonmarro/mednacursos/mednacursos-api/internal/api/models"
)

func Seed(db *gorm.DB) {
	// Crear roles
	roles := []models.Role{
		{RoleName: "Administrador"},
		{RoleName: "Estudiante"},
	}
	for _, role := range roles {
		if err := db.FirstOrCreate(&role, role).Error; err != nil {
			log.Fatalf("Could not seed roles: %v", err)
		}
	}
}
