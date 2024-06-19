import daoAddDinheiro from src/DAO/daoAddDinheiro.js;
import daoSaidaDeDinhiro from '/.src/DAo/daSaidaDeDinhiro.js';
import { getSaldo, removeSaldo } from './addDinheiroCntroler';

class RemoveDinheiro {
    static removeDinheiro(valor) {
        if (getSaldo() >= valor) {
            removeSaldo(valor);
            console.log(`Novo saldo: ${getSaldo()}`);
        } else {
            console.log('Saldo insuficiente para remover o valor solicitado.');
        }
    }
}

export default RemoveDinheiro;
// Certifique-se de que as classes compartilhem o mesmo saldo
Object.defineProperty(RemoveDinheiro, 'saldo', {
    get: function() {
        return AddDinheiro.saldo;
    },
    set: function(value) {
        AddDinheiro.saldo = value;
    }
});

// Uso das classes

// Configura o saldo inicial
AddDinheiro.setSaldo(100);

// Adiciona dinheiro ao saldo existente
AddDinheiro.addDinheiro(50); // Novo saldo: 150

// Remove dinheiro do saldo existente
RemoveDinheiro.removeDinheiro(30); // Novo saldo: 120
RemoveDinheiro.removeDinheiro(200); // Saldo insuficiente para remover o valor solicitado.