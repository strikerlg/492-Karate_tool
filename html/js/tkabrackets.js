//array that stores the names
//global variable
	var namestorage = [];

//global variable for loser storage
var loserstorage = [];


//The table making part
function generate() { 
        
        var count = 0;
        var table = document.getElementById("kumitetable");
        var numberofrows = document.getElementById("contestantvalue").value;
        var rowamount = parseInt(numberofrows);
    
        if(rowamount > 32)
            {
                alert("Only supports up to 32 contestants. Sorry!");
            }
        else if (rowamount == 1)
            {
                alert("Need more than 1 contestant.");
            }
        else if (rowamount == 0)
            {
                alert("Please enter players");
            }
        else
            {
                $("#kumitetable tr:not(:first)").remove();
                while (count < rowamount) 
                {
                    var row = table.insertRow(1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);

                    cell1.innerHTML = "<input onkeyup='doname(this.value,this.id)' type='text' id='idnumber"+count+"'>";
                    cell2.innerHTML = "<input type='text' id='cont"+count+"'>";

                    count = count + 1;
                }
            }
}

//shuffle function 
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) 
  {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//will have to go back into css and change some things.
//bracket area - 32 players
function create() {
    var players = document.getElementById("contestantvalue").value;
    var contplayers = parseInt(players);
    
    var bad1 = "Cannot use ID 0";
    var bad2 = "Not registered";
    var bad3 = "Cannot use this ID";
    var bad4 = "";
    var bad5 = "Not an ID";
    
    var namerstorageholder = [];
    
    for(var p = 0; p < contplayers; ++p)
        {
            var holder = document.getElementById("cont"+p).value;
            namerstorageholder.push(holder);
        }
    
    
    //true or false variable
    var torf = false;
    //checks then goes into execution
    for(var find = 0; find < contplayers; ++find)
        {
            if(namerstorageholder[find] == bad1 || namerstorageholder[find] == bad2 || namerstorageholder[find] == bad3 || namerstorageholder[find] == bad4 || namerstorageholder[find] == bad5 )
            {
                torf = true;
                break;
            }
        }
    if(torf == true)
        {
            alert("One of the IDs are wrong.");
        }
    else{
		    if (contplayers < 2 || contplayers == "")
		        {
		            alert("Please enter players.");
		        }
		     else if(contplayers <= 16)
		        {
		            //might need to add &nbsp;
		            var area = document.getElementById("bracket");
		            var large = "<main><ul class='round round-1'><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos0'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos1'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos2'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos3'></li><li class='spacer'>&nbsp;</li><li class='game game-top' id='pos4'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='pos5'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos6'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos7'></li><li class='spacer'>&nbsp;</li> <li class='game game-top winner' id='pos8'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos9'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos10'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom ' id='pos11'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos12'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos13'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos14'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos15'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-2'><li class='spacer'></li><li class='game game-top winner' id='pos16'></li><li class='game game-spacer'></li><li class='game game-bottom ' id='pos17'></li><li class='spacer'></li><li class='game game-top winner' id='pos18'></li><li class='game game-spacer'></li><li class='game game-bottom ' id='pos19'></li><li class='spacer'>&nbsp;</li><li class='game game-top ' id='pos20'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='pos21'></li><li class='spacer'>&nbsp;</li><li class='game game-top ' id='pos22'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='pos23'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-3'><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos24'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom ' id='pos25'></li><li class='spacer'>&nbsp;</li><li class='game game-top ' id='pos26'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='pos27'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-4'><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos28'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom ' id='pos29'></li><li class='spacer'>&nbsp;</li></ul></main>";
		            area.innerHTML = large;
		            
		            //going to have to make another if for > 16 players

		            preliminarymatch();
		            
		        }
		    else
		        {
		            var place = document.getElementById("bracket");
		            var verylarge = "<main><ul class='round round-1'><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos0'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos1'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos2'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos3'></li><li class='spacer'>&nbsp;</li><li class='game game-top' id='pos4'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='pos5'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos6'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos7'></li><li class='spacer'>&nbsp;</li> <li class='game game-top winner' id='pos8'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos9'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos10'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom ' id='pos11'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos12'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos13'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos14'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos15'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-2'><li class='spacer'></li><li class='game game-top winner' id='pos16'></li><li class='game game-spacer'></li><li class='game game-bottom ' id='pos17'></li><li class='spacer'></li><li class='game game-top winner' id='pos18'></li><li class='game game-spacer'></li><li class='game game-bottom ' id='pos19'></li><li class='spacer'>&nbsp;</li><li class='game game-top ' id='pos20'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='pos21'></li><li class='spacer'>&nbsp;</li><li class='game game-top ' id='pos22'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='pos23'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-3'><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos24'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom ' id='pos25'></li><li class='spacer'>&nbsp;</li><li class='game game-top ' id='pos26'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='pos27'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-4'><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos28'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom ' id='pos29'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-5'><li class='spacer'></li><li class='game game-top' id='pos61'></li><li class ='game game-spacer'>&nbsp;</li></ul></main><main><ul class='round round-1'><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos30'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos31'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos32'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos33'></li><li class='spacer'>&nbsp;</li><li class='game game-top' id='pos34'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='pos35'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos36'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos37'></li><li class='spacer'>&nbsp;</li> <li class='game game-top winner' id='pos38'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos39'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos40'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom ' id='pos41'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos42'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos43'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos44'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos45'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-2'><li class='spacer'></li><li class='game game-top winner' id='pos46'></li><li class='game game-spacer'></li><li class='game game-bottom ' id='pos47'></li><li class='spacer'></li><li class='game game-top winner' id='pos48'></li><li class='game game-spacer'></li><li class='game game-bottom ' id='pos49'></li><li class='spacer'>&nbsp;</li><li class='game game-top ' id='pos50'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='pos51'></li><li class='spacer'>&nbsp;</li><li class='game game-top ' id='pos52'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='pos53'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-3'><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos54'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom ' id='pos55'></li><li class='spacer'>&nbsp;</li><li class='game game-top ' id='pos56'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='pos57'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-4'><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='pos58'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom ' id='pos59'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-5'><li class ='game game-spacer'>&nbsp;</li><li class='game game-top' id='pos60'></li><li class='spacer'>&nbsp;</li></ul></main>";
		            
		            place.innerHTML = verylarge;
		            preliminarymatch();
		        }
    }
   
}


//did the name storage here
//need to find out when to use placename when I have reached the correct number.
function preliminarymatch(){
	var numberoffighters = document.getElementById("contestantvalue").value;
	var contvalue = parseInt(numberoffighters);

		//start storing names into array
		for(var innercount = 0; innercount < contvalue; innercount++)
		{
			var store = document.getElementById('cont'+innercount).value;
			namestorage.push(store);
		}
		shuffle(namestorage);

	if( contvalue == 2 || contvalue == 4 || contvalue == 8 || contvalue == 16 || contvalue >= 20)
	{
		placename();
	}
	else
	{
		var prelimarea = document.getElementById("fightboxarea");
		var placeprelim = "<fieldset><legend>Preliminary Match</legend><output id='prefighter1'></output><input type='number' id='prescore1' min='0' value='0'><br><output id='prefighter2'></output><input type='number' id='prescore2' min='0' value='0'><button onclick='prefight()'>Score</button></fieldset>";
		prelimarea.innerHTML = placeprelim;
		var fighterpre1 = document.getElementById("prefighter1");
		var fighterpre2 = document.getElementById("prefighter2");

		fighterpre1.innerHTML = namestorage[0];
		fighterpre2.innerHTML = namestorage[1];

	}
}

function prefight(){
	

	var fightp1 = document.getElementById("prefighter1").innerHTML;
	var fightp2 = document.getElementById("prefighter2").innerHTML; 

	var pfight1 = document.getElementById("prescore1").value;
	var prefight1 = parseInt(pfight1);
	var pfight2 = document.getElementById("prescore2").value;
	var prefight2 = parseInt(pfight2);

	if(pfight1 > pfight2) 
	{
		loserstorage.push(fightp2);
		console.log(loserstorage);
		var index = namestorage.indexOf(fightp2);
		namestorage.splice(index, 1);
		console.log(namestorage);
		var amount = namestorage.length;
		namestorage.push(namestorage.shift());
		console.log(namestorage);

		if(amount == 2 || amount == 4 || amount == 8 || amount == 16 || amount >= 20 )
		{
			placename();
		}
		else
		{
			var switchfighter1 = document.getElementById("prefighter1");
			var switchfighter2 = document.getElementById("prefighter2");
			switchfighter1.innerHTML = namestorage[0];
			switchfighter2.innerHTML = namestorage[1];
		}


	}
	else
	{
		loserstorage.push(fightp1);
		console.log(loserstorage);
		var index = namestorage.indexOf(fightp1);
		namestorage.splice(index, 1);
		console.log(namestorage);
		var amount = namestorage.length;
		namestorage.push(namestorage.shift());
		console.log(namestorage);

		if(amount == 2 || amount == 4 || amount == 8 || amount == 16 || amount >= 20 )
		{
			placename();
		}
		else
		{
			var switchfighter1 = document.getElementById("prefighter1");
			var switchfighter2 = document.getElementById("prefighter2");
			switchfighter1.innerHTML = namestorage[0];
			switchfighter2.innerHTML = namestorage[1];
		}
	}


}

//going to have to traverse throughout the table to get the positions
//do a shuffle here
//places names into bracket
function placename(){
	// var numberofcontestants = document.getElementById("contestantvalue").value;
	var valuenumber = namestorage.length;

	
    if(valuenumber > 16)
        {
            for(var position = 0; position < 16; position++)
            {
                var holder = namestorage[position];
                var build = document.getElementById('pos'+position);
                build.innerHTML = holder;
            }
            
            var increment = 30;
            for(var nextpos = 16; nextpos < valuenumber; nextpos++)
                {
                    var storage = namestorage[nextpos];
                    var create = document.getElementById('pos'+increment);
                    create.innerHTML = storage;
                    ++increment;
                }
            
        }
    else
        {
            for(var position = 0; position < valuenumber; position++)
            {
                var holder = namestorage[position];
                var build = document.getElementById('pos'+position);
                build.innerHTML = holder;
            }
        }
    
    fightbox();
}

//the area in which names will be pulled to
function fightbox(){
    var divarea = document.getElementById("fightboxarea");
    divarea.innerHTML = " ";
    var medium = "<fieldset><legend>Fightbox</legend><output id='fighter1'></output><input type='number' id='score1' min='0' value='0'><br><output id='fighter2'></output><input type='number' id='score2' min='0' value='0'><button onclick='fight()'>Score</button></fieldset>";
    divarea.innerHTML = medium;

    var value1 = document.getElementById("pos0").innerHTML;
    var value2 = document.getElementById("pos1").innerHTML;
    var output1 = document.getElementById("fighter1");
    var output2 = document.getElementById("fighter2");
    output1.innerHTML = value1;
    output2.innerHTML = value2;
}

function loserbox(){
    var fightarea = document.getElementById("fightboxarea");
    fightarea.innerHTML = "";
    var loserboxarea = document.getElementById("loserbox");
    var average = "<fieldset><legend>Second Fight</legend><output id='fighter3'></output><input type='number' id='score3' min='0' value='0'><br><output id='fighter4'></output><input type='number' id='score4' min='0' value='0'><button onclick='loserfight()'>Score</button></fieldset>";
    loserboxarea.innerHTML = average;
    
    
    var value1 = document.getElementById("loser0").innerHTML;
    var value2 = document.getElementById("loser1").innerHTML;
    var output1 = document.getElementById("fighter3");
    var output2 = document.getElementById("fighter4");
    output1.innerHTML = value1;
    output2.innerHTML = value2;
}

function fourthbox(){
    var loserfight = document.getElementById("loserbox");
    loserfight.innerHTML = "";
    var fourthboxs = document.getElementById("fourthbox");
    var average = "<fieldset><legend>Fourth</legend><output id='fighter5'></output><input type='number' id='score5' min='0' value='0'><br><output id='fighter6'></output><input type='number' id='score6' min='0' value='0'><button onclick='fourth()'>Score</button></fieldset>";
    fourthboxs.innerHTML = average;
}

//changed some of the loser positions
function loser(){
    var loserarea = document.getElementById("loser");
    var big = "<main><ul class='round round-1'><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser0'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='loser1'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser2'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='loser3'></li><li class='spacer'>&nbsp;</li><li class='game game-top' id='loser4'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='loser5'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser6'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='loser7'></li><li class='spacer'>&nbsp;</li> <li class='game game-top winner' id='loser8'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='loser9'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser10'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom ' id='loser11'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser12'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='loser13'></li><li class='spacer'>&nbsp;</li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='loser14'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-2'><li class='spacer'></li><li class='game game-top winner' id='loser15'></li><li class='game game-spacer'></li><li class='game game-bottom ' id='loser16'></li><li class='spacer'></li><li class='game game-top winner' id='loser17'></li><li class='game game-spacer'></li><li class='game game-bottom ' id='loser18'></li><li class='spacer'>&nbsp;</li><li class='game game-top ' id='loser19'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='loser20'></li><li class='spacer'>&nbsp;</li><li class='game game-top ' id='loser21'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='loser22'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-3'><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser23'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom ' id='loser24'></li><li class='spacer'>&nbsp;</li><li class='game game-top ' id='loser25'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='loser26'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-4'><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser27'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom ' id='loser28'></li><li class='spacer'>&nbsp;</li></ul></main>";
    
    loserarea.innerHTML = big;
    
}

function clearboxes(){
    document.getElementById("fightboxarea").innerHTML = " ";
    document.getElementById("loserbox").innerHTML = " ";
    document.getElementById("fourthbox").innerHTML = " ";
}




