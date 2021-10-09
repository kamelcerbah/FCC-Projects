
// there is a virgule problem

//const moneyCat = ['ONE HUNDRED', 'TWENTY', 'TEN', 'FIVE', 'ONE', 'QUARTER', 'DIME', 'NICKEL', 'PENNY'];
const  moneyDict = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100]
 ];
 /*
function strip(number) {
    return (parseFloat(number).toPrecision(5));
}
*/
 function changeHasMoneyCat(change,moneyCat){

   for(let i =0;i<change.length;i++)
    if(change[i][0] === moneyCat[0])
      return true;
  return false;
 }
function addToChange(change,moneyCat){
let val = [...moneyCat];
//console.log(val);
// if change doesn't have this moneycat then add it
if(!changeHasMoneyCat(change,val)){
//push the new moneyCat to the change
change.push(val);
//console.log(`here 1 ${change}`);
}else{
  //  add to the change 
  for(let i=0;i<change.length;i++){
    if(change[i][0] === moneyCat[0])
      change[i][1] += val[1];
      //console.log(`here 2 ${change}`);
  }
}

return change;
}

function checkCashRegister(price, cash, cid) {
  let cidTemp=[] ;
  
  for(let i=0;i<cid.length;i++){
    cidTemp[i] = [...cid[i]];
}
  for(let i=0;i<cidTemp.length;i++){
    cidTemp[i][1] *= 100;
}
   // console.log("cidtemp : " +cidTemp);
  cidTemp.reverse();
  moneyDict.reverse();
  let changeToGive =[];

  //sev  // mull in 100 to avoid comma problems
  let amtLeftToPay = Math.round((cash - price) * 100);
 //console.log(`amtLeftToPay = ${amtLeftToPay}`);

    // make functions to make things easier
    // changing amtLeftToPay , cid add To change
  if(cidTemp.length === moneyDict.length){
  for(let i=0;i< cidTemp.length;i++){
      if(amtLeftToPay-moneyDict[i][1]*100 >=0 && cidTemp[i][1] - moneyDict[i][1] >=0 ){
            do{ 

              //change[change.length-1][1] = change[change.length-1][1]+ moneyDict[i][1];
              // make add to change func

              amtLeftToPay -= moneyDict[i][1]*100;
              cidTemp[i][1]=cidTemp[i][1] - moneyDict[i][1]*100;
              changeToGive = addToChange(changeToGive,moneyDict[i]);

                //console.log(`moneyDict : ${moneyDict[i]}`);
                //console.log(`cid : ${cid[i]}`);
               //console.log("amtLeftToPay :"+amtLeftToPay);

              }while(amtLeftToPay-moneyDict[i][1]*100 >=0 && cidTemp[i][1] - moneyDict[i][1] >=0 );
        }
  }
  }else{
    console.log(`ERROR cid length ${cidTemp} !== moneyDict length${moneyDict}`);
  }

    cidTemp.reverse();
  moneyDict.reverse();

  //console.log(moneyDict);

  //All good down *******************

  //console.log("amtLeftToPay :"+amtLeftToPay);
  // if all the cid wasn't sufficent 
   if (amtLeftToPay > 0) {
    return {status: 'INSUFFICIENT_FUNDS', change: []};

  } 



  const amtLeftInCid = cidTemp.reduce( (acc,[moneyCat,val])=>{ 
    return acc+val;
   },0 )  ; 

 console.log(`amtLeftInCid = ${amtLeftInCid}`);


//console.log("amtLeftInCid:"+amtLeftInCid);

  if (amtLeftInCid > 0) {
    //change.reverse();
    return {status: "OPEN", change: changeToGive}; 
  }
    
    return {status: "CLOSED", change: cid};

}

console.log("test 1");
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) ; 
 
//console.log("test 2");
//console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) ; 
/*
console.log("test 3");
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) ; 
*/

