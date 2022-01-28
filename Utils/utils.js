/* eslint-disable prettier/prettier */

const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

export const calculaLetraNif = unDni => {
  let letra = letras.charAt(unDni % 23).toUpperCase();
  return letra;
};

export const validarEntrada = unDni => {
  let num = parseInt(unDni[unDni.length - 1], 10);
  if (!isNaN(num)) {
    return true;
  } else {
    if (unDni.length > 0) {
      // eslint-disable-next-line no-alert
      alert(
        '¡Error!\nEl caracter introducido no es un número.\nInténtelo de nuevo.',
      );
    }
    return false;
  }
};
