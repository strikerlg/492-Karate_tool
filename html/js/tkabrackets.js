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

                    cell1.innerHTML = "<input onkeyup='' type='number' id='idnumber"+count+"'>";
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

//alert still won't go if I don't have anything in the input
//will have to go back into css and change some things.
//bracket area - 32 players
function create() {
    var players = document.getElementById("contestantvalue").value;
    var contplayers = parseInt(players);

    
    if (contplayers < 2 || contplayers == "")
        {
            alert("Please enter players.");
        }
        else
        {
            //might need to add &nbsp;
            var area = document.getElementById("bracket");
            var large = "<main><ul class='round round-1'><li class='spacer'></li><li class='game game-top winner' id='pos0'>player1</li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='pos1'>player2</li><li class='spacer'></li><li class='game game-top winner' id='pos2'>player3</li><li class='game game-spacer'></li><li class='game game-bottom' id='pos3'>player4</li><li class='spacer'></li><li class='game game-top' id='pos4'>player5</li><li class='game game-spacer'></li><li class='game game-bottom winner' id='pos5'>6</li><li class='spacer'></li><li class='game game-top winner' id='pos6'>7</li><li class='game game-spacer'></li><li class='game game-bottom' id='pos7'>8</li><li class='spacer'></li> <li class='game game-top winner' id='pos8'>9</li><li class='game game-spacer'></li><li class='game game-bottom' id='pos9'>10</li><li class='spacer'></li><li class='game game-top winner' id='pos10'>11</li><li class='game game-spacer'></li><li class='game game-bottom ' id='pos11'>12</li><li class='spacer'></li><li class='game game-top winner' id='pos12'>13</li><li class='game game-spacer'></li><li class='game game-bottom' id='pos13'>14</li><li class='spacer'></li><li class='game game-top winner' id='pos14'>15</li><li class='game game-spacer'></li><li class='game game-bottom' id='pos15'>16</li><li class='spacer'></li></ul><ul class='round round-2'><li class='spacer'></li><li class='game game-top winner' id='pos16'>pos16</li><li class='game game-spacer'></li><li class='game game-bottom ' id='pos17'>pos17</li><li class='spacer'></li><li class='game game-top winner' id='pos18'></li><li class='game game-spacer'></li><li class='game game-bottom ' id='pos19'></li><li class='spacer'></li><li class='game game-top ' id='pos20'></li><li class='game game-spacer'></li><li class='game game-bottom winner' id='pos21'></li><li class='spacer'></li><li class='game game-top ' id='pos22'></li><li class='game game-spacer'></li><li class='game game-bottom winner' id='pos23'></li><li class='spacer'></li></ul><ul class='round round-3'><li class='spacer'></li><li class='game game-top winner' id='pos24'></li><li class='game game-spacer'></li><li class='game game-bottom ' id='pos25'></li><li class='spacer'></li><li class='game game-top ' id='pos26'></li><li class='game game-spacer'></li><li class='game game-bottom winner' id='pos27'></li><li class='spacer'></li></ul><ul class='round round-4'><li class='spacer'></li><li class='game game-top winner' id='pos28'></li><li class='game game-spacer'></li><li class='game game-bottom ' id='pos29'></li><li class='spacer'></li></ul></main>";
            area.innerHTML = large;
            
            //going to have to make another if for > 16 players

            placename();
            
        }
   
}

//going to have to traverse throughout the table to get the positions
//do a shuffle here
//places names into bracket
function placename(){
	var numberofcontestants = document.getElementById("contestantvalue").value;
	var valuenumber = parseInt(numberofcontestants);

	//array that stores the names
	var namestorage = [];

	//start storing names into array
	for(var innercount = 0; innercount < valuenumber; innercount++)
	{
		var store = document.getElementById('cont'+innercount).value;
		namestorage.push(store);
	}

    shuffle(namestorage);

    for(var position = 0; position < valuenumber; position++)
        {
            var holder = namestorage[position];
            var build = document.getElementById('pos'+position);
              build.innerHTML = holder;
        }
    
    fightbox();
}

//the area in which names will be pulled to
function fightbox(){
    var divarea = document.getElementById("fightboxarea");
    var medium = "<fieldset><legend>Fightbox</legend><output id='fighter1'></output><input type='number' id='score1'><br><output id='fighter2'></output><input type='number' id='score2'><button onclick='fight()'>Score</button></fieldset>";
    divarea.innerHTML = medium;

    //do the output inner html right here.
    var value1 = document.getElementById("pos0").innerHTML;
    var value2 = document.getElementById("pos1").innerHTML;
    var output1 = document.getElementById("fighter1");
    var output2 = document.getElementById("fighter2");
    output1.innerHTML = value1;
    output2.innerHTML = value2;
}

