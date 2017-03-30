<?php
    $org = $_POST['RADIO'];
    $usr = $_POST['USERNAME'];
    $psd = $_POST['PASSWORD'];
    $login_state = false; 

    $user = 'root'; 
    $pass = 'mickey456';

    $dbh = new PDO('mysql:host=localhost;dbname=Karate_Tool_Admins', $user, $pass);

    $sth = $dbh->prepare("SELECT Username, Password, Organization FROM Admins WHERE EXISTS (SELECT Username, Password, Organization FROM Admins WHERE Username='$usr' AND Password='$psd' AND Organization='$org')");
    
    if($sth->execute())
    {
        $login_state = true;
    }
    

    if($login_state == true)
    {
        echo "worked";
    }
    else
    {
        echo "wrong";
    }



    $sth = null;
    $dbh = null;
   

?>