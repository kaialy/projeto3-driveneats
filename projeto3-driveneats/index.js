let tituloPrato;
let tituloBebida;
let tituloSobremesa;

let precoPrato;
let precoBebida;
let precoSobremesa;

let total;

function selecionarPrato(pratoClicado){
    
   
    const pratoSelecionadoAnteriormente = document.querySelector('.pratos .selecionado');    

   
    if (pratoSelecionadoAnteriormente !== null){
        pratoSelecionadoAnteriormente.classList.remove('selecionado');
    }    
    

    
    pratoClicado.classList.add('selecionado');

    tituloPrato = pratoClicado.querySelector('.titulo').innerHTML;    
    precoPrato = pratoClicado.querySelector('.preco').innerHTML;    

    ativarBotaoFecharPedido();
}

function selecionarBebida(bebidaClicada){

    
    const bebidaSelecionadaAnteriormente = document.querySelector('.bebidas .selecionado');

    
    if (bebidaSelecionadaAnteriormente !== null){
        bebidaSelecionadaAnteriormente.classList.remove('selecionado');
    }
    
   
    bebidaClicada.classList.add('selecionado');

    tituloBebida = bebidaClicada.querySelector('.titulo').innerHTML;  
    precoBebida = bebidaClicada.querySelector('.preco').innerHTML;  

    ativarBotaoFecharPedido();
}

function selecionarSobremesa(sobremesaClicada){

    const sobremesaSelecionadaAnteriormente = document.querySelector('.sobremesas .selecionado');

    if (sobremesaSelecionadaAnteriormente !== null){
        sobremesaSelecionadaAnteriormente.classList.remove('selecionado');
    }
    
    sobremesaClicada.classList.add('selecionado');

    tituloSobremesa = sobremesaClicada.querySelector('.titulo').innerHTML;  
    precoSobremesa = sobremesaClicada.querySelector('.preco').innerHTML;  

    ativarBotaoFecharPedido();
}

function ativarBotaoFecharPedido(){

    console.log(tituloPrato, tituloBebida, tituloSobremesa);

    
    if (tituloPrato !== undefined){
      
        if (tituloBebida !== undefined){
            
             if (tituloSobremesa !== undefined){
                
                const botao = document.querySelector('.fazer-pedido');
                botao.classList.add('ativo');

                botao.innerHTML = 'Fazer o Pedido';
             }
        }
    }
    
}

function fecharPedido(){

        
        if ( tituloPrato !== undefined){
           
            if (tituloBebida !== undefined){
               
                 if (tituloSobremesa !== undefined){

                   
                    const divFecharPedido = document.querySelector('.overlay');
                    
                    console.log(divFecharPedido);

               
                    divFecharPedido.classList.remove('escondido');

                   
                    divFecharPedido.querySelector('.prato .nome').innerHTML = tituloPrato;
                    

                    divFecharPedido.querySelector('.bebida .nome').innerHTML = tituloBebida;
                    

                    divFecharPedido.querySelector('.sobremesa .nome').innerHTML = tituloSobremesa;
                    divFecharPedido.querySelector('.sobremesa .preco').innerHTML = precoSobremesa;

                    precoPrato = precoPrato.replace('R$ ','');                    
                    divFecharPedido.querySelector('.prato .preco').innerHTML = precoPrato;
                    precoPrato = precoPrato.replace(',','.');
                    
                    precoBebida = precoBebida.replace('R$ ','');                    
                    divFecharPedido.querySelector('.bebida .preco').innerHTML = precoBebida;
                    precoBebida = precoBebida.replace(',','.');

                    precoSobremesa = precoSobremesa.replace('R$ ','');                    
                    divFecharPedido.querySelector('.sobremesa .preco').innerHTML = precoSobremesa;
                    precoSobremesa = precoSobremesa.replace(',','.');

                    total = Number(precoSobremesa) + Number(precoBebida) + Number(precoPrato);

                    const divPrecoTotal = divFecharPedido.querySelector('.total .preco-total');
                    divPrecoTotal.innerHTML = `R$ ${total.toFixed(2)}`;

                 }            
            }
        }

}

function cancelar(){
   
    const divFecharPedido = document.querySelector('.overlay');
    divFecharPedido.classList.add('escondido');
}

function confirmar(){

    let msg = `Olá, gostaria de fazer o pedido:
    - Prato: ${tituloPrato}
    - Bebida: ${tituloBebida}
    - Sobremesa: ${tituloSobremesa}
    Total: R$ ${total.toFixed(2)}`;

    msg = encodeURIComponent(msg);

    const linkWP = `https://wa.me/359999999999?text=${msg}`;

    window.open(linkWP);
    
    console.log(msg);


}