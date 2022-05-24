export function palindromeInterval(first: number, last: number): number[] | null {
  if (last < first) return null
  const result = [];
  for (let i = first; i <= last; i++) {
    let reverse = 0;
    let remainder, number;
    let n = i;
    while (n != 0) {
      remainder = n % 10
      reverse = reverse * 10 + remainder
      n /= 10
    }
    if (i === reverse) {
      result.push(i)
    }
  }
  return result
}

export function getChange(totalValue: number, givenValue: number): { change: number, result: number[] } {

  let change = givenValue - totalValue;
  let notas = [1, 10, 100];
  let n = notas.length;
  let result = [];

  for (let i = n - 1; i >= 0; i--) {
    while (change >= notas[i]) {
      change -= notas[i];
      result.push(notas[i]);
    }
  }

  return { change, result };


}