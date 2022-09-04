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