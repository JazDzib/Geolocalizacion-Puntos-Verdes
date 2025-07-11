export interface LoginDTO{
    email: string;
    password: string;
}

export interface RegisterDTO {
    nombre: string;
    correo : string;
    contrasenia : string;
}

export interface AuthResponse{
    token : string;
}