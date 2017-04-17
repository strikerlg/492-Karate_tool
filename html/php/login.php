<?php
    //this might be the way to combat sql injection. With the prepare, ? , and the execute array
    $org = $_POST['RADIO'];

    switch ($org) 
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

function TKA(){
    $usr = $_POST['USERNAME'];
    $psd = $_POST['PASSWORD'];
   $user = 'root'; 
    $pass = 'mickey456';

    $dbh = new PDO('mysql:host=localhost;dbname=Karate_Tool_Admins', $user, $pass);

    $sqlinsert = 'TKA';


    $sth = $dbh->prepare("SELECT Username, Password, Organization, CASE WHEN Username = ? AND Password = ? THEN 'True' ELSE 'False' END AS Hasmember FROM Admins WHERE Organization = ? ");


    $sth->execute(array($usr, $psd, $sqlinsert));
    
    $result = $sth->fetchAll();
    
    echo json_encode($result);
    


    $sth = null;
    $dbh = null;  
}

function PKC(){
    $usr = $_POST['USERNAME'];
    $psd = $_POST['PASSWORD'];
   $user = 'root'; 
    $pass = 'mickey456';
    $sqlinsert = 'PKC';

    $dbh = new PDO('mysql:host=localhost;dbname=Karate_Tool_Admins', $user, $pass);


    $sth = $dbh->prepare("SELECT Username, Password, Organization, CASE WHEN Username = ? AND Password = ? THEN 'True' ELSE 'False' END AS Hasmember FROM Admins WHERE Organization = ? ");

    $sth->execute(array($usr, $psd, $sqlinsert));
    
    $result = $sth->fetchAll();
    
    echo json_encode($result);
    
    


    $sth = null;
    $dbh = null;
}

function AAU(){
    $usr = $_POST['USERNAME'];
    $psd = $_POST['PASSWORD'];
   $user = 'root'; 
    $pass = 'mickey456';
    $sqlinsert = 'AAU';

    $dbh = new PDO('mysql:host=localhost;dbname=Karate_Tool_Admins', $user, $pass);


    $sth = $dbh->prepare("SELECT Username, Password, Organization, CASE WHEN Username = ? AND Password = ? THEN 'True' ELSE 'False' END AS Hasmember FROM Admins WHERE Organization = ? ");

    $sth->execute(array($usr, $psd, $sqlinsert));
    
    $result = $sth->fetchAll();
    
    echo json_encode($result);
    
    


    $sth = null;
    $dbh = null;
}

function defaultfunc(){
    echo 'oops';
}

   
   

?>