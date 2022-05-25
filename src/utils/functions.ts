


export function palindromeInterval(first: number, last: number): number[] | null {
  if (last < first) return null
  const result = [];
  for (let i = first; i <= last; i++) {
    let converted = i.toString();
    let reversed = converted.split("").reverse().join("");
    if (reversed === converted) {
      result.push(i)
    }
  }
  return result
}

export function getChange(total: number | undefined, given: number | undefined): { finalChange: number, result: number[] } {
  if (total === undefined || given === undefined) {
    throw new Error("Valores nulos")
  }
  const finalChange = given - total;
  let change = finalChange
  if (change <= 0) {
    throw new Error("O troco é 0 ou não existe")
  }
  let notas = [1, 10, 100];
  let n = notas.length;
  let result = [];

  for (let i = n - 1; i >= 0; i--) {
    while (change >= notas[i]) {
      change -= notas[i];
      result.push(notas[i]);
    }
  }
  return { finalChange, result };
}

