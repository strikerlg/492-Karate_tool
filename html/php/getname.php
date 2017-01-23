<?php
$q = intval($_GET['q']);

$con = mysqli_connect('107.147.40.137','root','mickey456','TKACONT');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"TKACONT");
$sql="SELECT Firstname,Lastname FROM Contestant WHERE ID = '".$q."'";
$result = mysqli_query($con,$sql);

while($row = mysqli_fetch_array($result))
{
    echo $row['Firstname'] . "" . $row['Lastname'] ;
}

mysqli_close($con);
?>