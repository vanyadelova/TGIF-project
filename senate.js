
var data;

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

onload = (function () {
    
        if (document.title === "Senate Data") {
              url = "https://api.myjson.com/bins/1eja30" 
           } else {
            url = "https://api.myjson.com/bins/j83do"
       }
    
    fetch (url)
    
//       fetch(url, {
//           
//
//              headers: new Headers({
//
//              'X-API-Key': '9PmepI5CAJ7nAqloQuDUvRYyNq1KDer4l2v7gWJ7'
//
//              })
//
//          })

       .then(response => response.json())

       .then((jsonData) => {
           
           console.log(jsonData.results[0].members[0].first_name)

           data = jsonData;
main();
       });

})

function main(){
    
function createTable() {
    document.getElementById("putDataHere").innerHTML='';
    for (var j = 0; j < data.results[0].members.length; j++) {
        

        //This line is to shorten the member path
        var member = data.results[0].members[j];
        
        //if(member.party ==="R") {
            //console.log("Republican");
            //continue;
        //}
        //member.party
        //data.results[0].members[j].party

        //Here i create the row
        var newRow = document.createElement("tr");
        
        var link = "<a href='" + member.url + "'>" + member.first_name + " " + member.last_name + "</a>";

        newRow.insertCell().innerHTML = link;
        newRow.insertCell().innerHTML = member.party;
        newRow.insertCell().innerHTML = member.state;
        newRow.insertCell().innerHTML = member.seniority;
        newRow.insertCell().innerHTML = member.votes_with_party_pct;


        if(canISeeTheMember(member)){
            document.getElementById("putDataHere").append(newRow);
        }   

    }
}

createTable();



function canISeeTheMember(member){
    
    var partyFilter = false;
    var stateFilter = false;
    
    //We store the values of the checkboxes that are checked i.e ["R", "D"]
    var arrayOfCheckedCheckboxes = [];
    
    //We populate the array with an R if the Rep Cb is checked
    if(document.getElementById("R").checked){
        arrayOfCheckedCheckboxes.push("R");
    }
    
    if(document.getElementById("D").checked){
        arrayOfCheckedCheckboxes.push("D");
    }
    
    if(document.getElementById("I").checked){
        arrayOfCheckedCheckboxes.push("I");
    }
    
    if(arrayOfCheckedCheckboxes.includes(member.party) || arrayOfCheckedCheckboxes.length == 0){
        partyFilter = true;
    }
    
    if(document.getElementById("stateSelect").value == member.state || document.getElementById("stateSelect").value == "all"){
        stateFilter = true;
    }
    
    
    return partyFilter && stateFilter;

}


document.getElementById("R").addEventListener("click", function () {
    createTable();
})

document.getElementById("D").addEventListener("click", function () {
     createTable();
})

document.getElementById("I").addEventListener("click", function () {
     createTable();
})

document.getElementById("stateSelect").addEventListener("change", function () {
     createTable();
})
    






$(document).ready(function(){ 
//    $(window).scroll(function(){ 
//        if ($(this).scrollTop() > 100) { 
//            $('#scroll').fadeIn(1000); 
//        } else { 
//            $('#scroll').fadeOut(1000); 
//        } 
//    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});





































//for (i = 0; i < data.results[0].members.length; i++) {
//
//    //    var link = "<a href='" + data.results[0].members[i].url +"'>" + data.results[0].members[i].last_name + "</a>";
//    //    
//    //    var someText = document.createTextNode(link);
//    //    var someText2 = document.createTextNode(data.results[0].members[i].first_name)
//    //    var someText3 = document.createTextNode(data.results[0].members[i].party)
//    //    var someText4 = document.createTextNode(data.results[0].members[i].seniority)
//    //    var someText5 = document.createTextNode(data.results[0].members[i].votes_with_party_pct)
//    //    var newRow = document.createElement("tr");
//    //    var cell1 = document.createElement("td");
//    //    var cell2 = document.createElement("td");
//    //    var cell3 = document.createElement("td");
//    //    var cell4 = document.createElement("td");
//    //    var cell5 = document.createElement("td");
//    //    
//    //    cell1.innerHTML = link;
//    //    cell2.appendChild(someText2);
//    //    cell3.appendChild(someText3);
//    //    cell4.appendChild(someText4);
//    //    cell5.appendChild(someText5);
//    //
//    //    newRow.appendChild(cell1);
//    //    newRow.appendChild(cell2);
//    //    newRow.appendChild(cell3);
//    //    newRow.appendChild(cell4);
//    //    newRow.appendChild(cell5);
//    //    newTable.appendChild(newRow);
//
//
//}
//
//
//
//var textDiv = document.getElementById("putDataHere");
//
////textDiv.appendChild(newTable);
//

    

//
//function hideDemocrats() {
//    console.log("HideDem");
//    var rows = document.getElementsByTagName('tr');
//    for (i = 1; i < rows.length; i++) {
//        if (rows[i].children[1].innerHTML == "D") { rows[i].style.display = 'none'; }
//    } 
//}
//
//function showDemocrats() {
//    console.log("ShowDem");
//    var rows = document.getElementsByTagName('tr');
//    for (i = 1; i < rows.length; i++) {
//        if (rows[i].children[1].innerHTML == "D") { rows[i].style.display = 'table-row'; }
//    } 
//}
//
//function hideRepublicans() {
//    console.log("HideRep");
//    var rows = document.getElementsByTagName('tr');
//    for (i = 1; i < rows.length; i++) {
//        if (rows[i].children[1].innerHTML == "R") { rows[i].style.display = 'none'; }
//        else if (rows[i].children[1].innerHTML == "D") { rows[i].style.display = 'table-row'; }
//    } 
//}
//
//
//    document.getElementById('R').onclick = function () {
//        hideDemocrats();
//    }
//
//    document.getElementById('D').onclick = function () {
//        hideRepublicans();
//    }
}