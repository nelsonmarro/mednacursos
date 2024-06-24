package user

type baseUserDto struct {
	University *string `json:"university"`
	AddressCreateDto
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Cedula    string `json:"cedula"     binding:"required,len=10"`
	Email     string `json:"email"      binding:"required,email"`
	Phone     string `json:"phone"`
}

type UserDto struct {
	baseUserDto
	Roles []RoleDto `json:"roles"`
	ID    uint      `json:"id"`
}

type RoleDto struct {
	Name string `json:"name"`
	ID   uint   `json:"id"`
}

type AddressDto struct {
	AddressCreateDto
	ID uint `json:"id"`
}

type AddressCreateDto struct {
	AddressLine1 string  `json:"address_line1"`
	AddressLine2 *string `json:"address_line2"`
	City         string  `json:"city"`
	State        string  `json:"state"`
}

type RegisterUserDto struct {
	baseUserDto
	Password        string `json:"password"         binding:"required"`
	ConfirmPassword string `json:"confirm_password" binding:"required,eqfield=Password"`
	AddressCreateDto
	Roles []uint `json:"roles"            binding:"required"`
}

type LoginDto struct {
	Email    string `json:"email"    binding:"required,email"`
	Password string `json:"password" binding:"required"`
}
