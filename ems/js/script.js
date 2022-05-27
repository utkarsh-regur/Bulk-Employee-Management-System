//MAKE INPUT FIELDS EDITABLE ON EDIT BUTTON CLICK
$("#edit").click(function () {
  $(".input-field").each(function () {
    var inp = $(this);
    if (inp.attr("readonly")) {
      inp.removeAttr("readonly");
    } else {
      inp.attr("readonly", "readonly");
    }
  });
});

$("#edit").click(function () {
  $(".select-field").each(function () {
    var inp1 = $(this);
    if (inp1.attr("disabled")) {
      inp1.removeAttr("disabled");
    } else {
      inp1.attr("disabled", "disabled");
    }
  });
});

//SAVE INPUT FIELDS ON SAVE BUTTON CLICK
$("#save").click(function () {
  $(".input-field").each(function () {
    var inp = $(this);
    if (inp.attr("readonly")) {
      inp.addAttr("readonly");
    } else {
      inp.attr("readonly", "readonly");
    }
  });
});

$("#save").click(function () {
  $(".select-field").each(function () {
    var inp1 = $(this);
    if (inp1.attr("disabled")) {
      inp1.addAttr("disabled");
    } else {
      inp1.attr("disabled", "disabled");
    }
  });
});

//TOGGLE EDIT AND SAVE BUTTONS
$("#edit").click(function () {
  $(this).hide();
  $("#save").show();
});

$("#save").click(function () {
  $(this).hide();

  $("#edit").show();
});

//ADD NEW EMPTY ROW ON ADD BUTTON CLICK
var tbody = $("table").children("tbody");

var table = tbody.length ? tbody : $("table");

$("#new-row").click(function () {
  //Add row
  table.append(
    '<tr><td><input class="input-field" type="text" value="" readonly/></td><td><input class="input-field" type="text" value="" readonly/></td><td><input class="input-field" type="email" value="" /></td><td><select class="select-field js-example-basic-single" name="department" disabled><option value="it">IT</option><option value="management">HR</option><option value="hr">MANAGEMENT</option></select></td><td><button class="edit" id="edit">Edit</button><button type="submit" class="save" value="save" id="save" >Save</button><button id="edit">Delete</button></td></tr>'
  );
});
