chrome.storage.onChanged.addListener(()=>{
  fillInputs();
});


async function fillInputs(){
  const dataObject = await chrome.storage.sync.get('data');
  if(!dataObject.data){
    return;
  }
  const data = JSON.parse(dataObject.data);
  if(data.length == 0){
    return;
  }

  const numbers = data.map((item)=>{
    return item.reference;
  })

  inputs = document.querySelectorAll("form .dataentrytable .dedefault");
  if (inputs && inputs.length > 0) {
    inputs.forEach((input, i) => {
      input.querySelector('input[type="text"]').value = numbers[i]
        ? numbers[i]
        : "";
    });
    inputs[0].closest('form').submit();
  }
}
(async function main(){
  fillInputs();
})()


