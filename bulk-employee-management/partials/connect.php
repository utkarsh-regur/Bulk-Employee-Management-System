<?php

$con = new mysqli('localhost', 'root', '', 'ems');

if(!$con){
   die(mysqli_error($con));
}


?>