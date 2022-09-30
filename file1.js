//this is commented code
/*
 *this is multiply commented lines
*/
//print result
let a = 2;
let b = 3;
console.log(a+b);
//--------------------------
//assignment operators
const side = a;
const side1 = b;
const rectangle = a * b;
console.log(rectangle);
//---------------------------
//comparison operators
const g = 9.8;
const speed = 42;
const name = "Ed";
// comparison
console.log(g === 9.8);
console.log(name === "Ed");
// numbers comparison
console.log(speed > 10);
console.log(speed >= 10);
console.log(speed < 100);
console.log(speed !== 0);
//ternary operator
const sky = "Blue";
const color = sky === "Blue" ? "Blue" : "Yellow";
console.log(color);
//logical operators
console.log( true || true );
console.log( false && true );
console.log(1 != 2)
//---------------------------
const johnBenchPress = "100 kg"
const samBenchPress = "80 kg"
const edBenchPress = "70 kg"
//if
if (johnBenchPress === "100 kg") {
   console.log("John is strong enough");
}
//if else
if (johnBenchPress > samBenchPress) {
   console.log("John is strong enough");
} else {
   console.log("Sam needs to train more");
}
//else if
if (johnBenchPress > edBenchPress) {
   console.log("Sam needs to train more often");
} else if (samBenchPress == edBenchPress) {
   console.log("Ed needs to train more");
} else {
   console.log("Ed needs to train every day");
}
//-------------------------
//switch case
const deadlift = "200 kg";
switch (deadlift) {
  case "150 kg": {
      console.log("Pulled it");
  } 
  break;
  case "120 kg": {
      console.log("Pulled it");
  } 
  break;
  case "130 kg": {
      console.log("Pulled it");
  } 
  break;
  case "140 kg": {
      console.log("Pulled it");
  } 
  break;
  default: {
      console.log("Pulled it");
  } 
}
