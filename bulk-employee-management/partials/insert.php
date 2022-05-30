<?php include_once 'connect.php';


$fname= $_POST['fnameSend'];
$lname= $_POST['lnameSend'];
$email= $_POST['emailSend'];
$departmentId= $_POST['departmentIdSend'];

if(isset($_POST['fnameSend']) && isset($_POST['lnameSend']) && isset($_POST['emailSend']) && isset($_POST['departmentIdSend'])){
   echo 'inside';
    $sql = "insert into `employees` (firstName, lastName, email, departmentId) values ('{$fname}', '{$lname}', '{$email}', '{$departmentId}')";

    $result = mysqli_query($con, $sql);
}

?>