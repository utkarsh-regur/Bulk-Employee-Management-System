<?php

include_once 'connect.php';

//if(isset($_POST['displaySend'])){
    $table =  '<table class="table table-borderless my-5">
    <thead>
    <tr>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">Email</th>
    <th scope="col">Department</th>
    <th scope="col"></th>
  </tr>
    </thead>';

    $sql = "Select * from `employees`";

    $result = mysqli_query($con, $sql);

    while($row = mysqli_fetch_assoc($result)){
        
        $id=$row["id"];
        $firstName=$row["firstName"];
        $lastName=$row["lastName"];
        $email=$row["email"];
        $departmentId=$row["departmentId"];
        
        $table.= '<tr class="table-row my-2" id="'.$id.'">

        <td><input name="firstName" class="input-field form-control" type="text" value="'.$firstName.'" required readonly/></td>
        <td><input name="lastName" class="input-field form-control" type="text" value="'.$lastName.'" required readonly/></td>
        <td><input name="email" class="input-field form-control" type="text" value="'.$email.'" required readonly/></td>
        <td><input name="departmentId" class="input-field form-control" type="text" value="'.$departmentId.'" required readonly/></td>

        <td class="actions">
             
        <button type="submit" class="edit  btn btn-sm btn-primary" value="edit"  >Edit</button>
        <button type="submit" class="save  btn btn-sm btn-secondary" value="save"  >Save</button>
        
        <button class="delete btn btn-sm btn-danger" onclick="DeleteUser('.$id.')">Delete</button>
    </td>

      </tr>';


    }
    $table.= '</table>';
    echo $table;
//}

?>




