<!-- file that pertains to the cal pages -->
<!-- takes the winning and stores them into the server -->
<!-- points are 1st-4pts 2nd-3pts 3rd-2pts 4th-1pt -->
<!-- most of this is pseudo code -->
<? php
$servername = "localhost";
$username = "Twigster";
$password = "Mickey456";
$dbname = "karate";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

//do the storing here
//if (#seasonbtn == true)
	// {
	// 	 store();
	// }

//function store()
{
	//this will have to change. I want the ID in them, but right now it will just give me the name
	// $first = "#first";
	// $second = "#second";
	// $third = "#third";
	//#fourth = "#fourth";

	//takes the id that the name pertains to 
	//inserts the awarded amount(points) with the place you got into the kata table

}

$conn->close();
?>