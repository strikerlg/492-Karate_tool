<?php


$con = mysqli_connect('107.147.40.137','root','mickey456','TKACONT');
//if(!$con){
//    die('Could not connect: ' . mysqli_error($con));
//}

//mysqli_select_db($con,"TKACONT");
//$sql="SELECT Firstname,Lastname,Kata FROM Contestant ORDER BY Kata DESC";
//$result = mysqli_query($con,$sql);

//echo '<response>';
//echo "<table>
//<tr>
//<th>Points</th>
//<th>Firstname</th>
//<th>Lastname</th>";
////while loop right here
//while($row = mysqli_fetch_array($result))
//{
//    echo "<tr>";
//    echo "<td>" . $row['Kata'] .  "</td>";
//    echo "<td>" . $row['Firstname'] . "</td>";
//    echo "<td>" . $row['Lastname'] .  "</td>";
//    echo "</tr>";
//}
//
//echo "</table>";
//echo '</response>';

$result = mysql_query("SELECT Firstname,Lastname,Kata FROM Contestant ORDER BY Kata DESC",$con) or die (mysql_error());
$resultArray = mysql_fetch_row($result);
echo json_encode($value);


mysqli_close($con);
?>