<?php

require_once('../mysqli_connect.php');

$query = "SELECT * FROM `numbers`";

$response = @mysqli_query($dbc, $query);

if ($response) {
  echo '
  <table>
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