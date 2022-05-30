<?php include_once 'connect.php';

$id= $_POST['deleteidSend'];
if(isset($_POST['deleteidSend'])){
echo 'dsgfrb';
    $sql = "delete from `employees` where id={$id}";

    $result = mysqli_query($con, $sql);
}

?>