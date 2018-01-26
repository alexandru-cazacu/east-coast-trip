<?php
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "east-coast-trip";
    $table = "places";

    $connection = mysqli_connect($host, $user, $pass, $db);
    if (!$connection)
        die("Connection failed: " . mysqli_connect_error());

    $sql = "SELECT * FROM " . $table;

    $result = mysqli_query($connection, $sql);

    $resultAsJson = array();

    if (mysqli_num_rows($result) > 0) {
        $i = 0;
        while($row = mysqli_fetch_assoc($result)) {
            $resultAsJson[$i] = [
                "id" => $row["ID"],
                "name" => $row["city_name"],
                "urlSmall" => $row["city_thumb_url"],
                "urlBig" => $row["city_bg_url"]
            ];
            $i++;
        }
    }

    mysqli_close($connection);

    header('Access-Control-Allow-Origin: *', false);
    header('Content-type: application/json', false);
    echo json_encode($resultAsJson);
?>
