<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "east-coast-trip";
$table = "places";

// Create connection
$conn = mysqli_connect($host, $user, $pass, $db);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT ID, city_name, city_img_url FROM places";
$result = mysqli_query($conn, $sql);

$resultJson = array();

if (mysqli_num_rows($result) > 0) {
    $i = 0;
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        // echo "id: " . $row["ID"] . " - Name: " . $row["city_name"] . "URL: " . $row["city_img_url"] . "<br>";
        // $resultJson[0][$row["city_name"]] = $row["city_img_url"];
        $resultJson[$i] = array(
            "id" => $row["ID"],
            "name" => $row["city_name"],
            "url" => $row["city_img_url"]
        );
        $i++;
    }
} else {
    // echo "0 results";
}

mysqli_close($conn);

header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
echo json_encode($resultJson);
?> 