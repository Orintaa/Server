class IsValid {
  static username(text) {
    const minUsernameLength = 4;
    const maxUsernameLength = 20;
    text = text.trim();
    if (text.length < minUsernameLength) {
      return `Per trumpas vartotojo vardas`;
    }
    if (text.length > maxUsernameLength) {
      return `Per ilgas vartotojo vardas`;
    }
    //Leistini simboliai: a-z, 0-9, _ .
    const allowedSymbols =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
    for (const letter of text) {
      if (!allowedSymbols.includes(letter)) {
        return `Neleistinas simbolis (${letter})`;
      }
    }
    return true;
  }
  static email(text) {
    return true;
  }
  static password(text) {
    const minPasswordLength = 12;
    if (text === "") {
      return "Pamirsai irasyti slaptazodi";
    }
    if (text.length < minPasswordLength) {
      return "Slaptazodis per trumpas";
    }
    return true;
  }
}

export { IsValid };
