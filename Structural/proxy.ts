interface Resource {
    access(password?: string | number): void;
    denied(): void;
}

class SecuritySystem implements Resource {
    private login: Login;

    constructor(login: Login) {
        this.login = login;
    }

    access(password: string | number): void {
        this.request(password) ? this.login.access() : this.denied();
    }

    request(password: string | number): Boolean {
        return password === `proxy`;
    }

    denied(): void {
        this.login.denied();
    }
}

class Login implements Resource {
    access(): void {
        console.log(`Access submit`);
    }
    denied(): void {
        console.log(`Access denied`);
    }
}

const login = new SecuritySystem(new Login());
login.access(`word`);
login.access(12345);
login.access(`proxy`);