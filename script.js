function ConverterReal() {
  var valorElemento = document.getElementById("valor");
  var valor = parseFloat(valorElemento.value);
  var valorEmReal = valor * 5;
  var valorBitCoins = valor * 0.000021;
  document.getElementById("valorConvertidoReal").innerHTML =
    "O resultado em real é R$ " + valorEmReal;
  document.getElementById("valorConvertidoBitcoins").innerHTML =
    "O resultado em BitCoins é " + valorBitCoins;
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = parseFloat(valorElemento.value);
  var valorEmEuro = valor * 0.85;
  var valorBitCoins = valor * 0.000021;
  document.getElementById("valorConvertidoEuro").innerHTML =
    "O resultado em euros é € " + valorEmEuro;
  document.getElementById("valorConvertidoBitcoins").innerHTML =
    "O resultado em BitCoins é " + valorBitCoins;
}
function ConverterLibra() {
  var valorElemento = document.getElementById("valor");
  var valor = parseFloat(valorElemento.value);
  var valorEmLibra = valor * 0.72;
  var valorBitCoins = valor * 0.000021;
  document.getElementById("valorConvertidoLibra").innerHTML =
    "O resultado em libras é £ " + valorEmLibra;
  document.getElementById("valorConvertidoBitcoins").innerHTML =
    "O resultado em BitCoins é " + valorBitCoins;
}