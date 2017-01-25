<?php

$dsn = 'mysql:host=107.147.40.137;port=80;dbname=TKACONT';
$user = 'root';
$password = 'mickey456';
$dbh = new PDO($dsn, $user, $password);

$sth = $dbh->prepare("SELECT Firstname, Lastname, Kata FROM Contestant");
$sth->execute();

$result = $sth->fetchAll();

echo json_encode($result);

?>

