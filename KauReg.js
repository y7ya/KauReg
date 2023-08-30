numbers = [
  '16646',
  '13607',
  '16866',
  '13763',

];
inputs = document.querySelectorAll(".dedefault");
if(inputs){
  inputs.forEach((input,i) => {
    input.querySelector('input[type="text"]').value = numbers[i] ? numbers[i]: '';
  });
}
console.log('working');