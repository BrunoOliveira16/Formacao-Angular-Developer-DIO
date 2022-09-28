class Movimentacao {
    constructor(banco = 'padrao', nome = '', saldo = 0){
        this.banco = banco
        this.nome = nome
        this. saldo = saldo
    }
}

class Registro {
    constructor(dia, mes, ano){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano,
        this.movimentacoes = []
    }

    novaMovimentacao(... movimentacoes){
        movimentacoes.forEach( 
            lancamento => this.movimentacoes.push(lancamento)
            )
    }

    resumo(){
        let valorAtualizado = 0
        this.movimentacoes.forEach(lancamento => {
            valorAtualizado += lancamento.saldo
        })
        return valorAtualizado
    }
}

const m01 = new Movimentacao('Modal', 'salario', 10000)
const m02 = new Movimentacao('Modal', 'comissao', 1000)
const m03 = new Movimentacao('Modal', 'imposto', -3000)
const m04 = new Movimentacao('Modal', 'contas', -2000)

const registro01 = new Registro(22,10,2021)
registro01.novaMovimentacao(m01, m02, m03, m04)
console.log('O saldo de registros foi de: ' + registro01.resumo())