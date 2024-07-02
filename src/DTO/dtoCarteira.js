class WalletDTO {
    constructor(userInfo, cards, transactions, balance) {
        this.userInfo = userInfo;
        this.cards = cards;
        this.transactions = transactions;
        this.balance = balance;
    }

    // Getters e Setters
    getUserInfo() {
        return this.userInfo;
    }

    setUserInfo(userInfo) {
        this.userInfo = userInfo;
    }

    getCards() {
        return this.cards;
    }

    setCards(cards) {
        this.cards = cards;
    }

    getTransactions() {
        return this.transactions;
    }

    setTransactions(transactions) {
        this.transactions = transactions;
    }

    getBalance() {
        return this.balance;
    }

    setBalance(balance) {
        this.balance = balance;
    }
}

global.carteira = 0
global.listaValoresAdicionadosGlobal = []
global.listaValoresRetiradosGlobal = []