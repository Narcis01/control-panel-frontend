import { Role } from "./role";

export class RegisterRequest {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    role?: Role;
}
