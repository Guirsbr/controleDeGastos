class UserInfoDAO {
    constructor() {
        this.users = [];
    }

    create(user) {
        this.users.push(user);
        return user;
    }

    readAll() {
        return this.users;
    }

    readByEmail(email) {
        return this.users.find(user => user.getEmail() === email);
    }

    update(email, updatedUser) {
        const index = this.users.findIndex(user => user.getEmail() === email);
        if (index !== -1) {
            this.users[index] = updatedUser;
            return updatedUser;
        }
        return null;
    }

    delete(email) {
        const index = this.users.findIndex(user => user.getEmail() === email);
        if (index !== -1) {
            const deletedUser = this.users.splice(index, 1);
            return deletedUser;
        }
        return null;
    }
}
