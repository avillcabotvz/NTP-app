import jwtDecode from "jwt-decode";

export function setToken(token) {
    window.localStorage.setItem('auth_token', token);
}

export function unsetToken() {
    window.localStorage.removeItem('auth_token');
}

export function getToken() {
    const token = window.localStorage.getItem('auth_token');
    if (!token) { // Token not set
        return null;
    }

    return token;
}

export function getTokenData() {
    const token = window.localStorage.getItem('auth_token');
    if (!token) { // Token not set
        return null;
    }

    const tokenData = jwtDecode(token);

    return tokenData;
}