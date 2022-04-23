let botonEncriptar = document.querySelector('#encriptar');

botonEncriptar.addEventListener('click', function(e){
  e.preventDefault();
  let texto = document.querySelector('#a-encriptar').value.toLowerCase();
  let nuevotexto = '';

  for(let i = 0; i < texto.length ; i++){      
    if (texto[i].charCodeAt() > 34 && texto[i].charCodeAt() < 44){
        alert("No se permite el uso de símbolos. Revise el texto ingresado.");
        document.querySelector("#a-encriptar").focus();
        return;
    }
    if (texto[i].charCodeAt() > 47 && texto[i].charCodeAt() < 58){
        alert("No se permite el uso de números. Revise el texto ingresado.");
        document.querySelector("#a-encriptar").focus();
        return;
    }
    if (texto[i].charCodeAt() > 59 && texto[i].charCodeAt() < 65){
        alert("No se permite el uso de símbolos. Revise el texto ingresado.");
        document.querySelector("#a-encriptar").focus();
        return;    
    }
    if (texto[i].charCodeAt() > 90 && texto[i].charCodeAt() < 97){
        alert("No se permite el uso de símbolos. Revise el texto ingresado.");
        document.querySelector("#a-encriptar").focus();
        document.querySelector("#a-encriptar").focus();
        return;    
    }
    if (texto[i].charCodeAt() > 122){
        alert("No se permite el uso de letras con acentos o símbolos. Revise el texto ingresado.");
        document.querySelector("#a-encriptar").focus();
        return;    
    }
}

  
  for(let i=0; i<texto.length; i++){
    if(texto[i] === 'e') nuevatexto += 'enter';
    else if(texto[i] === 'i') nuevotexto += 'imes';
    else if(texto[i] === 'a') nuevotexto += 'ai';
    else if(texto[i] === 'o') nuevotexto += 'ober';
    else if(texto[i] === 'u') nuevotexto += 'ufat';
    else nuevatexto += texto[i];
  }
  let mostrarMensaje = document.querySelector('#mensaje-encriptado');
  mostrarMensaje.textContent = nuevotexto;
});


let botonDesencriptar = document.querySelector('#desencriptar');

botonDesencriptar.addEventListener('click', function(e){
  e.preventDefault();
  let texto = document.querySelector('#a-desencriptar').value.toLowerCase();
  texto = texto.replaceAll('enter', 'e');
  texto = texto.replaceAll('imes', 'i');
  texto = texto.replaceAll('ai', 'a');
  texto = texto.replaceAll('ober', 'o');
  texto = texto.replaceAll('ufat', 'u');

  let mostrarMensaje = document.querySelector('#mensaje-desencriptado');
  mostrarMensaje.textContent = texto;
});

let copiar1 = document.querySelector('#copy1');
copiar1.addEventListener('click', function(){
  let copiarSpan = document.querySelector('#mensaje-encriptado');
  navigator.clipboard.writeText(copiarSpan.textContent);
});

let copiar2 = document.querySelector('#copy2');
copiar2.addEventListener('click', function(){
  let copiarSpan = document.querySelector('#mensaje-desencriptado');
  navigator.clipboard.writeText(copiarSpan.textContent);
});


