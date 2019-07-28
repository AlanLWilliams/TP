var monedaE = document.getElementById('monedaE');

var monedaC = document.getElementById('monedaC');
var conv = document.getElementById('conv');
var resultado
conv.onclick = function(){
var valor= document.getElementById('monto').value;
var valorE = document.getElementById('monedaE').value;
var valorC = document.getElementById('monedaC').value;

if (valorE=="ars")
 {
document.getElementById('simbolo').innerHTML = "$";
   if (valorC=="eur")//de pesas arg a eur
    {
      document.getElementById('simboloC').innerHTML = "€";
    resultado= parseFloat(valor*0.021).toFixed(2);
    }
     if(valorC=="usd")//de pesas arg a dolar estadounidense
    {document.getElementById('simboloC').innerHTML = "$";
    resultado= parseFloat(valor*0.031).toFixed(2);
    }
    if (valorC=="brl")//de pesas arg a real brasileño
     {document.getElementById('simboloC').innerHTML = "R$";
      resultado= parseFloat(valor*0.087).toFixed(2);
    }
    if (valorC=="ars")//de pesas arg a pesos arg
    {document.getElementById('simboloC').innerHTML = "$";
      resultado= valor;
    }
}
else if (valorE=="eur") {
  document.getElementById('simbolo').innerHTML = "€";
  if (valorC=="ars")//de euro a pesos arg
   {document.getElementById('simboloC').innerHTML = "$";
   resultado= parseFloat(valor*48.15).toFixed(2);
   }
   else if(valorC=="usd")//de euro a dolar estadounidense
   {document.getElementById('simboloC').innerHTML = "$";
   resultado= parseFloat(valor*1.11).toFixed(2);
   }
   else if (valorC=="brl")//de euro a real brasileño
    {document.getElementById('simboloC').innerHTML = "R$";
     resultado= parseFloat(valor*4.21).toFixed(2);
   }
   else //de euro a euro
   {document.getElementById('simbolo').innerHTML = "€";
     resultado= valor;
   }
}
else if (valorE=="usd") {
  document.getElementById('simbolo').innerHTML = "$";
  if (valorC=="ars")//de dolar estadounidense a pesos arg
   {document.getElementById('simboloC').innerHTML = "$";
   resultado= parseFloat(valor*43.20).toFixed(2);
   }
   else if(valorC=="eur")//de dolar estadounidense a euro
   {document.getElementById('simbolo').innerHTML = "€";
   resultado= parseFloat(valor*0.90).toFixed(2);
   }
   else if (valorC=="brl")//de dolar estadounidense a real brasileño
    {document.getElementById('simboloC').innerHTML = "R$";
     resultado= parseFloat(valor*3.78).toFixed(2);
   }
   else //de dolar estadounidense a dolar estadounidense
   {document.getElementById('simbolo').innerHTML = "$";
     resultado= valor;
   }
}
else if (valorE=="brl") {
document.getElementById('simbolo').innerHTML = "R$";
  if (valorC=="ars")//de real brasileño a pesos arg
   {document.getElementById('simboloC').innerHTML = "$";
   resultado= parseFloat(valor*11.45).toFixed(2);
   }
   else if(valorC=="eur")//de real brasileño a euro
   {document.getElementById('simbolo').innerHTML = "€";
   resultado= parseFloat(valor*0.24).toFixed(2);
   }
   else if (valorC=="usd")//de real brasileño a dolar estadounidens
    {document.getElementById('simboloC').innerHTML = "$";
     resultado= parseFloat(valor*0.26).toFixed(2);
   }
   else //de real brasileño a real brasileño
   {document.getElementById('simbolo').innerHTML = "R$";
     resultado= valor;
   }
}

document.getElementById('resultado').innerHTML = resultado;

};
