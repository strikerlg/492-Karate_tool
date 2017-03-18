
<?php

$value = $_POST['clickBtnValue'];

    switch ($value) 
    {
        case 'tkakata':
            tkakata();
            break;
        case 'tkakumite':
            tkakumite();
            break;
        case 'pkckata':
            pkckata();
            break;
        case 'pkckumite':
            pkckumite();
            break;
        case 'aaukata':
            aaukata();
            break;
        case 'aaukumite':
            aaukumite();
            break;
        default:
            defaultfunc();
            break;
    }


function tkakata() {
    $user = 'root'; 
    $pass = 'mickey456';

    $dbh = new PDO('mysql:host=localhost;dbname=TKA_Contestant', $user, $pass);

    $sth = $dbh->prepare("SELECT firstname, lastname, dojo, kata FROM Contestant ORDER BY kata DESC");
    $sth->execute();

    $result = $sth->fetchAll();
    echo json_encode($result);

    $sth = null;
    $dbh = null;
}

function tkakumite() {
    $user = 'root'; 
    $pass = 'mickey456';

    $dbh = new PDO('mysql:host=localhost;dbname=TKA_Contestant', $user, $pass);

    $sth = $dbh->prepare("SELECT firstname, lastname, dojo, kumite FROM Contestant ORDER BY kumite DESC");
    $sth->execute();

    $result = $sth->fetchAll();
    echo json_encode($result);

    $sth = null;
    $dbh = null;
}

function pkckata() {
    $user = 'root'; 
    $pass = 'mickey456';

    $dbh = new PDO('mysql:host=localhost;dbname=PKC_Contestant', $user, $pass);

    $sth = $dbh->prepare("SELECT firstname, lastname, dojo, kata FROM Contestant ORDER BY kata DESC");
    $sth->execute();

    $result = $sth->fetchAll();
    echo json_encode($result);

    $sth = null;
    $dbh = null;
}

function pkckumite() {
    $user = 'root'; 
    $pass = 'mickey456';

    $dbh = new PDO('mysql:host=localhost;dbname=PKC_Contestant', $user, $pass);

    $sth = $dbh->prepare("SELECT firstname, lastname, dojo, kumite FROM Contestant ORDER BY kumite DESC");
    $sth->execute();

    $result = $sth->fetchAll();
    echo json_encode($result);

    $sth = null;
    $dbh = null;
}

function aaukata() {
    $user = 'root'; 
    $pass = 'mickey456';

    $dbh = new PDO('mysql:host=localhost;dbname=AAU_Contestant', $user, $pass);

    $sth = $dbh->prepare("SELECT firstname, lastname, dojo, kata FROM Contestant ORDER BY kata DESC");
    $sth->execute();

    $result = $sth->fetchAll();
    echo json_encode($result);

    $sth = null;
    $dbh = null;
    
}

function aaukumite() {
    $user = 'root'; 
    $pass = 'mickey456';

    $dbh = new PDO('mysql:host=localhost;dbname=AAU_Contestant', $user, $pass);

    $sth = $dbh->prepare("SELECT firstname, lastname, dojo, kumite FROM Contestant ORDER BY kumite DESC");
    $sth->execute();

    $result = $sth->fetchAll();
    echo json_encode($result);

    $sth = null;
    $dbh = null;
}

function defaultfunc() {
    echo "ooops";
}
?>