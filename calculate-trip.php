<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>East Cost Trip</title>
</head>

<body>
    <div class="wrapper">
        <h2 class="title">Your itinerary</h2>
        <p>You chose to go from
            <a href="" class="city">
                <?php echo $_GET["from"] ?>
            </a> to
            <a href="" class="city">
                <?php echo $_GET["to"] ?>
            </a>
        </p>


        <?php
            include('cities.php');
            // echo $_GET["mode"];
            // if (isset($_GET["bus"]))
            // echo $_GET["bus"];
            // if (isset($_GET["train"]))
            // echo $_GET["train"];
            // if (isset($_GET["airplane"]))
            // echo $_GET["airplane"];

            // foreach($routes[$_GET['from']] as $name => $c) {
            //     $citta[] = $name;
            //     echo $name;
            //     echo '<br>';
            // }

            // echo var_dump($citta);
            // echo var_dump($c);

            $modes = ["bus", "train", "airplane"];

            // Scorro le città vicine a quella di partenza
            foreach($routes[$_GET['from']] as $currentNearCity => $a) {
                // Target city is neighbour
                if ($currentNearCity == $_GET['to']) {
                    for ($i = 0; $i < 3; $i++) {
                        if (isset($_GET[$modes[$i]]) && isset($routes[$_GET['from']][$_GET['to']][$modes[$i]])) {
                            echo "<b>" . $modes[$i] . "</b>";
                            echo "<br>";
                            echo "Costo: " . $routes[$_GET['from']][$_GET['to']][$modes[$i]]["costo"];
                            echo "<br>";
                            echo "Durata: " . $routes[$_GET['from']][$_GET['to']][$modes[$i]]["durata"];
                            echo "<br>";
                        }
                    }
                }

                // Scorro le città vicine alle città vicine
                foreach($routes[$currentNearCity] as $nearNearCity => $b) {
                    // Target city is neighbour of neighbour
                    if ($nearNearCity == $_GET['to']) {
                        echo $_GET['from'] . " ==> " . $currentNearCity . " ==> " . $nearNearCity;
                        echo "<br>";

                        // Controllo se il mezzo scelto esiste.
                        for ($i = 0; $i < 3; $i++) {
                            for ($j = 0; $j < 3; $j++) {
                                if (isset($_GET[$modes[$i]]) && isset($_GET[$modes[$j]])) {

                                }
                            }
                        }
                    }
                }
            }

        ?>
    </div>
</body>

</html>