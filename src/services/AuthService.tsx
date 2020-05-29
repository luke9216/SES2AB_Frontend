import http from "./HttpService";
import { backendEndpoint } from "../config.json";

const authEndpoint = `${backendEndpoint}`;

function authUrl(service: string) {
    return `${authEndpoint}auth/${service}/`;
}

export function userLogin(username: string, email: string, password: string) {
    return http.post(authUrl("login"), {
        username: username,
        email: email,
        password: password
    });
}