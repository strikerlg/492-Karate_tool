<?php
$first = $_POST['var1'];
$second = $_POST['var2'];
$third = $_POST['var3'];
$fourth = $_POST['var4'];

$con = mysqli_connect('107.147.40.137','root','mickey456','TKACONT');

if(!$con){
    die('Could not connect: ' . mysqli_error($con));
}

$sql = "UPDATE Contestant SET Kata = Kata + 4 WHERE id ='".$first."'";
$sql1 = "UPDATE Contestant SET Kata = Kata + 3 WHERE id ='".$second."'";
$sql2 = "UPDATE Contestant SET Kata = Kata + 2 WHERE id ='".$third."'";
$sql3 = "UPDATE Contestant SET Kata = Kata + 1 WHERE id ='".$fourth."'";


mysqli_query($con,$sql);
mysqli_query($con,$sql1);
mysqli_query($con,$sql2);
mysqli_query($con,$sql3);

mysqli_close($con);
?>