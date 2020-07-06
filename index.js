'use strict';
let osoba1 = {
  jmeno: 'Alena',
  uspory: 53000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};


function canWeGo(osoba1, osoba2) {
  if (osoba1.uspory + osoba2.uspory >= 100000) {
    if (osoba1.uspory >= 50000 && osoba2.uspory >= 50000) {
      console.log(`${osoba1.jmeno} a ${osoba2.jmeno} mozu ist na dovolenku. Obe nasetrili dost penazi.`)
    }
    else {
      console.log(`${osoba1.jmeno} a ${osoba2.jmeno} mozu ist na dovolenku.`)
      if (osoba1.uspory < 50000) {
        const dlh = 50000 - osoba1.uspory;
        console.log(`${osoba1.jmeno} bude musiet po dovolenke splatit dlh ${dlh} korun`)
      }
      if (osoba2.uspory > 50000) {
        const dlh = 50000 - osoba2.uspory;
        console.log(`${osoba2.jmeno} bude musiet po dovolenke splatit dlh ${dlh} korun`)
      }

    }
  }
  else {
    const chybi = 100000 - osoba1.uspory - osoba2.uspory;
    console.log(`${osoba1.jmeno} a ${osoba2.jmeno} nemozu ist na dovolenku. Dokopy im chyba ${chybi} korun.`)
    if (osoba1.uspory < 50000) {
      const rozdielJedna = 50000 - osoba1.uspory;
      console.log(`${osoba1.jmeno} musi nasetrit este ${rozdielJedna} korun.`)
    }
    if (osoba2.uspory < 50000) {
      const rozdielDva = 50000 - osoba2.uspory;
      console.log(`${osoba2.jmeno} musi nasetrit este ${rozdielDva} korun.`)
    }
  }
}

// Test

let osoba1 = {
  jmeno: 'Alena',
  uspory: 50000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 49000
};



let osoba1 = {
  jmeno: 'Alena',
  uspory: 50000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 50000
};


let osoba1 = {
  jmeno: 'Alena',
  uspory: 30000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 30000
};


let osoba1 = {
  jmeno: 'Alena',
  uspory: 51000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 49000
};