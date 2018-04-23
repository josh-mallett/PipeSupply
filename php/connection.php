<?php

  function Connect() {
    $server = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'pipesupply';

    $connection = new mysqli($server, $username, $password, $database) or die($connection->connect_error);

    return $connection;
  }

?>