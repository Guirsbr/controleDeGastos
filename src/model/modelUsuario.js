class UserModel {
    constructor() {
        this.userController = new UserController();
    }

    createUser(nome, email, telefone, dataNascimento) {
        return this.userController.createUser(nome, email, telefone, dataNascimento);
    }

    getAllUsers() {
        return this.userController.getAllUsers();
    }

    getUserByEmail(email) {
        return this.userController.getUserByEmail(email);
    }

    updateUser(email, nome, telefone, dataNascimento) {
        return this.userController.updateUser(email, nome, telefone, dataNascimento);
    }

    deleteUser(email) {
        return this.userController.deleteUser(email);
    }
}
