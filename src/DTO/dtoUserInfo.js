class UserInfo {
    constructor(nome, email, telefone, dataNascimento) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
    }

    // Getters e Setters
    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getTelefone() {
        return this.telefone;
    }

    setTelefone(telefone) {
        this.telefone = telefone;
    }

    getDataNascimento() {
        return this.dataNascimento;
    }

    setDataNascimento(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
}
