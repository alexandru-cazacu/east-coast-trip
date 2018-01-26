<?php
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "east-coast-trip";
    $table = "places";

    $cityID = "-1";
    if (isset($_GET["id"])) {
        $cityID = $_GET["id"];
    }

    $connection = mysqli_connect($host, $user, $pass, $db);
    if (!$connection)
        die("Connection failed: " . mysqli_connect_error());

    if ($cityID == "-1")
        $sql = "SELECT * FROM " . $table;
    else
        $sql = "SELECT * FROM " . $table . " WHERE ID = " . $cityID;

    $result = mysqli_query($connection, $sql);

    $resultAsJson = array();

    if (mysqli_num_rows($result) > 0) {
        $i = 0;
        while($row = mysqli_fetch_assoc($result)) {
            $resultAsJson[$i] = [
                "id" => $row["ID"],
                "name" => $row["city_name"],
                "nick" => $row["city_nick"],
                "desc" => $row["city_desc"],
                "urlSmall" => $row["city_thumb_url"],
                "urlBig" => $row["city_bg_url"],
                "places" => [
                    0 => [
                        "name" => $row["place1_name"],
                        "desc" => $row["place1_desc"],
                        "url" => $row["place1_img_url"]
                    ],
                    1 => [
                        "name" => $row["place2_name"],
                        "desc" => $row["place2_desc"],
                        "url" => $row["place2_img_url"]
                    ],
                    2 => [
                        "name" => $row["place3_name"],
                        "desc" => $row["place3_desc"],
                        "url" => $row["place3_img_url"]
                    ]
                ]
            ];
            $i++;
        }
    }

    mysqli_close($connection);

    header('Access-Control-Allow-Origin: *', false);
    header('Content-type: application/json', false);
    echo json_encode($resultAsJson, JSON_UNESCAPED_UNICODE);
    // header("Content-Type: text/html; charset=utf-8");
    // echo var_dump($resultAsJson);
?>
