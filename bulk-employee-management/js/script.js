//INITIALIZE SELECT2
$(document).ready(function () {
  $(".js-example-basic-single").select2();
});

//ADD NEW ROW ON BTN CLICK
var newRow = `<tr class="table-row my-2">
         
<td>
    <input name="firstName" class="input-field form-control" type="text" value="" readonly/>
</td>

<td>
    <input name="lastName" class="input-field form-control" type="text" value="" readonly/>
</td>

<td>
    <input name="email" class="input-field form-control" type="email" value="" readonly/>
</td>


<td>
   <select name="departmentId" class="select-field js-example-basic-single form-select" name="department" disabled>
   <option selected value=""  disabled>--Select department --</option>
       <option value="it">IT</option>
       <option value="management">HR</option>
       <option value="hr">MANAGEMENT</option>
   </select>
</td>

<td class="actions">
<button type="submit" class="cbtn edit btn btn-sm btn-primary" value="edit"  >Edit</button>  
<button type="submit" class="cbtn save btn btn-sm btn-secondary" value="save"  >Save</button>

<button class="delete btn btn-sm btn-danger" onclick="DeleteUser()">Delete</button>
</td>
</tr>
`;

$("#add-row").click(function (e) {
  $("tbody").append(newRow);
});

//TOGGLE EDIT BUTTON
jQuery(document)
  .off("click.edit")
  .on("click.edit", "table tbody .actions .edit", function () {
    //RE-INITIALIZE SELECT2
    $(document).ready(function () {
      $(".js-example-basic-single").select2();
    });

    var btn = $(this).closest(".table-row").find(".edit");
    var btnParentRow = $(btn).parent().parent().get(0);
    $(btn).hide();
    var saveBtn = $(this).closest(".table-row").find(".save");
    $(saveBtn).show();

    var inputs = $(btnParentRow).find(".input-field");
    if (inputs.length > 0) {
      $(inputs).each(function () {
        var inp = $(this);

        if (inp.attr("readonly")) {
          inp.removeAttr("readonly");
        } else {
          inp.attr("readonly", "readonly");
        }
      });
    }

    var select = $(btnParentRow).find(".select-field");
    if (select.length > 0) {
      $(select).each(function () {
        var inp = $(this);
        if (inp.attr("disabled")) {
          inp.removeAttr("disabled");
        } else {
          inp.attr("disabled", "disabled");
        }
      });
    }
  });

//TOGGLE SAVE BUTTON
jQuery(document)
  .off("click.save")
  .on("click.save", "table tbody .actions .save", function () {
    var btn = $(this).closest(".table-row").find(".save");
    var btnParentRow = $(btn).parent().parent().get(0);
    $(btn).hide();
    var editBtn = $(this).closest(".table-row").find(".edit");
    $(editBtn).show();
    var inputs = $(btnParentRow).find(".input-field");
    if (inputs.length > 0) {
      $(inputs).each(function () {
        var inp = $(this);

        if (inp.attr("readonly")) {
          inp.removeAttr("readonly");
        } else {
          inp.attr("readonly", "readonly");
        }
      });
    }

    var select = $(btnParentRow).find(".select-field");
    if (select.length > 0) {
      $(select).each(function () {
        var inp = $(this);
        if (inp.attr("disabled")) {
          inp.removeAttr("disabled");
        } else {
          inp.attr("disabled", "disabled");
        }
      });
    }
  });

//INSERT DATA
function adduser() {
  var fname = $('table tr [name="firstName"]').last().val();
  var lname = $('table tr [name="lastName"]').last().val();
  var email = $('table tr [name="email"]').last().val();
  var departmentId = $('table tr [name="departmentId"]').last().val();
  $.ajax({
    url: "partials/insert.php",
    type: "post",
    data: {
      fnameSend: fname,
      lnameSend: lname,
      emailSend: email,
      departmentIdSend: departmentId,
    },
    success: function (data, status) {
      console.log(data);
      console.log(status);
    },
  });
}

//DELETE DATA
function DeleteUser(deleteid) {
  var deleteid = $("table tr").last().attr("id");
  $.ajax({
    url: "partials/delete.php",
    type: "post",
    data: {
      deleteidSend: deleteid,
    },
    success: function (data, status) {
      console.log(status);
      console.log(deleteid);
    },
  });
}
