<?php
    $routes =
        [
            "New York" =>
                [ 
                    "Chicago" => 
                        [
                            "airplane" => ["costo"=>80,"durata"=>2]
                        ]
                    ,
                    "Los Angeles" => 
                        [
                            "bus" => ["costo"=>170,"durata"=>64],
                            "airplane" => ["costo"=>200,"durata"=>6]
                        ],
                    "Philadelphia" => 
                        [
                            "bus" => ["costo"=>15,"durata"=>2],
                            "train" => ["costo"=>40,"durata"=>1]
                        ]
                ],
            "Philadelphia" =>
                [ 
                    "New York" => 
                        [
                            "bus" => ["costo"=>15,"durata"=>2],
                            "train" => ["costo"=>40,"durata"=>1]
                        ]
                    ,
                    "Chicago" => 
                        [
                            "airplane" => ["costo"=>150,"durata"=>2]
                        ],
                    "Washington" => 
                        [
                            "bus" => ["costo"=>25,"durata"=>3],
                            "train" => ["costo"=>45,"durata"=>2]
                        ]
                ],
            "Washington" =>
                [ 
                    "Philadelphia" => 
                        [
                            "bus" => ["costo"=>25,"durata"=>3],
                            "train" => ["costo"=>45,"durata"=>2]
                        ]
                    ,
                    "Chicago" => 
                        [
                            "airplane" => ["costo"=>110,"durata"=>2]
                        ],
                    "New Orleans" => 
                        [
                            "bus" => ["costo"=>30,"durata"=>100],
                            "train" => ["costo"=>160,"durata"=>26]
                        ]
                ],      
            "New Orleans" =>
                [ 
                    "Washington" => 
                        [
                            "bus" => ["costo"=>30,"durata"=>100],
                            "train" => ["costo"=>160,"durata"=>26]
                        ],
                    "Chicago" => 
                        [
                            "bus" => ["costo"=>21,"durata"=>80],
                            "airplane" => ["costo"=>80,"durata"=>2.5]
                        ],
                    "Los Angeles" => 
                        [
                            "bus" => ["costo"=>150,"durata"=>36]
                        ]
                ],
            "Los Angeles" =>
                [ 
                    "New York" => 
                        [
                            "bus" => ["costo"=>170,"durata"=>64],
                            "airplane" => ["costo"=>200,"durata"=>6]
                        ],
                    "Chicago" => 
                        [
                            "bus" => ["costo"=>100,"durata"=>43],
                            "airplane" => ["costo"=>130,"durata"=>4]
                        ],
                    "Seattle" => 
                        [
                            "bus" => ["costo"=>100,"durata"=>24],
                            "airplane" => ["costo"=>130,"durata"=>2.5]
                        ],
                    "New Orleans" => 
                        [
                            "bus" => ["costo"=>150,"durata"=>36]
                        ]
                ],
            "Seattle" =>
                [ 
                    "Chicago" => 
                        [
                            "bus" => ["costo"=>135,"durata"=>44],
                            "airplane" => ["costo"=>180,"durata"=>4]
                        ],
                    "Los Angeles" => 
                        [
                            "bus" => ["costo"=>100,"durata"=>24],
                            "airplane" => ["costo"=>130,"durata"=>2.5]
                        ]
                ],
            "Chicago" =>
                [ 
                    "New York" => 
                        [
                            "airplane" => ["costo"=>80,"durata"=>2]
                        ]
                    ,
                    "Philadelphia" => 
                        [
                            "airplane" => ["costo"=>150,"durata"=>2]
                        ],
                    "Seattle" => 
                        [
                            "bus" => ["costo"=>135,"durata"=>44],
                            "airplane" => ["costo"=>180,"durata"=>4]
                        ],
                    "New Orleans" => 
                        [
                            "bus" => ["costo"=>21,"durata"=>80],
                            "airplane" => ["costo"=>80,"durata"=>2.5]
                        ],
                    "Los Angeles" => 
                        [
                            "bus" => ["costo"=>100,"durata"=>43],
                            "airplane" => ["costo"=>130,"durata"=>4]
                        ],
                    "Washington" => 
                        [
                            "airplane" => ["costo"=>110,"durata"=>2]
                        ]
                ]
        ];

    $cityNames = [
        "New York",
        "Philadelphia",
        "Chicago",
        "Washington",
        "New Orleans",
        "Los Angeles",
        "Seattle"];
        
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
    $_cityNodes[6][2] = 1;
    $_cityNodes[6][5] = 1;

    // Start and end points.
    $firstNodeIndex = 0;
    $lastNodeIndex = 3;
    
    // echo '<br />From <a href="guide.php?city=' . $cityNames[$firstNodeIndex] . '" class="city">' . $cityNames[$firstNodeIndex] . '</a> to <a href="guide.php?city='. $cityNames[$lastNodeIndex] . '" class="city">' . $cityNames[$lastNodeIndex] . '</a>';
    
    $finalPath = array();
    for ($i = 0; $i < count($cityNames); $i++) {
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
        // if ($S[$lastNodeIndex][1] < 10) {
        //     echo "<br />==================================================";
        //     echo "<br />The length is ". $S[$lastNodeIndex][1];
        //     echo "<br />Path is ";
            
        //     // $routes[$_GET['from']][$_GET['to']][$modes[$i]]["costo"];

        //     for ($j = 0; $j < count($path); $j++) {
        //         echo $cityNames[$path[$j]] . " --> ";
        //     }
        //     echo "<br />==================================================";
        // }
            
        $_cityNodes[$path[count($path) - 2]][$lastNodeIndex] = 100;

        if ($S[$lastNodeIndex][1] < 10) {
            for($j = 0; $j < count($path); $j++) {
                $path[$j] = $cityNames[$path[$j]];
            }

            $finalPath[$i] = $path;
        }
    }

    header('Content-type: application/json');
    echo json_encode($finalPath);
?>