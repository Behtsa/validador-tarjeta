const form = document.querySelector("form");

const validateCardNumber = cardNumber => {
	// return true;
	//console.log(cardNumber);
	//Luhn method//
	const reversedCc = cardNumber.split('').reverse();
  console.log(reversedCc);
	const sumArray = reversedCc.map((number, index) => {
    if(index % 2 !== 0){
      let multiyplyByTwo = number * 2;
      let sum;
      if(multiyplyByTwo >= 10){
        sum = multiyplyByTwo - 10 + 1;
        return sum;
      } else {
        return multiyplyByTwo;
      }
    } else {
      return parseInt(number);
    }
}).reduce((prev, curr) => prev + curr); 
  if(sumArray % 10 === 0) {
    return true;
  }else {
    return false;
  }

let finalSum = sumArray.reduce((previous, current) => previous + current, 0);
    finalSum % 10 === 0 ? true : false;
};

const validateCardDetails = form => {
  const data = Array.from(form);
  const cardNumber = data[0].value;
  const cvv = data[2].value;
  const name = data[3].value;
  validateCardNumber(cardNumber);
  if(validateCardNumber(cardNumber)){
  	return true;
  }else{
  	return false;
  }
}



form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    alert("Tarjeta Válida");
    console.log("Tarjeta Válida");
  } else {
    alert("Datos inválidos");
  }
});