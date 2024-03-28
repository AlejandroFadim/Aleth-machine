function converterDecimal() {
  var decimal = parseInt(demo1.value, 10);

  let octal = decimal.toString(8);

  let hexadecimal = decimal.toString(16);

  let binaria = decimal.toString(2);

  if (binaria == "NaN" || hexadecimal == "NaN" || octal == "NaN") {
    msg.innerHTML = `Insira um valor válido. Este é um sistema decimal, <br> aceitamos apenas números.`;
  } else {
    msg.innerHTML = `binário: ${binaria} <br>
  hexadecimal: ${hexadecimal} <br>
  octal: ${octal}`;
  }
}

function converterBinario() {
  var val = parseInt(demo1.value, 2);

  let decimal = val.toString(10);

  let hexadecimal = val.toString(16);

  let octal = val.toString(8);

  if (decimal == "NaN" || hexadecimal == "NaN" || octal == "NaN") {
    msg.innerHTML = `Insira um valor válido. Este é um sistema binário, <br> aceitamos apenas 1 e 0.`;
  } else {
    msg.innerHTML = `Decimal: ${decimal} <br>
  hexadecimal: ${hexadecimal} <br>
  octal: ${octal}`;
  }
}
function converterHexa() {
  var val = parseInt(demo1.value, 16);

  let decimal = val.toString(10);

  let octal = val.toString(8);

  let binaria = val.toString(2);

  if (decimal == "NaN" || octal == "NaN" || binaria == "NaN") {
    msg.innerHTML = `Insira um valor válido. Este é um sistema hexadecimal, <br> só aceitamos letras até o F.`;
  } else {
    msg.innerHTML = `Decimal: ${decimal} <br>
  octal: ${octal} <br>
  binário: ${binaria}`;
  }
}
function converterOctal() {
  var val = parseInt(demo1.value, 8);

  let decimal = val.toString(10);

  let hexadecimal = val.toString(16);

  let binaria = val.toString(2);

  if (decimal == "NaN" || hexadecimal == "NaN" || binaria == "NaN") {
    msg.innerHTML = `Insira um valor válido. Este é um sistema octal. <br> Só aceitamos números <= 7`;
  } else {
    msg.innerHTML = `Decimal: ${decimal} <br>
  hexadecimal: ${hexadecimal} <br>
  binário: ${binaria}`;
  }
}

