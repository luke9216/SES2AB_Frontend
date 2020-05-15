import http from "./HttpService";
import { backendEndpoint } from "../config.json";

const authEndpoint = `${backendEndpoint}`;

function authUrl(service: string) {
    return `${authEndpoint}auth/${service}/`;
}

export function userLogin(email: string, password: string) {
    return http.post(authUrl("login"), {
        username: email,
        email: email,
        password: password
    });
}