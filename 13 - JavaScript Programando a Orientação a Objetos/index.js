class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo = 0;
    sacar(valor){
        if(this._saldo >= valor){
           this._saldo -= valor;  
        } else {console.log("saldo insuficiente para saque!");}
    };
    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log(this._saldo)
        }
    };
}




const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf  = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf  = 88822233309;       //shift+alt seleciona várias linhas e pode alterar valores

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;


contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo);

