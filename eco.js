$(document).ready(function() {
	//money shiet
	function getMoney() {
		money = $("#moneyInput").val();
		$("#moneyContainer").html("<p> " + money + "</p>");
	};
	$("#moneyInput").keyup(getMoney).keyup();
});

//team - 0 = ct, 1 = t
function ctTeam() {
	$("#t").addClass("lighten-3");
	$("#ct").removeClass("lighten-3");
	team = 0;
};

function tTeam() {
	$("#ct").addClass("lighten-3");
	$("#t").removeClass("lighten-3");
	team = 1;
};


//outcomes 0 = win, 1-5 = consecutive lost rounds
function win() {
	$("#lossButton").addClass("lighten-3");
	$("#winButton").removeClass("lighten-3");
	outcome = 0;
	printOutcome();
};
function lose() {
	$("#winButton").addClass("lighten-3");
	$("#lossButton").removeClass("lighten-3");
};

//LOSSES - I swear there's a better way to do this but I'm stupid and idk how to use jquery or anything at all really
function oneRound() {
	outcome = 1;
	printOutcome();
	lose();
};
function twoRound() {
	outcome = 2;
	printOutcome();
	lose();
};
function threeRound() {
	outcome = 3;
	printOutcome();
	lose();
};
function fourRound() {
	outcome = 4;
	printOutcome();
	lose();
};
function fiveRound() {
	outcome = 5;
	printOutcome();
	lose();
};

//printing the outcome and shit
function printOutcome() {
	if (money == null || money == "") {
		Materialize.toast('Error: No money!', 5000);
	}
	else if (outcome == 0) {
		$('#infoContainer').html("<p>won last round </p>");
	}
	else if (outcome == 1) {
		$('#infoContainer').html("<p>lost last round</p>");
	}
	else {
		$('#infoContainer').html("<p>lost " + outcome + " rounds in a row</p>");
	}
	balance();
};

//calculate balance
function balance() {
	switch (outcome) {
		case 0:
			nextMoney = null;
			break;
		case 1:
			nextMoney = 1400;
			break;
		case 2:
			nextMoney = 1900;
			break;
		case 3:
			nextMoney = 2400;
			break;
		case 4:
			nextMoney = 2900;
			break;
		case 5:
			nextMoney = 3400;
			break;
	}
	//balance after next round
	$('#nextContainer').html("<p>" + nextMoney + "</p>");
}

//calculate options
//full buy = 	
function calculateOptions(x) {
	//teams
	if (team == 0) {
		if (x >= 5400) {
			buy3 = true;//awp w/out helm
		}
		else if (x >= 5000) {
			buy1 = true;//fullbuy
		}
		else if (x >= 3850) {
			buy2 = true;//minbuy w/out helm
		}
		else if (x >= 2450) {
			save1 = true;//save 1 round after 1 loss
		}
	}

}

