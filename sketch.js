// ÁREA DAS VARIAVEIS (TAMANHO, POSIÇÃO)
let jogador;
let vFundo;
let itens = [];
let imgItens = [];
let pontos = 0;
let som;


function preload() {
  vFundo = loadImage("./game/imggame/fundoToy.jpg"); //CARREGA A IMAGEM DE FUNDO
  jogador = new Jogador(); //INSIRE O JOGADOR
  imgItens[0] = loadImage("./game/imggame/alien.png");
  imgItens[1] = loadImage("./game/imggame/bola.png");
  imgItens[2] = loadImage("./game/imggame/moeda.png");
  imgItens[3] = loadImage("./game/imggame/bombtoy.png");
  som_bomba = loadSound("./aud/bomba.mp3");
  som_itens = loadSound("./aud/moedas.mp3");
  itens[0] = new Itens();
  itens[1] = new Itens();
  itens[2] = new Itens();
  itens[3] = new Itens();
}

function setup() {
  createCanvas(600, 400).parent("jogo"); //AS PROPORÇÕES DA TELA DO JOGO
}

function draw(){
  executarJogo();
}
