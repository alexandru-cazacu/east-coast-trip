<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <?php
        //set the distance array
        $cityNames = ["New York", "Philadelphia", "Chicago", "Washington", "New Orleans", "Los Angeles", "Seattle"];
        
        $_cityNodes = array();
        $_cityNodes[0][1] = 1;
        $_cityNodes[0][2] = 1;
        $_cityNodes[0][5] = 1;
        $_cityNodes[1][0] = 1;
        $_cityNodes[1][2] = 1;
        $_cityNodes[1][3] = 1;
        $_cityNodes[2][0] = 1;
        $_cityNodes[2][1] = 1;
        $_cityNodes[2][3] = 1;
        $_cityNodes[2][4] = 1;
        $_cityNodes[2][5] = 1;
        $_cityNodes[2][6] = 1;
        $_cityNodes[3][1] = 1;
        $_cityNodes[3][2] = 1;
        $_cityNodes[3][4] = 1;
        $_cityNodes[4][2] = 1;
        $_cityNodes[4][3] = 1;
        $_cityNodes[4][5] = 1;
        $_cityNodes[5][0] = 1;
        $_cityNodes[5][2] = 1;
        $_cityNodes[5][4] = 1;
        $_cityNodes[5][6] = 1;
        $_cityNodes[1][2] = 1;
        $_cityNodes[1][5] = 1;
        
        // Start and end points.
        $firstNodeIndex = 0;
        $lastNodeIndex = 2;
        
        echo '<br />From <a href="" class="city">' . $cityNames[$firstNodeIndex] . '</a> to <a href="" class="city">' . $cityNames[$lastNodeIndex] . '</a>';

        for ($i = 0; $i < 3; $i++) {
            //initialize the array for storing
            $S = array(); //the nearest path with its parent and weight
            $Q = array(); //the left nodes without the nearest path
            foreach(array_keys($_cityNodes) as $val)
                $Q[$val] = 99999;
            $Q[$firstNodeIndex] = 0;

            //start calculating
            while(!empty($Q)) {
                $min = array_search(min($Q), $Q);//the most min weight
                if($min == $lastNodeIndex) break;
                foreach($_cityNodes[$min] as $key => $val) {
                    if(!empty($Q[$key]) && $Q[$min] + $val < $Q[$key]) {
                        $Q[$key] = $Q[$min] + $val;
                        $S[$key] = array($min, $Q[$key]);
                    }
                }
                unset($Q[$min]);
            }

            //list the path
            $path = array();
            $pos = $lastNodeIndex;
            while($pos != $firstNodeIndex){
                $path[] = $pos;
                $pos = $S[$pos][0];
            }
            $path[] = $firstNodeIndex;
            $path = array_reverse($path);

            // Prints result.
            if ($S[$lastNodeIndex][1] < 10) {
                echo "<br />==================================================";
                echo "<br />The length is ". $S[$lastNodeIndex][1];
                echo "<br />Path is ";
                
                // $routes[$_GET['from']][$_GET['to']][$modes[$i]]["costo"];

                for ($j = 0; $j < count($path); $j++) {
                    echo $cityNames[$path[$j]] . " --> ";
                }
                echo "<br />==================================================";
            }
                
            $_cityNodes[$path[count($path) - 2]][$lastNodeIndex] = 100;
        }
    ?>
</body>
</html>