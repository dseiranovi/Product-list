<?php
include('connection.php');


    // class that managgmenting functions for handleRequest class
class contentManagment {

    public $connection;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }
    //this function is receives data from action.php to insert query in books
     table
    public function addBook(string $sku, string $name, float $price, float $weight) {
        $query = "INSERT INTO `books` (`sku`, `name`, `price`, `weight`) VALUES ('$sku', '$name', '$price', '$weight');";
        return $this->connection->query($query);
    }
    //this function is receives data from action.php to insert query in disks table
    public function addDisk(string $sku, string $name, float $price, int $size) {
        var_dump($sku, $name, $price, $size);
        $query = "INSERT INTO `disks` (`sku`, `name`, `price`, `size`) VALUES ('$sku', '$name', '$price', '$size');";
        return $this->connection->query($query);
    }

    //this function is receives data from action.php to insert query in furnitures table
    public function addFurniture(string $sku, string $name, float $price, float $height,float $width,float $lenght) {
        $query = "INSERT INTO `furnitures` (`sku`, `name`, `price`, `height`,`width`,`lenght`) VALUES ('$sku', '$name', '$price', '$height','$width','$lenght');";
        return $this->connection->query($query);
    }

// this books getind all disks from books table
    public function getAllBooks(){
        $query = "SELECT * FROM `books`;";
        $result = $this->connection->query($query);
        $numRows = $result->num_rows;
        if($numRows > 0){
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }}

    // this disks getind all disks from furnitures table
    public function getAllDisks(){
        $query = "SELECT * FROM `disks`;";
        $result = $this->connection->query($query);
        $numRows = $result->num_rows;
        if($numRows > 0){
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }}

        // this function getind all furnitures from furnitures table
    public function getAllFurnitures(){
        $query = "SELECT * FROM `furnitures`;";
        $result = $this->connection->query($query);
        $numRows = $result->num_rows;
        if($numRows > 0){
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }}

        // deletegin items from tables $type is name of tabel and $ids value of checked ids
    public function deleteByType(string $type, string $ids){
        $query = "DELETE FROM `$type` WHERE id IN ($ids)";
        $result = $this->connection->query($query);
        return $result;
    }


}
$dbConnection = new dbh();
$mysqli = $dbConnection->connect();
$contentManagment = new contentManagment($mysqli);