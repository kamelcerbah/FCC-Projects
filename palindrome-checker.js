function palindrome(str) {
  let temp = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()|\s]/g,"").split("").filter(val => !/\s/.test(val));
  console.log(temp);
  let len = temp.length;
  for(let i=0;i<len; i++){

    console.log(temp[i]);
    console.log(temp[len -i-1]);

    if(temp[i] !== temp[len -i-1] && i<len/2 )
      return false;
  }
  return true;


}



console.log(palindrome("eye")) ; 