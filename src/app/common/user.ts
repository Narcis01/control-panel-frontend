import { Role } from "./role";

export class User {
    id!: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    role?: Role;
    enabled?: boolean;
    accountNonExpired?: boolean;
    accountNonLocked?: boolean;
}
