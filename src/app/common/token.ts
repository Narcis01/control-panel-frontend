import { Role } from "./role";

export class Token {
    access_token: string = "";
    refresh_token: string= "";
    role!: Role;
}
