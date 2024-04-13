let jSonRes = '{"name" : "Aas Mohammad","age" : 26,"rollNo" : "100"}';
// console.log(jSonRes);//give us the actual string
// data parsing
let jSonObj = JSON.parse(jSonRes);

console.log(jSonObj.name,jSonObj.age);// give us individual values
console.log("json object",jSonObj);//give us jSon object

//  jSonObj to String

let jsonData = JSON.stringify(jSonObj);
console.log(jsonData);//give us string


