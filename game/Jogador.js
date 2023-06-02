// CRIAÇÃO DO PERSONAGEM (TAMANHO, POSIÇÃO)
class Jogador {
    constructor() {
      this.imagem = loadImage("./game/imggame/buzz.png");
      this.posX = 270;
      this.posY = 290;
      this.velocidade = 7;
      this.largura = 100;
      this.altura = 100;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
    //ÁREA ONDE É FEITO O PERSONAGEM SE MOVER
    mova() {
      image(this.imagem, this.posX, this.posY, this.largura, this.altura);
      //MOVER O JOGADOR COM AS SETAS (<--/-->)
      if (keyIsDown(39) && this.xFinal < 600) {
        this.posX += this.velocidade;
      }
      if (keyIsDown(37) && this.xInicial > 0) {
        this.posX -= this.velocidade;
      }
  
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }