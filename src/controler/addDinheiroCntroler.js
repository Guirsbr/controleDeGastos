import daoAddDinheiro from src/DAO/daoAddDinheiro.js;
import daSaidaDeDinheiro from src/DAO/daSaidaDeDinheiro.js;

class AddDinheiro {
    static saldo = 0;

    static setSaldo(saldoInicial) {
        AddDinheiro.saldo = saldoInicial;
    }

    static addDinheiro(valor) {
        AddDinheiro.saldo += valor;
        // Aqui você pode adicionar lógica para interagir com daoAddDinheiro, se necessário
        console.log(`Novo saldo: ${AddDinheiro.saldo}`);
    }
}


AddDinheiro.setSaldo(100);

// Adiciona dinheiro ao saldo existente
AddDinheiro.addDinheiro(50); // Novo saldo: 150
AddDinheiro.addDinheiro(30); // Novo saldo: 180