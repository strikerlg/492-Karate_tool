<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message1 = $_POST['questions'];
//
//$fullmessage = "Message:".$message;
//$fullmessage = wordwrap($fullmessage,70, "\r\n");
//
//$to = 'zachariah.man.of.god@gmail.com';
//$headers = "From:".$email."\r\n";
//$subject = 'karate contact';

//$result = mail($to, $subject, $fullmessage, $headers);

//echo $result;
// echo "Message sent!";
//echo $headers;
//echo $subject;
//echo $email;
//echo $message;

ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );

$from = "zachariah.man.of.god@gmail.com";
    $to = "karatetool@gmail.com";
    $subject = "Simple test for mail function";
    $message = "This is a test to check if php mail function sends out the email";
    $headers = "From:" . $from;


//if ( function_exists( 'mail' ) )
//{
//    echo 'mail() is available';
//}
//else
//{
//    echo 'mail() has been disabled';
//}
//mail($to,$subject,$message, $headers);

//echo "Sent";
if(mail($to,$subject,$message, $headers))
    {
        echo "Test email send.";
    } 
    else 
    {
        echo "Failed to send.";
    }

?>