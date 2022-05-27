<?php include_once 'connect.php' ?>

<table class="table table-borderless my-5">
<thead>
<tr>
  <th scope="col">First Name</th>
  <th scope="col">Last Name</th>
  <th scope="col">Email</th>
  <th scope="col">Department</th>
  <th scope="col"></th>
</tr>
</thead>
<tbody>

<tr class="my-2">
         
         <td>
             <input class="input-field" type="text" value="first" readonly/>
         </td>
  
         <td>
             <input class="input-field" type="text" value="second" readonly/>
         </td>
     
         <td>
             <input class="input-field" type="email" value="abc@gmail.com" readonly/>
         </td>

      
         <td>
            <select class="select-field js-example-basic-single" name="department" disabled>
                <option value="it">IT</option>
                <option value="management">HR</option>
                <option value="hr">MANAGEMENT</option>
            </select>
         </td>

         <td>
             <button class="edit" id="edit">Edit</button> 
             <button type="submit" class="save" value="save" id="save" >Save</button>
             <button id="edit">Delete</button>
         </td>
 </tr>

</tbody>
</table>