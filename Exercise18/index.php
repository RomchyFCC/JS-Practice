<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="./style.css">
</head>
<?php

require_once('../mysqli_connect.php');

$query = "SELECT * FROM `numbers`";
$queryBalance = "SELECT * FROM `balance`";

$response = @mysqli_query($dbc, $query);
$responseBalance = @mysqli_query($dbc, $queryBalance);

?>
<body>
  <div class="wrapper">
    <div class="new-combo">
      <form class="form" method="POST" action="./handlePost.php">
        <p>New Combo: 
          <input class="num one" type="number" name="number_one">
          <input class="num two" type="number" name="number_two">
          <input class="num three" type="number" name="number_three">
          <input class="num four" type="number" name="number_four">
          <input class="num five" type="number" name="number_five">
          <input class="num six" type="number" name="number_six">
          <input class="num seven" type="number" name="number_seven">
        </p>
        <input type="submit" name="submit" value="Insert">
      </form>
    </div>
    <div class="balance">
      <form class="form" method="POST" action="./handleBalance.php">
        <input type="number" name="balance">
        <span>eur</span>
        <input type="submit" name="submit" value="Update">
      </form>
      <span>Balance: </span>
      <input id="balanceInput" type="number" disabled>
      <span>eur</span>
    </div>
    <div class="generate">
      <input type="button" id="generate" value="Generate new combo">
      <input class="display num one" type="number" disabled>
      <input class="display num two" type="number" disabled>
      <input class="display num three" type="number" disabled>
      <input class="display num four" type="number" disabled>
      <input class="display num five" type="number" disabled>
      <input class="display num six" type="number" disabled>
      <input class="display num seven" type="number" disabled>
    </div>
    <div id="results">
    </div>
  </div>
  <?php 
  if ($responseBalance) {
    echo '
    <table id="tableBalance">
      <tr>
        <td><b>id</b></td>
        <td><b>date</b></td>
        <td><b>balance</b></td>
      </tr>';
  
    while ($rowB = mysqli_fetch_array($responseBalance)) {
      echo '<tr>
      <td>' . $rowB['id'] . '</td>' .
      '<td>' . $rowB['date'] . '</td>' .
      '<td>' . $rowB['new_balance'] . '</td>';
      echo '</tr>';
    }
  
    echo '</table>';
  } else {
  
    echo "Couldn't issue db query" . mysqli_error($dbc);
  
  }
  if ($response) {
    echo '
    <table id="table">
      <tr>
        <td><b>id</b></td>
        <td><b>one</b></td>
        <td><b>two</b></td>
        <td><b>three</b></td>
        <td><b>four</b></td>
        <td><b>five</b></td>
        <td><b>six</b></td>
        <td><b>seven</b></td>
      </tr>';
  
    while ($row = mysqli_fetch_array($response)) {
      echo '<tr>
      <td>' . $row['id'] . '</td>' .
      '<td>' . $row['number_one'] . '</td>' .
      '<td>' . $row['number_two'] . '</td>' .
      '<td>' . $row['number_three'] . '</td>' .
      '<td>' . $row['number_four'] . '</td>' .
      '<td>' . $row['number_five'] . '</td>' .
      '<td>' . $row['number_six'] . '</td>' .
      '<td>' . $row['number_seven'] . '</td>';
      echo '</tr>';
    }
  
    echo '</table>';
  } else {
  
    echo "Couldn't issue db query" . mysqli_error($dbc);
  
  }
  mysqli_close($dbc);

  ?>
  <script src="./script.js"></script>
</body>