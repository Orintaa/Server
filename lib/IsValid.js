class IsValid {
  static username(text) {
    const minUsernameLength = 4;
    const maxUsernameLength = 20;
    
    if (typeof text !== 'string') {
      return "Netinkamo tipo reiksme"
    }

    text = text.trim();

    if (text === "") {
      return "Pamirsai irasyti vartotojo varda";
    }

    if (text.length < minUsernameLength) {
      return `Per trumpas vartotojo vardas`;
    }

    if (text.length > maxUsernameLength) {
      return `Per ilgas vartotojo vardas`;
    }

    //Leistini simboliai: a-z, 0-9, _
    const allowedSymbols =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";

    for (const symbol of text) {
      if (!allowedSymbols.includes(symbol)) {
        return `Neteisingas simbolis vartotojo lauke (${symbol})`;
      }
    }
    return true;
  }

  static email(text) {

    if (typeof text !== "string") {
      return "Netinkamo tipo reiksme";
    }
    
    if (text === "") {
      return "Netinkamo tipo reiksme";
    }

    return true;
    
    // const textArray = text.split("@");
    // const textServerArray = text.split(".");
    // const allowedSymbols =
    // "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@.";
    
    // return true;
    
    // if (textArray.length > 2) {
    //   return "Perdaug @ simboliu";
    // }

    // if (textArray.length < 2) {
    //   return `Nera @ simbolio`;
    // }
  
    // if (text[text.indexOf("@") + 1] === text[text.indexOf(".")]) {
    //   return "Truksta teksto tarp @ simbolio ir .";
    // }

    // // let etaSimboliuSuma = 0;
    // // for (const simbolis of text) {
    // //   if (simbolis === "@") {
    // //     etaSimboliuSuma++;
    // //   }
    // // }
    
    // for (const symbol of text) {
    //   if (!allowedSymbols.includes(symbol)) {
    //     return `Neleistinas simbolis el paste (${symbol})`;
    //   }
    // }
    
    // if (textArray[0] === "" || textArray[1] === "") {
    //   return `Pasitikrink ar gerai uzrasei el pasta`;
    // }
    
    // if (textServerArray.length < 2) {
    //   return `Truksta . simbolio`;
    // }
    
    // if (textServerArray.length > 2) {
    //   return `Pasitikrink ar gerai uzrasei el pasta`;
    // }

    // if (text[text.indexOf("@") + 1] !== text[text.indexOf(".")]) {
    //   return "Truksta teksto tarp @ simbolio ir .";
    // }

  }
  

  static password(text) {
    const minPasswordLength = 12;
    
    if ( typeof text !== "string") {
      return "Netinkamo tipo reiksme";
    }
    
    if (text === "") {
      return "Pamirsai irasyti slaptazodi";
    }

    if (text.length < minPasswordLength) {
      return "Per trumpas slaptazodis";
    }
    return true;
  }
}

export { IsValid };
