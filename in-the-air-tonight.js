const checkAir = function (samples, threshold) {
  let counter = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      counter++;
    }
  }
  let polutedPercent = (100 / samples.length * counter)/ 100;
  if (polutedPercent > threshold) {
    return "Poluted"
  } else {
    return "Clean"
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))