<!--this page is for displaying the ranks in order-->
<!--work in progress-->
<?php
$servername = "localhost";
$username = "Twigster";
$password = "mickey";
$dbname = "karate";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT FROM ";
$result = $conn->query($sql);

if ($result->num_rows > 0) 
    {
    echo "<table><tr><th>Points</th><th>ID</th><th>Name</th><th>Dojo</th>></tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) 
    {
        echo "<tr><td>".$row["Points"]."</td><td>".$row["ID"]."</td><td>".$row["Firstname"]."</td><td>".$row["Dojo"]."</td><td>".$row["Dojo"]."</td></tr>";
    }
    echo "</table>";
    } 
    else
    {
        echo "0 results";
    }
$conn->close();
?>