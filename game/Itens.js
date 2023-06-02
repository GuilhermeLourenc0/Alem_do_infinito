// CRIAÇÃO DOS ITENS
class Itens {
    constructor() {
      this.imagem = imgItens[int(random(0, 3.7))];
      this.posX = random(10, 550);
      this.posY = 0;
      this.velocidade = random(1, 2 + pontos);
      this.largura = 55;
      this.altura = 55;
    }
    //MOVE OS ITENS ALEATORIAMENTE
    mova() {
      this.posY += this.velocidade;
      image(this.imagem, this.posX, this.posY, this.largura, this.altura);
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }