document.getElementById("botao-enviar").addEventListener("click",validaFormulario)

function validaFormulario(){
  //codigo a ser executado - o que faz exatamente

  nome = document.getElementById("nome-usuaria").value;
  telefone = document.getElementById("telefone-usuaria").value;
  email = document.getElementById("email-usuaria").value;
  
  if( nome != "" && 
      telefone != "" && 
      email != ""){
    alert("Prontinho! Você receberá as informações via e-mail.")    
  }else {
        alert("Por favor, preencha todos os campos!") 
  }
}


/*CURSO FE2 - MAR/23*/
function carregaInformacoes (){
  var informacoes = {
    info1: {
      tipo:"História",
      imagem:"img/hotel-cordoni-atual.png",
      vspace:"5%",
      descricao:"<p>O prédio do atual Hotel Cordoni era propriedade do antigo Banco Popular do Rio Grande do Sul, em 1928.Em seguida, se transferiu para o sobrado o Hotel Familiar de propriedade de Luiz Gonzaga Neto. Somente mais tarde, Gabriel Cordoni, adquiriu por compra, o referido imóvel e, ali instalou o tradicional Hotel Cordoni, o mais antigo hotel em funcionamento do município de São Pedro do Sul.</p><p>Com o falecimento de Gabriel Cordoni, seu filho Ivo assumiu o hotel juntamente com sua mãe. Com o passar do tempo, Ivo contrai matrimônio com Iva Ferrari Simon, também descendente de italianos, e dessa união nascem dois filhos: Gabriel Roberto Cordoni e Maria Bernardete Cordoni, mas a família ainda não estava completa, por isso adotou Ana Mariza Silveira</p><p>O casal Ivo e Iva, além de hospedagem do hotel, passam a oferecer aos visitantes e a população um restaurante no mesmo endereço. O Hotel recebeu hóspedes permanentes por meses ou anos, autoridades como juízes e promotores, médicos e outros que se deslocavam para cidade com a finalidade de trabalhar e encontravam no casal Cordoni uma família dedicada a promover o bem estar e conforto de seus inquilinos. A cantora Ângela Maria, musa do rádio nas décadas de 50 e 60, esteve em São Pedro do Sul realizando um show no Clube do Comércio e hospedou-se no Hotel Cordoni.</p><p>Com o passar do tempo o restaurante foi fechado, permanecendo o hotel, que até os dias de atuais, ainda hospeda aqueles que se deslocam ao município de São Pedro do Sul e necessitam de um lugar tranquilo e familiar para descansar.</p>",
    },
    info2: {
      tipo:"Acomodação",
      imagem: "img/acomodacoes.jpg",
      vspace: "17.6%",
      descricao:"<p>O Hotel Cordoni oferece acomodações para viajantes e estudantes com tarifas bastante atrativas e está equipado com os seguintes itens:</p><ul><li><b>Banheiros com chuveiros com água quente,</b></li><li><b>Estacionamento em frente,</b></li><li><b>Energia elétrica com voltagem 220v,</b></li><li><b>Wi-fi</b></li><li><b>Quartos aconchegantes com roupa de cama limpa e equipados com ventiladores.</b></li></ul>",
    },
    info3: {
      tipo:"Localização",
      imagem:"img/mapa.jpg",
      vspace: "",
      descricao:"<p>A formação da cidade data de 1866, quando Crescêncio José Pereira doou 14 hectares de terra para edificação de uma capela e distribuiu gratuitamente terrenos para quem quisesse aqui residir. Até o ano de 1926 pertenceu à Santa Maria, e a 22 de março de 1926 conseguiu sua emancipação político/administrativa, através do decreto Estadual nº3624. </p><p>Teve ao longo de sua história vários nomes: 'São Pedro do Rincão', 'Rincão de São Pedro', 'São Pedro' e finalmente 'São Pedro do Sul'.</p><a href='https://www.google.com.br/maps/place/Hotel+Cordoni/@-29.6184861,-54.1810915,17z/data=!3m1!4b1!4m8!3m7!1s0x950185ef6ce67e29:0x957a068da5eec93c!5m2!4m1!1i2!8m2!3d-29.6184908!4d-54.1785166'target='_blank'><img class = 'mapa-google'src='img/mapa.jpg' alt = 'mapa google com a localizacao do hotel'></a><p>R. Silva Jardim, 1107 - Centro, São Pedro do Sul - RS, 97400-000</p>",
    }
  };
  var content = document.getElementById("content");

  for (var info in informacoes){
    content.innerHTML +='<div class = "cards">' + '<img src = "'+informacoes[info].imagem +'" vspace = "'+ informacoes[info].vspace +'">'+'<details>'+'<summary>'+ informacoes[info].tipo + '</summary>'+ informacoes[info].descricao + '</details>'+'</div>'
  }
}

carregaInformacoes();
