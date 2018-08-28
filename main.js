

//document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);


console.log(data.results[0].members);

console.log(data.results[0].members[0].first_name);
console.log(data.results[0].members[0].party);

var textPlace = document.createElement("p");
var someText = document.createTextNode(data.results[0].members[0].last_name)
var someText2 = document.createTextNode(data.results[0].members[0].first_name)
var someText3 = document.createTextNode(data.results[0].members[0].last_name)
textPlace.appendChild(someText);



var textDiv = document.getElementById("putDataHere");


var newTable = document.createElement("table");
var newRow = document.createElement("tr");
var cell1 = document.createElement("td");
var cell2 = document.createElement("td");
var cell3 = document.createElement("td");

cell1.appendChild(someText);
cell2.appendChild(someText2);
cell3.appendChild(someText3);

newRow.appendChild(cell1);
newRow.appendChild(cell2);
newRow.appendChild(cell3);

newTable.appendChild(newRow);
textDiv.appendChild(newTable);