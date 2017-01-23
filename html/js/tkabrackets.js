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
                alert("Need more than 1 contestant.")
            }
        else
            {
                $("#kumitetable tr:not(:first)").remove();
                while (count < rowamount) 
                {
                    var row = table.insertRow(1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);

                    cell1.innerHTML = "<input onkeyup='' type='text' id='idnumber"+count+"'>";
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



//bracket making area
//figure this out, hitting create table bugs it out
// for testing comment out the for loops and start with just getting the basic tables to show up
//function create() {
//    var number = document.getElementById("contestantvalue").value;
//    var amount = parseInt(number);
//    var namearray = new Array(amount);
//    
//    //create of the table brackets
//    var createtable = document.getElementById("brackets");
//    createtable.innerHTML = "<table id='mainbracket'></table>";
//    
//    var loserbracketcreate = document.getElementById("loser");
//    loserbracketcreate.innerHTML = "<table id='loserbracket'></table>";
//    
//    for(var nameiterator = 0; nameiterator < amount; ++nameiterator)
//        {
//            var name = document.getElementById("cont"+nameiterator).value;
////            namearray.splice(nameiterator,0,name);
//            namearray.push(name);
//        }
//
//    //    the splicing might need to be taken out later
//    namearray.sort(function(a, b){return a-b});
//    namearray.splice(amount+1,1);
//    namearray = shuffle(namearray);
//    
//    //variables to help create the tables
//    var table1 = document.getElementById("mainbracket");
//    var table2 = document.getElementById("loserbracket");
//    var rowmaker = 0;
//    var counter1 = 0;
//    var counter2 = 0;
//    //perfect easy brackets first: 2, 4, 8 16, 32
//    var knownbrackets = [2,4,8,16,32];
//    
//    if(amount == knownbrackets[0] || amount == knownbrackets[1] || amount == knownbrackets[2] || amount == knownbrackets[3] || amount == knownbrackets[4])
//        {
//            while(rowmaker < (amount*2))
//            {
//                var rowinsert = table1.insertRow(counter1);
//                ++counter1;
//                while(rowmaker < amount)
//                {
//                    var tdcell = rowinsert.insertCell(counter2);
//                    ++counter2;
//                }
//            }
//        }
//}