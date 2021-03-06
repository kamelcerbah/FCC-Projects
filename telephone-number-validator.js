function telephoneCheck(str) {
  // most effective 1: ((?:\s|^)(?:\+\d{1,3}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})(?:\b)

  //most effective 2: ^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$
  
  return /^1?\s?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/g.test(str)  ;

  //working on : /(?:\-\d{1,3}\s?)?\(?\d{3}?\)?[\s|-]?\d{3}[\s|-]?\d{4}/

  // new : /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
}

console.log(telephoneCheck("555-555-5555"));