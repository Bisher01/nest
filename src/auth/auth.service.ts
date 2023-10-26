import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signin() {
        return { msg: "hello i am signed in" };
    }
    signup() {
        return { msg: "hello i am signed up" };
    }
}