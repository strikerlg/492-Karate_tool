<?php
    
    $value2 = $_POST['league'];


    switch ($value2) 
    {
        case 'TKA':
            TKA();
            break;
        case 'PKC':
            PKC();
            break;
        case 'AAU':
            AAU();
            break;
        default:
            defaultfunc();
            break;
    }

function TKA() {
    $value = $_POST['IDNAME'];
    $user = 'root'; 
    $pass = 'mickey456';

    $dbh = new PDO('mysql:host=localhost;dbname=TKA_Contestant', $user, $pass);

    $sth = $dbh->prepare("SELECT firstname, lastname FROM Contestant WHERE ID='$value'");
    $sth->execute();

    $result = $sth->fetch();
    
    echo json_encode($result);



    $sth = null;
    $dbh = null;
    
}

function PKC(){
    $value = $_POST['IDNAME'];
    $user = 'root'; 
    $pass = 'mickey456';

    $dbh = new PDO('mysql:host=localhost;dbname=PKC_Contestant', $user, $pass);

    $sth = $dbh->prepare("SELECT firstname, lastname FROM Contestant WHERE ID='$value'");
    $sth->execute();

    $result = $sth->fetch();
    
    echo json_encode($result);

    

    $sth = null;
    $dbh = null;
    
}

function AAU(){
    $value = $_POST['IDNAME'];
    $user = 'root'; 
    $pass = 'mickey456';

    $dbh = new PDO('mysql:host=localhost;dbname=AAU_Contestant', $user, $pass);

    $sth = $dbh->prepare("SELECT firstname, lastname FROM Contestant WHERE ID='$value'");
    $sth->execute();

    $result = $sth->fetch();
    
    echo json_encode($result);

    

    $sth = null;
    $dbh = null;
}

function defaultfunc(){
    echo "oops";
}



    
?>