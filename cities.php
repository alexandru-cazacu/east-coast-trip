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
?>