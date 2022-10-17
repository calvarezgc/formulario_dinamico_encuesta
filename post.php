<?php

$question1 = $_POST["question1"]
$question2 = $_POST["question2"]
$question3 = $_POST["question3"]
$nombre = $_POST["name"]
$email = $_POST["Email"]
$tel= $_POST["Tel"]

$data = [$question1, $question2, $question3, $nombre, $email, $tel];

if($question1 == "" || $question2 == "" ||$question3 == "" || $nombre == ""|| $email == "" || $tel == ""){
  echo json_encode(false);
}else{
  echo json_encode($data);
}