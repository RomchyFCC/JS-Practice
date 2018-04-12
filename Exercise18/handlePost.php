<?php

if (empty($_POST['number_one']) || empty($_POST['number_two']) || empty($_POST['number_three']) || empty($_POST['number_four']) || empty($_POST['number_five']) || empty($_POST['number_six']) || empty($_POST['number_seven'])) {
  echo "\n Error: all fields are required";
} else {

  $one = $_POST['number_one'];
  $two = $_POST['number_two'];
  $three = $_POST['number_three'];
  $four = $_POST['number_four'];
  $five = $_POST['number_five'];
  $six = $_POST['number_six'];
  $seven = $_POST['number_seven'];

  require_once('../mysqli_connect.php');
  $query = "INSERT INTO `numbers` (id,number_one,number_two,number_three,number_four,number_five,number_six,number_seven ) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)";

  $stmt = mysqli_prepare($dbc, $query);

  mysqli_stmt_bind_param($stmt, "iiiiiii", $one, $two, $three, $four, $five, $six, $seven);
  mysqli_stmt_execute($stmt);

  $affected_rows = mysqli_stmt_affected_rows($stmt);
  if ($affected_rows == 1) {
    echo 'numbers updated';

    mysqli_stmt_close($stmt);

    mysqli_close($dbc);
  } else {
    echo 'ERROR MATE' . mysqli_error($dbc);
  }
  
  echo "$one $two $three $four $five $six $seven";
}


?>