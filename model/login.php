<?php
session_start();


    require_once 'classes/Conexao.php';
    $conexao = new Conexao();
    
    $sql = "SELECT * FROM  usuarios WHERE  login = :login AND senha = SHA1(:senha)";
    
    $dados[':login'] = $_POST['login'];
    $dados[':senha'] = $_POST['senha'];
    
    $stm = $conexao->db->prepare($sql);
    
    $stm->execute($dados);
    
    $usuario = $stm->fetch();
    
    
    
    if($usuario){
        $_SESSION['usuario'] = $usuario;
        echo json_encode(TRUE);
    }else{
        echo json_encode(FALSE);
    }
    