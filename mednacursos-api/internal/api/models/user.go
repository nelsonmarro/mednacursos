package models

type Address struct {
	Base,
	AddressLine1 string `gorm:"size:300"`
	AddressLine2 *string `gorm:"size:300"`
	City         string  `gorm:"size:100"`
	State        string  `gorm:"size:100"`
}

type User struct {
	Base,
	University *string `gorm:"size:100"`
	Address   Address `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	FirstName string  `gorm:"size:100"`
	LastName  string  `gorm:"size:100"`
	Cedula    string  `gorm:"size:10,unique"`
	Email     string  `gorm:"size:100"`
	Phone     string  `gorm:"size:100"`
	Password  string
	Roles     []*Role `gorm:"many2many:user_roles;"`
	AddressID uint
}

type Role struct {
	Base,
	RoleName string `gorm:"size:300"`
	Users []*User `gorm:"many2many:user_roles;"`
}
