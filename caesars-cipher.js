function rot13(str) {

  return str.split("").map(val =>{

    let temp =val.charCodeAt(0) - 13;
      if(temp<65){
        console.log(temp);
        temp = Math.abs(temp - 65) -1; 
        temp = 90 - temp ;
      }
    if(val.match(/[A-Z]/))
        return String.fromCharCode(temp);
      
      return val;
        //fromCharCode(65)
        // .charCodeAt()
  }
  ).join('');
}

console.log(rot13("SERR PBQR PNZC"));