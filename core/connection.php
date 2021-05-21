<?php


    // a class dbh for connection to server 

class dbh {


    private $host;
    private $username;
    private $password;
    private $dbname;

    public function connect(){
    $this->host = "localhost";
    $this->username = "root";
    $this->password = "";
    $this->dbname = "scandiweb";
        $conn = new mysqli($this->host,$this->username,$this->password,$this->dbname);
        return $conn;
    }
   

}
