package main

import (
	"log"

	"github.com/nelsonmarro/mednacursos/mednacursos-api/internal/api/config"
	"github.com/nelsonmarro/mednacursos/mednacursos-api/internal/api/db"
	"github.com/nelsonmarro/mednacursos/mednacursos-api/internal/api/router"
)

func main() {
	config.LoadConfig()

	dsn := config.C.DBDSM
	db.ConnectDatabase(dsn)
	db.Seed(db.DB)

	r := router.SetupRouter()
	if err := r.Run(":8080"); err != nil {
		log.Fatal("Failed to run server:", err)
	}
}
