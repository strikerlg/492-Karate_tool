//global variable for loser storage
var loserstorage = [];

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


function done(){
    alert("Tournament is done");
}

//need to go back and do the loser bracket and the if the next person is not there.
function fight16(){
            var output1 = document.getElementById("fighter1");
            var output2 = document.getElementById("fighter2");
            //keeps track of the rounds
            var compare1 = document.getElementById("fighter1").innerHTML;
            var compare2 = document.getElementById("fighter2").innerHTML;
            var blank = "";
            //round 1
            var position1 = document.getElementById("pos0").innerHTML;
            var position2 = document.getElementById("pos1").innerHTML;
            var position3 = document.getElementById("pos2").innerHTML;
            var position4 = document.getElementById("pos3").innerHTML;
            var position5 = document.getElementById("pos4").innerHTML;
            var position6 = document.getElementById("pos5").innerHTML;
            var position7 = document.getElementById("pos6").innerHTML;
            var position8 = document.getElementById("pos7").innerHTML;
            var position9 = document.getElementById("pos8").innerHTML;
            var position10 = document.getElementById("pos9").innerHTML;
            var position11 = document.getElementById("pos10").innerHTML;
            var position12 = document.getElementById("pos11").innerHTML;
            var position13 = document.getElementById("pos12").innerHTML;
            var position14 = document.getElementById("pos13").innerHTML;
            var position15 = document.getElementById("pos14").innerHTML;
            var lasposition = document.getElementById("pos15").innerHTML;
//            //round 2 have to compare both positions
            var position16 = document.getElementById("pos16").innerHTML;
            var position17 = document.getElementById("pos17").innerHTML;
            var position18 = document.getElementById("pos18").innerHTML;
            var position19 = document.getElementById("pos19").innerHTML;
            var position20 = document.getElementById("pos20").innerHTML;
            var position21 = document.getElementById("pos21").innerHTML;
            var position22 = document.getElementById("pos22").innerHTML;
            var position23 = document.getElementById("pos23").innerHTML;
//            //round 3
            var position24 = document.getElementById("pos24").innerHTML;
            var position25 = document.getElementById("pos25").innerHTML;
            var position26 = document.getElementById("pos26").innerHTML;
            var position27 = document.getElementById("pos27").innerHTML
//            //round 4
            var position28 = document.getElementById("pos28").innerHTML;
            var position29 = document.getElementById("pos29").innerHTML;

            
            
            //first fight: pos0 pos1; if no next fight the guy wins; special is done; done
            if(compare1 == position1 && compare2 == position2)
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
                            var loserft1 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft1);
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
                                done();
                            }
                            else
                            {
                                if(grabnext2 == blank)
                                    {
                                        var placepos2 = document.getElementById("pos2").innerHTML;
                                        var grab17 = document.getElementById("pos17");
                                        grab17.innerHTML = placepos2;
                                        var take16 = document.getElementById("pos16").innerHTML;
                                        output1.innerHTML= take16;
                                        var take17 = document.getElementById("pos17").innerHTML;
                                        output2.innerHTML = take17;
                                    }
                                else
                                    {
                                        output1.innerHTML = grabnext1;
                                        output2.innerHTML = grabnext2;   
                                    }
                            }
                        }
                    else
                        {
                            var winnerft1 = document.getElementById("fighter2").innerHTML;
                            var placepos16 = document.getElementById("pos16");
                            placepos16.innerHTML = winnerft1;
                            var loserft1 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft1);
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
                                done();
                            }
                            if(grabnext2 == blank)
                                    {
                                        var placepos2 = document.getElementById("pos2").innerHTML;
                                        var grab17 = document.getElementById("pos17");
                                        grab17.innerHTML = placepos2;
                                        var take16 = document.getElementById("pos16").innerHTML;
                                        output1.innerHTML= take16;
                                        var take17 = document.getElementById("pos17").innerHTML;
                                        output2.innerHTML = take17;
                                    }
                                else
                                    {
                                        output1.innerHTML = grabnext1;
                                        output2.innerHTML = grabnext2;   
                                    }
                        }
                }
            //fight 2: pos2 pos3  not finished empty next round  
            else if (compare1 == position3 &&  compare2 == position4)
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
                            var loserft2 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft2);
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
                                    if(grabnext4 == blank)
                                        {
                                            var placepos4 = document.getElementById("pos4").innerHTML;
                                            var grab18 = document.getElementById("pos18");
                                            grab18.innerHTML = placepos4;
                                            var take16 = document.getElementById("pos16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("pos17").innerHTML;
                                            output2.innerHTML = take17;
                                        }
                                    else
                                        {
                                            output1.innerHTML = grabnext3;
                                            output2.innerHTML = grabnext4;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft2 = document.getElementById("fighter2").innerHTML;
                            var placepos17 = document.getElementById("pos17");
                            placepos17.innerHTML = winnerft2;
                            var loserft1 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft1);
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
                                    if(grabnext4 == blank)
                                        {
                                            var placepos4 = document.getElementById("pos4").innerHTML;
                                            var grab18 = document.getElementById("pos18");
                                            grab18.innerHTML = placepos4;
                                            var take16 = document.getElementById("pos16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("pos17").innerHTML;
                                            output2.innerHTML = take17;
                                        }
                                    else
                                        {
                                            output1.innerHTML = grabnext3;
                                            output2.innerHTML = grabnext4;
                                        }
                                }
                        }  
                }
//            fight 3: pos4 pos5 
            else if(compare1 == position5 && compare2 == position6)
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
                            var loserft3 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft3);
                            var nextfight31 = document.getElementById("pos6").innerHTML;
                            var nextfight32 = document.getElementById("pos7").innerHTML;
                            if(nextfight31 == blank)
                                {
                                    var grab16 = document.getElementById("pos16").innerHTML;
                                    var grab17 = document.getElementById("pos17").innerHTML;
                                    output1.innerHTML = grab16;
                                    output2.innerHTML = grab17;
                                }
                            else
                                {
                                    if(nextfight32 == blank)
                                        {
                                            var placepos6 = document.getElementById("pos6").innerHTML;
                                            var grab19 = document.getElementById("pos19");
                                            grab19.innerHTML = placepos6;
                                            var take16 = document.getElementById("pos16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("pos17").innerHTML;
                                            output2.innerHTML = take17;
                                            
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight31;
                                            output2.innerHTML = nextfight32;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft3 = document.getElementById("fighter2").innerHTML;
                            var placepos18 = document.getElementById("pos18");
                            placepos18.innerHTML = winnerft3;
                            var loserft3 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft3);
                            var nextfight31 = document.getElementById("pos6").innerHTML;
                            var nextfight32 = document.getElementById("pos7").innerHTML;
                            if(nextfight31 == blank)
                                {
                                    var grab16 = document.getElementById("pos16").innerHTML;
                                    var grab17 = document.getElementById("pos17").innerHTML;
                                    output1.innerHTML = grab16;
                                    output2.innerHTML = grab17;
                                }
                            else
                                {
                                    if(nextfight32 == blank)
                                        {
                                            var placepos6 = document.getElementById("pos6").innerHTML;
                                            var grab19 = document.getElementById("pos19");
                                            grab19.innerHTML = placepos6;
                                            var take16 = document.getElementById("pos16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("pos17").innerHTML;
                                            output2.innerHTML = take17;
                                            
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight31;
                                            output2.innerHTML = nextfight32;
                                        }
                                }
                        }
                }
            //fight 4: pos6 pos7 
            else if(compare1 == position7 && compare2 == position8)
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
                            var loserft4 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft4);
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
                                    if(nextfight42 == blank)
                                        {
                                            var placepos8 = document.getElementById("pos8").innerHTML;
                                            var grab20 = document.getElementById("pos20");
                                            grab20.innerHTML = placepos8;
                                            var take16 = document.getElementById("pos16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("pos17").innerHTML;
                                            output2.innerHTML = take17;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight41;
                                            output2.innerHTML = nextfight42;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft4 = document.getElementById("fighter2").innerHTML;
                            var placepos19 = document.getElementById("pos19");
                            placepos19.innerHTML = winnerft4;
                            var loserft4 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft4);
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
                                    if(nextfight42 == blank)
                                        {
                                            var placepos8 = document.getElementById("pos8").innerHTML;
                                            var grab20 = document.getElementById("pos20");
                                            grab20.innerHTML = placepos8;
                                            var take16 = document.getElementById("pos16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("pos17").innerHTML;
                                            output2.innerHTML = take17;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight41;
                                            output2.innerHTML = nextfight42;
                                        }
                                }
                        }
                }
            //fight 5: pos8 pos9
            else if(compare1 == position9 && compare2 == position10)
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
                            var loserft5 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft5);
                            var nextfight51 = document.getElementById("pos10").innerHTML;
                            var nextfight52 = document.getElementById("pos11").innerHTML;
                            if(nextfight51 == blank)
                                {
                                    var go16 = document.getElementById("pos16").innerHTML;
                                    var go17 = document.getElementById("pos17").innerHTML;
                                    output1.innerHTML = go16;
                                    output2.innerHTML = go17;
                                }
                            else
                                {
                                    if( nextfight52 == blank)
                                        {
                                            var placepos10 = document.getElementById("pos10").innerHTML;
                                            var grab21 = document.getElementById("pos21");
                                            grab21.innerHTML = placepos10;
                                            var take16 = document.getElementById("pos16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("pos17").innerHTML;
                                            output2.innerHTML = take17;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight51;
                                            output2.innerHTML = nextfight52;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft5 = document.getElementById("fighter2").innerHTML;
                            var placepos20 = document.getElementById("pos20");
                            placepos20.innerHTML = winnerft5;
                            var loserft5 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft5);
                            var nextfight51 = document.getElementById("pos10").innerHTML;
                            var nextfight52 = document.getElementById("pos11").innerHTML;
                            if(nextfight51 === blank)
                                {
                                    var go16 = document.getElementById("pos16").innerHTML;
                                    var go17 = document.getElementById("pos17").innerHTML;
                                    output1.innerHTML = gob16;
                                    output2.innerHTML = go17;
                                }
                            else
                                {
                                    if( nextfight52 == blank)
                                        {
                                            var placepos10 = document.getElementById("pos10").innerHTML;
                                            var grab21 = document.getElementById("pos21");
                                            grab21.innerHTML = placepos10;
                                            var take16 = document.getElementById("pos16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("pos17").innerHTML;
                                            output2.innerHTML = take17;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight51;
                                            output2.innerHTML = nextfight52;
                                        }
                                }
                        }
                }
            //fight 6: pos10 pos11
            else if(compare1 == position11 && compare2 == position12)
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
                            var loserft6 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft6);
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
                                    if(nextfight62 == blank)
                                        {
                                            var placepos12 = document.getElementById("pos12").innerHTML;
                                            var grab22 = document.getElementById("pos22");
                                            grab22.innerHTML = placepos12;
                                            var take16 = document.getElementById("pos16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("pos17").innerHTML;
                                            output2.innerHTML = take17;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight61;
                                            output2.innerHTML = nextfight62;   
                                        }
                                }   
                        }
                    else
                        {
                             var winnerft6 = document.getElementById("fighter2").innerHTML;
                            var placepos21 = document.getElementById("pos21");
                            placepos21.innerHTML = winnerft6;
                            var loserft6 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft6);
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
                                    if(nextfight62 == blank)
                                        {
                                            var placepos12 = document.getElementById("pos12").innerHTML;
                                            var grab22 = document.getElementById("pos22");
                                            grab22.innerHTML = placepos12;
                                            var take16 = document.getElementById("pos16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("pos17").innerHTML;
                                            output2.innerHTML = take17;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight61;
                                            output2.innerHTML = nextfight62;   
                                        }
                                }   
                        }
                }
            //fight 7: pos12 pos13
            else if(compare1 == position13 && compare2 == position14)
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
                            var loserft7 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft7);
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
                                    if(nextfight72 == blank)
                                        {
                                            var placepos14 = document.getElementById("pos14").innerHTML;
                                            var grab23 = document.getElementById("pos23");
                                            grab23.innerHTML = placepos14;
                                            var take16 = document.getElementById("pos16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("pos17").innerHTML;
                                            output2.innerHTML = take17;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight71;
                                            output2.innerHTML = nextfight72;
                                        }
                                }     
                        }
                    else
                        {
                            var winnerft7 = document.getElementById("fighter2").innerHTML;
                            var placepos22 = document.getElementById("pos22");
                            placepos22.innerHTML = winnerft7;
                            var loserft7 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft7);
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
                                    if(nextfight72 == blank)
                                        {
                                            var placepos14 = document.getElementById("pos14").innerHTML;
                                            var grab23 = document.getElementById("pos23");
                                            grab23.innerHTML = placepos14;
                                            var take16 = document.getElementById("pos16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("pos17").innerHTML;
                                            output2.innerHTML = take17;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight71;
                                            output2.innerHTML = nextfight72;
                                        }
                                } 
                        }
                }
            //fight 8: pos14 pos15 last fight if all 16
            else if(compare1 == position15 && compare2 == lasposition)
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
                            var loserft8 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft8);
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
                            var loserft8 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft8);
                            var nextfight81 = document.getElementById("pos16").innerHTML;
                            var nextfight82 = document.getElementById("pos17").innerHTML;
                            output1.innerHTML =  nextfight81;
                            output2.innerHTML = nextfight82;
                        }
                }
            //round2
            //fight9: pos16 pos17; special done; done
            else if(compare1 == position16 && compare2 == position17)
                {
                    var fight91 = document.getElementById("score1").value;
                    var fight9val1 = parseInt(fight91);
                    var fight92 = document.getElementById("score2").value;
                    var fight9val2 = parseInt(fight92);
                    if (fight9val1 > fight9val2)
                        {
                            var winnerft9 = document.getElementById("fighter1").innerHTML;
                            var placepos24 = document.getElementById("pos24");
                            placepos24.innerHTML = winnerft9;
                            var loserft9 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft9);
                            var nextfight91 = document.getElementById("pos18").innerHTML;
                            var nextfight92 = document.getElementById("pos19").innerHTML;
                            if(nextfight91 == blank)
                                {
                                    var firstplace = document.getElementById("first");
                                    firstplace.innerHTML = winnerft9;
                                    loserstorage.push(loserft9);
                                    loser();
                                    loserlayout();
                                }
                            else
                                {
                                    if(nextfight92 == blank)
                                        {
                                            var placepos18 = document.getElementById("pos18").innerHTML;
                                            var grab25 = document.getElementById("pos25");
                                            grab25.innerHTML = placepos18;
                                            var take24 = document.getElementById("pos24").innerHTML;
                                            output1.innerHTML= take24;
                                            var take25 = document.getElementById("pos25").innerHTML;
                                            output2.innerHTML = take25; 
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight91;
                                            output2.innerHTML = nextfight92;   
                                        }
                                }     
                        }
                    else
                        {
                            var winnerft9 = document.getElementById("fighter2").innerHTML;
                            var placepos24 = document.getElementById("pos24");
                            placepos24.innerHTML = winnerft9;
                            var loserft9 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft9);
                            var nextfight91 = document.getElementById("pos18").innerHTML;
                            var nextfight92 = document.getElementById("pos19").innerHTML;
                            if(nextfight91 === blank)
                                {
                                    var firstplace = document.getElementById("first");
                                    firstplace.innerHTML = winnerft9;
                                    loserstorage.push(loserft9);
                                    loser();
                                    loserlayout();
                                }
                            else
                                {
                                    if(nextfight92 == blank)
                                        {
                                            var placepos18 = document.getElementById("pos18").innerHTML;
                                            var grab25 = document.getElementById("pos25");
                                            grab25.innerHTML = placepos18;
                                            var take24 = document.getElementById("pos24").innerHTML;
                                            output1.innerHTML= take24;
                                            var take25 = document.getElementById("pos25").innerHTML;
                                            output2.innerHTML = take25;  
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight91;
                                            output2.innerHTML = nextfight92;   
                                        }
                                }  
                        }
                }
            //fight10: pos18 pos19
            else if(compare1 == position18 && compare2 == position19)
                {
                    var fight101 = document.getElementById("score1").value;
                    var fight10val1 = parseInt(fight101);
                    var fight102 = document.getElementById("score2").value;
                    var fight10val2 = parseInt(fight102);
                    if(fight10val1 > fight10val2)
                        {
                            var winnerft10 = document.getElementById("fighter1").innerHTML;
                            var placepos25 = document.getElementById("pos25");
                            placepos25.innerHTML = winnerft10;
                            var loserft10 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft10);
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
                                    if( nextfight102 == blank)
                                        {
                                            var placepos20 = document.getElementById("pos20").innerHTML;
                                            var grab26 = document.getElementById("pos26");
                                            grab26.innerHTML = placepos20;
                                            var take24 = document.getElementById("pos24").innerHTML;
                                            output1.innerHTML= take24;
                                            var take25 = document.getElementById("pos25").innerHTML;
                                            output2.innerHTML = take25;
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
                            var winnerft10 = document.getElementById("fighter2").innerHTML;
                            var placepos25 = document.getElementById("pos25");
                            placepos25.innerHTML = winnerft10;
                            var loserft10 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft10);
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
                                    if( nextfight102 == blank)
                                        {
                                            var placepos20 = document.getElementById("pos20").innerHTML;
                                            var grab26 = document.getElementById("pos26");
                                            grab26.innerHTML = placepos20;
                                            var take24 = document.getElementById("pos24").innerHTML;
                                            output1.innerHTML= take24;
                                            var take25 = document.getElementById("pos25").innerHTML;
                                            output2.innerHTML = take25;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight101;
                                            output2.innerHTML = nextfight102;
                                        }
                                }      
                        }
                }
            //fight11: 20 21
            else if(compare1 == position20 && compare2 == position21)
                {
                    var fight111 = document.getElementById("score1").value;
                    var fight11val1 = parseInt(fight111);
                    var fight112 = document.getElementById("score2").value;
                    var fight11val2 = parseInt(fight112);
                    if(fight11val1 > fight11val2)
                        {
                            var winnerft11 = document.getElementById("fighter1").innerHTML;
                            var placepos26 = document.getElementById("pos26");
                            placepos26.innerHTML = winnerft11;
                            var loserft11 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft11);
                            var nextfight111 = document.getElementById("pos22").innerHTML;
                            var nextfight112 = document.getElementById("pos23").innerHTML;
                            if(nextfight111 === blank)
                                {
                                    var round3next3 = document.getElementById("pos24").innerHTML;
                                    var round3next4 = document.getElementById("pos25").innerHTML;
                                    output1.innerHTML = round3next3;
                                    output2.innerHTML = round3next4;
                                }
                            else
                                {
                                    if(nextfight112 == blank)
                                        {
                                            var placepos22 = document.getElementById("pos22").innerHTML;
                                            var grab27 = document.getElementById("pos27");
                                            grab27.innerHTML = placepos22;
                                            var take24 = document.getElementById("pos24").innerHTML;
                                            output1.innerHTML= take24;
                                            var take25 = document.getElementById("pos25").innerHTML;
                                            output2.innerHTML = take25;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight111;
                                            output2.innerHTML = nextfight112;   
                                        }
                                } 
                        }
                    else
                        {
                            var winnerft11 = document.getElementById("fighter2").innerHTML;
                            var placepos26 = document.getElementById("pos26");
                            placepos26.innerHTML = winnerft11;
                            var loserft11 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft11);
                            var nextfight111 = document.getElementById("pos22").innerHTML;
                            var nextfight112 = document.getElementById("pos23").innerHTML;
                            if(nextfight111 == blank)
                                {
                                    var round3next3 = document.getElementById("pos24").innerHTML;
                                    var round3next4 = document.getElementById("pos25").innerHTML;
                                    output1.innerHTML = round3next3;
                                    output2.innerHTML = round3next4;
                                }
                            else
                                {
                                    if(nextfight112 == blank)
                                        {
                                            var placepos22 = document.getElementById("pos22").innerHTML;
                                            var grab27 = document.getElementById("pos27");
                                            grab27.innerHTML = placepos22;
                                            var take24 = document.getElementById("pos24").innerHTML;
                                            output1.innerHTML= take24;
                                            var take25 = document.getElementById("pos25").innerHTML;
                                            output2.innerHTML = take25;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight111;
                                            output2.innerHTML = nextfight112;   
                                        }
                                }
                        }
                }
            //fight12: 22 23 last fight
            else if (compare1 == position22 && compare2 == position23)
                {
                    var fight121 = document.getElementById("score1").value;
                    var fight12val1 = parseInt(fight121);
                    var fight122 = document.getElementById("score2").value;
                    var fight12val2 = parseInt(fight122);   
                    if(fight12val1 > fight12val2)
                        {
                            var winnerft12 = document.getElementById("fighter1").innerHTML;
                            var placepos27 = document.getElementById("pos27");
                            var loserft12 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft12);
                            placepos27.innerHTML = winnerft12;
                            output1.innerHTML  = document.getElementById("pos24").innerHTML;
                            output2.innerHTML  = document.getElementById("pos25").innerHTML;
                        }
                    else
                        {
                            var winnerft12 = document.getElementById("fighter2").innerHTML;
                            var placepos27 = document.getElementById("pos27");
                            var loserft12 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft12);
                            placepos27.innerHTML = winnerft12;
                            output1.innerHTML  = document.getElementById("pos24").innerHTML;
                            output2.innerHTML  = document.getElementById("pos25").innerHTML;
                        }
                }
            //round 3
            //fight13: 24 25 special case
            else if (compare1 == position24 && compare2 == position25)
                {
                    var fight131 = document.getElementById("score1").value;
                    var fight13val1 = parseInt(fight131);
                    var fight132 = document.getElementById("score2").value;
                    var fight13val2 = parseInt(fight132);
                    if(fight13val1 > fight13val2)
                        {
                            var winnerft13 = document.getElementById("fighter1").innerHTML;
                            var placepos28 = document.getElementById("pos28");
                            placepos28.innerHTML = winnerft13;
                            var loserft13 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft13);
                            var nextfight131 = document.getElementById("pos26").innerHTML;
                            var nextfight132 = document.getElementById("pos27").innerHTML;
                            if(nextfight131 == blank)
                                {
                                    var firstplace = document.getElementById("first");
                                    firstplace.innerHTML = winnerft13;
                                    loserstorage.push(loserft13);
                                    loser();
                                    loserlayout();
                                }
                            else
                                {
                                    if(nextfight132 == blank)
                                        {
                                            var placepos26 = document.getElementById("pos26").innerHTML;
                                            var grab29 = document.getElementById("pos29");
                                            grab29.innerHTML = placepos26;
                                            var take28 = document.getElementById("pos28").innerHTML;
                                            output1.innerHTML= take28;
                                            var take29 = document.getElementById("pos29").innerHTML;
                                            output2.innerHTML = take29;   
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight131;
                                            output2.innerHTML = nextfight132;
                                        }
                                } 
                        }
                    else
                        {
                            var winnerft13 = document.getElementById("fighter2").innerHTML;
                            var placepos28 = document.getElementById("pos28");
                            placepos28.innerHTML = winnerft13;
                            var loserft13 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft13);
                            var nextfight131 = document.getElementById("pos26").innerHTML;
                            var nextfight132 = document.getElementById("pos27").innerHTML;
                            if(nextfight131 == blank)
                                {
                                    var firstplace = document.getElementById("first");
                                    firstplace.innerHTML = winnerft13;
                                    loserstorage.push(loserft13);
                                    loser();
                                    loserlayout();
                                }
                            else
                                {
                                    if(nextfight132 == blank)
                                        {
                                            var placepos26 = document.getElementById("pos26").innerHTML;
                                            var grab29 = document.getElementById("pos29");
                                            grab29.innerHTML = placepos26;
                                            var take28 = document.getElementById("pos28").innerHTML;
                                            output1.innerHTML= take28;
                                            var take29 = document.getElementById("pos29").innerHTML;
                                            output2.innerHTML = take29;   
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight131;
                                            output2.innerHTML = nextfight132;
                                        }
                                }   
                        }
                }
            // fight14: pos26 27 last fight
            else if( compare1 == position26 && compare2 == position27)
                {
                    var fight141 = document.getElementById("score1").value;
                    var fight14val1 = parseInt(fight141);
                    var fight142 = document.getElementById("score2").value;
                    var fight14val2 = parseInt(fight142);  
                    if( fight14val1 > fight14val2)
                        {
                            var winnerft14 = document.getElementById("fighter1").innerHTML;
                            var placepos29 = document.getElementById("pos29");
                            placepos29.innerHTML = winnerft14;
                            var loserft14 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft14);
                            var nextfight141 = document.getElementById("pos28").innerHTML;
                            var nextfight142 = document.getElementById("pos29").innerHTML;
                            output1.innerHTML = nextfight141;
                            output2.innerHTML = nextfight142;
                        }
                    else
                        {
                            var winnerft14 = document.getElementById("fighter2").innerHTML;
                            var placepos29 = document.getElementById("pos29");
                            placepos29.innerHTML = winnerft14;
                            var loserft14 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft14);
                            var nextfight141 = document.getElementById("pos28").innerHTML;
                            var nextfight142 = document.getElementById("pos29").innerHTML;
                            output1.innerHTML = nextfight141;
                            output2.innerHTML = nextfight142;
                        }
                }
            //round4
            //fight15: pos28 29 last fight and go into loser bracket 
            else if(compare1 == position28 && compare2 == position29)
                {
                    var fight151 = document.getElementById("score1").value;
                    var fight15val1 = parseInt(fight151);
                    var fight152 = document.getElementById("score2").value;
                    var fight15val2 = parseInt(fight152);
                    if( fight15val1 > fight15val2)
                        {
                            var winnerft15 = document.getElementById("fighter1").innerHTML;
                            var placewinner = document.getElementById("first");
                            placewinner.innerHTML = winnerft15;
                            var loserft15 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft15);
                            //start loser bracket
                            loser();
                            loserlayout();
                        }
                    else
                        {
                            var winnerft15 = document.getElementById("fighter2").innerHTML;
                            var placewinner = document.getElementById("first");
                            placewinner.innerHTML = winnerft15;
                            var loserft15 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft15);
                            //start loser bracket
                            loser();
                            loserlayout();
                        }
                }            
                else
                    {
                        alert("What is it doing");
                    }
            
        }

function loserlayout(){
    var losers = document.getElementById("contestantvalue").value;
	var losernumber = parseInt(losers);
    var valloser = losernumber - 1;
    
    //maybe shuffle
    for(var loserposition = 0; loserposition < valloser; loserposition++)
        {
            var loserjail = loserstorage[loserposition];
            var loserbuild = document.getElementById('loser'+ loserposition);
            loserbuild.innerHTML = loserjail;
        }
    loserbox();
}

function loserfight()
{
    var output3 = document.getElementById("fighter3");
    var output4 = document.getElementById("fighter4");
    //round tracker
    var compare3 = document.getElementById("fighter3").innerHTML;
    var compare4 = document.getElementById("fighter4").innerHTML;
    var blank = "";
    
    //round 1
            var loser1 = document.getElementById("loser0").innerHTML;
            var loser2 = document.getElementById("loser1").innerHTML;
            var loser3 = document.getElementById("loser2").innerHTML;
            var loser4 = document.getElementById("loser3").innerHTML;
            var loser5 = document.getElementById("loser4").innerHTML;
            var loser6 = document.getElementById("loser5").innerHTML;
            var loser7 = document.getElementById("loser6").innerHTML;
            var loser8 = document.getElementById("loser7").innerHTML;
            var loser9 = document.getElementById("loser8").innerHTML;
            var loser10 = document.getElementById("loser9").innerHTML;
            var loser11 = document.getElementById("loser10").innerHTML;
            var loser12 = document.getElementById("loser11").innerHTML;
            var loser13 = document.getElementById("loser12").innerHTML;
            var loser14 = document.getElementById("loser13").innerHTML;
            //by themselves loser 14
            var loser15 = document.getElementById("loser14").innerHTML;
            //            //round 2 
            var lasloser = document.getElementById("loser15").innerHTML;
            var loser16 = document.getElementById("loser16").innerHTML;
            var loser17 = document.getElementById("loser17").innerHTML;
            var loser18 = document.getElementById("loser18").innerHTML;
            var loser19 = document.getElementById("loser19").innerHTML;
            var loser20 = document.getElementById("loser20").innerHTML;
            var loser21 = document.getElementById("loser21").innerHTML;
            var loser22 = document.getElementById("loser22").innerHTML;
            var loser23 = document.getElementById("loser23").innerHTML;
//            //round 3
            var loser24 = document.getElementById("loser24").innerHTML;
            var loser25 = document.getElementById("loser25").innerHTML;
            var loser26 = document.getElementById("loser26").innerHTML;
            var loser27 = document.getElementById("loser27").innerHTML
//            //round 4
            var loser28 = document.getElementById("loser28").innerHTML;
    
    //first fight: loser0 loser1; if no next fight the guy wins; special is done; done
            if(compare3 == loser1 && compare4 == loser2)
                {
                    var firstfightval1 = document.getElementById("score3").value;
                    var fightval1 = parseInt(firstfightval1);
                    var firstfightval2 = document.getElementById("score4").value;
                    var fightval2 = parseInt(firstfightval2);
                    
                    if( fightval1 > fightval2)
                        {
                            var winnerft1 = document.getElementById("fighter3").innerHTML;
                            var placeloser15 = document.getElementById("loser15");
                            placeloser15.innerHTML = winnerft1;
                            var loserft1 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft1);
                            var grabnext1 = document.getElementById("loser2").innerHTML;
                            var grabnext2 = document.getElementById("loser3").innerHTML;
                            //win automatically if no others
                            if(grabnext1 === blank)
                            {
                                var secondplace = document.getElementById("loser15").innerHTML;
                                var thirdplace = document.getElementById("loser1").innerHTML;
                                var winner = document.getElementById("second");
                                var winner2 = document.getElementById("third");
                                winner.innerHTML = secondplace ;
                                winner2.innerHTML = thirdplace;
//                                done();
                            }
                            else
                            {
                                if(grabnext2 == blank)
                                    {
                                        var placeloser2 = document.getElementById("loser2").innerHTML;
                                        var grab16 = document.getElementById("loser16");
                                        grab16.innerHTML = placeloser2;
                                        var take15 = document.getElementById("loser15").innerHTML;
                                        output3.innerHTML= take15;
                                        var take16 = document.getElementById("loser16").innerHTML;
                                        output4.innerHTML = take16;
                                    }
                                else
                                    {
                                        output3.innerHTML = grabnext1;
                                        output4.innerHTML = grabnext2;   
                                    }
                            }
                        }
                    else
                        {
                            var winnerft1 = document.getElementById("fighter4").innerHTML;
                            var placeloser15 = document.getElementById("loser15");
                            placeloser15.innerHTML = winnerft1;
                            var loserft1 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft1);
                            var grabnext1 = document.getElementById("loser2").innerHTML;
                            var grabnext2 = document.getElementById("loser3").innerHTML;
                            output3.innerHTML = grabnext1;
                            output4.innerHTML = grabnext2;
                             if(grabnext1 === blank)
                            {
                                var secondplace = document.getElementById("loser15").innerHTML;
                                var thirdplace = document.getElementById("loser1").innerHTML;
                                var winner = document.getElementById("second");
                                var winner2 = document.getElementById("third");
                                winner.innerHTML = secondplace ;
                                winner2.innerHTML = thirdplace;
//                                done();
                            }
                            if(grabnext2 == blank)
                                    {
                                        var placeloser2 = document.getElementById("loser2").innerHTML;
                                        var grab16 = document.getElementById("loser16");
                                        grab16.innerHTML = placeloser2;
                                        var take15 = document.getElementById("loser15").innerHTML;
                                        output3.innerHTML= take15;
                                        var take16 = document.getElementById("loser16").innerHTML;
                                        output4.innerHTML = take16;
                                    }
                                else
                                    {
                                        output3.innerHTML = grabnext1;
                                        output4.innerHTML = grabnext2;   
                                    }
                        }
                }
            //fight 2: loser2 loser3  not finished empty next round  
            else if (compare3 == loser3 &&  compare4 == loser4)
                {
                    var secondfightval1 = document.getElementById("score3").value;
                    var fight2val1 = parseInt(secondfightval1);
                    var secondfightval2 = document.getElementById("score4").value;
                    var fight2val2 = parseInt(secondfightval2);

                    if( fight2val1 > fight2val2)
                        {
                            var winnerft2 = document.getElementById("fighter3").innerHTML;
                            var placeloser16 = document.getElementById("loser16");
                            placeloser16.innerHTML = winnerft2;
                            var loserft2 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft2);
                            var grabnext3 = document.getElementById("loser4").innerHTML;
                            var grabnext4 = document.getElementById("loser5").innerHTML;
                            if(grabnext1 === blank)
                                {
                                    var grabloser15 = document.getElementById("loser15").innerHTML;
                                    var grabloser16 = document.getElementById("loser16").innerHTML;
                                    output3.innerHTML = grabloser15;
                                    output4.innerHTML = grabloser16;
                                }
                            else
                                {
                                    if(grabnext4 == blank)
                                        {
                                            var placeloser4 = document.getElementById("loser4").innerHTML;
                                            var grab17 = document.getElementById("loser17");
                                            grab17.innerHTML = placeloser4;
                                            var take15 = document.getElementById("loser15").innerHTML;
                                            output3.innerHTML= take15;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output4.innerHTML = take16;
                                        }
                                    else
                                        {
                                            output3.innerHTML = grabnext3;
                                            output4.innerHTML = grabnext4;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft2 = document.getElementById("fighter4").innerHTML;
                            var placeloser16 = document.getElementById("loser16");
                            placeloser16.innerHTML = winnerft2;
                            var loserft1 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft1);
                            var grabnext3 = document.getElementById("loser4").innerHTML;
                            var grabnext4 = document.getElementById("loser5").innerHTML;
                            if(grabnext1 === blank)
                                {
                                    var grabloser15 = document.getElementById("loser15").innerHTML;
                                    var grabloser16 = document.getElementById("loser16").innerHTML;
                                    output3.innerHTML = grabloser15;
                                    output4.innerHTML = grabloser16;
                                }
                            else
                                {
                                    if(grabnext4 == blank)
                                        {
                                            var placeloser4 = document.getElementById("loser4").innerHTML;
                                            var grab17 = document.getElementById("loser17");
                                            grab17.innerHTML = placeloser4;
                                            var take15 = document.getElementById("loser15").innerHTML;
                                            output3.innerHTML= take15;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output4.innerHTML = take16;
                                        }
                                    else
                                        {
                                            output3.innerHTML = grabnext3;
                                            output4.innerHTML = grabnext4;
                                        }
                                }
                        }  
                }
//            fight 3: loser4 loser5 
            else if(compare3 == loser5 && compare4 == loser6)
                {
                    var fightvalue1 = document.getElementById("score3").value;
                    var value1 = parseInt(fightvalue1);
                    var fightvalue2 = document.getElementById("score4").value;
                    var value2 = parseInt(fightvalue2);
                    if(value1 > value2)
                        {
                            var winnerft3 = document.getElementById("fighter3").innerHTML;
                            var placeloser17 = document.getElementById("loser17");
                            placeloser17.innerHTML = winnerft3;
                            var loserft3 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft3);
                            var nextfight31 = document.getElementById("loser6").innerHTML;
                            var nextfight32 = document.getElementById("loser7").innerHTML;
                            if(nextfight31 == blank)
                                {
                                    var grab15 = document.getElementById("loser15").innerHTML;
                                    var grab16 = document.getElementById("loser16").innerHTML;
                                    output3.innerHTML = grab15;
                                    output4.innerHTML = grab16;
                                }
                            else
                                {
                                    if(nextfight32 == blank)
                                        {
                                            var placeloser6 = document.getElementById("loser6").innerHTML;
                                            var grab18 = document.getElementById("loser18");
                                            grab18.innerHTML = placeloser6;
                                            var take15 = document.getElementById("loser15").innerHTML;
                                            output3.innerHTML= take15;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output4.innerHTML = take16;
                                            
                                        }
                                    else
                                        {
                                            output3.innerHTML = nextfight31;
                                            output4.innerHTML = nextfight32;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft3 = document.getElementById("fighter4").innerHTML;
                            var placeloser17 = document.getElementById("loser17");
                            placeloser17.innerHTML = winnerft3;
                            var loserft3 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft3);
                            var nextfight31 = document.getElementById("loser6").innerHTML;
                            var nextfight32 = document.getElementById("loser7").innerHTML;
                            if(nextfight31 == blank)
                                {
                                    var grab15 = document.getElementById("loser15").innerHTML;
                                    var grab16 = document.getElementById("loser16").innerHTML;
                                    output3.innerHTML = grab15;
                                    output4.innerHTML = grab16;
                                }
                            else
                                {
                                    if(nextfight32 == blank)
                                        {
                                            var placeloser6 = document.getElementById("loser6").innerHTML;
                                            var grab18 = document.getElementById("loser18");
                                            grab18.innerHTML = placeloser6;
                                            var take15 = document.getElementById("loser15").innerHTML;
                                            output3.innerHTML= take15;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output4.innerHTML = take16;
                                            
                                        }
                                    else
                                        {
                                            output3.innerHTML = nextfight31;
                                            output4.innerHTML = nextfight32;
                                        }
                                }
                        }
                }
            //fight 4: loser6 loser7 
            else if(compare3 == loser7 && compare4 == loser8)
                {
                    var fight41 = document.getElementById("score3").value;
                    var fight4val1  = parseInt(fight41);
                    var fight42 = document.getElementById("score4").value;
                    var fight4val2 = parseInt(fight42);
                    if(fight4val1 > fight4val2)
                        {
                            var winnerft4 = document.getElementById("fighter3").innerHTML;
                            var placeloser18 = document.getElementById("loser18");
                            placeloser18.innerHTML = winnerft4;
                            var loserft4 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft4);
                            var nextfight41 = document.getElementById("loser8").innerHTML;
                            var nextfight42 = document.getElementById("loser9").innerHTML;
                            if(nextfight41 === blank)
                                {
                                    var grab15 = document.getElementById("loser15").innerHTML;
                                    var grab16 = document.getElementById("loser16").innerHTML;
                                    output3.innerHTML = grab15;
                                    output4.innerHTML = grab16;
                                }
                            else
                                {
                                    if(nextfight42 == blank)
                                        {
                                            var placeloser8 = document.getElementById("loser8").innerHTML;
                                            var grab19 = document.getElementById("loser19");
                                            grab19.innerHTML = placeloser8;
                                            var take15 = document.getElementById("loser15").innerHTML;
                                            output3.innerHTML= take15;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output4.innerHTML = take16;
                                        }
                                    else
                                        {
                                            output3.innerHTML = nextfight41;
                                            output4.innerHTML = nextfight42;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft4 = document.getElementById("fighter4").innerHTML;
                            var placeloser18 = document.getElementById("loser18");
                            placeloser18.innerHTML = winnerft4;
                            var loserft4 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft4);
                            var nextfight41 = document.getElementById("loser8").innerHTML;
                            var nextfight42 = document.getElementById("loser9").innerHTML;
                            if(nextfight41 === blank)
                                {
                                    var grab15 = document.getElementById("loser15").innerHTML;
                                    var grab16 = document.getElementById("loser16").innerHTML;
                                    output3.innerHTML = grab15;
                                    output4.innerHTML = grab16;
                                }
                            else
                                {
                                    if(nextfight42 == blank)
                                        {
                                            var placeloser8 = document.getElementById("loser8").innerHTML;
                                            var grab19 = document.getElementById("loser19");
                                            grab19.innerHTML = placeloser8;
                                            var take15 = document.getElementById("loser15").innerHTML;
                                            output3.innerHTML= take15;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output4.innerHTML = take16;
                                        }
                                    else
                                        {
                                            output3.innerHTML = nextfight41;
                                            output4.innerHTML = nextfight42;
                                        }
                                }
                        }
                }
            //fight 5: loser8 loser9
            else if(compare3 == loser9 && compare4 == loser10)
                {
                    var fight51 = document.getElementById("score3").value;
                    var fight5val1 = parseInt(fight51);
                    var fight52 = document.getElementById("score4").value;
                    var fight5val2 = parseInt(fight52);
                    if(fight5val1 > fight5val2)
                        {
                            //change variables
                            var winnerft5 = document.getElementById("fighter3").innerHTML;
                            var placeloser19 = document.getElementById("loser19");
                            placeloser19.innerHTML = winnerft5;
                            var loserft5 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft5);
                            var nextfight51 = document.getElementById("loser10").innerHTML;
                            var nextfight52 = document.getElementById("loser11").innerHTML;
                            if(nextfight51 === blank)
                                {
                                    var go15 = document.getElementById("loser15").innerHTML;
                                    var go16 = document.getElementById("loser16").innerHTML;
                                    output3.innerHTML = grab15;
                                    output4.innerHTML = grab16;
                                }
                            else
                                {
                                    if( nextfight52 == blank)
                                        {
                                            var placeloser10 = document.getElementById("loser10").innerHTML;
                                            var grab20 = document.getElementById("loser20");
                                            grab20.innerHTML = placeloser10;
                                            var take15 = document.getElementById("loser15").innerHTML;
                                            output3.innerHTML= take15;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output4.innerHTML = take16;
                                        }
                                    else
                                        {
                                            output3.innerHTML = nextfight51;
                                            output4.innerHTML = nextfight52;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft5 = document.getElementById("fighter4").innerHTML;
                            var placeloser19 = document.getElementById("loser19");
                            placeloser19.innerHTML = winnerft5;
                            var loserft5 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft5);
                            var nextfight51 = document.getElementById("loser10").innerHTML;
                            var nextfight52 = document.getElementById("loser11").innerHTML;
                            if(nextfight51 === blank)
                                {
                                    var go15 = document.getElementById("loser15").innerHTML;
                                    var go16 = document.getElementById("loser16").innerHTML;
                                    output3.innerHTML = grab15;
                                    output4.innerHTML = grab16;
                                }
                            else
                                {
                                    if( nextfight52 == blank)
                                        {
                                            var placeloser10 = document.getElementById("loser10").innerHTML;
                                            var grab20 = document.getElementById("loser20");
                                            grab20.innerHTML = placeloser10;
                                            var take15 = document.getElementById("loser15").innerHTML;
                                            output3.innerHTML= take15;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output4.innerHTML = take16;
                                        }
                                    else
                                        {
                                            output3.innerHTML = nextfight51;
                                            output4.innerHTML = nextfight52;
                                        }
                                }
                        }
                }
            //fight 6: loser10 loser11
            else if(compare3 == loser11 && compare4 == loser12)
                {
                    var fight61 = document.getElementById("score3").value;
                    var fight6val1 = parseInt(fight61);
                    var fight62 = document.getElementById("score4").value;
                    var fight6val2 = parseInt(fight62);
                    if(fight6val1 > fight6val2)
                        {
                         //change variables
                            var winnerft6 = document.getElementById("fighter3").innerHTML;
                            var placeloser20 = document.getElementById("loser20");
                            placeloser20.innerHTML = winnerft6;
                            var loserft6 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft6);
                            var nextfight61 = document.getElementById("loser12").innerHTML;
                            var nextfight62 = document.getElementById("loser13").innerHTML;
                            if(nextfight61 === blank)
                                {
                                    var going15 = document.getElementById("loser15").innerHTML;
                                    var going16 = document.getElementById("loser16").innerHTML;
                                    output3.innerHTML = grab15;
                                    output4.innerHTML = grab16;
                                }
                            else
                                {
                                    if(nextfight62 == blank)
                                        {
                                            var placeloser12 = document.getElementById("loser12").innerHTML;
                                            var grab21 = document.getElementById("loser21");
                                            grab21.innerHTML = placeloser12;
                                            var take15 = document.getElementById("loser15").innerHTML;
                                            output3.innerHTML= take15;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output4.innerHTML = take16;
                                        }
                                    else
                                        {
                                            output3.innerHTML = nextfight61;
                                            output4.innerHTML = nextfight62;   
                                        }
                                }   
                        }
                    else
                        {
                             var winnerft6 = document.getElementById("fighter4").innerHTML;
                            var placeloser20 = document.getElementById("loser20");
                            placeloser20.innerHTML = winnerft6;
                            var loserft6 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft6);
                            var nextfight61 = document.getElementById("loser12").innerHTML;
                            var nextfight62 = document.getElementById("loser13").innerHTML;
                            if(nextfight61 === blank)
                                {
                                    var going15 = document.getElementById("loser15").innerHTML;
                                    var going16 = document.getElementById("loser16").innerHTML;
                                    output3.innerHTML = grab15;
                                    output4.innerHTML = grab16;
                                }
                            else
                                {
                                    if(nextfight62 == blank)
                                        {
                                            var placeloser12 = document.getElementById("loser12").innerHTML;
                                            var grab21 = document.getElementById("loser21");
                                            grab21.innerHTML = placeloser12;
                                            var take15 = document.getElementById("loser15").innerHTML;
                                            output3.innerHTML= take15;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output4.innerHTML = take16;
                                        }
                                    else
                                        {
                                            output3.innerHTML = nextfight61;
                                            output4.innerHTML = nextfight62;   
                                        }
                                }   
                        }
                }
            //fight 7: loser12 loser13
            else if(compare3 == loser13 && compare4 == loser14)
                {
                    var fight71 = document.getElementById("score3").value;
                    var fight7val1 = parseInt(fight71);
                    var fight72 = document.getElementById("score4").value;
                    var fight7val2 = parseInt(fight72);
                    if(fight7val1 > fight7val2)
                        {
                            var winnerft7 = document.getElementById("fighter3").innerHTML;
                            var placeloser21 = document.getElementById("loser21");
                            placeloser21.innerHTML = winnerft7;
                            var loserft7 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft7);
                            var nextfight71 = document.getElementById("loser14").innerHTML;
                            if(nextfight71 === blank)
                                {
                                    var nextloser15 = document.getElementById("loser15").innerHTML;
                                    var nextloser16 = document.getElementById("loser16").innerHTML;
                                    output3.innerHTML = nextloser15;
                                    output4.innerHTML = nextloser16;
                                }
                            else
                                {
                                    var get22 = document.getElementById("loser22");
                                    var place14 = document.getElementById("loser14").innerHTML;
                                    get22.innerHTML= place14;
                                    going15 = document.getElementById("loser15").innerHTML;
                                    going16 = document.getElementById("loser16").innerHTML;
                                    output3.innerHTML = going15;
                                    output4.innerHTML = going16;
                                }     
                        }
                    else
                        {
                            var winnerft7 = document.getElementById("fighter4").innerHTML;
                            var placeloser21 = document.getElementById("loser21");
                            placeloser21.innerHTML = winnerft7;
                            var loserft7 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft7);
                            var nextfight71 = document.getElementById("loser14").innerHTML;
                            var nextfight72 = document.getElementById("loser15").innerHTML;
                            if(nextfight71 === blank)
                                {
                                    var nextloser15 = document.getElementById("loser15").innerHTML;
                                    var nextloser16 = document.getElementById("loser16").innerHTML;
                                    output3.innerHTML = nextloser15;
                                    output4.innerHTML = nextloser16;
                                }
                            else
                                {
                                    var get22 = document.getElementById("loser22");
                                    var place14 = document.getElementById("loser14").innerHTML;
                                    get22.innerHTML= place14;
                                    going15 = document.getElementById("loser15").innerHTML;
                                    going16 = document.getElementById("loser16").innerHTML;
                                    output3.innerHTML = going15;
                                    output4.innerHTML = going16;
                                } 
                        }
                }
            //fight 8: loser14 loser15 last fight if all 15

            //round2
            //fight9: loser15 loser16; special done; done
            else if(compare3 == lasloser && compare4 == loser16)
                {
                    var fight91 = document.getElementById("score3").value;
                    var fight9val1 = parseInt(fight91);
                    var fight92 = document.getElementById("score4").value;
                    var fight9val2 = parseInt(fight92);
                    if (fight9val1 > fight9val2)
                        {
                            var winnerft9 = document.getElementById("fighter3").innerHTML;
                            var placeloser23 = document.getElementById("loser23");
                            placeloser23.innerHTML = winnerft9;
                            var loserft9 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft9);
                            var nextfight91 = document.getElementById("loser17").innerHTML;
                            var nextfight92 = document.getElementById("loser18").innerHTML;
                            if(nextfight91 == blank)
                                {
                                    var secondplace = document.getElementById("second");
                                    secondplace.innerHTML = winnerft9;
                                    var thirdplace = document.getElementById("third");
                                    thirdplace.innerHTML = loserft9;
                                    
                                    //start here on getting the outputs
                                    var bottomcompare = document.getElementById("loser3").innerHTML;
                                    if(bottomcompare == blank)
                                        {
                                            var fourthplacewin = document.getElementById("fourth");
                                            var get15pos = document.getElementById("loser15").innerHTML;
                                            var get0pos = document.getElementById("loser0").innerHTML;
                                            var get1pos = document.getElementById("loser1").innerHTML;
                                            if( get15pos == get0pos )
                                                {
                                                    fourthplacewin.innerHTML = get1pos;
                                                }
                                            else
                                                {
                                                    fourthplacewin.innerHTML = get0pos;
                                                }
                                        }
                                    else
                                    {
                                        fourthbox();
                                        var compar15 = document.getElementById("loser15").innerHTML;
                                        var topposition = document.getElementById("loser0").innerHTML;
                                        if(compar15 == topposition)
                                            {
                                                var bottomposition = document.getElementById("loser1").innerHTML;
                                                var topfighter = document.getElementById("fighter5");
                                                topfighter.innerHTML = bottomposition;
                                            }
                                        else
                                            {
                                                var topfighter = document.getElementById("fighter5");
                                                topfighter.innerHTML = topposition;
                                            }

                                        var compare16 = document.getElementById("loser16").innerHTML;
                                        var downposition = document.getElementById("loser2").innerHTML;
                                        if(compare16 == downposition)
                                            {
                                                var bottomdown = document.getElementById("loser3").innerHTML;
                                                var bottomfighter = document.getElementById("fighter6");
                                                bottomfighter.innerHTML = bottomdown;
                                            }
                                        else
                                            {
                                                var bottomfighter = document.getElementById("fighter6");
                                                bottomfighter.innerHTML = downposition;
                                            }
                                    }
                                }
                            else
                                {
                                    if(nextfight92 == blank)
                                        {
                                            var placeloser17 = document.getElementById("loser17").innerHTML;
                                            var grab24 = document.getElementById("loser24");
                                            grab24.innerHTML = placeloser17;
                                            var take23 = document.getElementById("loser23").innerHTML;
                                            output3.innerHTML= take23;
                                            var take24 = document.getElementById("loser24").innerHTML;
                                            output4.innerHTML = take24; 
                                        }
                                    else
                                        {
                                            output3.innerHTML = nextfight91;
                                            output4.innerHTML = nextfight92;   
                                        }
                                }     
                        }
                    else
                        {
                            var winnerft9 = document.getElementById("fighter4").innerHTML;
                            var placeloser23 = document.getElementById("loser23");
                            placeloser23.innerHTML = winnerft9;
                            var loserft9 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft9);
                            var nextfight91 = document.getElementById("loser17").innerHTML;
                            var nextfight92 = document.getElementById("loser18").innerHTML;
                            if(nextfight91 === blank)
                                {
                                    var secondplace = document.getElementById("second");
                                    secondplace.innerHTML = winnerft9;
                                    var thirdplace = document.getElementById("third");
                                    thirdplace.innerHTML = loserft9;
                                   var bottomcompare = document.getElementById("loser3").innerHTML;
                                    if(bottomcompare == blank)
                                        {
                                            var fourthplacewin = document.getElementById("fourth");
                                            var get15pos = document.getElementById("loser15").innerHTML;
                                            var get0pos = document.getElementById("loser0").innerHTML;
                                            var get1pos = document.getElementById("loser1").innerHTML;
                                            if( get15pos == get0pos )
                                                {
                                                    fourthplacewin.innerHTML = get1pos;
                                                }
                                            else
                                                {
                                                    fourthplacewin.innerHTML = get0pos;
                                                }
                                        }
                                    else
                                    {
                                        fourthbox();
                                        var compar15 = document.getElementById("loser15").innerHTML;
                                        var topposition = document.getElementById("loser0").innerHTML;
                                        if(compar15 == topposition)
                                            {
                                                var bottomposition = document.getElementById("loser1").innerHTML;
                                                var topfighter = document.getElementById("fighter5");
                                                topfighter.innerHTML = bottomposition;
                                            }
                                        else
                                            {
                                                var topfighter = document.getElementById("fighter5");
                                                topfighter.innerHTML = topposition;
                                            }

                                        var compare16 = document.getElementById("loser16").innerHTML;
                                        var downposition = document.getElementById("loser2").innerHTML;
                                        if(compare16 == downposition)
                                            {
                                                var bottomdown = document.getElementById("loser3").innerHTML;
                                                var bottomfighter = document.getElementById("fighter6");
                                                bottomfighter.innerHTML = bottomdown;
                                            }
                                        else
                                            {
                                                var bottomfighter = document.getElementById("fighter6");
                                                bottomfighter.innerHTML = downposition;
                                            }
                                    }
                                }
                            else
                                {
                                    if(nextfight92 == blank)
                                        {
                                            var placeloser17 = document.getElementById("loser17").innerHTML;
                                            var grab24 = document.getElementById("loser24");
                                            grab24.innerHTML = placeloser17;
                                            var take23 = document.getElementById("loser23").innerHTML;
                                            output3.innerHTML= take23;
                                            var take24 = document.getElementById("loser24").innerHTML;
                                            output4.innerHTML = take24;  
                                        }
                                    else
                                        {
                                            output3.innerHTML = nextfight91;
                                            output4.innerHTML = nextfight92;   
                                        }
                                }  
                        }
                }
            //fight10: loser17 loser18
            else if(compare3 == loser17 && compare4 == loser18)
                {
                    var fight101 = document.getElementById("score3").value;
                    var fight10val1 = parseInt(fight101);
                    var fight102 = document.getElementById("score4").value;
                    var fight10val2 = parseInt(fight102);
                    if(fight10val1 > fight10val2)
                        {
                            var winnerft10 = document.getElementById("fighter3").innerHTML;
                            var placeloser24 = document.getElementById("loser24");
                            placeloser24.innerHTML = winnerft10;
                            var loserft10 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft10);
                            var nextfight101 = document.getElementById("loser19").innerHTML;
                            var nextfight102 = document.getElementById("loser20").innerHTML;
                            if(nextfight101 === blank)
                                {
                                    var round3next1 = document.getElementById("loser23").innerHTML;
                                    var round3next2 = document.getElementById("loser24").innerHTML;
                                    output3.innerHTML = round3next1;
                                    output4.innerHTML = round3next2;
                                }
                            else
                                {
                                    if( nextfight102 == blank)
                                        {
                                            var placeloser19 = document.getElementById("loser19").innerHTML;
                                            var grab25 = document.getElementById("loser25");
                                            grab25.innerHTML = placeloser19;
                                            var take23 = document.getElementById("loser23").innerHTML;
                                            output3.innerHTML= take23;
                                            var take24 = document.getElementById("loser24").innerHTML;
                                            output4.innerHTML = take24;
                                        }
                                    else
                                        {
                                            output3.innerHTML = nextfight101;
                                            output4.innerHTML = nextfight102;
                                        }
                                    
                                }     
                        }
                    else
                        {
                            var winnerft10 = document.getElementById("fighter4").innerHTML;
                            var placeloser24 = document.getElementById("loser24");
                            placeloser24.innerHTML = winnerft10;
                            var loserft10 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft10);
                            var nextfight101 = document.getElementById("loser19").innerHTML;
                            var nextfight102 = document.getElementById("loser20").innerHTML;
                            if(nextfight101 === blank)
                                {
                                    var round3next1 = document.getElementById("loser23").innerHTML;
                                    var round3next2 = document.getElementById("loser24").innerHTML;
                                    output3.innerHTML = round3next1;
                                    output4.innerHTML = round3next2;
                                }
                            else
                                {
                                    if( nextfight102 == blank)
                                        {
                                            var placeloser19 = document.getElementById("loser19").innerHTML;
                                            var grab25 = document.getElementById("loser25");
                                            grab25.innerHTML = placeloser19;
                                            var take23 = document.getElementById("loser23").innerHTML;
                                            output3.innerHTML= take23;
                                            var take24 = document.getElementById("loser24").innerHTML;
                                            output4.innerHTML = take24;
                                        }
                                    else
                                        {
                                            output3.innerHTML = nextfight101;
                                            output4.innerHTML = nextfight102;
                                        }
                                }      
                        }
                }
            //fight11: 19 20
            else if(compare3 == loser19 && compare4 == loser20)
                {
                    var fight111 = document.getElementById("score3").value;
                    var fight11val1 = parseInt(fight111);
                    var fight112 = document.getElementById("score4").value;
                    var fight11val2 = parseInt(fight112);
                    if(fight11val1 > fight11val2)
                        {
                            var winnerft11 = document.getElementById("fighter3").innerHTML;
                            var placeloser25 = document.getElementById("loser25");
                            placeloser25.innerHTML = winnerft11;
                            var loserft11 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft11);
                            var nextfight111 = document.getElementById("loser21").innerHTML;
                            var nextfight112 = document.getElementById("loser22").innerHTML;
                            if(nextfight111 === blank)
                                {
                                    var round3next3 = document.getElementById("loser23").innerHTML;
                                    var round3next4 = document.getElementById("loser24").innerHTML;
                                    output3.innerHTML = round3next3;
                                    output4.innerHTML = round3next4;
                                }
                            else
                                {
                                    if(nextfight112 == blank)
                                        {
                                            var placeloser21 = document.getElementById("loser21").innerHTML;
                                            var grab26 = document.getElementById("loser26");
                                            grab26.innerHTML = placeloser21;
                                            var take23 = document.getElementById("loser23").innerHTML;
                                            output3.innerHTML= take23;
                                            var take24 = document.getElementById("loser24").innerHTML;
                                            output4.innerHTML = take24;
                                        }
                                    else
                                        {
                                            output3.innerHTML = nextfight111;
                                            output4.innerHTML = nextfight112;   
                                        }
                                } 
                        }
                    else
                        {
                            var winnerft11 = document.getElementById("fighter4").innerHTML;
                            var placeloser25 = document.getElementById("loser25");
                            placeloser25.innerHTML = winnerft11;
                            var loserft11 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft11);
                            var nextfight111 = document.getElementById("loser21").innerHTML;
                            var nextfight112 = document.getElementById("loser22").innerHTML;
                            if(nextfight111 == blank)
                                {
                                    var round3next3 = document.getElementById("loser23").innerHTML;
                                    var round3next4 = document.getElementById("loser24").innerHTML;
                                    output3.innerHTML = round3next3;
                                    output4.innerHTML = round3next4;
                                }
                            else
                                {
                                    if(nextfight112 == blank)
                                        {
                                            var placeloser21 = document.getElementById("loser21").innerHTML;
                                            var grab26 = document.getElementById("loser26");
                                            grab26.innerHTML = placeloser21;
                                            var take23 = document.getElementById("loser23").innerHTML;
                                            output3.innerHTML= take23;
                                            var take24 = document.getElementById("loser24").innerHTML;
                                            output4.innerHTML = take24;
                                        }
                                    else
                                        {
                                            output3.innerHTML = nextfight111;
                                            output4.innerHTML = nextfight112;   
                                        }
                                }
                        }
                }
            //fight12: 21 22 last fight
            else if (compare3 == loser21 && compare4 == loser22)
                {
                    var fight120 = document.getElementById("score3").value;
                    var fight12val1 = parseInt(fight120);
                    var fight121 = document.getElementById("score4").value;
                    var fight12val2 = parseInt(fight121);   
                    if(fight12val1 > fight12val2)
                        {
                            var winnerft12 = document.getElementById("fighter3").innerHTML;
                            var placeloser26 = document.getElementById("loser26");
                            var loserft12 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft12);
                            placeloser26.innerHTML = winnerft12;
                            output3.innerHTML  = document.getElementById("loser23").innerHTML;
                            output4.innerHTML  = document.getElementById("loser24").innerHTML;
                        }
                    else
                        {
                            var winnerft12 = document.getElementById("fighter4").innerHTML;
                            var placeloser26 = document.getElementById("loser26");
                            var loserft12 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft12);
                            placeloser26.innerHTML = winnerft12;
                            output3.innerHTML  = document.getElementById("loser23").innerHTML;
                            output4.innerHTML  = document.getElementById("loser24").innerHTML;
                        }
                }
            //round 3
            //fight13: 23 24 special case
            else if (compare3 == loser23 && compare4 == loser24)
                {
                    var fight131 = document.getElementById("score3").value;
                    var fight13val1 = parseInt(fight131);
                    var fight132 = document.getElementById("score4").value;
                    var fight13val2 = parseInt(fight132);
                    if(fight13val1 > fight13val2)
                        {
                            var winnerft13 = document.getElementById("fighter3").innerHTML;
                            var placeloser27 = document.getElementById("loser27");
                            placeloser27.innerHTML = winnerft13;
                            var loserft13 = document.getElementById("fighter4").innerHTML;
                            var nextfight131 = document.getElementById("loser25").innerHTML;
                            var nextfight132 = document.getElementById("loser26").innerHTML;
                            if(nextfight131 == blank)
                                {
                                    var secondplace = document.getElementById("second");
                                    secondplace.innerHTML = winnerft13;
                                    var thirdplace = document.getElementById("third");
                                    thirdplace.innerHTML = loserft13;
                                    //start here
                                    var bottomcomparepos = document.getElementById("loser18").innerHTML;
                                    if(bottomcomparepos == blank)
                                        {
                                            var fourthplacewinner = document.getElementById("fourth");
                                            var get15pos = document.getElementById("loser15").innerHTML;
                                            var get16pos = document.getElementById("loser16").innerHTML;
                                            var get23pos = document.getElementById("loser23").innerHTML;
                                            if(get23pos == get15pos)
                                                {
                                                    fourthplacewinner.innerHTML = get16pos;
                                                }
                                            else
                                                {
                                                    fourthplacewinner.innerHTML = get15pos;
                                                }
                                        }
                                    else
                                        {
                                            fourthbox();
                                            var compar23 = document.getElementById("loser23").innerHTML;
                                            var topposition = document.getElementById("loser15").innerHTML;
                                            if(compar23 == topposition)
                                                {
                                                    var bottomposition = document.getElementById("loser16").innerHTML;
                                                    var topfighter = document.getElementById("fighter5");
                                                    topfighter.innerHTML = bottomposition;
                                                }
                                            else
                                                {
                                                    var topfighter = document.getElementById("fighter5");
                                                    topfighter.innerHTML = topposition;
                                                }

                                            var compare24 = document.getElementById("loser24").innerHTML;
                                            var downposition = document.getElementById("loser17").innerHTML;
                                            if(compare24 == downposition)
                                                {
                                                    var bottomdown = document.getElementById("loser18").innerHTML;
                                                    var bottomfighter = document.getElementById("fighter6");
                                                    bottomfighter.innerHTML = bottomdown;
                                                }
                                            else
                                                {
                                                    var bottomfighter = document.getElementById("fighter6");
                                                    bottomfighter.innerHTML = downposition;
                                                }   
                                        }
                                }
                            else
                                {
                                    if(nextfight132 == blank)
                                        {
                                            var placeloser25 = document.getElementById("loser25").innerHTML;
                                            var grab28 = document.getElementById("loser28");
                                            grab28.innerHTML = placeloser25;
                                            var take27 = document.getElementById("loser27").innerHTML;
                                            output3.innerHTML= take27;
                                            var take28 = document.getElementById("loser28").innerHTML;
                                            output4.innerHTML = take28;   
                                        }
                                    else
                                        {
                                            output3.innerHTML = nextfight131;
                                            output4.innerHTML = nextfight132;
                                        }
                                } 
                        }
                    else
                        {
                            var winnerft13 = document.getElementById("fighter4").innerHTML;
                            var placeloser27 = document.getElementById("loser27");
                            placeloser27.innerHTML = winnerft13;
                            var loserft13 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft13);
                            var nextfight131 = document.getElementById("loser25").innerHTML;
                            var nextfight132 = document.getElementById("loser26").innerHTML;
                            if(nextfight131 == blank)
                                {
                                    var secondplace = document.getElementById("second");
                                    secondplace.innerHTML = winnerft13;
                                    var thirdplace = document.getElementById("third");
                                    thirdplace.innerHTML = loserft13;
                                    //start here
                                    var bottomcomparepos = document.getElementById("loser18").innerHTML;
                                    if(bottomcomparepos == blank)
                                        {
                                            var fourthplacewinner = document.getElementById("fourth");
                                            var get15pos = document.getElementById("loser15").innerHTML;
                                            var get16pos = document.getElementById("loser16").innerHTML;
                                            var get23pos = document.getElementById("loser23").innerHTML;
                                            if(get23pos == get15pos)
                                                {
                                                    fourthplacewinner.innerHTML = get16pos;
                                                }
                                            else
                                                {
                                                    fourthplacewinner.innerHTML = get15pos;
                                                }
                                        }
                                    else
                                        {
                                            fourthbox();
                                            var compar23 = document.getElementById("loser23").innerHTML;
                                            var topposition = document.getElementById("loser15").innerHTML;
                                            if(compar23 == topposition)
                                                {
                                                    var bottomposition = document.getElementById("loser16").innerHTML;
                                                    var topfighter = document.getElementById("fighter5");
                                                    topfighter.innerHTML = bottomposition;
                                                }
                                            else
                                                {
                                                    var topfighter = document.getElementById("fighter5");
                                                    topfighter.innerHTML = topposition;
                                                }

                                            var compare24 = document.getElementById("loser24").innerHTML;
                                            var downposition = document.getElementById("loser17").innerHTML;
                                            if(compare24 == downposition)
                                                {
                                                    var bottomdown = document.getElementById("loser18").innerHTML;
                                                    var bottomfighter = document.getElementById("fighter6");
                                                    bottomfighter.innerHTML = bottomdown;
                                                }
                                            else
                                                {
                                                    var bottomfighter = document.getElementById("fighter6");
                                                    bottomfighter.innerHTML = downposition;
                                                }   
                                        }
                                }
                            else
                                {
                                    if(nextfight132 == blank)
                                        {
                                            var placeloser25 = document.getElementById("loser25").innerHTML;
                                            var grab28 = document.getElementById("loser28");
                                            grab28.innerHTML = placeloser25;
                                            var take27 = document.getElementById("loser27").innerHTML;
                                            output3.innerHTML= take27;
                                            var take28 = document.getElementById("loser28").innerHTML;
                                            output4.innerHTML = take28;   
                                        }
                                    else
                                        {
                                            output3.innerHTML = nextfight131;
                                            output4.innerHTML = nextfight132;
                                        }
                                }   
                        }
                }
            // fight14: loser25 26 last fight
            else if( compare3 == loser25 && compare4 == loser26)
                {
                    var fight141 = document.getElementById("score3").value;
                    var fight14val1 = parseInt(fight141);
                    var fight142 = document.getElementById("score4").value;
                    var fight14val2 = parseInt(fight142);  
                    if( fight14val1 > fight14val2)
                        {
                            var winnerft14 = document.getElementById("fighter3").innerHTML;
                            var placeloser28 = document.getElementById("loser28");
                            placeloser28.innerHTML = winnerft14;
                            var loserft14 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft14);
                            var nextfight141 = document.getElementById("loser27").innerHTML;
                            var nextfight142 = document.getElementById("loser28").innerHTML;
                            output3.innerHTML = nextfight141;
                            output4.innerHTML = nextfight142;
                        }
                    else
                        {
                            var winnerft14 = document.getElementById("fighter4").innerHTML;
                            var placeloser28 = document.getElementById("loser28");
                            placeloser28.innerHTML = winnerft14;
                            var loserft14 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft14);
                            var nextfight141 = document.getElementById("loser27").innerHTML;
                            var nextfight142 = document.getElementById("loser28").innerHTML;
                            output3.innerHTML = nextfight141;
                            output4.innerHTML = nextfight142;
                        }
                }
            //round4
            //fight15: loser27 28 last fight and go into loser bracket 
            else if(compare3 == loser27 && compare4 == loser28)
                {
                    var fight151 = document.getElementById("score3").value;
                    var fight15val1 = parseInt(fight151);
                    var fight152 = document.getElementById("score4").value;
                    var fight15val2 = parseInt(fight152);
                    if( fight15val1 > fight15val2)
                        {
                            var winnerft15 = document.getElementById("fighter3").innerHTML;
                            var placewinner = document.getElementById("second");
                            placewinner.innerHTML = winnerft15;
                            var placewinner3rd = document.getElementById("third");
                            var loserft15 = document.getElementById("fighter4").innerHTML;
                            placewinner3rd.innerHTML = loserft15;
                            
                            //fighting for fourth
                            var verybottom = document.getElementById("loser26").innerHTML;
                            if(verybottom == blank)
                                {
                                    var lastfourth = document.getElementById("fourth");
                                    var get27pos = document.getElementById("loser27").innerHTML;
                                    var get23pos = document.getElementById("loser23").innerHTML;
                                    var get24pos = document.getElementById("loser24").innerHTML;
                                    if(get27pos == get23pos)
                                        {
                                            lastfourth.innerHTML = get24pos;
                                        }
                                    else
                                        {
                                            lastfourth.innerHTML = get23pos;
                                        }
                                }
                            else
                                {
                                    fourthbox();
                                    var compare27 = document.getElementById("loser27").innerHTML;
                                    var toppart = document.getElementById("loser23").innerHTML;
                                    if(compare27 == toppart)
                                        {
                                            var bottompart = document.getElementById("loser24").innerHTML;
                                            var topfighter = document.getElementById("fighter5");
                                            topfighter.innerHTML = bottompart;
                                        }
                                    else
                                        {
                                            var topfighter = document.getElementById("fighter5");
                                            topfighter.innerHTML = toppart;
                                        }
                                    var compare28 = document.getElementById("loser28").innerHTML;
                                    var topup = document.getElementById("loser25").innerHTML;
                                    if(compare28 == topup)
                                        {
                                            var bottomdown = document.getElementById("loser26").innerHTML;
                                            var bottomfighter = document.getElementById("fighter6");
                                            bottomfighter.innerHTML = bottomdown;
                                        }
                                    else
                                        {
                                            var bottomfighter = document.getElementById("fighter6");
                                            bottomfighter.innerHTML = topup;
                                        }
                                    
                                }
                        }
                    else
                        {
                            var winnerft15 = document.getElementById("fighter4").innerHTML;
                            var placewinner = document.getElementById("second");
                            placewinner.innerHTML = winnerft15;
                            var placewinner3rd = document.getElementById("third");
                            var loserft15 = document.getElementById("fighter3").innerHTML;
                            placewinner3rd.innerHTML = loserft15;
                            
                            //fighting for fourth
                            var verybottom = document.getElementById("loser26").innerHTML;
                            if(verybottom == blank)
                                {
                                    var lastfourth = document.getElementById("fourth");
                                    var get27pos = document.getElementById("loser27").innerHTML;
                                    var get23pos = document.getElementById("loser23").innerHTML;
                                    var get24pos = document.getElementById("loser24").innerHTML;
                                    if(get27pos == get23pos)
                                        {
                                            lastfourth.innerHTML = get24pos;
                                        }
                                    else
                                        {
                                            lastfourth.innerHTML = get23pos;
                                        }
                                }
                            else
                                {
                                    fourthbox();
                                    var compare27 = document.getElementById("loser27").innerHTML;
                                    var toppart = document.getElementById("loser23").innerHTML;
                                    if(compare27 == toppart)
                                        {
                                            var bottompart = document.getElementById("loser24").innerHTML;
                                            var topfighter = document.getElementById("fighter5");
                                            topfighter.innerHTML = bottompart;
                                        }
                                    else
                                        {
                                            var topfighter = document.getElementById("fighter5");
                                            topfighter.innerHTML = toppart;
                                        }
                                    var compare28 = document.getElementById("loser28").innerHTML;
                                    var topup = document.getElementById("loser25").innerHTML;
                                    if(compare28 == topup)
                                        {
                                            var bottomdown = document.getElementById("loser26").innerHTML;
                                            var bottomfighter = document.getElementById("fighter6");
                                            bottomfighter.innerHTML = bottomdown;
                                        }
                                    else
                                        {
                                            var bottomfighter = document.getElementById("fighter6");
                                            bottomfighter.innerHTML = topup;
                                        }
                                    
                                }
                            
                        }
                }            
                else
                    {
                        alert("What is it doing");
                    }
    
}

function fourth(){
    var output5score = document.getElementById("score5").value;
    var score5 = parseInt(output5score);
    var output6score = document.getElementById("score6").value;
    var score6 = parseInt(output6score);
    if(score5 > score6)
        {
            var fourthwin = document.getElementById("fighter5").innerHTML;
            var fourthplace = document.getElementById("fourth");
            fourthplace.innerHTML = fourthwin;
        }
    else
        {
            var fourthwin = document.getElementById("fighter6").innerHTML;
            var fourthplace = document.getElementById("fourth");
            fourthplace.innerHTML = fourthwin;
        }
}
