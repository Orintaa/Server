import { IsValid } from "../components/IsValid.js";

console.log("hello from auth page");

const formDOM = document.querySelector(".form");
const errorsDOM = document.querySelector(".form-errors");
const allInputsDOM = formDOM.querySelectorAll("input");
const submitDOM = formDOM.querySelector("button");

submitDOM.addEventListener("click", (e) => {
  e.preventDefault();
  //formos validacija - pirmine reiksmiu patikra
  const errors = [];
  let passwordValues = [];
  for (const inputDOM of allInputsDOM) {
    const { value, dataset } = inputDOM;
    const validationRule = dataset.validation;
    if (!validationRule) {
      console.error('ERROR: input turi turėti "data-validation" attribute');
      continue;
    }
    const validationFunction = IsValid[validationRule];
    console.log("cia:", validationFunction);

    const valueState = validationFunction(value); // true, Error message
    //tikriname konkrecios formos reiksmes teisinguma
    //true arba false
    if (typeof validationFunction !== 'function') {
      console.error("ERROR: nenumatyta validavimo funkcija");
      continue;
    }

    console.log("---------");
    console.log(validationRule, value);
    console.log(valueState);

    if (valueState !== true && !errors.includes(valueState)) {
      errors.push(valueState);
    }

    if (validationRule === "password") {
      passwordValues.push(value);
    }
  }

  //jei formoje yra daugiau nei 1 passwordas, ta patikrinti, jog visi vienodi
  if (passwordValues.length > 1) {
    console.log("consoleje du paswordai");
    const initialPassword = passwordValues[0];
    for (let i = 1; i < passwordValues.length; i++) {
      if (initialPassword !== passwordValues[i]) {
        errors.push("Slaptazodziai nesutampa");
        break;
      }
    }
  }

  //jei rado klaidu, kas tavaizduoja
  if (errors.length) {
    console.log("Issitaisyk klaidas...");
    errorsDOM.innerText = errors.map((s) => s + ".").join("\n");
  } else {
    console.log("Goood...");
    errorsDOM.innerText = "";
  }
  //siusti duomenis
});
