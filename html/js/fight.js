//the main function that will be running it all.
function fight(){
    var numbervalue = document.getElementById("contestantvalue").value;
    var numbercount = parseInt(numbervalue);
    
    //greter than 16 players
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

//need to go back and do the loser bracket and the if the next person is not there.
function fight16()
        {
            var output1 = document.getElementById("fighter1");
            var output2 = document.getElementById("fighter2");
            //keeps track of the rounds
            var compare1 = document.getElementById("fighter1").innerHTML;
            var blank = "";
            //round 1
            var position1 = document.getElementById("pos0").innerHTML;
            var position3 = document.getElementById("pos2").innerHTML;
            var position5 = document.getElementById("pos4").innerHTML;
            var position7 = document.getElementById("pos6").innerHTML;
            var position9 = document.getElementById("pos8").innerHTML;
            var position11 = document.getElementById("pos10").innerHTML;
            var position13 = document.getElementById("pos12").innerHTML;
            var position15 = document.getElementById("pos14").innerHTML;
//            //round 2 find another way to compare it's messing up here
            var position16 = document.getElementById("pos16").innerHTML;
            var position18 = document.getElementById("pos18").innerHTML;
//            var position20 = document.getElementById("pos20").innerHTML;
//            var position22 = document.getElementById("pos22").innerHTML;
//            //round 3
//            var position24 = document.getElementById("pos24").innerHTML;
//            var position26 = document.getElementById("pos26").innerHTML;
//            
//            //round 4
//            var position28 = document.getElementById("pos28").innerHTML;
//          
            //special cases need worked on
            //need losers bracket
            //need to test blanks
            //first fight: pos0 pos1; if no next fight the guy wins; special
            if(compare1 == position1)
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
                            //win automatically if no others
                            if(grabnext1 === blank)
                            {
                                var firstplace = document.getElementById("pos16").innerHTML;
                                var secondplace = document.getElementById("pos1").innerHTML;
                                var winner = document.getElementById("first");
                                var winner2 = document.getElementById("second");
                                winner.innerHTML = firstplace;
                                winner2.innerHTML = secondplace;
                            }
                            else
                            {
                                output1.innerHTML = grabnext1;
                                output2.innerHTML = grabnext2;
                            }
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
                             if(grabnext1 === blank)
                            {
                                var firstplace = document.getElementById("pos16").innerHTML;
                                var secondplace = document.getElementById("pos0").innerHTML;
                                var winner = document.getElementById("first");
                                var winner2 = document.getElementById("second");
                                winner = firstplace;
                                winner2 = secondplace;
                            }
                            else
                            {
                                output1.innerHTML = grabnext1;
                                output2.innerHTML = grabnext2;
                            }
                        }
                }
            //fight 2: pos2 pos3  not finished empty next round  top not winning
            else if (compare1 == position3)
                {
                    var secondfightval1 = document.getElementById("score1").value;
                    var fight2val1 = parseInt(secondfightval1);
                    var secondfightval2 = document.getElementById("score2").value;
                    var fight2val2 = parseInt(secondfightval2);

                    if( fight2val1 > fight2val2)
                        {
                            var winnerft2 = document.getElementById("fighter1").innerHTML;
                            var placepos17 = document.getElementById("pos17");
                            placepos17.innerHTML = winnerft2;
                            var grabnext3 = document.getElementById("pos4").innerHTML;
                            var grabnext4 = document.getElementById("pos5").innerHTML;
                            if(grabnext1 === blank)
                                {
                                    var grabpos16 = document.getElementById("pos16").innerHTML;
                                    var grabpos17 = document.getElementById("pos17").innerHTML;
                                    output1.innerHTML = grabpos16;
                                    output2.innerHTML = grabpos17;
                                }
                            else
                                {
                                    output1.innerHTML = grabnext3;
                                    output2.innerHTML = grabnext4;
                                }
                        }
                    else
                        {
                            var winnerft2 = document.getElementById("fighter2").innerHTML;
                            var placepos17 = document.getElementById("pos17");
                            placepos17.innerHTML = winnerft2;
                            var grabnext3 = document.getElementById("pos4").innerHTML;
                            var grabnext4 = document.getElementById("pos5").innerHTML;
                            if(grabnext1 === blank)
                                {
                                    var grabpos16 = document.getElementById("pos16").innerHTML;
                                    var grabpos17 = document.getElementById("pos17").innerHTML;
                                    output1.innerHTML = grabpos16;
                                    output2.innerHTML = grabpos17;
                                }
                            else
                                {
                                    output1.innerHTML = grabnext3;
                                    output2.innerHTML = grabnext4;
                                }
                        }  
                }
//            fight 3: pos4 pos5 
            else if(compare1 == position5)
                {
                    var fightvalue1 = document.getElementById("score1").value;
                    var value1 = parseInt(fightvalue1);
                    var fightvalue2 = document.getElementById("score2").value;
                    var value2 = parseInt(fightvalue2);
                    if(value1 > value2)
                        {
                            var winnerft3 = document.getElementById("fighter1").innerHTML;
                            var placepos18 = document.getElementById("pos18");
                            placepos18.innerHTML = winnerft3;
                            var nextfight31 = document.getElementById("pos6").innerHTML;
                            var nextfight32 = document.getElementById("pos7").innerHTML;
                            if(nextfight31 === blank)
                                {
                                    var grab16 = document.getElementById("pos16").innerHTML;
                                    var grab17 = document.getElementById("pos17").innerHTML;
                                    output1.innerHTML = grab16;
                                    output2.innerHTML = grab17;
                                }
                            else
                                {
                                    output1.innerHTML = nextfight31;
                                    output2.innerHTML = nextfight32;
                                }
                        }
                    else
                        {
                            var winnerft3 = document.getElementById("fighter2").innerHTML;
                            var placepos18 = document.getElementById("pos18");
                            placepos18.innerHTML = winnerft3;
                            var nextfight31 = document.getElementById("pos6").innerHTML;
                            var nextfight32 = document.getElementById("pos7").innerHTML;
                            if(nextfight31 === blank)
                                {
                                    var grab16 = document.getElementById("pos16").innerHTML;
                                    var grab17 = document.getElementById("pos17").innerHTML;
                                    output1.innerHTML = grab16;
                                    output2.innerHTML = grab17;
                                }
                            else
                                {
                                    output1.innerHTML = nextfight31;
                                    output2.innerHTML = nextfight32;
                                }
                        }
                }
            //fight 4: pos6 pos7 
            else if(compare1 == position7)
                {
                    var fight41 = document.getElementById("score1").value;
                    var fight4val1  = parseInt(fight41);
                    var fight42 = document.getElementById("score2").value;
                    var fight4val2 = parseInt(fight42);
                    if(fight4val1 > fight4val2)
                        {
                            var winnerft4 = document.getElementById("fighter1").innerHTML;
                            var placepos19 = document.getElementById("pos19");
                            placepos19.innerHTML = winnerft4;
                            var nextfight41 = document.getElementById("pos8").innerHTML;
                            var nextfight42 = document.getElementById("pos9").innerHTML;
                            if(nextfight41 === blank)
                                {
                                    var grab16 = document.getElementById("pos16").innerHTML;
                                    var grab17 = document.getElementById("pos17").innerHTML;
                                    output1.innerHTML = grab16;
                                    output2.innerHTML = grab17;
                                }
                            else
                                {
                                    output1.innerHTML = nextfight41;
                                    output2.innerHTML = nextfight42;
                                }
                        }
                    else
                        {
                            var winnerft4 = document.getElementById("fighter2").innerHTML;
                            var placepos19 = document.getElementById("pos19");
                            placepos19.innerHTML = winnerft4;
                            var nextfight41 = document.getElementById("pos8").innerHTML;
                            var nextfight42 = document.getElementById("pos9").innerHTML;
                            if(nextfight41 === blank)
                                {
                                    var grab16 = document.getElementById("pos16").innerHTML;
                                    var grab17 = document.getElementById("pos17").innerHTML;
                                    output1.innerHTML = grab16;
                                    output2.innerHTML = grab17;
                                }
                            else
                                {
                                    output1.innerHTML = nextfight41;
                                    output2.innerHTML = nextfight42;
                                }
                        }
                }
            //fight 5: pos8 pos9
            else if(compare1 == position9)
                {
                    var fight51 = document.getElementById("score1").value;
                    var fight5val1 = parseInt(fight51);
                    var fight52 = document.getElementById("score2").value;
                    var fight5val2 = parseInt(fight52);
                    if(fight5val1 > fight5val2)
                        {
                            //change variables
                            var winnerft5 = document.getElementById("fighter1").innerHTML;
                            var placepos20 = document.getElementById("pos20");
                            placepos20.innerHTML = winnerft5;
                            var nextfight51 = document.getElementById("pos10").innerHTML;
                            var nextfight52 = document.getElementById("pos11").innerHTML;
                            if(nextfight51 === blank)
                                {
                                    var go16 = document.getElementById("pos16").innerHTML;
                                    var go17 = document.getElementById("pos17").innerHTML;
                                    output1.innerHTML = grab16;
                                    output2.innerHTML = grab17;
                                }
                            else
                                {
                                    output1.innerHTML = nextfight51;
                                    output2.innerHTML = nextfight52;
                                }
                        }
                    else
                        {
                            var winnerft5 = document.getElementById("fighter2").innerHTML;
                            var placepos20 = document.getElementById("pos20");
                            placepos20.innerHTML = winnerft5;
                            var nextfight51 = document.getElementById("pos10").innerHTML;
                            var nextfight52 = document.getElementById("pos11").innerHTML;
                            if(nextfight51 === blank)
                                {
                                    var go16 = document.getElementById("pos16").innerHTML;
                                    var go17 = document.getElementById("pos17").innerHTML;
                                    output1.innerHTML = grab16;
                                    output2.innerHTML = grab17;
                                }
                            else
                                {
                                    output1.innerHTML = nextfight51;
                                    output2.innerHTML = nextfight52;
                                }
                        }
                }
            //fight 6: pos10 pos11
            else if(compare1 == position11)
                {
                    var fight61 = document.getElementById("score1").value;
                    var fight6val1 = parseInt(fight61);
                    var fight62 = document.getElementById("score2").value;
                    var fight6val2 = parseInt(fight62);
                    if(fight6val1 > fight6val2)
                        {
                         //change variables
                            var winnerft6 = document.getElementById("fighter1").innerHTML;
                            var placepos21 = document.getElementById("pos21");
                            placepos21.innerHTML = winnerft6;
                            var nextfight61 = document.getElementById("pos12").innerHTML;
                            var nextfight62 = document.getElementById("pos13").innerHTML;
                            if(nextfight61 === blank)
                                {
                                    var going16 = document.getElementById("pos16").innerHTML;
                                    var going17 = document.getElementById("pos17").innerHTML;
                                    output1.innerHTML = grab16;
                                    output2.innerHTML = grab17;
                                }
                            else
                                {
                                    output1.innerHTML = nextfight61;
                                    output2.innerHTML = nextfight62;
                                }   
                        }
                    else
                        {
                             var winnerft6 = document.getElementById("fighter2").innerHTML;
                            var placepos21 = document.getElementById("pos21");
                            placepos21.innerHTML = winnerft6;
                            var nextfight61 = document.getElementById("pos12").innerHTML;
                            var nextfight62 = document.getElementById("pos13").innerHTML;
                            if(nextfight61 === blank)
                                {
                                    var going16 = document.getElementById("pos16").innerHTML;
                                    var going17 = document.getElementById("pos17").innerHTML;
                                    output1.innerHTML = grab16;
                                    output2.innerHTML = grab17;
                                }
                            else
                                {
                                    output1.innerHTML = nextfight61;
                                    output2.innerHTML = nextfight62;
                                }   
                        }
                }
            //fight 7: pos12 pos13
            else if(compare1 == position13)
                {
                    var fight71 = document.getElementById("score1").value;
                    var fight7val1 = parseInt(fight71);
                    var fight72 = document.getElementById("score2").value;
                    var fight7val2 = parseInt(fight72);
                    if(fight7val1 > fight7val2)
                        {
                            var winnerft7 = document.getElementById("fighter1").innerHTML;
                            var placepos22 = document.getElementById("pos22");
                            placepos22.innerHTML = winnerft7;
                            var nextfight71 = document.getElementById("pos14").innerHTML;
                            var nextfight72 = document.getElementById("pos15").innerHTML;
                            if(nextfight71 === blank)
                                {
                                    var nextpos16 = document.getElementById("pos16").innerHTML;
                                    var nextpos17 = document.getElementById("pos17").innerHTML;
                                    output1.innerHTML = nextpos16;
                                    output2.innerHTML = nextpos17;
                                }
                            else
                                {
                                    output1.innerHTML = nextfight71;
                                    output2.innerHTML = nextfight72;
                                }     
                        }
                    else
                        {
                            var winnerft7 = document.getElementById("fighter2").innerHTML;
                            var placepos22 = document.getElementById("pos22");
                            placepos22.innerHTML = winnerft7;
                            var nextfight71 = document.getElementById("pos14").innerHTML;
                            var nextfight72 = document.getElementById("pos15").innerHTML;
                            if(nextfight71 === blank)
                                {
                                    var nextpos16 = document.getElementById("pos16").innerHTML;
                                    var nextpos17 = document.getElementById("pos17").innerHTML;
                                    output1.innerHTML = nextpos16;
                                    output2.innerHTML = nextpos17;
                                }
                            else
                                {
                                    output1.innerHTML = nextfight71;
                                    output2.innerHTML = nextfight72;
                                } 
                        }
                }
            //fight 8: pos14 pos15 last fight if all 16
            else if(compare1 == position15)
                {
                    var fight81 = document.getElementById("score1").value;
                    var fight8val1 = parseInt(fight81);
                    var fight82 = document.getElementById("score2").value;
                    var fight8val2 = parseInt(fight82);
                    if(fight8val1 > fight8val2)
                        {
                            var winnerft8 = document.getElementById("fighter1").innerHTML;
                            var placepos23 = document.getElementById("pos23");
                            placepos23.innerHTML = winnerft8;
                            var nextfight81 = document.getElementById("pos16").innerHTML;
                            var nextfight82 = document.getElementById("pos17").innerHTML;
                            output1.innerHTML =  nextfight81;
                            output2.innerHTML = nextfight82;
                        }
                    else
                        {
                            var winnerft8 = document.getElementById("fighter2").innerHTML;
                            var placepos23 = document.getElementById("pos23");
                            placepos23.innerHTML = winnerft8;
                            var nextfight81 = document.getElementById("pos16").innerHTML;
                            var nextfight82 = document.getElementById("pos17").innerHTML;
                            output1.innerHTML =  nextfight81;
                            output2.innerHTML = nextfight82;
                        }
                }
            //round2
            //fight9: pos16 pos17; special case not done
            else if(compare1 == position16)
                {
                    var fight91 = document.getElementById("score1").value;
                    var fight9val1 = parseInt(fight91);
                    var fight92 = document.getElementById("score2").value;
                    var fight9val2 = parseInt(fight92);
                    if (fight9val1 > fight9val2)
                        {
                            var winnerft9 = document.getElementById("fighter1").innerHTML;
                            var placepos24 = document.getElementById("pos24");
                            placepos23.innerHTML = winnerft9;
                            var nextfight91 = document.getElementById("pos18").innerHTML;
                            var nextfight92 = document.getElementById("pos19").innerHTML;
                            if(nextfight91 === blank)
                                {
                                    //special area whoever loses the second fight gets put in the losers bracket 
                                    //winner of this bracket wins
                                    alert("Not done");
                                }
                            else
                                {
                                    output1.innerHTML = nextfight91;
                                    output2.innerHTML = nextfight92;
                                }     
                        }
                    else
                        {
                            var winnerft9 = document.getElementById("fighter2").innerHTML;
                            var placepos24 = document.getElementById("pos24");
                            placepos23.innerHTML = winnerft9;
                            var nextfight91 = document.getElementById("pos18").innerHTML;
                            var nextfight92 = document.getElementById("pos19").innerHTML;
                            if(nextfight91 === blank)
                                {
                                    //special area whoever loses the second fight gets put in the losers bracket 
                                    //winner of this bracket wins
                                    alert("Not done");
                                }
                            else
                                {
                                    output1.innerHTML = nextfight91;
                                    output2.innerHTML = nextfight92;
                                }  
                        }
                }
            //fight10: pos18 pos19
            else if(compare1 == position18)
                {
                    var fight101 = document.getElementById("score1").value;
                    var fight10val1 = parseInt(fight101);
                    var fight102 = document.getElementById("score2").value;
                    var fight10val2 = parseInt(fight102);
                    if(fight10val1 > fight10val2)
                        {
                            var winnerft10 = document.getElementById("fighter1").innerHTML;
                            var placepos24 = document.getElementById("pos25");
                            placepos23.innerHTML = winnerft10;
                            var nextfight101 = document.getElementById("pos20").innerHTML;
                            var nextfight102 = document.getElementById("pos21").innerHTML;
                            if(nextfight101 === blank)
                                {
                                    var round3next1 = document.getElementById("pos24").innerHTML;
                                    var round3next2 = document.getElementById("pos25").innerHTML;
                                    output1.innerHTML = round3next1;
                                    output2.innerHTML = round3next2;
                                }
                            else
                                {
                                    output1.innerHTML = nextfight101;
                                    output2.innerHTML = nextfight102;
                                }     
                        }
                    else
                        {
                            var winnerft10 = document.getElementById("fighter2").innerHTML;
                            var placepos24 = document.getElementById("pos25");
                            placepos23.innerHTML = winnerft10;
                            var nextfight101 = document.getElementById("pos20").innerHTML;
                            var nextfight102 = document.getElementById("pos21").innerHTML;
                            if(nextfight101 === blank)
                                {
                                    var round3next1 = document.getElementById("pos24").innerHTML;
                                    var round3next2 = document.getElementById("pos25").innerHTML;
                                    output1.innerHTML = round3next1;
                                    output2.innerHTML = round3next2;
                                }
                            else
                                {
                                    output1.innerHTML = nextfight101;
                                    output2.innerHTML = nextfight102;
                                }      
                        }
                }
                else
                    {
                        alert("What is it doing");
                    }
        }
