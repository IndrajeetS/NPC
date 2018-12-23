  function addRow(){
    $(".overflow").append("<div class='row' id='mcdp'><div class='col-12 col-md-6'><div align='left' class='margin-top'><select class='form-control content-text'><option></option><option>2</option><option>3</option><option>4</option><option>5</option>    </select></div></div><div class='col-9 col-md-4'><div align='left' class='margin-top content-text'><input type='text' id='on_hand'/></div></div><div class='col-2'><div align='left'><img class='margin-top-cancel' id='cross' src='../assets/img/icons8-cancel-filled.svg' id='cross' /> </div></div></div>");
 }
$(document).on('click','#cross',function(){
    $(this).closest('.row').remove();
    console.log("Remove-Button pressed");
})