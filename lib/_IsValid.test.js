import { IsValid } from "./IsValid";

/* USERNAME */

describe('Netinkamo tipo "IsValid.username parametrai"', () => {
  test("Pamirsai irasyti vartotojo varda", () => {
    expect(IsValid.username()).toBe("Netinkamo tipo reiksme");
  });

  test("Per trumpas vartotojo vardas", () => {
    expect(IsValid.username(123456)).toBe("Netinkamo tipo reiksme");
  });

  test("Neteisingas simbolis vartotojo pradzioje", () => {
    expect(IsValid.username("/Jonas")).toBe(
      "Neteisingas simbolis vartotojo lauke (/)"
    );
  });

  test("Neteisingas simbolis vartotojo gale", () => {
    expect(IsValid.username("Jonas/")).toBe(
      "Neteisingas simbolis vartotojo lauke (/)"
    );
  });

  test("Neteisingas simbolis vartotojo lauko viduryje", () => {
    expect(IsValid.username("Jo/nas")).toBe(
      "Neteisingas simbolis vartotojo lauke (/)"
    );
  });

  test("Neteisingas simbolis vartotojo lauko viduryje", () => {
    expect(IsValid.username("Jo nas")).toBe(
      "Neteisingas simbolis vartotojo lauke ( )"
    );
  });

  // test('Neteisingas simbolis vartotojo lauko pradzioje', () => {
  //     expect(IsValid.username(' Jonas')).toBe('Neteisingas simbolis vartotojo lauke ( )')
  // })

  // test('Neteisingas simbolis vartotojo lauko gale', () => {
  //     expect(IsValid.username('Jonas ')).toBe('Neteisingas simbolis vartotojo lauke ( )')
  // })

  // test('Neteisinga vartotojo vardo reiksme', () => {
  //     expect(IsValid.username(true)).toBe('Neteising avartotojo vardo reiksme')
  // })
});

describe('Tinkamo tipo "IsValid.username parametrai"', () => {
  test("Tinkamo tipo parametrai", () => {
    expect(IsValid.username("Jonas")).toBe(true);
  });

  test("Tuscias vartotojo laukas", () => {
    expect(IsValid.username("")).toBe("Pamirsai irasyti vartotojo varda");
  });

  test("Per trumpas vartotojo vardas", () => {
    expect(IsValid.username("abc")).toBe("Per trumpas vartotojo vardas");
  });

  test("Per ilgas vartotojo vardas", () => {
    expect(IsValid.username("abcdefghijklmnoprstuvz")).toBe(
      "Per ilgas vartotojo vardas"
    );
  });
});

/* EMAIL */

describe('Netinkamo tipo "IsValid.email parametrai"', () => {
  test("Tuscias el pasto laukas", () => {
    expect(IsValid.email()).toBe("Netinkamo tipo reiksme");
  });

  test("Netinkamo tipo reiksme", () => {
    expect(IsValid.email(123456)).toBe("Netinkamo tipo reiksme");
  });
  // test('Perdaug @ simboliu', () => {
  //     expect(IsValid.email('abcdef@@')).toBe('Perdaug @ simboliu')
  // })
  // test('Nera @ simbolio', () => {
  //     expect(IsValid.email('abcdefg')).toBe('Nera @ simbolio')
  // })
  // test('Neleistinas simbolis el paste', () => {
  //     expect(IsValid.email('abcde-fg@')).toBe('Neleistinas simbolis el paste (-)')
  // })
  // test('Nera el pasto pradzios', () => {
  //     expect(IsValid.email('@pastas.com')).toBe('Pasitikrink ar gerai uzrasei el pasta')
  // })
  // test('Nera el pasto pabaigos', () => {
  //     expect(IsValid.email('pastas@')).toBe('Pasitikrink ar gerai uzrasei el pasta')
  // })
  // test('Neaiskus el pasto adresas', () => {
  //     expect(IsValid.email('pastas@.pastas.com')).toBe('Pasitikrink ar gerai uzrasei el pasta')
  // })
  // test('El pastas neturi . simbolio', () => {
  //     expect(IsValid.email('pastas@com')).toBe('Truksta . simbolio')
  // })
  // test('El pastas turi tureti teksta tarp @ simbolio ir .', () => {
  //     expect(IsValid.email('pastas@pastas.com')).toBe('Truksta teksto tarp @ simbolio ir .')
  // })
});

describe('Tinkamo tipo "IsValid.email parametrai"', () => {
    test("Tinkamas el pastas", () => {
      expect(IsValid.email('vardenis.pavardenis@pastas.com')).toBe(true);
    });
});

/* PASSWORD */

describe('Netinkamo tipo "IsValid.password parametrai"', () => {
    
    test("Netinkamo tipo reiksme", () => {
      expect(IsValid.password()).toBe("Netinkamo tipo reiksme");
    });

    test("Netinkamo tipo reiksme", () => {
      expect(IsValid.password(123)).toBe("Netinkamo tipo reiksme");
    });

});

describe('Tinkamo tipo "IsValid.password parametrai"', () => {
    test("Tuscias tekstas", () => {
      expect(IsValid.password("")).toBe("Pamirsai irasyti slaptazodi");
    });

    test("Validus pass", () => {
      expect(IsValid.password("ghtkjtktiern")).toBe(true);
    });

    test("Per trumpas slaptazodis", () => {
        expect(IsValid.password("abc")).toBe("Per trumpas slaptazodis");
      });
});
