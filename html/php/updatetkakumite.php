<?php
    $first = $_POST['first'];
    $second = $_POST['second'];
    $third = $_POST['third'];
    $fourth = $_POST['fourth'];

    $user = 'root'; 
    $pass = 'mickey456';

    $dbh = new PDO('mysql:host=localhost;dbname=TKA_Contestant', $user, $pass);

    $sth = $dbh->prepare("UPDATE Contestant SET kumite = kumite + 4 WHERE ID='$first'");
    $sth->execute();

    $sth1 = $dbh->prepare("UPDATE Contestant SET kumite = kumite + 3 WHERE ID='$second'");
    $sth1->execute();

    $sth2 = $dbh->prepare("UPDATE Contestant SET kumite = kumite + 2 WHERE ID='$third'");
    $sth2->execute();

    $sth3 = $dbh->prepare("UPDATE Contestant SET kumite = kumite + 1 WHERE ID='$fourth'");
    $sth3->execute();

    echo "Successfully Updated TKA Kumite Table";

    $sth = null;
    $sth1 = null;
    $sth2 = null;
    $sth3 = null;
    $sth4 = null;
    $dbh = null;

?>