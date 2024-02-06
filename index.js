const valores = [1, 2, 3, 4, 5, 6, 7, 8];

function Buscar(valor, lista = []) {
  const sizeList = lista.length;
  
  if (sizeList === 0) {
    console.log('Não encontrado');
    return -1;
  }

  const midIndex = Math.floor(sizeList / 2);
  const midValue = lista[midIndex];

  if (midValue === valor) {
    return valor;
  } else if (midValue > valor) {
    return Buscar(valor, lista.slice(0, midIndex));
  } else {
    return Buscar(valor, lista.slice(midIndex + 1));
  }
}

const resultado = Buscar(1, valores);
console.log(resultado !== -1 ? `Valor encontrado: ${resultado}` : 'Valor não encontrado');
