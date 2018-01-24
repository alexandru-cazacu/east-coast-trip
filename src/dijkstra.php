<?php

    $routes = [
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
        "Seattle"
    ];

    $nodesNumber = 7;

    for ($x = 0; $x < $nodesNumber; $x++) {
        for ($y = 0; $y < $nodesNumber; $y++) {
            if (isset($routes[$cityNames[$x]][$cityNames[$y]])) {                
                var_dump($routes[$cityNames[$x]][$cityNames[$y]]);
                echo "<br />";
            }
        }
    }

    //set the distance array
    $_distArr = array();
    $_distArr[1][2] = 7;
    $_distArr[1][3] = 9;
    $_distArr[1][6] = 14;
    $_distArr[2][1] = 7;
    $_distArr[2][3] = 10;
    $_distArr[2][4] = 15;
    $_distArr[3][1] = 9;
    $_distArr[3][2] = 10;
    $_distArr[3][4] = 11;
    $_distArr[3][6] = 2;
    $_distArr[4][2] = 15;
    $_distArr[4][3] = 11;
    $_distArr[4][5] = 6;
    $_distArr[5][4] = 6;
    $_distArr[5][6] = 9;
    $_distArr[6][1] = 14;
    $_distArr[6][3] = 2;
    $_distArr[6][5] = 9;

    $a = 1;
    $b = 5;

    //initialize the array for storing
    $S = array();//the nearest path with its parent and weight
    $Q = array();//the left nodes without the nearest path
    foreach(array_keys($_distArr) as $val) $Q[$val] = 99999;
    $Q[$a] = 0;

    //start calculating
    while(!empty($Q)){
        $min = array_search(min($Q), $Q);//the most min weight
        if($min == $b) break;
        foreach($_distArr[$min] as $key=>$val) if(!empty($Q[$key]) && $Q[$min] + $val < $Q[$key]) {
            $Q[$key] = $Q[$min] + $val;
            $S[$key] = array($min, $Q[$key]);
        }
        unset($Q[$min]);
    }

    //list the path
    $path = array();
    $pos = $b;
    while($pos != $a){
        $path[] = $pos;
        $pos = $S[$pos][0];
    }
    $path[] = $a;
    $path = array_reverse($path);

    //print result
    echo "<img src='http://www.you4be.com/dijkstra_algorithm.png'>";
    echo "<br />From $a to $b";
    echo "<br />The length is ".$S[$b][1];
    echo "<br />Path is ".implode('->', $path);
?>