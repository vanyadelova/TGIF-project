//Declare Global Vars


let statistics = {
    "numberR": 0,
    "numberD": 0,
    "numberI": 0,
    "republicanPartyPercentage": 0,
    "democratsPartyPercentage": 0,
    "independentPartyPercentage": 0,
    "doNotVote": [],
    "doVote": [],
    "missedMostVote": [],
    "missedLeastVote": []
}

let members = data.results[0].members;

var repA = [];
var demA = [];
var indA = [];



//Function Calls
calculateStatistics();
putElements();
countVotesWithPartyAvg();
console.log(statistics);
glanceTable();
leastEngaged();
lessTen();
mostEngaged();
mostTen();

//Function Declaration

function calculateStatistics() {
    for (var i = 0; i < members.length; i++) {

        let everyMember = data.results[0].members[i];

        switch (everyMember.party) {
            case "R":
                statistics.numberR++;
                break;
            case "D":
                statistics.numberD++;
                break;
            case "I":
                statistics.numberI++;
                break;
        }
    }
}
//function compare(a,b) { if (a.missed_votes_pct < b.missed_votes_pct) return -1; if (a.missed_votes_pct > b.missed_votes_pct) return 1; return 0; }
//
//data.results[0].members.sort(compare)
//var sortedList = data.results[0].members.sort(compare)

// (x / total)*100
function putElements() {

    document.getElementById('Rep').innerHTML = statistics.numberR;
    document.getElementById('Dem').innerHTML = statistics.numberD;
    document.getElementById('Ind').innerHTML = statistics.numberI;
    document.getElementById('total').innerHTML = statistics.numberD + statistics.numberR + statistics.numberI;
}



function countVotesWithPartyAvg() {
    var arrayWithDem = [];
    var arrayWithRep = [];
    var arrayWithInd = [];

    for (var j = 0; j < members.length; j++) {

        let everyMember = data.results[0].members[j];

        if (everyMember.party == "D") {
            arrayWithDem.push(everyMember);
        }
        if (everyMember.party == "R") {
            arrayWithRep.push(everyMember);
        }
        if (everyMember.party == "I") {
            arrayWithInd.push(everyMember);
        }

        statistics.democratsPartyPercentage = giveMeAvg(arrayWithDem).toFixed(2);
        statistics.republicanPartyPercentage = giveMeAvg(arrayWithRep).toFixed(2);
        statistics.independentPartyPercentage = giveMeAvg(arrayWithInd).toFixed(2);


    }
}

function giveMeAvg(recievedArray) {

    var sum = 0;
    for (var k = 0; k < recievedArray.length; k++) {
        sum = sum + recievedArray[k].votes_with_party_pct;
    }

    var avg = sum / recievedArray.length
    return avg;
}

//giveMeAvg(arrayWithDem);
//giveMeAvg(arrayWithRep);
//giveMeAvg(arrayWithInd);
//
//    document.getElementById('Rep1').innerHTML = giveMeAvg(arrayWithDem);
//    document.getElementById('Dem1').innerHTML = statistics.numberD;
//    document.getElementById('Ind1').innerHTML = statistics.numberI;

//"AT GLANCE" TABLE (ATENDANCE + LOYALTY)

function glanceTable() {
    for (var i = 0; i < members.length; i++) {
        if (members[i].party == "R") {
            statistics.numberR++;
            statistics.republicanPartyPercentage += members[i].votes_with_party_pct;
        }
        if (members[i].party == "D") {
            statistics.numberD++;
            statistics.democratsPartyPercentage += members[i].votes_with_party_pct;
        }
        if (members[i].party == "I") {
            statistics.numberI++;
            statistics.independentPartyPercentage += members[i].votes_with_party_pct;
        }
        if (statistics.numberI != 0) {
            statistics.independentPartyPercentage = statistics.independentPartyPercentage / statistics.numberI;

        } else {
            statistics.independentPartyPercentage = 0;
        }
    }
    statistics.republicanPartyPercentage = statistics.republicanPartyPercentage / statistics.numberR;
    statistics.democratsPartyPercentage = statistics.democratsPartyPercentage / statistics.numberD;
}

//LESS ENGAGED ATENDANCE" TABLE
function leastEngaged() {
    members.sort(function (a, b) {
        return b.missed_votes - a.missed_votes
    });
}

function lessTen() {

    for (var i = 0; i < 10; i++) {
        statistics.missedMostVote.push(members[i])
    }
}

//"MOST ENGAGED ATENDANCE" TABLE
function mostEngaged() {
    members.sort(function (a, b) {
        return a.missed_votes - b.missed_votes
    });
}

function mostTen() {
    for (var i = 0; i < 10; i++) {
        statistics.missedLeastVote.push(members[i])
    }
}
