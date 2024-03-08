const n = 5;

function dec_sum(n) {
  let acum = 0;
  for (let i = 0; i < n; i++) {
    acum += Math.floor(Math.random() * 10);
  }
  return acum;
}

const exp_sum = function (n) {
  let acum = 0;
  for (let i = 0; i < n; i++) {
    acum += Math.floor(Math.random() * 10);
  }
  return acum;
}

const arrow_sum = (n) => {
  let acum = 0;
  for (let i = 0; i < n; i++) {
    acum += Math.floor(Math.random() * 10);
  }
  return acum;
}

const cl = console.log.bind(console);

cl("Declaration: ", dec_sum(n));
cl("Expression: ", exp_sum(n));
cl("Arrow: ", arrow_sum(n));