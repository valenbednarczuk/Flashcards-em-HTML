function criaCartao(categoria, pergunta, ressposta){
    let container= document.getElementById('container')
    let cartao= document.createElement('article')
    cartao.className= 'cartao'

    cartao.innerHTML= `
    <div class= <"cartao_conteudo">
    <h3>${categoria}</h3>
    <div class="cartao_conteudo_pergunta">
    <p>${pergunta}</p>
    </div>
    <div class="cartao_conteudo_resposta">
    <p>${resposta}</p>
    </div>
    </div>

    