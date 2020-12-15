function empty() {
    var myName = document.getElementById("validationCustom01").value;
    var myId = document.getElementById("validationCustom02").value;
    var myDept = document.getElementById("validationCustom03").value;
    var myEmail = document.getElementById("validationCustom04").value;
    var myDoj = document.getElementById("validationCustom05").value;
    if (myName === "" || myId==="" || myDept==="" || myEmail==="" || myDoj==="") {
        alert("Enter all the values");
        return false;
    }
    else{
        addRow();
        
    }
}


function addRow() {
          
    var myName = document.getElementById("validationCustom01");
    var myId = document.getElementById("validationCustom02");
    var myDept = document.getElementById("validationCustom03");
    var myEmail = document.getElementById("validationCustom04");
    var myDoj = document.getElementById("validationCustom05");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= '<button type="button" class="btn btn-danger" onClick="Javacsript:deleteRow(this)"> <i class="fas fa-times-circle"></i></button>';
    row.insertCell(1).innerHTML= myName.value;
    row.insertCell(2).innerHTML= myId.value;
    row.insertCell(3).innerHTML= myDept.value;
    row.insertCell(4).innerHTML= myEmail.value;
    row.insertCell(5).innerHTML= myDoj.value;
    $('#myform').modal( 'hide' );
 
}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}