<?php
    $first = $_POST['first'];
    $second = $_POST['second'];
    $third = $_POST['third'];
    $fourth = $_POST['fourth'];

    $user = 'root'; 
    $pass = 'mickey456';

    $dbh = new PDO('mysql:host=localhost;dbname=PKC_Contestant', $user, $pass);

    $sth = $dbh->prepare("UPDATE Contestant SET kata = kata + 4 WHERE ID='$first'");
    $sth->execute();

    $sth1 = $dbh->prepare("UPDATE Contestant SET kata = kata + 3 WHERE ID='$second'");
    $sth1->execute();

    $sth2 = $dbh->prepare("UPDATE Contestant SET kata = kata + 2 WHERE ID='$third'");
    $sth2->execute();

    $sth3 = $dbh->prepare("UPDATE Contestant SET kata = kata + 1 WHERE ID='$fourth'");
    $sth3->execute();

    echo "Successfully Updated PKC Kata Table";

    $sth = null;
    $sth1 = null;
    $sth2 = null;
    $sth3 = null;
    $sth4 = null;
    $dbh = null;

?>