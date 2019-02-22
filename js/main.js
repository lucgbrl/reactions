   $(document).ready(function(){

    // as componentes de votação e gráfico são ocultadas da visualização pelo jQuery
    // ambas são otimizadas a partir de manipulações com o CSS para uma animação mais satisfatória

    $("#b").hide();
    $("#card").hide();

    // As funções abaixo são responsáveis por: 1 - exibir os botões de votação
    // 2 - Exibir as barras de progresso após votar em uma das opções

    $("#menu-toggle").id(":hover")(function(){
        $("#b").slideToggle(4);
    });

    $("#b").click(function(){
        $("#card").show(4);
    });
});
