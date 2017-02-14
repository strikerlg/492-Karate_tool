//the main function that will be running it all.
function fight(){
    var numbervalue = document.getElementById("contestantvalue").value;
    var numbercount = parseInt(numbervalue);
    
    if(numbercount > 16)
        {
            fight32();
        }
    else
        {
            fight16();
        }
}

function fight32(){
            alert("not done yet");
        }

function fight16()
        {
            var output1 = document.getElementById("fighter1");
            var output2 = document.getElementById("fighter2");
            //keeps track of the rounds
            var count = 0;
            
    
            //first fight: pos0 pos1; No empty slots; but need to do for next round if there is an empty slot
            if(count == 0)
                {
                    var firstfightval1 = document.getElementById("score1").value;
                    var fightval1 = parseInt(firstfightval1);
                    var firstfightval2 = document.getElementById("score2").value;
                    var fightval2 = parseInt(firstfightval2);
                    
                    if( fightval1 > fightval2)
                        {
                            var winnerft1 = document.getElementById("fighter1").innerHTML;
                            var placepos16 = document.getElementById("pos16");
                            placepos16.innerHTML = winnerft1;
                            var grabnext1 = document.getElementById("pos2").innerHTML;
                            var grabnext2 = document.getElementById("pos3").innerHTML;
                            output1.innerHTML = grabnext1;
                            output2.innerHTML = grabnext2;
                        }
                    else
                        {
                            var winnerft1 = document.getElementById("fighter2").innerHTML;
                            var placepos16 = document.getElementById("pos16");
                            placepos16.innerHTML = winnerft1;
                            var grabnext1 = document.getElementById("pos2").innerHTML;
                            var grabnext2 = document.getElementById("pos3").innerHTML;
                            output1.innerHTML = grabnext1;
                            output2.innerHTML = grabnext2;
                        }
                    
                    count = count + 1;
                }
            //fight 2: pos2 pos3
            else if (count == 1)
                {
                    var pos2name = document.getElementById("pos2").innerHTML;
                    var pos3name = document.getElementById("pos3").innerHTML;
                    if( pos3name == "")
                        {
                            var placepos17 = document.getElementById("pos17");
                            placepos17.innerHTML = pos2name;
                            
                            //now do the next upper round
                        }
                    else{
                            var secondfightval1 = document.getElementById("fighter1").value;
                            var fight2val1 = parseInt(secondfightval1);
                            var secondfightval2 = document.getElementById("fighter2").value;
                            var fight2val2 = parseInt(secondfightval2);
                        
                            if( fight2val1 > fight2val2)
                                {
                                    var winnerft2 = document.getElementById("fighter1").innerHTML;
                                    var placepos17 = document.getElementById("pos17");
                                    placepos17.innerHTML = winnerft2;
                                    
                                    //check to see if anybody is in next round if not ++ count
                                }
                            else
                                {
                                    var winnerft2 = document.getElementById("fighter2").innerHTML;
                                    var placepos17 = document.getElementById("pos17");
                                    placepos17.innerHTML = winnerft2;
                                    
                                    //check to see if anybody is in next round if not ++ count
                                }
                        }
                }
                else
                    {
                        alert("What is it doing");
                    }
        }
