<?php
include('contentManagment.php');

// requests handle class
class handleRequest
{


    public $contentManagment;


    public function __construct($contentManagment)
    {
        //checking if request have 'type' argument
        if (isset($_POST['type'])) {
            //witch for types // book || disk || furniture --> insert requests //  all is for select request to get data for front
            switch ($_POST['type']) {
                case 'book':
                    if ($_POST['action'] == 'add') {
                        $dbResult = $contentManagment->addBook($_POST['SKU'], $_POST['name'], $_POST['price'], $_POST['weight']);
                        if ($dbResult) {
                            echo json_encode(["message" => "book added"]);
                        } else {
                            echo json_encode(["message" => "error"]);
                        }
                    } else {
                        echo json_encode(["message" => "bad request"]);
                    }
                    break;
                case 'disk':
                    if ($_POST['action'] == 'add') {
                        $dbResult = $contentManagment->addDisk($_POST['SKU'], $_POST['name'], $_POST['price'], $_POST['size']);
                        if ($dbResult) {
                            echo json_encode(["message" => "disk added"]);
                        } else {
                            echo json_encode(["message" => "error"]);
                        }
                    } else {
                        echo json_encode(["message" => "bad request"]);
                    }
                    break;
                case 'furniture':
                    if ($_POST['action'] == 'add') {
                        $dbResult = $contentManagment->addFurniture($_POST['SKU'], $_POST['name'], $_POST['price'], $_POST['height'], $_POST['width'], $_POST['lenght']);
                        if ($dbResult) {     
                            echo json_encode(["message" => "furniture added"]);
                        } else {
                            echo json_encode(["message" => "error"]);
                        }
                    } else {
                        echo json_encode(["message" => "bad request"]);
                    }
                    break;
                case 'all':
                    if ($_POST['action'] == 'showall') {
                        $books = $contentManagment->getAllBooks();
                        $disks = $contentManagment->getAllDisks();
                        $furnitures = $contentManagment->getAllFurnitures();

                            //avoid empty databases 
                        switch (true) {
                            case ($books !== null && $disks !== null && $furnitures !== null):
                                $result = array_merge($books, $disks, $furnitures);
                                echo json_encode($result, true);
                                break;
                            case ($books !== null && $disks !== null):
                                $result = array_merge($books, $disks);
                                echo json_encode($result, true);
                                break;
                            case ($books !== null && $furnitures !== null):
                                $result = array_merge($books, $furnitures);
                                echo json_encode($result, true);
                                break;
                            case ($disks !== null && $furnitures !== null):
                                $result = array_merge($disks, $furnitures);
                                echo json_encode($result, true);
                                break;
                            case ($disks !== null):
                                $result = array_merge($disks);
                                echo json_encode($result, true);
                                break;
                            case ($books !== null):
                                $result = array_merge($books);
                                echo json_encode($result, true);
                                break;
                            case ($furnitures !== null):
                                $result = array_merge($furnitures);
                                echo json_encode($result, true);
                                break;

                        }
                        break;
                    } elseif ($_POST['action'] == 'delete') {
                        foreach($_GET as $key => $value) {
                            $contentManagment->deleteByType($key, $value);
                        } 
                        echo json_encode(["message" => "finished"]);
                    }
                    
            }
        }
    }
}

$handler = new handleRequest($contentManagment);
