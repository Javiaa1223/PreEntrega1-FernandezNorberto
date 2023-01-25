

// se define la funcion para entregar el valor del costo real y recolectar los datos de los input
function calcular_valor_real(selectedOption) { 
    // // se define funcion para obtener datos del formulario
    let costoEf= $("#cost_efectivo").val();
    //alert(costoEf);
    console.log(costoEf);
    // // se define funcion para obtener datos de pago diferido del formulario

    let costoCuotas = $("#cost_pagoDiferido").val();
    //alert(costoCuotas);
    console.log(costoCuotas);
    // // se define funcion para obtener datos de la inflacion estimada

    let inflacion = $("#inflacion").val();
    //alert(inflacion);
    console.log(inflacion);
      // // se define la funcion para obtener datos del select

    let selection = document.getElementById("cant_cuotas");
    console.log(selection);
    let cant_cuotas= selection.options[selection.selectedIndex].value
    console.log(cant_cuotas);
    // se define la funcion para calcular el costo de cada cuota

    let cuota = costoCuotas/cant_cuotas;
    // se calcula el valor real a partir de la cantidad de cuotas y la inflacion.
    let valor_real=0;
    console.log(valor_real);
    console.log(cuota);
    for (let i=1 ; i<=cant_cuotas; i++)
    {
    valor_real += cuota/(1+(1-inflacion/100))^i;
    }
//alert(valor_real);
if(valor_real<costoEf){
    alert("Conviene realizar la compra en cuotas");
}else{
    alert("Conviene realizar la compra en efectivo");
}
};

