//work in progress
//pertains to any html with cal at the end.
var totals = [0, 0, 0, 0];



//trying to figure out how to do this on the click of score.
//this is doing columns not rows fix!

$(document).ready(function()
{ 
    var $dataRows = $("#tablecal tr:not('.totalColumn, .titlerow')");
    
    //something like if checked take out high and low. Else, it adds up all the rows.
    //while( #score == true)
    if( "#checkbox" == true)
    {
        //search each row and take out highest and lowest
        
    }
    else
    {
        $dataRows.each(function()
        {
            $(this).find('.datarow').each(function(i)
            {
                totals[i] +=parseInt( $(this).html());
            });
        });
        
        $("#tablecal td.totalCol").each(function(i)
        {
          $(this).html("total:"+totals[i]);  
        });
    }

});
