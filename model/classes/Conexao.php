<?php

class Conexao {
    public $db;

    public function __construct() {
        $this->db = new PDO('mysql:host=localhost;dbname=renner_pdv;charset=UTF8', 'root', 'elaborata');
        
        $this->db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    }

}
