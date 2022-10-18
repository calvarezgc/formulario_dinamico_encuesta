<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

$question1 = $_POST["question1"]
$question2 = $_POST["question2"]
$question3 = $_POST["question3"]
$nombre = $_POST["name"]
$email = $_POST["Email"]
$tel= $_POST["Tel"]
$terms = $_POST["condiciones"]

$data = [$question1, $question2, $question3, $nombre, $email, $tel, $terms];

if($question1 == "" || $question2 == "" ||$question3 == "" || $nombre == ""|| $email == "" || $tel == "" || $terms == ""){
  echo json_encode(false);
}else{
  echo json_encode($data);
}