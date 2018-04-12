<?php

if(isset($_POST['submit'])) {
  if (empty($_POST['balance'])) {

    echo "\n Error: all fields are required";

  } else {
  
    $balance = $_POST['balance'];

    require_once('../mysqli_connect.php');
    $query = "INSERT INTO `balance` (new_balance, id, date) VALUES (?, NULL, NOW())";

    $stmt = mysqli_prepare($dbc, $query);

    mysqli_stmt_bind_param($stmt, "d", $balance);

    mysqli_stmt_execute($stmt);

    $affected_rows = mysqli_stmt_affected_rows($stmt);

    if ($affected_rows == 1) {
      echo 'balance updated';

      mysqli_stmt_close($stmt);

      mysqli_close($dbc);
    } else {

      echo 'ERROR MATE' . mysqli_error($dbc);
    }
  
    echo "$balance";

  }

} else {

  echo 'You need to post info to access this site';

}



?>