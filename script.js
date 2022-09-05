// Variavel usando queryselector com id no HTML
// id relogioDigital
let relogio = document.querySelector('#relogio')
let h = document.querySelector('#h')
let m = document.querySelector('#m')
let s = document.querySelector('#s')

// id relogioSmart relogio
let hSmart = document.querySelector('#hSmart')
let mSmart = document.querySelector('#mSmart')
let sSmart = document.querySelector('#sSmart')

// id relogioSmart data e dia da semana
let semana = document.querySelector('#semana')
let data = document.querySelector('#data')

// Chamando ometodo DATE para buscar hora local.
let dataHora = new Date()
// Testando Date no console
console.log(dataHora);

// Função para atualizar relogio
function moveRelogio() {
  // Chamando ometodo DATE para buscar hora local.
  let momentoAtual = new Date()

  // Trazendo do metodo Date Hrs, Mints, Segs
  // Variavel dentro da função
  let hora = momentoAtual.getHours()
  let minuto = momentoAtual.getMinutes()
  let segundo = momentoAtual.getSeconds()

  // Criando uma nova instancia para formatar hora
  let strHora = new String(hora)
  let strMinuto = new String(minuto)
  let strSegundo = new String(segundo)

  // Aplicando condicional para formatar hora.
  // Atentar a sequência
  if (strSegundo.length == 1) segundo = "0" + segundo;
  if (strMinuto.length == 1) minuto = "0" + minuto;
  if (strHora.length == 1) hora = "0" + hora;

  // Inserinfo dados no relogioDigital
  h.textContent = hora
  m.textContent = minuto
  s.textContent = segundo

  // Inserinfo dados no relogioSmart
  hSmart.textContent = hora
  mSmart.textContent = minuto
  sSmart.textContent = segundo

  // Força atualização poderia ser o setInterval

  setTimeout("moveRelogio()", 1000)
}

// Função pegandpo data
function pegarData() {

  // pegando dados do metodo p/ variaveis
  let diaDaSemana = dataHora.getDay()
  let dia = dataHora.getDate()
  let mes = dataHora.getMonth() + 1
  let ano = dataHora.getFullYear()

  // Convertendo number em string para formatar texto
  let strDia = new String(dia)
  let strMes = new String(mes)

  //Concatenando com + 0
  if (strDia.length == 1) dia = '0' + dia
  if (strMes.length == 1) mes = '0' + mes

  // Setando o dia da semana com o switch
  switch (diaDaSemana) {
    case 0:
      diaDaSemana = 'DOM'
      break;
    case 1:
      diaDaSemana = 'SEG'
      break;
    case 2:
      diaDaSemana = 'TER'
      break;
    case 3:
      diaDaSemana = 'QUA'
      break;
    case 4:
      diaDaSemana = 'QUI'
      break;
    case 5:
      diaDaSemana = 'SEX'
      break;
    case 6:
      diaDaSemana = 'SÁB'
      break;
  }

  let dataAtual = dia + '/' + mes + '/' + ano

  semana.textContent = diaDaSemana
  data.textContent = dataAtual
}
// Evocando a função
pegarData()

// Analizando tipo de formataçao dos dados
var options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}
// Variavel de teste com Date
let teste = new Date()

// toLocaleString para fortar numero
console.log(teste.toLocaleString('pt-BR'))
// Teste com dados formatados pela variavel option
console.log(teste.toLocaleString('pt-BR', options))
console.log(teste.toLocaleDateString('pt-BR'))
console.log(teste.toLocaleTimeString('pt-BR'))

//Conectando API de clima tempo
function getUserPosition() {
  let url = ''
  navigator.geolocation.getCurrentPosition((pos) => {
    let lat = pos.coords.latitude
    let long = pos.coords.longitude
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=c4866228915c658730601ed7036cd6ac`
    fetchApi(url)
    console.log(url)
  })
}

function fetchApi(url) {
  let city = document.querySelector('.city')
  let temperature = document.querySelector('#temp')
  let humidity = document.querySelector('#umidad')

  fetch(url)
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      let tempInCelsius = ((5 / 9) * (data.main.temp - 32)).toFixed(1);

      city.textContent = data.name
      temperature.innerHTML = tempInCelsius
      humidity.innerHTML = data.main.humidity
    })
    .catch((err) => {
      city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
      temperature.innerHTML = `-`;
    })
}

getUserPosition();