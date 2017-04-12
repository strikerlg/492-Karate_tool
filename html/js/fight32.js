

//if players are greater than 16
function fight32(){
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
    //second branch
    var position30 = document.getElementById("pos30").innerHTML;
    var position31 = document.getElementById("pos31").innerHTML;
    var position32 = document.getElementById("pos32").innerHTML;
    var position33 = document.getElementById("pos33").innerHTML;
    var position34 = document.getElementById("pos34").innerHTML;
    var position35 = document.getElementById("pos35").innerHTML;
    var position36 = document.getElementById("pos36").innerHTML;
    var position37 = document.getElementById("pos37").innerHTML;
    var position38 = document.getElementById("pos38").innerHTML;
    var position39 = document.getElementById("pos39").innerHTML;
    var position40 = document.getElementById("pos40").innerHTML;
    var position41 = document.getElementById("pos41").innerHTML;
    var position42 = document.getElementById("pos42").innerHTML;
    var position43 = document.getElementById("pos43").innerHTML;
    var position44 = document.getElementById("pos44").innerHTML;
    var position45 = document.getElementById("pos45").innerHTML;
//           //round 2 have to compare both positions
    var position46 = document.getElementById("pos46").innerHTML;
    var position47 = document.getElementById("pos47").innerHTML;
    var position48 = document.getElementById("pos48").innerHTML;
    var position49 = document.getElementById("pos49").innerHTML;
    var position50 = document.getElementById("pos50").innerHTML;
    var position51 = document.getElementById("pos51").innerHTML;
    var position52 = document.getElementById("pos52").innerHTML;
    var position53 = document.getElementById("pos53").innerHTML;
//        //round 3
    var position54 = document.getElementById("pos54").innerHTML;
    var position55 = document.getElementById("pos55").innerHTML;
    var position56 = document.getElementById("pos56").innerHTML;
    var position57 = document.getElementById("pos57").innerHTML
//            //round 4
    var position58 = document.getElementById("pos58").innerHTML;
    var position59 = document.getElementById("pos59").innerHTML;
////     last round
    var position60 = document.getElementById("pos60").innerHTML;
    var position61 = document.getElementById("pos61").innerHTML;
    
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
                                clearboxes();
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
                                clearboxes();
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
                            var placepos61 = document.getElementById("pos61");
                            placepos61.innerHTML = winnerft15;
                            var loserft15 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft15);
                            var nextfight151 = document.getElementById("pos30").innerHTML;
                            var nextfight152 = document.getElementById("pos31").innerHTML;
                            if( nextfight152 == blank)
                                {
                                    var placepos30 = document.getElementById("pos30").innerHTML;
                                    var grab60 = document.getElementById("pos60");
                                    grab60.innerHTML = placepos30;
                                    var take60 = document.getElementById("pos60").innerHTML;
                                    output1.innerHTML= take60;
                                    var take61 = document.getElementById("pos61").innerHTML;
                                    output2.innerHTML = take61;
                                }
                            else
                                {
                                    output1.innerHTML = nextfight151;
                                    output2.innerHTML = nextfight152;
                                }
                        }
                    else
                        {
                            var winnerft15 = document.getElementById("fighter2").innerHTML;
                            var placepos61 = document.getElementById("pos61");
                            placepos61.innerHTML = winnerft15;
                            var loserft15 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft15);
                            var nextfight151 = document.getElementById("pos30").innerHTML;
                            var nextfight152 = document.getElementById("pos31").innerHTML;
                            if( nextfight152 == blank)
                                {
                                    var placepos30 = document.getElementById("pos30").innerHTML;
                                    var grab60 = document.getElementById("pos60");
                                    grab60.innerHTML = placepos30;
                                    var take60 = document.getElementById("pos60").innerHTML;
                                    output1.innerHTML= take60;
                                    var take61 = document.getElementById("pos61").innerHTML;
                                    output2.innerHTML = take61;
                                }
                            else
                                {
                                    output1.innerHTML = nextfight151;
                                    output2.innerHTML = nextfight152;
                                }
                        }
                }
    
            //next bracket
            //lower bracket rounds
            //round one
            //Fight 16: pos 30 31 //look at again
            else if(compare1 == position30 && compare2 == position31)
                {
                    var fight161 = document.getElementById("score1").value;
                    var fight16val1  = parseInt(fight161);
                    var fight162 = document.getElementById("score2").value;
                    var fight16val2 = parseInt(fight162);
                    if(fight16val1 > fight16val2)
                        {
                            var winnerft16 = document.getElementById("fighter1").innerHTML;
                            var placepos46 = document.getElementById("pos46");
                            placepos46.innerHTML = winnerft16;
                            var loserft16 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft16);
                            var nextfight161 = document.getElementById("pos32").innerHTML;
                            var nextfight162 = document.getElementById("pos33").innerHTML;
                            if(nextfight161 == blank)
                                {
                                    var grab60 = document.getElementById("pos60");
                                    grab60.innerHTML = winnerft16;
                                    var going60 = document.getElementById("pos60").innerHTML;
                                    var going61 = document.getElementById("pos61").innerHTML;
                                    output1.innerHTML = going60;
                                    output2.innerHTML = going61;
                                }
                            else
                            {
                                if(nextfight162 == blank)
                                    {
                                        var grab32 = document.getElementById("pos32").innerHTML;
                                        var place47 = document.getElementById("pos47");
                                        place47.innerHTML = grab32;
                                        var grab46round = document.getElementById("pos46").innerHTML;
                                        output1.innerHTML = grab46round;
                                        output2.innerHTML = grab32;
                                    }
                                else
                                    {
                                        output1.innerHTML = nextfight161;
                                        output2.innerHTML = nextfight162;
                                    }
                            }
                        }
                    else
                        {
                            var winnerft16 = document.getElementById("fighter2").innerHTML;
                            var placepos46 = document.getElementById("pos46");
                            placepos46.innerHTML = winnerft16;
                            var loserft16 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft16);
                            var nextfight161 = document.getElementById("pos32").innerHTML;
                            var nextfight162 = document.getElementById("pos33").innerHTML;
                            if(nextfight161 == blank)
                                {
                                    var grab60 = document.getElementById("pos60");
                                    grab60.innerHTML = winnerft16;
                                    var going60 = document.getElementById("pos60").innerHTML;
                                    var going61 = document.getElementById("pos61").innerHTML;
                                    output1.innerHTML = going60;
                                    output2.innerHTML = going61;
                                }
                            else
                            {
                                if(nextfight162 == blank)
                                    {
                                        var grab32 = document.getElementById("pos32").innerHTML;
                                        var place47 = document.getElementById("pos47");
                                        place47.innerHTML = grab32;
                                        var grab46round = document.getElementById("pos46").innerHTML;
                                        output1.innerHTML = grab46round;
                                        output2.innerHTML = grab32;
                                    }
                                else
                                    {
                                        output1.innerHTML = nextfight161;
                                        output2.innerHTML = nextfight162;
                                    }
                            }
                        }
                }
            //fight 17: pos 32 33 //look at again
            else if(compare1 == position32 && compare2 == position33)
                {
                    var fight171 = document.getElementById("score1").value;
                    var fight17val1  = parseInt(fight171);
                    var fight172 = document.getElementById("score2").value;
                    var fight17val2 = parseInt(fight172);
                    if( fight17val1 > fight17val2)
                        {
                            var winnerft17 = document.getElementById("fighter1").innerHTML;
                            var placepos47 = document.getElementById("pos47");
                            placepos47.innerHTML = winnerft17;
                            var loserft17 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft17);
                            var nextfight171 = document.getElementById("pos34").innerHTML;
                            var nextfight172 = document.getElementById("pos35").innerHTML;
                            if(nextfight171 == blank)
                                {
                                    var going46 = document.getElementById("pos46").innerHTML;
                                    var going47 = document.getElementById("pos47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight172 == blank)
                                        {
                                            var place47 = document.getElementById("pos47");
                                            place47.innerHTML = nextfight171;
                                            var grab46 = document.getElementById("pos46").innerHTML;
                                            var grab47 = document.getElementById("pos47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight171;
                                            output2.innerHTML = nextfight172;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft17 = document.getElementById("fighter2").innerHTML;
                            var placepos47 = document.getElementById("pos47");
                            placepos47.innerHTML = winnerft17;
                            var loserft17 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft17);
                            var nextfight171 = document.getElementById("pos34").innerHTML;
                            var nextfight172 = document.getElementById("pos35").innerHTML;
                            if(nextfight171 == blank)
                                {
                                    var going46 = document.getElementById("pos46").innerHTML;
                                    var going47 = document.getElementById("pos47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight172 == blank)
                                        {
                                            var place47 = document.getElementById("pos47");
                                            place47.innerHTML = nextfight171;
                                            var grab46 = document.getElementById("pos46").innerHTML;
                                            var grab47 = document.getElementById("pos47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight171;
                                            output2.innerHTML = nextfight172;
                                        }
                                }
                            
                        }
                }
            //fight 18: 34 35
            else if(compare1 == position34 && compare2 == position35)
                {
                    var fight181 = document.getElementById("score1").value;
                    var fight18val1  = parseInt(fight181);
                    var fight182 = document.getElementById("score2").value;
                    var fight18val2 = parseInt(fight182);
                    if( fight18val1 > fight18val2)
                        {
                            var winnerft18 = document.getElementById("fighter1").innerHTML;
                            var placepos48 = document.getElementById("pos48");
                            placepos48.innerHTML = winnerft18;
                            var loserft18 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft18);
                            var nextfight181 = document.getElementById("pos36").innerHTML;
                            var nextfight182 = document.getElementById("pos37").innerHTML;
                            if(nextfight181 == blank)
                                {
                                    var going46 = document.getElementById("pos46").innerHTML;
                                    var going47 = document.getElementById("pos47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight182 == blank)
                                        {
                                            var place48 = document.getElementById("pos48");
                                            place48.innerHTML = nextfight181;
                                            var grab46 = document.getElementById("pos46").innerHTML;
                                            var grab47 = document.getElementById("pos47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight181;
                                            output2.innerHTML = nextfight182;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft18 = document.getElementById("fighter2").innerHTML;
                            var placepos48 = document.getElementById("pos48");
                            placepos48.innerHTML = winnerft18;
                            var loserft18 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft18);
                            var nextfight181 = document.getElementById("pos36").innerHTML;
                            var nextfight182 = document.getElementById("pos37").innerHTML;
                            if(nextfight181 == blank)
                                {
                                    var going46 = document.getElementById("pos46").innerHTML;
                                    var going47 = document.getElementById("pos47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight182 == blank)
                                        {
                                            var place48 = document.getElementById("pos48");
                                            place48.innerHTML = nextfight181;
                                            var grab46 = document.getElementById("pos46").innerHTML;
                                            var grab47 = document.getElementById("pos47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight181;
                                            output2.innerHTML = nextfight182;
                                        }
                                }
                        }
                }
            //fight 19 36 37
            else if(compare1 == position36 && compare2 == position37)
                {
                    var fight191 = document.getElementById("score1").value;
                    var fight19val1  = parseInt(fight191);
                    var fight192 = document.getElementById("score2").value;
                    var fight19val2 = parseInt(fight192);
                    if( fight19val1 > fight19val2)
                        {
                            var winnerft19 = document.getElementById("fighter1").innerHTML;
                            var placepos49 = document.getElementById("pos49");
                            placepos49.innerHTML = winnerft19;
                            var loserft19 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft19);
                            var nextfight191 = document.getElementById("pos38").innerHTML;
                            var nextfight192 = document.getElementById("pos39").innerHTML;
                            if(nextfight191 == blank)
                                {
                                    var going46 = document.getElementById("pos46").innerHTML;
                                    var going47 = document.getElementById("pos47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight192 == blank)
                                        {
                                            var place49 = document.getElementById("pos49");
                                            place49.innerHTML = nextfight191;
                                            var grab46 = document.getElementById("pos46").innerHTML;
                                            var grab47 = document.getElementById("pos47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight191;
                                            output2.innerHTML = nextfight192;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft19 = document.getElementById("fighter2").innerHTML;
                            var placepos49 = document.getElementById("pos49");
                            placepos49.innerHTML = winnerft19;
                            var loserft19 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft19);
                            var nextfight191 = document.getElementById("pos38").innerHTML;
                            var nextfight192 = document.getElementById("pos39").innerHTML;
                            if(nextfight191 == blank)
                                {
                                    var going46 = document.getElementById("pos46").innerHTML;
                                    var going47 = document.getElementById("pos47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight192 == blank)
                                        {
                                            var place49 = document.getElementById("pos49");
                                            place49.innerHTML = nextfight191;
                                            var grab46 = document.getElementById("pos46").innerHTML;
                                            var grab47 = document.getElementById("pos47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight191;
                                            output2.innerHTML = nextfight192;
                                        }
                                }
                        }
                        
                }
            //fight 20 38 39
            else if(compare1 == position38 && compare2 == position39)
                {
                    var fight201 = document.getElementById("score1").value;
                    var fight20val1  = parseInt(fight201);
                    var fight202 = document.getElementById("score2").value;
                    var fight20val2 = parseInt(fight202);
                    if( fight20val1 > fight20val2)
                        {
                            var winnerft20 = document.getElementById("fighter1").innerHTML;
                            var placepos50 = document.getElementById("pos50");
                            placepos50.innerHTML = winnerft20;
                            var loserft20 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft20);
                            var nextfight201 = document.getElementById("pos40").innerHTML;
                            var nextfight202 = document.getElementById("pos41").innerHTML;
                            if(nextfight201 == blank)
                                {
                                    var going46 = document.getElementById("pos46").innerHTML;
                                    var going47 = document.getElementById("pos47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight202 == blank)
                                        {
                                            var place50 = document.getElementById("pos50");
                                            place50.innerHTML = nextfight201;
                                            var grab46 = document.getElementById("pos46").innerHTML;
                                            var grab47 = document.getElementById("pos47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight201;
                                            output2.innerHTML = nextfight202;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft20 = document.getElementById("fighter2").innerHTML;
                            var placepos50 = document.getElementById("pos50");
                            placepos50.innerHTML = winnerft20;
                            var loserft20 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft20);
                            var nextfight201 = document.getElementById("pos40").innerHTML;
                            var nextfight202 = document.getElementById("pos41").innerHTML;
                            if(nextfight201 == blank)
                                {
                                    var going46 = document.getElementById("pos46").innerHTML;
                                    var going47 = document.getElementById("pos47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight202 == blank)
                                        {
                                            var place50 = document.getElementById("pos50");
                                            place50.innerHTML = nextfight201;
                                            var grab46 = document.getElementById("pos46").innerHTML;
                                            var grab47 = document.getElementById("pos47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight201;
                                            output2.innerHTML = nextfight202;
                                        }
                                }
                        }
                }
            //fight 21 40 41
            else if(compare1 == position40 && compare2 == position41)
                {
                    var fight211 = document.getElementById("score1").value;
                    var fight21val1  = parseInt(fight211);
                    var fight212 = document.getElementById("score2").value;
                    var fight21val2 = parseInt(fight212);
                    if( fight21val1 > fight21val2)
                        {
                            var winnerft21 = document.getElementById("fighter1").innerHTML;
                            var placepos51 = document.getElementById("pos51");
                            placepos51.innerHTML = winnerft21;
                            var loserft21 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft21);
                            var nextfight211 = document.getElementById("pos42").innerHTML;
                            var nextfight212 = document.getElementById("pos43").innerHTML;
                            if(nextfight211 == blank)
                                {
                                    var going46 = document.getElementById("pos46").innerHTML;
                                    var going47 = document.getElementById("pos47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight212 == blank)
                                        {
                                            var place51 = document.getElementById("pos51");
                                            place51.innerHTML = nextfight211;
                                            var grab46 = document.getElementById("pos46").innerHTML;
                                            var grab47 = document.getElementById("pos47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight211;
                                            output2.innerHTML = nextfight212;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft21 = document.getElementById("fighter2").innerHTML;
                            var placepos51 = document.getElementById("pos51");
                            placepos51.innerHTML = winnerft21;
                            var loserft21 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft21);
                            var nextfight211 = document.getElementById("pos42").innerHTML;
                            var nextfight212 = document.getElementById("pos43").innerHTML;
                            if(nextfight211 == blank)
                                {
                                    var going46 = document.getElementById("pos46").innerHTML;
                                    var going47 = document.getElementById("pos47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight212 == blank)
                                        {
                                            var place51 = document.getElementById("pos51");
                                            place51.innerHTML = nextfight211;
                                            var grab46 = document.getElementById("pos46").innerHTML;
                                            var grab47 = document.getElementById("pos47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight211;
                                            output2.innerHTML = nextfight212;
                                        }
                                }
                        }
                }
            //fight 22 pos 42 43
            else if(compare1 == position42 && compare2 == position43)
                {
                    var fight221 = document.getElementById("score1").value;
                    var fight22val1  = parseInt(fight221);
                    var fight222 = document.getElementById("score2").value;
                    var fight22val2 = parseInt(fight222);
                    if( fight22val1 > fight22val2)
                        {
                            var winnerft22 = document.getElementById("fighter1").innerHTML;
                            var placepos52 = document.getElementById("pos52");
                            placepos52.innerHTML = winnerft22;
                            var loserft22 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft22);
                            var nextfight221 = document.getElementById("pos44").innerHTML;
                            var nextfight222 = document.getElementById("pos45").innerHTML;
                            if(nextfight221 == blank)
                                {
                                    var going46 = document.getElementById("pos46").innerHTML;
                                    var going47 = document.getElementById("pos47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight222 == blank)
                                        {
                                            var place52 = document.getElementById("pos52");
                                            place52.innerHTML = nextfight221;
                                            var grab46 = document.getElementById("pos46").innerHTML;
                                            var grab47 = document.getElementById("pos47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight221;
                                            output2.innerHTML = nextfight222;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft22 = document.getElementById("fighter2").innerHTML;
                            var placepos52 = document.getElementById("pos52");
                            placepos52.innerHTML = winnerft22;
                            var loserft22 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft22);
                            var nextfight221 = document.getElementById("pos44").innerHTML;
                            var nextfight222 = document.getElementById("pos45").innerHTML;
                            if(nextfight221 == blank)
                                {
                                    var going46 = document.getElementById("pos46").innerHTML;
                                    var going47 = document.getElementById("pos47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight222 == blank)
                                        {
                                            var place52 = document.getElementById("pos52");
                                            place52.innerHTML = nextfight221;
                                            var grab46 = document.getElementById("pos46").innerHTML;
                                            var grab47 = document.getElementById("pos47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight221;
                                            output2.innerHTML = nextfight222;
                                        }
                                }
                        }
                }
            //last fight of round1 2nd bracket
            //fight 23 pos 44 45
            else if(compare1 == position44 && compare2 == position45)
                {
                    var fight231 = document.getElementById("score1").value;
                    var fight23val1  = parseInt(fight231);
                    var fight232 = document.getElementById("score2").value;
                    var fight23val2 = parseInt(fight232);
                    if( fight23val1 > fight23val2)
                        {
                            var winnerft23 = document.getElementById("fighter1").innerHTML;
                            var placepos53 = document.getElementById("pos53");
                            placepos53.innerHTML = winnerft23;
                            var loserft23 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft23);
                            var nextfight231 = document.getElementById("pos46").innerHTML;
                            var nextfight232 = document.getElementById("pos47").innerHTML;
                            output1.innerHTML = nextfight231;
                            output2.innerHTML = nextfight232;
                        }
                    else
                        {
                            var winnerft23 = document.getElementById("fighter2").innerHTML;
                            var placepos53 = document.getElementById("pos53");
                            placepos53.innerHTML = winnerft23;
                            var loserft23 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft23);
                            var nextfight231 = document.getElementById("pos46").innerHTML;
                            var nextfight232 = document.getElementById("pos47").innerHTML;
                            output1.innerHTML = nextfight231;
                            output2.innerHTML = nextfight232;
                        }
                }
            //round2 2nd branch
            //fight 24 pos 46 47 ; special fight
            else if(compare1 == position46 && compare2 == position47)
                {
                    var fight241 = document.getElementById("score1").value;
                    var fight24val1  = parseInt(fight241);
                    var fight242 = document.getElementById("score2").value;
                    var fight24val2 = parseInt(fight242);
                    if( fight24val1 > fight24val2)
                        {
                            var winnerft24 = document.getElementById("fighter1").innerHTML;
                            var placepos54 = document.getElementById("pos54");
                            placepos54.innerHTML = winnerft24;
                            var loserft24 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft24);
                            var nextfight241 = document.getElementById("pos48").innerHTML;
                            var nextfight242 = document.getElementById("pos49").innerHTML;
                            if(nextfight241 == blank)
                                {
                                    var grab54 = document.getElementById("pos54").innerHTML;
                                    var grab60 = document.getElementById("pos60");
                                    grab60.innerHTML = grab54;
                                    var going61 = document.getElementById("pos61").innerHTML;
                                    var going60 = document.getElementById("pos60").innerHTML;
                                    output1.innerHTML = going60;
                                    output2.innerHTML = going61;
                                }
                            else
                                {
                                    if(nextfight242 == blank)
                                        {
                                            var place55 = document.getElementById("pos55");
                                            place55.innerHTML = nextfight241;
                                            var grab54 = document.getElementById("pos54").innerHTML;
                                            var grab55 = document.getElementById("pos55").innerHTML;
                                            output1.innerHTML = grab54;
                                            output2.innerHTML = grab55;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight241;
                                            output2.innerHTML = nextfight242;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft24 = document.getElementById("fighter2").innerHTML;
                            //sixty
                            var placepos54 = document.getElementById("pos54");
                            placepos54.innerHTML = winnerft24;
                            var loserft24 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft24);
                            var nextfight241 = document.getElementById("pos48").innerHTML;
                            var nextfight242 = document.getElementById("pos49").innerHTML;
                            if(nextfight241 == blank)
                                {
                                    var grab54 = document.getElementById("pos54").innerHTML;
                                    var grab60 = document.getElementById("pos60");
                                    grab60.innerHTML = grab54;
                                    var going61 = document.getElementById("pos61").innerHTML;
                                    var going60 = document.getElementById("pos60").innerHTML;
                                    output1.innerHTML = going60;
                                    output2.innerHTML = going61;
                                }
                            else
                                {
                                    if(nextfight242 == blank)
                                        {
                                            var place55 = document.getElementById("pos55");
                                            place55.innerHTML = nextfight241;
                                            var grab54 = document.getElementById("pos54").innerHTML;
                                            var grab55 = document.getElementById("pos55").innerHTML;
                                            output1.innerHTML = grab54;
                                            output2.innerHTML = grab55;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight241;
                                            output2.innerHTML = nextfight242;
                                        }
                                }
                        }
                }
            //fight 25 pos 48 49
            else if(compare1 == position48 && compare2 == position49)
                {
                    var fight251 = document.getElementById("score1").value;
                    var fight25val1  = parseInt(fight251);
                    var fight252 = document.getElementById("score2").value;
                    var fight25val2 = parseInt(fight252);
                    if( fight25val1 > fight25val2)
                        {
                            var winnerft25 = document.getElementById("fighter1").innerHTML;
                            var placepos55 = document.getElementById("pos55");
                            placepos55.innerHTML = winnerft25;
                            var loserft25 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft25);
                            var nextfight251 = document.getElementById("pos50").innerHTML;
                            var nextfight252 = document.getElementById("pos51").innerHTML;
                            if(nextfight251 == blank)
                                {
                                    var going54 = document.getElementById("pos54").innerHTML;
                                    var going55 = document.getElementById("pos55").innerHTML;
                                    output1.innerHTML = going54;
                                    output2.innerHTML = going55;
                                }
                            else
                                {
                                    if(nextfight252 == blank)
                                        {
                                            var place56 = document.getElementById("pos56");
                                            place56.innerHTML = nextfight251;
                                            var grab54 = document.getElementById("pos54").innerHTML;
                                            var grab55 = document.getElementById("pos55").innerHTML;
                                            output1.innerHTML = grab54;
                                            output2.innerHTML = grab55;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight251;
                                            output2.innerHTML = nextfight252;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft25 = document.getElementById("fighter2").innerHTML;
                            var placepos55 = document.getElementById("pos55");
                            placepos55.innerHTML = winnerft25;
                            var loserft25 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft25);
                            var nextfight251 = document.getElementById("pos50").innerHTML;
                            var nextfight252 = document.getElementById("pos51").innerHTML;
                            if(nextfight251 == blank)
                                {
                                    var going54 = document.getElementById("pos54").innerHTML;
                                    var going55 = document.getElementById("pos55").innerHTML;
                                    output1.innerHTML = going54;
                                    output2.innerHTML = going55;
                                }
                            else
                                {
                                    if(nextfight252 == blank)
                                        {
                                            var place56 = document.getElementById("pos56");
                                            place56.innerHTML = nextfight251;
                                            var grab54 = document.getElementById("pos54").innerHTML;
                                            var grab55 = document.getElementById("pos55").innerHTML;
                                            output1.innerHTML = grab54;
                                            output2.innerHTML = grab55;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight251;
                                            output2.innerHTML = nextfight252;
                                        }
                                }
                        }
                }
            //fight 26 pos 50 51
            else if(compare1 == position50 && compare2 == position51)
                {
                    var fight261 = document.getElementById("score1").value;
                    var fight26val1  = parseInt(fight261);
                    var fight262 = document.getElementById("score2").value;
                    var fight26val2 = parseInt(fight262);
                    if( fight26val1 > fight26val2)
                        {
                            var winnerft26 = document.getElementById("fighter1").innerHTML;
                            var placepos56 = document.getElementById("pos56");
                            placepos56.innerHTML = winnerft26;
                            var loserft26 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft26);
                            var nextfight261 = document.getElementById("pos52").innerHTML;
                            var nextfight262 = document.getElementById("pos53").innerHTML;
                            if(nextfight261 == blank)
                                {
                                    var going54 = document.getElementById("pos54").innerHTML;
                                    var going55 = document.getElementById("pos55").innerHTML;
                                    output1.innerHTML = going54;
                                    output2.innerHTML = going55;
                                }
                            else
                                {
                                    if(nextfight262 == blank)
                                        {
                                            var place57 = document.getElementById("pos57");
                                            place57.innerHTML = nextfight261;
                                            var grab54 = document.getElementById("pos54").innerHTML;
                                            var grab55 = document.getElementById("pos55").innerHTML;
                                            output1.innerHTML = grab54;
                                            output2.innerHTML = grab55;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight261;
                                            output2.innerHTML = nextfight262;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft26 = document.getElementById("fighter1").innerHTML;
                            var placepos56 = document.getElementById("pos56");
                            placepos56.innerHTML = winnerft26;
                            var loserft26 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft26);
                            var nextfight261 = document.getElementById("pos52").innerHTML;
                            var nextfight262 = document.getElementById("pos53").innerHTML;
                            if(nextfight261 == blank)
                                {
                                    var going54 = document.getElementById("pos54").innerHTML;
                                    var going55 = document.getElementById("pos55").innerHTML;
                                    output1.innerHTML = going54;
                                    output2.innerHTML = going55;
                                }
                            else
                                {
                                    if(nextfight262 == blank)
                                        {
                                            var place57 = document.getElementById("pos57");
                                            place57.innerHTML = nextfight261;
                                            var grab54 = document.getElementById("pos54").innerHTML;
                                            var grab55 = document.getElementById("pos55").innerHTML;
                                            output1.innerHTML = grab54;
                                            output2.innerHTML = grab55;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight261;
                                            output2.innerHTML = nextfight262;
                                        }
                                }
                        }
                }
            //last fight round 2
            //fight 27 52 53
            else if(compare1 == position52 && compare2 == positoin53)
                {
                    var fight271 = document.getElementById("score1").value;
                    var fight27val1  = parseInt(fight271);
                    var fight272 = document.getElementById("score2").value;
                    var fight27val2 = parseInt(fight272);
                    if( fight27val1 > fight27val2)
                        {
                            var winnerft27 = document.getElementById("fighter1").innerHTML;
                            var placepos57 = document.getElementById("pos57");
                            placepos57.innerHTML = winnerft27;
                            var loserft27 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft27);
                            var nextfight271 = document.getElementById("pos54").innerHTML;
                            var nextfight272 = document.getElementById("pos55").innerHTML;
                            output1.innerHTML = nextfight271;
                            output2.innerHTML = nextfight272;
                        }
                    else
                        {
                            var winnerft27 = document.getElementById("fighter2").innerHTML;
                            var placepos57 = document.getElementById("pos57");
                            placepos57.innerHTML = winnerft27;
                            var loserft27 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft27);
                            var nextfight271 = document.getElementById("pos54").innerHTML;
                            var nextfight272 = document.getElementById("pos55").innerHTML;
                            output1.innerHTML = nextfight271;
                            output2.innerHTML = nextfight272;
                        }
                }
            //round 3
            //fight 28 54 55 special
            else if(compare1 == position54 && compare2 == position55)
                {
                    var fight281 = document.getElementById("score1").value;
                    var fight28val1  = parseInt(fight281);
                    var fight282 = document.getElementById("score2").value;
                    var fight28val2 = parseInt(fight282);
                    if( fight28val1 > fight28val2)
                        {
                            var winnerft28 = document.getElementById("fighter1").innerHTML;
                            var placepos58 = document.getElementById("pos58");
                            placepos58.innerHTML = winnerft28;
                            var loserft28 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft28);
                            var nextfight281 = document.getElementById("pos56").innerHTML;
                            var nextfight282 = document.getElementById("pos57").innerHTML;
                            if(nextfight261 == blank)
                                {
                                    
                                    var grab58 = document.getElementById("pos58").innerHTML;
                                    var grab60 = document.getElementById("pos60");
                                    grab60.innerHTML = grab58;
                                    var going61 = document.getElementById("pos61").innerHTML;
                                    var going60 = document.getElementById("pos60").innerHTML;
                                    output1.innerHTML = going60;
                                    output2.innerHTML = going61;
                                }
                            else
                                {
                                    if(nextfight262 == blank)
                                        {
                                            var place59 = document.getElementById("pos59");
                                            place59.innerHTML = nextfight281;
                                            var grab58 = document.getElementById("pos58").innerHTML;
                                            var grab59 = document.getElementById("pos59").innerHTML;
                                            output1.innerHTML = grab58;
                                            output2.innerHTML = grab59;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight281;
                                            output2.innerHTML = nextfight282;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft28 = document.getElementById("fighter2").innerHTML;
                            var placepos58 = document.getElementById("pos58");
                            placepos58.innerHTML = winnerft28;
                            var loserft28 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft28);
                            var nextfight281 = document.getElementById("pos56").innerHTML;
                            var nextfight282 = document.getElementById("pos57").innerHTML;
                            if(nextfight261 == blank)
                                {
                                    
                                    var grab58 = document.getElementById("pos58").innerHTML;
                                    var grab60 = document.getElementById("pos60");
                                    grab60.innerHTML = grab58;
                                    var going61 = document.getElementById("pos61").innerHTML;
                                    var going60 = document.getElementById("pos60").innerHTML;
                                    output1.innerHTML = going60;
                                    output2.innerHTML = going61;
                                }
                            else
                                {
                                    if(nextfight262 == blank)
                                        {
                                            var place59 = document.getElementById("pos59");
                                            place59.innerHTML = nextfight281;
                                            var grab58 = document.getElementById("pos58").innerHTML;
                                            var grab59 = document.getElementById("pos59").innerHTML;
                                            output1.innerHTML = grab58;
                                            output2.innerHTML = grab59;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight281;
                                            output2.innerHTML = nextfight282;
                                        }
                                }
                        }
                }
            //round 3 last fight 2nd branch
            //fight 29 pos 56 57
            else if (compare1 == position56 && compare2 == position57)
                {
                    var fight291 = document.getElementById("score1").value;
                    var fight29val1  = parseInt(fight291);
                    var fight292 = document.getElementById("score2").value;
                    var fight29val2 = parseInt(fight292);
                    if(fight29val1 > fight29val2)
                        {
                            var winnerft29 = document.getElementById("fighter1").innerHTML;
                            var placepos59 = document.getElementById("pos59");
                            placepos59.innerHTML = winnerft29;
                            var loserft29 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft29);
                            var nextfight291 = document.getElementById("pos58").innerHTML;
                            var nextfight292 = document.getElementById("pos59").innerHTML;
                            output1.innerHTML = nextfight291;
                            output2.innerHTML = nextfight292;
                        }
                    else
                        {
                            var winnerft29 = document.getElementById("fighter2").innerHTML;
                            var placepos59 = document.getElementById("pos59");
                            placepos59.innerHTML = winnerft29;
                            var loserft29 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft29);
                            var nextfight291 = document.getElementById("pos58").innerHTML;
                            var nextfight292 = document.getElementById("pos59").innerHTML;
                            output1.innerHTML = nextfight291;
                            output2.innerHTML = nextfight292;
                        }
                }
            //round 4
            //fight 30 58 59
            else if(compare1 == position58 && compare2 == position59)
                {
                    var fight301 = document.getElementById("score1").value;
                    var fight30val1  = parseInt(fight301);
                    var fight302 = document.getElementById("score2").value;
                    var fight30val2 = parseInt(fight302);
                    if(fight30val1 > fight30val2)
                        {
                            var winnerft30 = document.getElementById("fighter1").innerHTML;
                            var placepos60 = document.getElementById("pos60");
                            placepos60.innerHTML = winnerft30;
                            var loserft30 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft30);
                            var nextfight301 = document.getElementById("pos60").innerHTML;
                            var nextfight302 = document.getElementById("pos61").innerHTML;
                            output1.innerHTML = nextfight301;
                            output2.innerHTML = nextfight302;
                        }
                    else
                        {
                            var winnerft30 = document.getElementById("fighter1").innerHTML;
                            var placepos60 = document.getElementById("pos60");
                            placepos60.innerHTML = winnerft30;
                            var loserft30 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft30);
                            var nextfight301 = document.getElementById("pos60").innerHTML;
                            var nextfight302 = document.getElementById("pos61").innerHTML;
                            output1.innerHTML = nextfight301;
                            output2.innerHTML = nextfight302;
                        }
                }
//            round5 final before loser bracket
//            fight 31 pos 60 61
            else if(compare1 == position60 && compare2 == position61)
                {
                    var fight311 = document.getElementById("score1").value;
                    var fight31val1  = parseInt(fight311);
                    var fight312 = document.getElementById("score2").value;
                    var fight31val2 = parseInt(fight312);
                    if(fight31val1 > fight31val2)
                        {
                            var winnerft31 = document.getElementById("fighter1").innerHTML;
                            var firstplace = document.getElementById("first");
                            firstplace.innerHTML = winnerft31;
                            var loserft31 = document.getElementById("fighter2").innerHTML;
                            loserstorage.push(loserft31);
                            loser32map();
                        }
                    else
                        {
                            var winnerft31 = document.getElementById("fighter2").innerHTML;
                            var firstplace = document.getElementById("first");
                            firstplace.innerHTML = winnerft31;
                            var loserft31 = document.getElementById("fighter1").innerHTML;
                            loserstorage.push(loserft31);
                            loser32map();  
                        }
                }
            else
                    {
                        alert("What is it doing");
                    }     
}

function loser32map()
{
    var loser32area = document.getElementById("loser");
    
    var verylarge = "<main><ul class='round round-1'><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser0'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='loser1'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser2'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='loser3'></li><li class='spacer'>&nbsp;</li><li class='game game-top' id='loser4'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='loser5'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser6'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='loser7'></li><li class='spacer'>&nbsp;</li> <li class='game game-top winner' id='loser8'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='loser9'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser10'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom ' id='loser11'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser12'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='loser13'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser14'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='loser15'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-2'><li class='spacer'></li><li class='game game-top winner' id='loser16'></li><li class='game game-spacer'></li><li class='game game-bottom ' id='loser17'></li><li class='spacer'></li><li class='game game-top winner' id='loser18'></li><li class='game game-spacer'></li><li class='game game-bottom ' id='loser19'></li><li class='spacer'>&nbsp;</li><li class='game game-top ' id='loser20'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='loser21'></li><li class='spacer'>&nbsp;</li><li class='game game-top ' id='loser22'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='loser23'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-3'><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser24'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom ' id='loser25'></li><li class='spacer'>&nbsp;</li><li class='game game-top ' id='loser26'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='loser27'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-4'><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser28'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom ' id='loser29'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-5'><li class='spacer'></li><li class='game game-top' id='loser61'></li><li class ='game game-spacer'>&nbsp;</li></ul></main><main><ul class='round round-1'><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser30'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='loser31'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser32'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='loser33'></li><li class='spacer'>&nbsp;</li><li class='game game-top' id='loser34'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='loser35'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser36'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='loser37'></li><li class='spacer'>&nbsp;</li> <li class='game game-top winner' id='loser38'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='loser39'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser40'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom ' id='loser41'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser42'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='loser43'></li><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser44'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom' id='loser45'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-2'><li class='spacer'></li><li class='game game-top winner' id='loser46'></li><li class='game game-spacer'></li><li class='game game-bottom ' id='loser47'></li><li class='spacer'></li><li class='game game-top winner' id='loser48'></li><li class='game game-spacer'></li><li class='game game-bottom ' id='loser49'></li><li class='spacer'>&nbsp;</li><li class='game game-top ' id='loser50'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='loser51'></li><li class='spacer'>&nbsp;</li><li class='game game-top ' id='loser52'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='loser53'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-3'><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser54'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom ' id='loser55'></li><li class='spacer'>&nbsp;</li><li class='game game-top ' id='loser56'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom winner' id='loser57'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-4'><li class='spacer'>&nbsp;</li><li class='game game-top winner' id='loser58'></li><li class='game game-spacer'>&nbsp;</li><li class='game game-bottom ' id='loser59'></li><li class='spacer'>&nbsp;</li></ul><ul class='round round-5'><li class ='game game-spacer'>&nbsp;</li><li class='game game-top' id='loser60'></li><li class='spacer'>&nbsp;</li></ul></main>";
    
    loser32area.innerHTML = verylarge;
    loser32layout();
    
}


function loser32layout()
{
    
    
    var losers = document.getElementById("contestantvalue").value;
	var losernumber = parseInt(losers);
    var valloser = losernumber - 1;
    
    //maybe shuffle
    for(var loserposition = 0; loserposition < 16; ++loserposition)
        {
            var loserjail = loserstorage[loserposition];
            var loserbuild = document.getElementById('loser'+ loserposition);
            loserbuild.innerHTML = loserjail;
        }
    
    var increase = 30;
    for(var nextpos = 16; nextpos < valloser; ++nextpos)
        {
            var storage = loserstorage[nextpos];
            var create = document.getElementById('loser'+increase);
            create.innerHTML = storage;
            ++increase;
        }
    loser32box();
}


function loser32box()
{
    var fightarea = document.getElementById("fightboxarea");
    fightarea.innerHTML = "";
    var loserboxarea = document.getElementById("loserbox");
    var average = "<fieldset><legend>Second Fight</legend><output id='fighter3'></output><input type='number' id='score3' min='0' value='0'><br><output id='fighter4'></output><input type='number' id='score4' min='0' value='0'><button onclick='loser32()'>Score</button></fieldset>";
    loserboxarea.innerHTML = average;
    
    var value1 = document.getElementById("loser0").innerHTML;
    var value2 = document.getElementById("loser1").innerHTML;
    var output1 = document.getElementById("fighter3");
    var output2 = document.getElementById("fighter4");
    output1.innerHTML = value1;
    output2.innerHTML = value2;
}



function loser32(){
    
    var output1 = document.getElementById("fighter3");
    var output2 = document.getElementById("fighter4");
    //keeps track of the rounds
    var compare1 = document.getElementById("fighter3").innerHTML;
    var compare2 = document.getElementById("fighter4").innerHTML;
    var blank = "";
    //first round
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
    var loser15 = document.getElementById("loser14").innerHTML;
    var lasloser = document.getElementById("loser15").innerHTML;
//            //round 2 have to compare both losers
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
    var loser29 = document.getElementById("loser29").innerHTML;
    //second branch
    var loser30 = document.getElementById("loser30").innerHTML;
    var loser31 = document.getElementById("loser31").innerHTML;
    var loser32 = document.getElementById("loser32").innerHTML;
    var loser33 = document.getElementById("loser33").innerHTML;
    var loser34 = document.getElementById("loser34").innerHTML;
    var loser35 = document.getElementById("loser35").innerHTML;
    var loser36 = document.getElementById("loser36").innerHTML;
    var loser37 = document.getElementById("loser37").innerHTML;
    var loser38 = document.getElementById("loser38").innerHTML;
    var loser39 = document.getElementById("loser39").innerHTML;
    var loser40 = document.getElementById("loser40").innerHTML;
    var loser41 = document.getElementById("loser41").innerHTML;
    var loser42 = document.getElementById("loser42").innerHTML;
    var loser43 = document.getElementById("loser43").innerHTML;
    var loser44 = document.getElementById("loser44").innerHTML;
    var loser45 = document.getElementById("loser45").innerHTML;
//           //round 2 have to compare both losers
    var loser46 = document.getElementById("loser46").innerHTML;
    var loser47 = document.getElementById("loser47").innerHTML;
    var loser48 = document.getElementById("loser48").innerHTML;
    var loser49 = document.getElementById("loser49").innerHTML;
    var loser50 = document.getElementById("loser50").innerHTML;
    var loser51 = document.getElementById("loser51").innerHTML;
    var loser52 = document.getElementById("loser52").innerHTML;
    var loser53 = document.getElementById("loser53").innerHTML;
//        //round 3
    var loser54 = document.getElementById("loser54").innerHTML;
    var loser55 = document.getElementById("loser55").innerHTML;
    var loser56 = document.getElementById("loser56").innerHTML;
    var loser57 = document.getElementById("loser57").innerHTML
//            //round 4
    var loser58 = document.getElementById("loser58").innerHTML;
    var loser59 = document.getElementById("loser59").innerHTML;
////     last round
    var loser60 = document.getElementById("loser60").innerHTML;
    var loser61 = document.getElementById("loser61").innerHTML;
    
    //first fight: loser0 loser1; special
            if(compare1 == loser1 && compare2 == loser2)
                {
                    var firstfightval1 = document.getElementById("score3").value;
                    var fightval1 = parseInt(firstfightval1);
                    var firstfightval2 = document.getElementById("score4").value;
                    var fightval2 = parseInt(firstfightval2);
                    
                    if( fightval1 > fightval2)
                        {
                            var winnerft1 = document.getElementById("fighter3").innerHTML;
                            var placeloser16 = document.getElementById("loser16");
                            placeloser16.innerHTML = winnerft1;
                            var loserft1 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft1);
                            var grabnext1 = document.getElementById("loser2").innerHTML;
                            var grabnext2 = document.getElementById("loser3").innerHTML;
                            //win automatically if no others
                            if(grabnext1 === blank)
                            {
                                var firstplace = document.getElementById("loser16").innerHTML;
                                var secondplace = document.getElementById("loser1").innerHTML;
                                var winner = document.getElementById("first");
                                var winner2 = document.getElementById("second");
                                winner.innerHTML = firstplace;
                                winner2.innerHTML = secondplace;
                                clearboxes();
                            }
                            else
                            {
                                if(grabnext2 == blank)
                                    {
                                        var placeloser2 = document.getElementById("loser2").innerHTML;
                                        var grab17 = document.getElementById("loser17");
                                        grab17.innerHTML = placeloser2;
                                        var take16 = document.getElementById("loser16").innerHTML;
                                        output1.innerHTML= take16;
                                        var take17 = document.getElementById("loser17").innerHTML;
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
                            var winnerft1 = document.getElementById("fighter4").innerHTML;
                            var placeloser16 = document.getElementById("loser16");
                            placeloser16.innerHTML = winnerft1;
                            var loserft1 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft1);
                            var grabnext1 = document.getElementById("loser2").innerHTML;
                            var grabnext2 = document.getElementById("loser3").innerHTML;
                            output1.innerHTML = grabnext1;
                            output2.innerHTML = grabnext2;
                             if(grabnext1 === blank)
                            {
                                var firstplace = document.getElementById("loser16").innerHTML;
                                var secondplace = document.getElementById("loser0").innerHTML;
                                var winner = document.getElementById("first");
                                var winner2 = document.getElementById("second");
                                winner = firstplace;
                                winner2 = secondplace;
                                clearboxes();
                            }
                            if(grabnext2 == blank)
                                    {
                                        var placeloser2 = document.getElementById("loser2").innerHTML;
                                        var grab17 = document.getElementById("loser17");
                                        grab17.innerHTML = placeloser2;
                                        var take16 = document.getElementById("loser16").innerHTML;
                                        output1.innerHTML= take16;
                                        var take17 = document.getElementById("loser17").innerHTML;
                                        output2.innerHTML = take17;
                                    }
                                else
                                    {
                                        output1.innerHTML = grabnext1;
                                        output2.innerHTML = grabnext2;   
                                    }
                        }
                }
            //fight 2: loser2 loser3  not finished empty next round  
            else if (compare1 == loser3 &&  compare2 == loser4)
                {
                    var secondfightval1 = document.getElementById("score3").value;
                    var fight2val1 = parseInt(secondfightval1);
                    var secondfightval2 = document.getElementById("score4").value;
                    var fight2val2 = parseInt(secondfightval2);

                    if( fight2val1 > fight2val2)
                        {
                            var winnerft2 = document.getElementById("fighter3").innerHTML;
                            var placeloser17 = document.getElementById("loser17");
                            placeloser17.innerHTML = winnerft2;
                            var loserft2 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft2);
                            var grabnext3 = document.getElementById("loser4").innerHTML;
                            var grabnext4 = document.getElementById("loser5").innerHTML;
                            if(grabnext1 === blank)
                                {
                                    var grabloser16 = document.getElementById("loser16").innerHTML;
                                    var grabloser17 = document.getElementById("loser17").innerHTML;
                                    output1.innerHTML = grabloser16;
                                    output2.innerHTML = grabloser17;
                                }
                            else
                                {
                                    if(grabnext4 == blank)
                                        {
                                            var placeloser4 = document.getElementById("loser4").innerHTML;
                                            var grab18 = document.getElementById("loser18");
                                            grab18.innerHTML = placeloser4;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("loser17").innerHTML;
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
                            var winnerft2 = document.getElementById("fighter4").innerHTML;
                            var placeloser17 = document.getElementById("loser17");
                            placeloser17.innerHTML = winnerft2;
                            var loserft1 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft1);
                            var grabnext3 = document.getElementById("loser4").innerHTML;
                            var grabnext4 = document.getElementById("loser5").innerHTML;
                            if(grabnext1 === blank)
                                {
                                    var grabloser16 = document.getElementById("loser16").innerHTML;
                                    var grabloser17 = document.getElementById("loser17").innerHTML;
                                    output1.innerHTML = grabloser16;
                                    output2.innerHTML = grabloser17;
                                }
                            else
                                {
                                    if(grabnext4 == blank)
                                        {
                                            var placeloser4 = document.getElementById("loser4").innerHTML;
                                            var grab18 = document.getElementById("loser18");
                                            grab18.innerHTML = placeloser4;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("loser17").innerHTML;
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
//            fight 3: loser4 loser5 
            else if(compare1 == loser5 && compare2 == loser6)
                {
                    var fightvalue1 = document.getElementById("score3").value;
                    var value1 = parseInt(fightvalue1);
                    var fightvalue2 = document.getElementById("score4").value;
                    var value2 = parseInt(fightvalue2);
                    if(value1 > value2)
                        {
                            var winnerft3 = document.getElementById("fighter3").innerHTML;
                            var placeloser18 = document.getElementById("loser18");
                            placeloser18.innerHTML = winnerft3;
                            var loserft3 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft3);
                            var nextfight31 = document.getElementById("loser6").innerHTML;
                            var nextfight32 = document.getElementById("loser7").innerHTML;
                            if(nextfight31 == blank)
                                {
                                    var grab16 = document.getElementById("loser16").innerHTML;
                                    var grab17 = document.getElementById("loser17").innerHTML;
                                    output1.innerHTML = grab16;
                                    output2.innerHTML = grab17;
                                }
                            else
                                {
                                    if(nextfight32 == blank)
                                        {
                                            var placeloser6 = document.getElementById("loser6").innerHTML;
                                            var grab19 = document.getElementById("loser19");
                                            grab19.innerHTML = placeloser6;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("loser17").innerHTML;
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
                            var winnerft3 = document.getElementById("fighter4").innerHTML;
                            var placeloser18 = document.getElementById("loser18");
                            placeloser18.innerHTML = winnerft3;
                            var loserft3 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft3);
                            var nextfight31 = document.getElementById("loser6").innerHTML;
                            var nextfight32 = document.getElementById("loser7").innerHTML;
                            if(nextfight31 == blank)
                                {
                                    var grab16 = document.getElementById("loser16").innerHTML;
                                    var grab17 = document.getElementById("loser17").innerHTML;
                                    output1.innerHTML = grab16;
                                    output2.innerHTML = grab17;
                                }
                            else
                                {
                                    if(nextfight32 == blank)
                                        {
                                            var placeloser6 = document.getElementById("loser6").innerHTML;
                                            var grab19 = document.getElementById("loser19");
                                            grab19.innerHTML = placeloser6;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("loser17").innerHTML;
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
            //fight 4: loser6 loser7 
            else if(compare1 == loser7 && compare2 == loser8)
                {
                    var fight41 = document.getElementById("score3").value;
                    var fight4val1  = parseInt(fight41);
                    var fight42 = document.getElementById("score4").value;
                    var fight4val2 = parseInt(fight42);
                    if(fight4val1 > fight4val2)
                        {
                            var winnerft4 = document.getElementById("fighter3").innerHTML;
                            var placeloser19 = document.getElementById("loser19");
                            placeloser19.innerHTML = winnerft4;
                            var loserft4 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft4);
                            var nextfight41 = document.getElementById("loser8").innerHTML;
                            var nextfight42 = document.getElementById("loser9").innerHTML;
                            if(nextfight41 === blank)
                                {
                                    var grab16 = document.getElementById("loser16").innerHTML;
                                    var grab17 = document.getElementById("loser17").innerHTML;
                                    output1.innerHTML = grab16;
                                    output2.innerHTML = grab17;
                                }
                            else
                                {
                                    if(nextfight42 == blank)
                                        {
                                            var placeloser8 = document.getElementById("loser8").innerHTML;
                                            var grab20 = document.getElementById("loser20");
                                            grab20.innerHTML = placeloser8;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("loser17").innerHTML;
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
                            var winnerft4 = document.getElementById("fighter4").innerHTML;
                            var placeloser19 = document.getElementById("loser19");
                            placeloser19.innerHTML = winnerft4;
                            var loserft4 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft4);
                            var nextfight41 = document.getElementById("loser8").innerHTML;
                            var nextfight42 = document.getElementById("loser9").innerHTML;
                            if(nextfight41 === blank)
                                {
                                    var grab16 = document.getElementById("loser16").innerHTML;
                                    var grab17 = document.getElementById("loser17").innerHTML;
                                    output1.innerHTML = grab16;
                                    output2.innerHTML = grab17;
                                }
                            else
                                {
                                    if(nextfight42 == blank)
                                        {
                                            var placeloser8 = document.getElementById("loser8").innerHTML;
                                            var grab20 = document.getElementById("loser20");
                                            grab20.innerHTML = placeloser8;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("loser17").innerHTML;
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
            //fight 5: loser8 loser9
            else if(compare1 == loser9 && compare2 == loser10)
                {
                    var fight51 = document.getElementById("score3").value;
                    var fight5val1 = parseInt(fight51);
                    var fight52 = document.getElementById("score4").value;
                    var fight5val2 = parseInt(fight52);
                    if(fight5val1 > fight5val2)
                        {
                            //change variables
                            var winnerft5 = document.getElementById("fighter3").innerHTML;
                            var placeloser20 = document.getElementById("loser20");
                            placeloser20.innerHTML = winnerft5;
                            var loserft5 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft5);
                            var nextfight51 = document.getElementById("loser10").innerHTML;
                            var nextfight52 = document.getElementById("loser11").innerHTML;
                            if(nextfight51 == blank)
                                {
                                    var go16 = document.getElementById("loser16").innerHTML;
                                    var go17 = document.getElementById("loser17").innerHTML;
                                    output1.innerHTML = go16;
                                    output2.innerHTML = go17;
                                }
                            else
                                {
                                    if( nextfight52 == blank)
                                        {
                                            var placeloser10 = document.getElementById("loser10").innerHTML;
                                            var grab21 = document.getElementById("loser21");
                                            grab21.innerHTML = placeloser10;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("loser17").innerHTML;
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
                            var winnerft5 = document.getElementById("fighter4").innerHTML;
                            var placeloser20 = document.getElementById("loser20");
                            placeloser20.innerHTML = winnerft5;
                            var loserft5 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft5);
                            var nextfight51 = document.getElementById("loser10").innerHTML;
                            var nextfight52 = document.getElementById("loser11").innerHTML;
                            if(nextfight51 === blank)
                                {
                                    var go16 = document.getElementById("loser16").innerHTML;
                                    var go17 = document.getElementById("loser17").innerHTML;
                                    output1.innerHTML = gob16;
                                    output2.innerHTML = go17;
                                }
                            else
                                {
                                    if( nextfight52 == blank)
                                        {
                                            var placeloser10 = document.getElementById("loser10").innerHTML;
                                            var grab21 = document.getElementById("loser21");
                                            grab21.innerHTML = placeloser10;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("loser17").innerHTML;
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
            //fight 6: loser10 loser11
            else if(compare1 == loser11 && compare2 == loser12)
                {
                    var fight61 = document.getElementById("score3").value;
                    var fight6val1 = parseInt(fight61);
                    var fight62 = document.getElementById("score4").value;
                    var fight6val2 = parseInt(fight62);
                    if(fight6val1 > fight6val2)
                        {
                         //change variables
                            var winnerft6 = document.getElementById("fighter3").innerHTML;
                            var placeloser21 = document.getElementById("loser21");
                            placeloser21.innerHTML = winnerft6;
                            var loserft6 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft6);
                            var nextfight61 = document.getElementById("loser12").innerHTML;
                            var nextfight62 = document.getElementById("loser13").innerHTML;
                            if(nextfight61 === blank)
                                {
                                    var going16 = document.getElementById("loser16").innerHTML;
                                    var going17 = document.getElementById("loser17").innerHTML;
                                    output1.innerHTML = grab16;
                                    output2.innerHTML = grab17;
                                }
                            else
                                {
                                    if(nextfight62 == blank)
                                        {
                                            var placeloser12 = document.getElementById("loser12").innerHTML;
                                            var grab22 = document.getElementById("loser22");
                                            grab22.innerHTML = placeloser12;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("loser17").innerHTML;
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
                             var winnerft6 = document.getElementById("fighter4").innerHTML;
                            var placeloser21 = document.getElementById("loser21");
                            placeloser21.innerHTML = winnerft6;
                            var loserft6 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft6);
                            var nextfight61 = document.getElementById("loser12").innerHTML;
                            var nextfight62 = document.getElementById("loser13").innerHTML;
                            if(nextfight61 === blank)
                                {
                                    var going16 = document.getElementById("loser16").innerHTML;
                                    var going17 = document.getElementById("loser17").innerHTML;
                                    output1.innerHTML = grab16;
                                    output2.innerHTML = grab17;
                                }
                            else
                                {
                                    if(nextfight62 == blank)
                                        {
                                            var placeloser12 = document.getElementById("loser12").innerHTML;
                                            var grab22 = document.getElementById("loser22");
                                            grab22.innerHTML = placeloser12;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("loser17").innerHTML;
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
            //fight 7: loser12 loser13
            else if(compare1 == loser13 && compare2 == loser14)
                {
                    var fight71 = document.getElementById("score3").value;
                    var fight7val1 = parseInt(fight71);
                    var fight72 = document.getElementById("score4").value;
                    var fight7val2 = parseInt(fight72);
                    if(fight7val1 > fight7val2)
                        {
                            var winnerft7 = document.getElementById("fighter3").innerHTML;
                            var placeloser22 = document.getElementById("loser22");
                            placeloser22.innerHTML = winnerft7;
                            var loserft7 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft7);
                            var nextfight71 = document.getElementById("loser14").innerHTML;
                            var nextfight72 = document.getElementById("loser15").innerHTML;
                            if(nextfight71 === blank)
                                {
                                    var nextloser16 = document.getElementById("loser16").innerHTML;
                                    var nextloser17 = document.getElementById("loser17").innerHTML;
                                    output1.innerHTML = nextloser16;
                                    output2.innerHTML = nextloser17;
                                }
                            else
                                {
                                    if(nextfight72 == blank)
                                        {
                                            var placeloser14 = document.getElementById("loser14").innerHTML;
                                            var grab23 = document.getElementById("loser23");
                                            grab23.innerHTML = placeloser14;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("loser17").innerHTML;
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
                            var winnerft7 = document.getElementById("fighter4").innerHTML;
                            var placeloser22 = document.getElementById("loser22");
                            placeloser22.innerHTML = winnerft7;
                            var loserft7 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft7);
                            var nextfight71 = document.getElementById("loser14").innerHTML;
                            var nextfight72 = document.getElementById("loser15").innerHTML;
                            if(nextfight71 === blank)
                                {
                                    var nextloser16 = document.getElementById("loser16").innerHTML;
                                    var nextloser17 = document.getElementById("loser17").innerHTML;
                                    output1.innerHTML = nextloser16;
                                    output2.innerHTML = nextloser17;
                                }
                            else
                                {
                                    if(nextfight72 == blank)
                                        {
                                            var placeloser14 = document.getElementById("loser14").innerHTML;
                                            var grab23 = document.getElementById("loser23");
                                            grab23.innerHTML = placeloser14;
                                            var take16 = document.getElementById("loser16").innerHTML;
                                            output1.innerHTML= take16;
                                            var take17 = document.getElementById("loser17").innerHTML;
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
            //fight 8: loser14 loser15 last fight if all 16
            else if(compare1 == loser15 && compare2 == lasloser)
                {
                    var fight81 = document.getElementById("score3").value;
                    var fight8val1 = parseInt(fight81);
                    var fight82 = document.getElementById("score4").value;
                    var fight8val2 = parseInt(fight82);
                    if(fight8val1 > fight8val2)
                        {
                            var winnerft8 = document.getElementById("fighter3").innerHTML;
                            var placeloser23 = document.getElementById("loser23");
                            placeloser23.innerHTML = winnerft8;
                            var loserft8 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft8);
                            var nextfight81 = document.getElementById("loser16").innerHTML;
                            var nextfight82 = document.getElementById("loser17").innerHTML;
                            output1.innerHTML =  nextfight81;
                            output2.innerHTML = nextfight82;
                        }
                    else
                        {
                            var winnerft8 = document.getElementById("fighter4").innerHTML;
                            var placeloser23 = document.getElementById("loser23");
                            placeloser23.innerHTML = winnerft8;
                            var loserft8 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft8);
                            var nextfight81 = document.getElementById("loser16").innerHTML;
                            var nextfight82 = document.getElementById("loser17").innerHTML;
                            output1.innerHTML =  nextfight81;
                            output2.innerHTML = nextfight82;
                        }
                }
            //round2
            //fight9: loser16 loser17; special
            else if(compare1 == loser16 && compare2 == loser17)
                {
                    var fight91 = document.getElementById("score3").value;
                    var fight9val1 = parseInt(fight91);
                    var fight92 = document.getElementById("score4").value;
                    var fight9val2 = parseInt(fight92);
                    if (fight9val1 > fight9val2)
                        {
                            var winnerft9 = document.getElementById("fighter3").innerHTML;
                            var placeloser24 = document.getElementById("loser24");
                            placeloser24.innerHTML = winnerft9;
                            var loserft9 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft9);
                            var nextfight91 = document.getElementById("loser18").innerHTML;
                            var nextfight92 = document.getElementById("loser19").innerHTML;
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
                                            var placeloser18 = document.getElementById("loser18").innerHTML;
                                            var grab25 = document.getElementById("loser25");
                                            grab25.innerHTML = placeloser18;
                                            var take24 = document.getElementById("loser24").innerHTML;
                                            output1.innerHTML= take24;
                                            var take25 = document.getElementById("loser25").innerHTML;
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
                            var winnerft9 = document.getElementById("fighter4").innerHTML;
                            var placeloser24 = document.getElementById("loser24");
                            placeloser24.innerHTML = winnerft9;
                            var loserft9 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft9);
                            var nextfight91 = document.getElementById("loser18").innerHTML;
                            var nextfight92 = document.getElementById("loser19").innerHTML;
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
                                            var placeloser18 = document.getElementById("loser18").innerHTML;
                                            var grab25 = document.getElementById("loser25");
                                            grab25.innerHTML = placeloser18;
                                            var take24 = document.getElementById("loser24").innerHTML;
                                            output1.innerHTML= take24;
                                            var take25 = document.getElementById("loser25").innerHTML;
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
            //fight10: loser18 loser19
            else if(compare1 == loser18 && compare2 == loser19)
                {
                    var fight101 = document.getElementById("score3").value;
                    var fight10val1 = parseInt(fight101);
                    var fight102 = document.getElementById("score4").value;
                    var fight10val2 = parseInt(fight102);
                    if(fight10val1 > fight10val2)
                        {
                            var winnerft10 = document.getElementById("fighter3").innerHTML;
                            var placeloser25 = document.getElementById("loser25");
                            placeloser25.innerHTML = winnerft10;
                            var loserft10 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft10);
                            var nextfight101 = document.getElementById("loser20").innerHTML;
                            var nextfight102 = document.getElementById("loser21").innerHTML;
                            if(nextfight101 === blank)
                                {
                                    var round3next1 = document.getElementById("loser24").innerHTML;
                                    var round3next2 = document.getElementById("loser25").innerHTML;
                                    output1.innerHTML = round3next1;
                                    output2.innerHTML = round3next2;
                                }
                            else
                                {
                                    if( nextfight102 == blank)
                                        {
                                            var placeloser20 = document.getElementById("loser20").innerHTML;
                                            var grab26 = document.getElementById("loser26");
                                            grab26.innerHTML = placeloser20;
                                            var take24 = document.getElementById("loser24").innerHTML;
                                            output1.innerHTML= take24;
                                            var take25 = document.getElementById("loser25").innerHTML;
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
                            var winnerft10 = document.getElementById("fighter4").innerHTML;
                            var placeloser25 = document.getElementById("loser25");
                            placeloser25.innerHTML = winnerft10;
                            var loserft10 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft10);
                            var nextfight101 = document.getElementById("loser20").innerHTML;
                            var nextfight102 = document.getElementById("loser21").innerHTML;
                            if(nextfight101 === blank)
                                {
                                    var round3next1 = document.getElementById("loser24").innerHTML;
                                    var round3next2 = document.getElementById("loser25").innerHTML;
                                    output1.innerHTML = round3next1;
                                    output2.innerHTML = round3next2;
                                }
                            else
                                {
                                    if( nextfight102 == blank)
                                        {
                                            var placeloser20 = document.getElementById("loser20").innerHTML;
                                            var grab26 = document.getElementById("loser26");
                                            grab26.innerHTML = placeloser20;
                                            var take24 = document.getElementById("loser24").innerHTML;
                                            output1.innerHTML= take24;
                                            var take25 = document.getElementById("loser25").innerHTML;
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
            else if(compare1 == loser20 && compare2 == loser21)
                {
                    var fight111 = document.getElementById("score3").value;
                    var fight11val1 = parseInt(fight111);
                    var fight112 = document.getElementById("score4").value;
                    var fight11val2 = parseInt(fight112);
                    if(fight11val1 > fight11val2)
                        {
                            var winnerft11 = document.getElementById("fighter3").innerHTML;
                            var placeloser26 = document.getElementById("loser26");
                            placeloser26.innerHTML = winnerft11;
                            var loserft11 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft11);
                            var nextfight111 = document.getElementById("loser22").innerHTML;
                            var nextfight112 = document.getElementById("loser23").innerHTML;
                            if(nextfight111 === blank)
                                {
                                    var round3next3 = document.getElementById("loser24").innerHTML;
                                    var round3next4 = document.getElementById("loser25").innerHTML;
                                    output1.innerHTML = round3next3;
                                    output2.innerHTML = round3next4;
                                }
                            else
                                {
                                    if(nextfight112 == blank)
                                        {
                                            var placeloser22 = document.getElementById("loser22").innerHTML;
                                            var grab27 = document.getElementById("loser27");
                                            grab27.innerHTML = placeloser22;
                                            var take24 = document.getElementById("loser24").innerHTML;
                                            output1.innerHTML= take24;
                                            var take25 = document.getElementById("loser25").innerHTML;
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
                            var winnerft11 = document.getElementById("fighter4").innerHTML;
                            var placeloser26 = document.getElementById("loser26");
                            placeloser26.innerHTML = winnerft11;
                            var loserft11 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft11);
                            var nextfight111 = document.getElementById("loser22").innerHTML;
                            var nextfight112 = document.getElementById("loser23").innerHTML;
                            if(nextfight111 == blank)
                                {
                                    var round3next3 = document.getElementById("loser24").innerHTML;
                                    var round3next4 = document.getElementById("loser25").innerHTML;
                                    output1.innerHTML = round3next3;
                                    output2.innerHTML = round3next4;
                                }
                            else
                                {
                                    if(nextfight112 == blank)
                                        {
                                            var placeloser22 = document.getElementById("loser22").innerHTML;
                                            var grab27 = document.getElementById("loser27");
                                            grab27.innerHTML = placeloser22;
                                            var take24 = document.getElementById("loser24").innerHTML;
                                            output1.innerHTML= take24;
                                            var take25 = document.getElementById("loser25").innerHTML;
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
            else if (compare1 == loser22 && compare2 == loser23)
                {
                    var fight121 = document.getElementById("score3").value;
                    var fight12val1 = parseInt(fight121);
                    var fight122 = document.getElementById("score4").value;
                    var fight12val2 = parseInt(fight122);   
                    if(fight12val1 > fight12val2)
                        {
                            var winnerft12 = document.getElementById("fighter3").innerHTML;
                            var placeloser27 = document.getElementById("loser27");
                            var loserft12 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft12);
                            placeloser27.innerHTML = winnerft12;
                            output1.innerHTML  = document.getElementById("loser24").innerHTML;
                            output2.innerHTML  = document.getElementById("loser25").innerHTML;
                        }
                    else
                        {
                            var winnerft12 = document.getElementById("fighter4").innerHTML;
                            var placeloser27 = document.getElementById("loser27");
                            var loserft12 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft12);
                            placeloser27.innerHTML = winnerft12;
                            output1.innerHTML  = document.getElementById("loser24").innerHTML;
                            output2.innerHTML  = document.getElementById("loser25").innerHTML;
                        }
                }
            //round 3
            //fight13: 24 25 special case
            else if (compare1 == loser24 && compare2 == loser25)
                {
                    var fight131 = document.getElementById("score3").value;
                    var fight13val1 = parseInt(fight131);
                    var fight132 = document.getElementById("score4").value;
                    var fight13val2 = parseInt(fight132);
                    if(fight13val1 > fight13val2)
                        {
                            var winnerft13 = document.getElementById("fighter3").innerHTML;
                            var placeloser28 = document.getElementById("loser28");
                            placeloser28.innerHTML = winnerft13;
                            var loserft13 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft13);
                            var nextfight131 = document.getElementById("loser26").innerHTML;
                            var nextfight132 = document.getElementById("loser27").innerHTML;
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
                                            var placeloser26 = document.getElementById("loser26").innerHTML;
                                            var grab29 = document.getElementById("loser29");
                                            grab29.innerHTML = placeloser26;
                                            var take28 = document.getElementById("loser28").innerHTML;
                                            output1.innerHTML= take28;
                                            var take29 = document.getElementById("loser29").innerHTML;
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
                            var winnerft13 = document.getElementById("fighter4").innerHTML;
                            var placeloser28 = document.getElementById("loser28");
                            placeloser28.innerHTML = winnerft13;
                            var loserft13 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft13);
                            var nextfight131 = document.getElementById("loser26").innerHTML;
                            var nextfight132 = document.getElementById("loser27").innerHTML;
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
                                            var placeloser26 = document.getElementById("loser26").innerHTML;
                                            var grab29 = document.getElementById("loser29");
                                            grab29.innerHTML = placeloser26;
                                            var take28 = document.getElementById("loser28").innerHTML;
                                            output1.innerHTML= take28;
                                            var take29 = document.getElementById("loser29").innerHTML;
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
            // fight14: loser26 27 last fight
            else if( compare1 == loser26 && compare2 == loser27)
                {
                    var fight141 = document.getElementById("score3").value;
                    var fight14val1 = parseInt(fight141);
                    var fight142 = document.getElementById("score4").value;
                    var fight14val2 = parseInt(fight142);  
                    if( fight14val1 > fight14val2)
                        {
                            var winnerft14 = document.getElementById("fighter3").innerHTML;
                            var placeloser29 = document.getElementById("loser29");
                            placeloser29.innerHTML = winnerft14;
                            var loserft14 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft14);
                            var nextfight141 = document.getElementById("loser28").innerHTML;
                            var nextfight142 = document.getElementById("loser29").innerHTML;
                            output1.innerHTML = nextfight141;
                            output2.innerHTML = nextfight142;
                        }
                    else
                        {
                            var winnerft14 = document.getElementById("fighter4").innerHTML;
                            var placeloser29 = document.getElementById("loser29");
                            placeloser29.innerHTML = winnerft14;
                            var loserft14 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft14);
                            var nextfight141 = document.getElementById("loser28").innerHTML;
                            var nextfight142 = document.getElementById("loser29").innerHTML;
                            output1.innerHTML = nextfight141;
                            output2.innerHTML = nextfight142;
                        }
                }
            //round4
            //fight15: loser28 29 last fight 
            else if(compare1 == loser28 && compare2 == loser29)
                {
                    var fight151 = document.getElementById("score3").value;
                    var fight15val1 = parseInt(fight151);
                    var fight152 = document.getElementById("score4").value;
                    var fight15val2 = parseInt(fight152);
                    if( fight15val1 > fight15val2)
                        {
                            var winnerft15 = document.getElementById("fighter3").innerHTML;
                            var placeloser61 = document.getElementById("loser61");
                            placeloser61.innerHTML = winnerft15;
                            var loserft15 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft15);
                            var nextfight151 = document.getElementById("loser30").innerHTML;
                            var nextfight152 = document.getElementById("loser31").innerHTML;
                            if(nextfight151 == blank)
                                {
                                    var secondplace = document.getElementById("second");
                                    secondplace.innerHTML = winnerft15;
                                    var thirdplace = document.getElementById("third");
                                    thirdplace.innerHTML = loserft15;
                                    fourthbox();
                                    var loser28pos = document.getElementById("loser28").innerHTML;
                                    var toptopcomparison = document.getElementById("loser25").innerHTML;
                                    var topbottomcomparison = document.getElementById("loser26").innerHTML;
                                    if(toptopcomparison == loser28pos)
                                        {
                                            var grabft5 = document.getElementById("fighter5");
                                            grabft5.innerHTML = topbottomcomparison;
                                        }
                                    else
                                        {
                                            var grabft5 = document.getElementById("fighter5");
                                            grabft5.innerHTML = toptopcomparison;
                                        }
                                    var loser29pos= document.getElementById("loser29").innerHTML;
                                    var bottopcomparison = document.getElementById("loser26").innerHTML;
                                    var botbotcomparison = document.getElementById("loser27").innerHTML;
                                    if(bottopcomparison == loser29pos)
                                        {
                                            var grabft6 = document.getElementById("fighter6");
                                            grabft6.innerHTML = botbotcomparison;
                                        }
                                    else
                                        {
                                            var grabft6 = document.getElementById("fighter6");
                                            grabft6.innerHTML = bottopcomparison;
                                        }
                                }
                            else if( nextfight152 == blank)
                                {
                                    var placeloser30 = document.getElementById("loser30").innerHTML;
                                    var grab60 = document.getElementById("loser60");
                                    grab60.innerHTML = placeloser30;
                                    var take60 = document.getElementById("loser60").innerHTML;
                                    output1.innerHTML= take60;
                                    var take61 = document.getElementById("loser61").innerHTML;
                                    output2.innerHTML = take61;
                                }
                            else
                                {
                                    output1.innerHTML = nextfight151;
                                    output2.innerHTML = nextfight152;
                                }
                        }
                    else
                        {
                            var winnerft15 = document.getElementById("fighter4").innerHTML;
                            var placeloser61 = document.getElementById("loser61");
                            placeloser61.innerHTML = winnerft15;
                            var loserft15 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft15);
                            var nextfight151 = document.getElementById("loser30").innerHTML;
                            var nextfight152 = document.getElementById("loser31").innerHTML;
                            if(nextfight151 == blank)
                                {
                                    var secondplace = document.getElementById("second");
                                    secondplace.innerHTML = winnerft15;
                                    var thirdplace = document.getElementById("third");
                                    thirdplace.innerHTML = loserft15;
                                    fourthbox();
                                    var loser28pos = document.getElementById("loser28").innerHTML;
                                    var toptopcomparison = document.getElementById("loser25").innerHTML;
                                    var topbottomcomparison = document.getElementById("loser26").innerHTML;
                                    if(toptopcomparison == loser28pos)
                                        {
                                            var grabft5 = document.getElementById("fighter5");
                                            grabft5.innerHTML = topbottomcomparison;
                                        }
                                    else
                                        {
                                            var grabft5 = document.getElementById("fighter5");
                                            grabft5.innerHTML = toptopcomparison;
                                        }
                                    var loser29pos= document.getElementById("loser29").innerHTML;
                                    var bottopcomparison = document.getElementById("loser26").innerHTML;
                                    var botbotcomparison = document.getElementById("loser27").innerHTML;
                                    if(bottopcomparison == loser29pos)
                                        {
                                            var grabft6 = document.getElementById("fighter6");
                                            grabft6.innerHTML = botbotcomparison;
                                        }
                                    else
                                        {
                                            var grabft6 = document.getElementById("fighter6");
                                            grabft6.innerHTML = bottopcomparison;
                                        }
                                }
                            else if( nextfight152 == blank)
                                {
                                    var placeloser30 = document.getElementById("loser30").innerHTML;
                                    var grab60 = document.getElementById("loser60");
                                    grab60.innerHTML = placeloser30;
                                    var take60 = document.getElementById("loser60").innerHTML;
                                    output1.innerHTML= take60;
                                    var take61 = document.getElementById("loser61").innerHTML;
                                    output2.innerHTML = take61;
                                }
                            else
                                {
                                    output1.innerHTML = nextfight151;
                                    output2.innerHTML = nextfight152;
                                }
                        }
                }
    
            //next bracket
            //lower bracket rounds
            //round one
            //Fight 16: loser 30 31 special
            else if(compare1 == loser30 && compare2 == loser31)
                {
                    var fight161 = document.getElementById("score3").value;
                    var fight16val1  = parseInt(fight161);
                    var fight162 = document.getElementById("score4").value;
                    var fight16val2 = parseInt(fight162);
                    if(fight16val1 > fight16val2)
                        {
                            var winnerft16 = document.getElementById("fighter3").innerHTML;
                            var placeloser46 = document.getElementById("loser46");
                            placeloser46.innerHTML = winnerft16;
                            var loserft16 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft16);
                            var nextfight161 = document.getElementById("loser32").innerHTML;
                            var nextfight162 = document.getElementById("loser33").innerHTML;
                            if(nextfight161 == blank)
                                {
                                    var grab60 = document.getElementById("loser60");
                                    grab60.innerHTML = winnerft16;
                                    var going60 = document.getElementById("loser60").innerHTML;
                                    var going61 = document.getElementById("loser61").innerHTML;
                                    output1.innerHTML = going60;
                                    output2.innerHTML = going61;
                                }
                            else
                            {
                                if(nextfight162 == blank)
                                    {
                                        var grab32 = document.getElementById("loser32").innerHTML;
                                        var place47 = document.getElementById("loser47");
                                        place47.innerHTML = grab32;
                                        var grab46round = document.getElementById("loser46").innerHTML;
                                        output1.innerHTML = grab46round;
                                        output2.innerHTML = grab32;
                                    }
                                else
                                    {
                                        output1.innerHTML = nextfight161;
                                        output2.innerHTML = nextfight162;
                                    }
                            }
                        }
                    else
                        {
                            var winnerft16 = document.getElementById("fighter4").innerHTML;
                            var placeloser46 = document.getElementById("loser46");
                            placeloser46.innerHTML = winnerft16;
                            var loserft16 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft16);
                            var nextfight161 = document.getElementById("loser32").innerHTML;
                            var nextfight162 = document.getElementById("loser33").innerHTML;
                            if(nextfight161 == blank)
                                {
                                    var grab60 = document.getElementById("loser60");
                                    grab60.innerHTML = winnerft16;
                                    var going60 = document.getElementById("loser60").innerHTML;
                                    var going61 = document.getElementById("loser61").innerHTML;
                                    output1.innerHTML = going60;
                                    output2.innerHTML = going61;
                                }
                            else
                            {
                                if(nextfight162 == blank)
                                    {
                                        var grab32 = document.getElementById("loser32").innerHTML;
                                        var place47 = document.getElementById("loser47");
                                        place47.innerHTML = grab32;
                                        var grab46round = document.getElementById("loser46").innerHTML;
                                        output1.innerHTML = grab46round;
                                        output2.innerHTML = grab32;
                                    }
                                else
                                    {
                                        output1.innerHTML = nextfight161;
                                        output2.innerHTML = nextfight162;
                                    }
                            }
                        }
                }
            //fight 17: loser 32 33 
            else if(compare1 == loser32 && compare2 == loser33)
                {
                    var fight171 = document.getElementById("score3").value;
                    var fight17val1  = parseInt(fight171);
                    var fight172 = document.getElementById("score4").value;
                    var fight17val2 = parseInt(fight172);
                    if( fight17val1 > fight17val2)
                        {
                            var winnerft17 = document.getElementById("fighter3").innerHTML;
                            var placeloser47 = document.getElementById("loser47");
                            placeloser47.innerHTML = winnerft17;
                            var loserft17 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft17);
                            var nextfight171 = document.getElementById("loser34").innerHTML;
                            var nextfight172 = document.getElementById("loser35").innerHTML;
                            if(nextfight171 == blank)
                                {
                                    var going46 = document.getElementById("loser46").innerHTML;
                                    var going47 = document.getElementById("loser47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight172 == blank)
                                        {
                                            var place47 = document.getElementById("loser47");
                                            place47.innerHTML = nextfight171;
                                            var grab46 = document.getElementById("loser46").innerHTML;
                                            var grab47 = document.getElementById("loser47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight171;
                                            output2.innerHTML = nextfight172;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft17 = document.getElementById("fighter4").innerHTML;
                            var placeloser47 = document.getElementById("loser47");
                            placeloser47.innerHTML = winnerft17;
                            var loserft17 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft17);
                            var nextfight171 = document.getElementById("loser34").innerHTML;
                            var nextfight172 = document.getElementById("loser35").innerHTML;
                            if(nextfight171 == blank)
                                {
                                    var going46 = document.getElementById("loser46").innerHTML;
                                    var going47 = document.getElementById("loser47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight172 == blank)
                                        {
                                            var place47 = document.getElementById("loser47");
                                            place47.innerHTML = nextfight171;
                                            var grab46 = document.getElementById("loser46").innerHTML;
                                            var grab47 = document.getElementById("loser47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight171;
                                            output2.innerHTML = nextfight172;
                                        }
                                }
                            
                        }
                }
            //fight 18: 34 35
            else if(compare1 == loser34 && compare2 == loser35)
                {
                    var fight181 = document.getElementById("score3").value;
                    var fight18val1  = parseInt(fight181);
                    var fight182 = document.getElementById("score4").value;
                    var fight18val2 = parseInt(fight182);
                    if( fight18val1 > fight18val2)
                        {
                            var winnerft18 = document.getElementById("fighter3").innerHTML;
                            var placeloser48 = document.getElementById("loser48");
                            placeloser48.innerHTML = winnerft18;
                            var loserft18 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft18);
                            var nextfight181 = document.getElementById("loser36").innerHTML;
                            var nextfight182 = document.getElementById("loser37").innerHTML;
                            if(nextfight181 == blank)
                                {
                                    var going46 = document.getElementById("loser46").innerHTML;
                                    var going47 = document.getElementById("loser47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight182 == blank)
                                        {
                                            var place48 = document.getElementById("loser48");
                                            place48.innerHTML = nextfight181;
                                            var grab46 = document.getElementById("loser46").innerHTML;
                                            var grab47 = document.getElementById("loser47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight181;
                                            output2.innerHTML = nextfight182;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft18 = document.getElementById("fighter4").innerHTML;
                            var placeloser48 = document.getElementById("loser48");
                            placeloser48.innerHTML = winnerft18;
                            var loserft18 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft18);
                            var nextfight181 = document.getElementById("loser36").innerHTML;
                            var nextfight182 = document.getElementById("loser37").innerHTML;
                            if(nextfight181 == blank)
                                {
                                    var going46 = document.getElementById("loser46").innerHTML;
                                    var going47 = document.getElementById("loser47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight182 == blank)
                                        {
                                            var place48 = document.getElementById("loser48");
                                            place48.innerHTML = nextfight181;
                                            var grab46 = document.getElementById("loser46").innerHTML;
                                            var grab47 = document.getElementById("loser47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight181;
                                            output2.innerHTML = nextfight182;
                                        }
                                }
                        }
                }
            //fight 19 36 37
            else if(compare1 == loser36 && compare2 == loser37)
                {
                    var fight191 = document.getElementById("score3").value;
                    var fight19val1  = parseInt(fight191);
                    var fight192 = document.getElementById("score4").value;
                    var fight19val2 = parseInt(fight192);
                    if( fight19val1 > fight19val2)
                        {
                            var winnerft19 = document.getElementById("fighter3").innerHTML;
                            var placeloser49 = document.getElementById("loser49");
                            placeloser49.innerHTML = winnerft19;
                            var loserft19 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft19);
                            var nextfight191 = document.getElementById("loser38").innerHTML;
                            var nextfight192 = document.getElementById("loser39").innerHTML;
                            if(nextfight191 == blank)
                                {
                                    var going46 = document.getElementById("loser46").innerHTML;
                                    var going47 = document.getElementById("loser47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight192 == blank)
                                        {
                                            var place49 = document.getElementById("loser49");
                                            place49.innerHTML = nextfight191;
                                            var grab46 = document.getElementById("loser46").innerHTML;
                                            var grab47 = document.getElementById("loser47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight191;
                                            output2.innerHTML = nextfight192;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft19 = document.getElementById("fighter4").innerHTML;
                            var placeloser49 = document.getElementById("loser49");
                            placeloser49.innerHTML = winnerft19;
                            var loserft19 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft19);
                            var nextfight191 = document.getElementById("loser38").innerHTML;
                            var nextfight192 = document.getElementById("loser39").innerHTML;
                            if(nextfight191 == blank)
                                {
                                    var going46 = document.getElementById("loser46").innerHTML;
                                    var going47 = document.getElementById("loser47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight192 == blank)
                                        {
                                            var place49 = document.getElementById("loser49");
                                            place49.innerHTML = nextfight191;
                                            var grab46 = document.getElementById("loser46").innerHTML;
                                            var grab47 = document.getElementById("loser47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight191;
                                            output2.innerHTML = nextfight192;
                                        }
                                }
                        }
                        
                }
            //fight 20 38 39
            else if(compare1 == loser38 && compare2 == loser39)
                {
                    var fight201 = document.getElementById("score3").value;
                    var fight20val1  = parseInt(fight201);
                    var fight202 = document.getElementById("score4").value;
                    var fight20val2 = parseInt(fight202);
                    if( fight20val1 > fight20val2)
                        {
                            var winnerft20 = document.getElementById("fighter3").innerHTML;
                            var placeloser50 = document.getElementById("loser50");
                            placeloser50.innerHTML = winnerft20;
                            var loserft20 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft20);
                            var nextfight201 = document.getElementById("loser40").innerHTML;
                            var nextfight202 = document.getElementById("loser41").innerHTML;
                            if(nextfight201 == blank)
                                {
                                    var going46 = document.getElementById("loser46").innerHTML;
                                    var going47 = document.getElementById("loser47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight202 == blank)
                                        {
                                            var place50 = document.getElementById("loser50");
                                            place50.innerHTML = nextfight201;
                                            var grab46 = document.getElementById("loser46").innerHTML;
                                            var grab47 = document.getElementById("loser47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight201;
                                            output2.innerHTML = nextfight202;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft20 = document.getElementById("fighter4").innerHTML;
                            var placeloser50 = document.getElementById("loser50");
                            placeloser50.innerHTML = winnerft20;
                            var loserft20 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft20);
                            var nextfight201 = document.getElementById("loser40").innerHTML;
                            var nextfight202 = document.getElementById("loser41").innerHTML;
                            if(nextfight201 == blank)
                                {
                                    var going46 = document.getElementById("loser46").innerHTML;
                                    var going47 = document.getElementById("loser47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight202 == blank)
                                        {
                                            var place50 = document.getElementById("loser50");
                                            place50.innerHTML = nextfight201;
                                            var grab46 = document.getElementById("loser46").innerHTML;
                                            var grab47 = document.getElementById("loser47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight201;
                                            output2.innerHTML = nextfight202;
                                        }
                                }
                        }
                }
            //fight 21 40 41
            else if(compare1 == loser40 && compare2 == loser41)
                {
                    var fight211 = document.getElementById("score3").value;
                    var fight21val1  = parseInt(fight211);
                    var fight212 = document.getElementById("score4").value;
                    var fight21val2 = parseInt(fight212);
                    if( fight21val1 > fight21val2)
                        {
                            var winnerft21 = document.getElementById("fighter3").innerHTML;
                            var placeloser51 = document.getElementById("loser51");
                            placeloser51.innerHTML = winnerft21;
                            var loserft21 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft21);
                            var nextfight211 = document.getElementById("loser42").innerHTML;
                            var nextfight212 = document.getElementById("loser43").innerHTML;
                            if(nextfight211 == blank)
                                {
                                    var going46 = document.getElementById("loser46").innerHTML;
                                    var going47 = document.getElementById("loser47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight212 == blank)
                                        {
                                            var place51 = document.getElementById("loser51");
                                            place51.innerHTML = nextfight211;
                                            var grab46 = document.getElementById("loser46").innerHTML;
                                            var grab47 = document.getElementById("loser47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight211;
                                            output2.innerHTML = nextfight212;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft21 = document.getElementById("fighter4").innerHTML;
                            var placeloser51 = document.getElementById("loser51");
                            placeloser51.innerHTML = winnerft21;
                            var loserft21 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft21);
                            var nextfight211 = document.getElementById("loser42").innerHTML;
                            var nextfight212 = document.getElementById("loser43").innerHTML;
                            if(nextfight211 == blank)
                                {
                                    var going46 = document.getElementById("loser46").innerHTML;
                                    var going47 = document.getElementById("loser47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight212 == blank)
                                        {
                                            var place51 = document.getElementById("loser51");
                                            place51.innerHTML = nextfight211;
                                            var grab46 = document.getElementById("loser46").innerHTML;
                                            var grab47 = document.getElementById("loser47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight211;
                                            output2.innerHTML = nextfight212;
                                        }
                                }
                        }
                }
            //fight 22 loser 42 43
            else if(compare1 == loser42 && compare2 == loser43)
                {
                    var fight221 = document.getElementById("score3").value;
                    var fight22val1  = parseInt(fight221);
                    var fight222 = document.getElementById("score4").value;
                    var fight22val2 = parseInt(fight222);
                    if( fight22val1 > fight22val2)
                        {
                            var winnerft22 = document.getElementById("fighter3").innerHTML;
                            var placeloser52 = document.getElementById("loser52");
                            placeloser52.innerHTML = winnerft22;
                            var loserft22 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft22);
                            var nextfight221 = document.getElementById("loser44").innerHTML;
                            var nextfight222 = document.getElementById("loser45").innerHTML;
                            if(nextfight221 == blank)
                                {
                                    var going46 = document.getElementById("loser46").innerHTML;
                                    var going47 = document.getElementById("loser47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight222 == blank)
                                        {
                                            var place52 = document.getElementById("loser52");
                                            place52.innerHTML = nextfight221;
                                            var grab46 = document.getElementById("loser46").innerHTML;
                                            var grab47 = document.getElementById("loser47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight221;
                                            output2.innerHTML = nextfight222;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft22 = document.getElementById("fighter4").innerHTML;
                            var placeloser52 = document.getElementById("loser52");
                            placeloser52.innerHTML = winnerft22;
                            var loserft22 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft22);
                            var nextfight221 = document.getElementById("loser44").innerHTML;
                            var nextfight222 = document.getElementById("loser45").innerHTML;
                            if(nextfight221 == blank)
                                {
                                    var going46 = document.getElementById("loser46").innerHTML;
                                    var going47 = document.getElementById("loser47").innerHTML;
                                    output1.innerHTML = going46;
                                    output2.innerHTML = going47;
                                }
                            else
                                {
                                    if(nextfight222 == blank)
                                        {
                                            var place52 = document.getElementById("loser52");
                                            place52.innerHTML = nextfight221;
                                            var grab46 = document.getElementById("loser46").innerHTML;
                                            var grab47 = document.getElementById("loser47").innerHTML;
                                            output1.innerHTML = grab46;
                                            output2.innerHTML = grab47;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight221;
                                            output2.innerHTML = nextfight222;
                                        }
                                }
                        }
                }
            //last fight of round1 2nd bracket
            //fight 23 loser 44 45
            else if(compare1 == loser44 && compare2 == loser45)
                {
                    var fight231 = document.getElementById("score3").value;
                    var fight23val1  = parseInt(fight231);
                    var fight232 = document.getElementById("score4").value;
                    var fight23val2 = parseInt(fight232);
                    if( fight23val1 > fight23val2)
                        {
                            var winnerft23 = document.getElementById("fighter3").innerHTML;
                            var placeloser53 = document.getElementById("loser53");
                            placeloser53.innerHTML = winnerft23;
                            var loserft23 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft23);
                            var nextfight231 = document.getElementById("loser46").innerHTML;
                            var nextfight232 = document.getElementById("loser47").innerHTML;
                            output1.innerHTML = nextfight231;
                            output2.innerHTML = nextfight232;
                        }
                    else
                        {
                            var winnerft23 = document.getElementById("fighter4").innerHTML;
                            var placeloser53 = document.getElementById("loser53");
                            placeloser53.innerHTML = winnerft23;
                            var loserft23 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft23);
                            var nextfight231 = document.getElementById("loser46").innerHTML;
                            var nextfight232 = document.getElementById("loser47").innerHTML;
                            output1.innerHTML = nextfight231;
                            output2.innerHTML = nextfight232;
                        }
                }
            //round2 2nd branch
            //fight 24 loser 46 47 ; special fight
            else if(compare1 == loser46 && compare2 == loser47)
                {
                    var fight241 = document.getElementById("score3").value;
                    var fight24val1  = parseInt(fight241);
                    var fight242 = document.getElementById("score4").value;
                    var fight24val2 = parseInt(fight242);
                    if( fight24val1 > fight24val2)
                        {
                            var winnerft24 = document.getElementById("fighter3").innerHTML;
                            var placeloser54 = document.getElementById("loser54");
                            placeloser54.innerHTML = winnerft24;
                            var loserft24 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft24);
                            var nextfight241 = document.getElementById("loser48").innerHTML;
                            var nextfight242 = document.getElementById("loser49").innerHTML;
                            if(nextfight241 == blank)
                                {
                                    var grab54 = document.getElementById("loser54").innerHTML;
                                    var grab60 = document.getElementById("loser60");
                                    grab60.innerHTML = grab54;
                                    var going61 = document.getElementById("loser61").innerHTML;
                                    var going60 = document.getElementById("loser60").innerHTML;
                                    output1.innerHTML = going60;
                                    output2.innerHTML = going61;
                                }
                            else
                                {
                                    if(nextfight242 == blank)
                                        {
                                            var place55 = document.getElementById("loser55");
                                            place55.innerHTML = nextfight241;
                                            var grab54 = document.getElementById("loser54").innerHTML;
                                            var grab55 = document.getElementById("loser55").innerHTML;
                                            output1.innerHTML = grab54;
                                            output2.innerHTML = grab55;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight241;
                                            output2.innerHTML = nextfight242;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft24 = document.getElementById("fighter4").innerHTML;
                            //sixty
                            var placeloser54 = document.getElementById("loser54");
                            placeloser54.innerHTML = winnerft24;
                            var loserft24 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft24);
                            var nextfight241 = document.getElementById("loser48").innerHTML;
                            var nextfight242 = document.getElementById("loser49").innerHTML;
                            if(nextfight241 == blank)
                                {
                                    var grab54 = document.getElementById("loser54").innerHTML;
                                    var grab60 = document.getElementById("loser60");
                                    grab60.innerHTML = grab54;
                                    var going61 = document.getElementById("loser61").innerHTML;
                                    var going60 = document.getElementById("loser60").innerHTML;
                                    output1.innerHTML = going60;
                                    output2.innerHTML = going61;
                                }
                            else
                                {
                                    if(nextfight242 == blank)
                                        {
                                            var place55 = document.getElementById("loser55");
                                            place55.innerHTML = nextfight241;
                                            var grab54 = document.getElementById("loser54").innerHTML;
                                            var grab55 = document.getElementById("loser55").innerHTML;
                                            output1.innerHTML = grab54;
                                            output2.innerHTML = grab55;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight241;
                                            output2.innerHTML = nextfight242;
                                        }
                                }
                        }
                }
            //fight 25 loser 48 49
            else if(compare1 == loser48 && compare2 == loser49)
                {
                    var fight251 = document.getElementById("score3").value;
                    var fight25val1  = parseInt(fight251);
                    var fight252 = document.getElementById("score4").value;
                    var fight25val2 = parseInt(fight252);
                    if( fight25val1 > fight25val2)
                        {
                            var winnerft25 = document.getElementById("fighter3").innerHTML;
                            var placeloser55 = document.getElementById("loser55");
                            placeloser55.innerHTML = winnerft25;
                            var loserft25 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft25);
                            var nextfight251 = document.getElementById("loser50").innerHTML;
                            var nextfight252 = document.getElementById("loser51").innerHTML;
                            if(nextfight251 == blank)
                                {
                                    var going54 = document.getElementById("loser54").innerHTML;
                                    var going55 = document.getElementById("loser55").innerHTML;
                                    output1.innerHTML = going54;
                                    output2.innerHTML = going55;
                                }
                            else
                                {
                                    if(nextfight252 == blank)
                                        {
                                            var place56 = document.getElementById("loser56");
                                            place56.innerHTML = nextfight251;
                                            var grab54 = document.getElementById("loser54").innerHTML;
                                            var grab55 = document.getElementById("loser55").innerHTML;
                                            output1.innerHTML = grab54;
                                            output2.innerHTML = grab55;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight251;
                                            output2.innerHTML = nextfight252;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft25 = document.getElementById("fighter4").innerHTML;
                            var placeloser55 = document.getElementById("loser55");
                            placeloser55.innerHTML = winnerft25;
                            var loserft25 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft25);
                            var nextfight251 = document.getElementById("loser50").innerHTML;
                            var nextfight252 = document.getElementById("loser51").innerHTML;
                            if(nextfight251 == blank)
                                {
                                    var going54 = document.getElementById("loser54").innerHTML;
                                    var going55 = document.getElementById("loser55").innerHTML;
                                    output1.innerHTML = going54;
                                    output2.innerHTML = going55;
                                }
                            else
                                {
                                    if(nextfight252 == blank)
                                        {
                                            var place56 = document.getElementById("loser56");
                                            place56.innerHTML = nextfight251;
                                            var grab54 = document.getElementById("loser54").innerHTML;
                                            var grab55 = document.getElementById("loser55").innerHTML;
                                            output1.innerHTML = grab54;
                                            output2.innerHTML = grab55;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight251;
                                            output2.innerHTML = nextfight252;
                                        }
                                }
                        }
                }
            //fight 26 loser 50 51
            else if(compare1 == loser50 && compare2 == loser51)
                {
                    var fight261 = document.getElementById("score3").value;
                    var fight26val1  = parseInt(fight261);
                    var fight262 = document.getElementById("score4").value;
                    var fight26val2 = parseInt(fight262);
                    if( fight26val1 > fight26val2)
                        {
                            var winnerft26 = document.getElementById("fighter3").innerHTML;
                            var placeloser56 = document.getElementById("loser56");
                            placeloser56.innerHTML = winnerft26;
                            var loserft26 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft26);
                            var nextfight261 = document.getElementById("loser52").innerHTML;
                            var nextfight262 = document.getElementById("loser53").innerHTML;
                            if(nextfight261 == blank)
                                {
                                    var going54 = document.getElementById("loser54").innerHTML;
                                    var going55 = document.getElementById("loser55").innerHTML;
                                    output1.innerHTML = going54;
                                    output2.innerHTML = going55;
                                }
                            else
                                {
                                    if(nextfight262 == blank)
                                        {
                                            var place57 = document.getElementById("loser57");
                                            place57.innerHTML = nextfight261;
                                            var grab54 = document.getElementById("loser54").innerHTML;
                                            var grab55 = document.getElementById("loser55").innerHTML;
                                            output1.innerHTML = grab54;
                                            output2.innerHTML = grab55;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight261;
                                            output2.innerHTML = nextfight262;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft26 = document.getElementById("fighter3").innerHTML;
                            var placeloser56 = document.getElementById("loser56");
                            placeloser56.innerHTML = winnerft26;
                            var loserft26 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft26);
                            var nextfight261 = document.getElementById("loser52").innerHTML;
                            var nextfight262 = document.getElementById("loser53").innerHTML;
                            if(nextfight261 == blank)
                                {
                                    var going54 = document.getElementById("loser54").innerHTML;
                                    var going55 = document.getElementById("loser55").innerHTML;
                                    output1.innerHTML = going54;
                                    output2.innerHTML = going55;
                                }
                            else
                                {
                                    if(nextfight262 == blank)
                                        {
                                            var place57 = document.getElementById("loser57");
                                            place57.innerHTML = nextfight261;
                                            var grab54 = document.getElementById("loser54").innerHTML;
                                            var grab55 = document.getElementById("loser55").innerHTML;
                                            output1.innerHTML = grab54;
                                            output2.innerHTML = grab55;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight261;
                                            output2.innerHTML = nextfight262;
                                        }
                                }
                        }
                }
            //last fight round 2
            //fight 27 52 53
            else if(compare1 == loser52 && compare2 == loseritoin53)
                {
                    var fight271 = document.getElementById("score3").value;
                    var fight27val1  = parseInt(fight271);
                    var fight272 = document.getElementById("score4").value;
                    var fight27val2 = parseInt(fight272);
                    if( fight27val1 > fight27val2)
                        {
                            var winnerft27 = document.getElementById("fighter3").innerHTML;
                            var placeloser57 = document.getElementById("loser57");
                            placeloser57.innerHTML = winnerft27;
                            var loserft27 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft27);
                            var nextfight271 = document.getElementById("loser54").innerHTML;
                            var nextfight272 = document.getElementById("loser55").innerHTML;
                            output1.innerHTML = nextfight271;
                            output2.innerHTML = nextfight272;
                        }
                    else
                        {
                            var winnerft27 = document.getElementById("fighter4").innerHTML;
                            var placeloser57 = document.getElementById("loser57");
                            placeloser57.innerHTML = winnerft27;
                            var loserft27 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft27);
                            var nextfight271 = document.getElementById("loser54").innerHTML;
                            var nextfight272 = document.getElementById("loser55").innerHTML;
                            output1.innerHTML = nextfight271;
                            output2.innerHTML = nextfight272;
                        }
                }
            //round 3
            //fight 28 54 55 special
            else if(compare1 == loser54 && compare2 == loser55)
                {
                    var fight281 = document.getElementById("score3").value;
                    var fight28val1  = parseInt(fight281);
                    var fight282 = document.getElementById("score4").value;
                    var fight28val2 = parseInt(fight282);
                    if( fight28val1 > fight28val2)
                        {
                            var winnerft28 = document.getElementById("fighter3").innerHTML;
                            var placeloser58 = document.getElementById("loser58");
                            placeloser58.innerHTML = winnerft28;
                            var loserft28 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft28);
                            var nextfight281 = document.getElementById("loser56").innerHTML;
                            var nextfight282 = document.getElementById("loser57").innerHTML;
                            if(nextfight261 == blank)
                                {
                                    
                                    var grab58 = document.getElementById("loser58").innerHTML;
                                    var grab60 = document.getElementById("loser60");
                                    grab60.innerHTML = grab58;
                                    var going61 = document.getElementById("loser61").innerHTML;
                                    var going60 = document.getElementById("loser60").innerHTML;
                                    output1.innerHTML = going60;
                                    output2.innerHTML = going61;
                                }
                            else
                                {
                                    if(nextfight262 == blank)
                                        {
                                            var place59 = document.getElementById("loser59");
                                            place59.innerHTML = nextfight281;
                                            var grab58 = document.getElementById("loser58").innerHTML;
                                            var grab59 = document.getElementById("loser59").innerHTML;
                                            output1.innerHTML = grab58;
                                            output2.innerHTML = grab59;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight281;
                                            output2.innerHTML = nextfight282;
                                        }
                                }
                        }
                    else
                        {
                            var winnerft28 = document.getElementById("fighter4").innerHTML;
                            var placeloser58 = document.getElementById("loser58");
                            placeloser58.innerHTML = winnerft28;
                            var loserft28 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft28);
                            var nextfight281 = document.getElementById("loser56").innerHTML;
                            var nextfight282 = document.getElementById("loser57").innerHTML;
                            if(nextfight261 == blank)
                                {
                                    
                                    var grab58 = document.getElementById("loser58").innerHTML;
                                    var grab60 = document.getElementById("loser60");
                                    grab60.innerHTML = grab58;
                                    var going61 = document.getElementById("loser61").innerHTML;
                                    var going60 = document.getElementById("loser60").innerHTML;
                                    output1.innerHTML = going60;
                                    output2.innerHTML = going61;
                                }
                            else
                                {
                                    if(nextfight262 == blank)
                                        {
                                            var place59 = document.getElementById("loser59");
                                            place59.innerHTML = nextfight281;
                                            var grab58 = document.getElementById("loser58").innerHTML;
                                            var grab59 = document.getElementById("loser59").innerHTML;
                                            output1.innerHTML = grab58;
                                            output2.innerHTML = grab59;
                                        }
                                    else
                                        {
                                            output1.innerHTML = nextfight281;
                                            output2.innerHTML = nextfight282;
                                        }
                                }
                        }
                }
            //round 3 last fight 2nd branch
            //fight 29 loser 56 57
            else if (compare1 == loser56 && compare2 == loser57)
                {
                    var fight291 = document.getElementById("score3").value;
                    var fight29val1  = parseInt(fight291);
                    var fight292 = document.getElementById("score4").value;
                    var fight29val2 = parseInt(fight292);
                    if(fight29val1 > fight29val2)
                        {
                            var winnerft29 = document.getElementById("fighter3").innerHTML;
                            var placeloser59 = document.getElementById("loser59");
                            placeloser59.innerHTML = winnerft29;
                            var loserft29 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft29);
                            var nextfight291 = document.getElementById("loser58").innerHTML;
                            var nextfight292 = document.getElementById("loser59").innerHTML;
                            output1.innerHTML = nextfight291;
                            output2.innerHTML = nextfight292;
                        }
                    else
                        {
                            var winnerft29 = document.getElementById("fighter4").innerHTML;
                            var placeloser59 = document.getElementById("loser59");
                            placeloser59.innerHTML = winnerft29;
                            var loserft29 = document.getElementById("fighter3").innerHTML;
                            loserstorage.push(loserft29);
                            var nextfight291 = document.getElementById("loser58").innerHTML;
                            var nextfight292 = document.getElementById("loser59").innerHTML;
                            output1.innerHTML = nextfight291;
                            output2.innerHTML = nextfight292;
                        }
                }
            //round 4
            //fight 30 58 59
            else if(compare1 == loser58 && compare2 == loser59)
                {
                    var fight301 = document.getElementById("score3").value;
                    var fight30val1  = parseInt(fight301);
                    var fight302 = document.getElementById("score4").value;
                    var fight30val2 = parseInt(fight302);
                    if(fight30val1 > fight30val2)
                        {
                            var winnerft30 = document.getElementById("fighter3").innerHTML;
                            var placeloser60 = document.getElementById("loser60");
                            placeloser60.innerHTML = winnerft30;
                            var loserft30 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft30);
                            var nextfight301 = document.getElementById("loser60").innerHTML;
                            var nextfight302 = document.getElementById("loser61").innerHTML;
                            output1.innerHTML = nextfight301;
                            output2.innerHTML = nextfight302;
                        }
                    else
                        {
                            var winnerft30 = document.getElementById("fighter3").innerHTML;
                            var placeloser60 = document.getElementById("loser60");
                            placeloser60.innerHTML = winnerft30;
                            var loserft30 = document.getElementById("fighter4").innerHTML;
                            loserstorage.push(loserft30);
                            var nextfight301 = document.getElementById("loser60").innerHTML;
                            var nextfight302 = document.getElementById("loser61").innerHTML;
                            output1.innerHTML = nextfight301;
                            output2.innerHTML = nextfight302;
                        }
                }
//            round5 final before loser bracket
//            fight 31 loser 60 61
                //fix
            else if(compare1 == loser60 && compare2 == loser61)
                {
                    var fight311 = document.getElementById("score3").value;
                    var fight31val1  = parseInt(fight311);
                    var fight312 = document.getElementById("score4").value;
                    var fight31val2 = parseInt(fight312);
                    if(fight31val1 > fight31val2)
                        {
                            var winnerft31 = document.getElementById("fighter3").innerHTML;
                            var secondplace = document.getElementById("second");
                            secondplace.innerHTML = winnerft31;
                            var loserft31 = document.getElementById("fighter4").innerHTML;
                            var thirdplace = document.getElementById("third");
                            thirdplace.innerHTML = loserft31;
                            fourthbox();
                            var poslos58 = document.getElementById("loser58").innerHTML;
                            var poslos59 = document.getElementById("loser59").innerHTML;
                            if(poslos58 == blank && poslos59 == blank)
                                {
                                    var fourthboxno = document.getElementById("fourthbox");
                                    fourthboxno.innerHTML = "";
                                    var fourthplace = document.getElementById("fourth");
                                    var grab61pos = document.getElementById("loser61").innerHTML;
                                    var grab28pos = document.getElementById("loser28").innerHTML;
                                    var grab29pos = document.getElementById("loser29").innerHTML;
                                    if(grab61pos == grab28pos)
                                        {
                                            fourthplace.innerHTML = grab29pos;
                                        }
                                    else
                                        {
                                            fourthplace.innerHTML = grab28pos;
                                        }
                                }
                            else
                                {
                                    var loser61pos = document.getElementById("loser61").innerHTML;
                                    var lostoptopcomp = document.getElementById("loser28").innerHTML;
                                    var lostopbotcomp = document.getElementById("loser29").innerHTML;
                                    if(loser61pos == lostoptopcomp)
                                        {
                                            var losfight5 = document.getElementById("fighter5");
                                            losfight5.innerHTML = lostopbotcomp;
                                        }
                                    else
                                        {
                                            var losfight5 = document.getElementById("fighter5");
                                            losfight5.innerHTML = lostoptopcomp;
                                        }
                                    var loser60pos = document.getElementById("loser60").innerHTML;
                                    var losbottop = document.getElementById("loser58").innerHTML;
                                    var losbotbot = document.getElementById("loser59").innerHTML;
                                    if(loser60pos == losbottop)
                                        {
                                            var losfight6 = document.getElementById("fighter6");
                                            lostfight6.innerHTML = losbotbot;
                                        }
                                    else
                                        {
                                            var losfight6 = document.getElementById("fighter6");
                                            lostfight6.innerHTML = losbottop;
                                        }
                                }    
                        }
                    else
                        {
                            var winnerft31 = document.getElementById("fighter4").innerHTML;
                            var secondplace = document.getElementById("second");
                            secondplace.innerHTML = winnerft31;
                            var loserft31 = document.getElementById("fighter3").innerHTML;
                            var thirdplace = document.getElementById("third");
                            thirdplace.innerHTML = loserft31;
                            fourthbox();
                            var poslos58 = document.getElementById("loser58").innerHTML;
                            var poslos59 = document.getElementById("loser59").innerHTML;
                            if(poslos58 == blank && poslos59 == blank)
                                {
                                    var fourthboxno = document.getElementById("fourthbox");
                                    fourthboxno.innerHTML = "";
                                    var fourthplace = document.getElementById("fourth");
                                    var grab61pos = document.getElementById("loser61").innerHTML;
                                    var grab28pos = document.getElementById("loser28").innerHTML;
                                    var grab29pos = document.getElementById("loser29").innerHTML;
                                    if(grab61pos == grab28pos)
                                        {
                                            fourthplace.innerHTML = grab29pos;
                                        }
                                    else
                                        {
                                            fourthplace.innerHTML = grab28pos;
                                        }
                                }
                            else
                                {
                                    var loser61pos = document.getElementById("loser61").innerHTML;
                                    var lostoptopcomp = document.getElementById("loser28").innerHTML;
                                    var lostopbotcomp = document.getElementById("loser29").innerHTML;
                                    if(loser61pos == lostoptopcomp)
                                        {
                                            var losfight5 = document.getElementById("fighter5");
                                            losfight5.innerHTML = lostopbotcomp;
                                        }
                                    else
                                        {
                                            var losfight5 = document.getElementById("fighter5");
                                            losfight5.innerHTML = lostoptopcomp;
                                        }
                                    var loser60pos = document.getElementById("loser60").innerHTML;
                                    var losbottop = document.getElementById("loser58").innerHTML;
                                    var losbotbot = document.getElementById("loser59").innerHTML;
                                    if(loser60pos == losbottop)
                                        {
                                            var losfight6 = document.getElementById("fighter6");
                                            lostfight6.innerHTML = losbotbot;
                                        }
                                    else
                                        {
                                            var losfight6 = document.getElementById("fighter6");
                                            lostfight6.innerHTML = losbottop;
                                        }
                                }
                        }
                }
                    
            else
                    {
                        alert("What is it doing");
                    }     
}