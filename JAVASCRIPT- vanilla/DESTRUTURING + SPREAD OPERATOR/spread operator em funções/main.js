const arr = [1, 2, 3, 4];

function soma(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

console.log(soma(10, ...arr, 10));
