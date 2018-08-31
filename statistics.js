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
    document.getElementById('total').innerHTML = statistics.numberD+statistics.numberR+statistics.numberI;
}
