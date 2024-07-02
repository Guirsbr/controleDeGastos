class UserController {
    constructor() {
        this.userDAO = new UserInfoDAO();
    }

    createUser(nome, email, telefone, dataNascimento) {
        const user = new UserInfo(nome, email, telefone, dataNascimento);
        return this.userDAO.create(user);
    }

    getAllUsers() {
        return this.userDAO.readAll();
    }

    getUserByEmail(email) {
        return this.userDAO.readByEmail(email);
    }

    updateUser(email, nome, telefone, dataNascimento) {
        const existingUser = this.userDAO.readByEmail(email);
        if (existingUser) {
            const updatedUser = new UserInfo(nome, email, telefone, dataNascimento);
            return this.userDAO.update(email, updatedUser);
        }
        return null;
    }

    deleteUser(email) {
        return this.userDAO.delete(email);
    }
}
