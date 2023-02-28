/*
1. adicionar um evento onclick no btn
2. recuperar com dom /adicionar variavel /recuperar seu valor com .value
3. criar uma classe e instanciar formando um objeto que contenha os atributos que recuperamos na view
4.
*/

function cadastrarDespesa(){
    let ano = document.getElementById('ano');
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricoa = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    console.log(ano.value,mes.value,dia.value,tipo.value,descricao.value,valor.value)
}