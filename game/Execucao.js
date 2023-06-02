function executarJogo(){
    //imprime à tela as informações guardas nas variáveis
  background(vFundo);
  jogador.mova();
  itens[0].mova();
  for (let i = 0; i < itens.length; i++) {
    itens[i].mova();
    if (itens[i].posY > 400) {
      itens[i] = new Itens(itens[i].posY);
    }
    //if = a condição necessária para que quaando o jogador tocar no objeto o mesmo marque ponto
    //texto da pontuação
    textSize(20);
    text("Pontos = " + pontos, 30, 40);
    if (
      jogador.xInicial < itens[i].xFinal &&
      jogador.xFinal > itens[i].xInicial &&
      jogador.yInicial < itens[i].yFinal &&
      jogador.yFinal > itens[i].yInicial
    ) {
      if (itens[i].imagem == imgItens[3]) {
        pontos = 0;
        //som de explosão
        itens[i] = new Itens();
        som_bomba.play();
      } else {
        pontos += 1;
        itens[i] = new Itens();
        //som de moedinha
        som_itens.play();
      }
    }
  }
}