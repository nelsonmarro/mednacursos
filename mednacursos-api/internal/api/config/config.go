package config

import (
	"github.com/spf13/viper"
)

type Config struct {
	DBDSM     string `mapstructure:"DB_DSN"`
	JWTSecret string `mapstructure:"JWT_SECRET"`
}

var C Config

func LoadConfig() {
	viper.SetConfigName("config")
	viper.SetConfigType("yaml")
	viper.AddConfigPath("configs/")
	viper.AutomaticEnv()

	if err := viper.ReadInConfig(); err != nil {
		panic(err)
	}

	err := viper.Unmarshal(&C)
	if err != nil {
		panic(err)
	}
}
