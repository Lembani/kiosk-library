// js code goes here .. 
// LS
$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 

    $('.alert-success').hide(); 
    $('.alert-info').hide();   
    $('.log-s-a').hide();
    $('.log-n').hide();
    $('.mainCat').hide();

    $('.mainCat').click(function(){
        $(this).show();
    });
    //borrow
    $('#brrw').click(function(){
        $('#bk-1').hide(1000);
        $('.alert-success').show(1000);
        $('.modal-footer').hide();
    });
    //reserve
    $('#rsv').click(function(){
        $('#bk-1').hide(1000);
        $('.alert-success').show(1000);
        $('.modal-footer').hide();
    });
    //log-in
    $('#log-y').click(function(){
        $('#log-q').hide();
        $('.login-body').hide();
        $('.log-s-a').show(1000);
        $('.log-n').show();
    });
    //log out
    $('#log-f').click(function(){
        $('#lo-q').show();
        $('.alert-info').show(1000);
        $('.log-n').hide();

    });
    $('#lo-true').click(function(){
        $('.alert-info').show(1000);
        $('.log-n').hide();
        $('#log-q').show();
    });
    //$('#borrow').hover(function(){
       // alert('Click to borrow');
    //})

});
/*
function validate(){ 
    var sid = document.forms["RegForm"]["stdID"];
    var password = document.forms["RegForm"]["Password"]; 

    if (sid.value == "" || password.value.length < 10 || password.value.length > 10){ 
        window.alert("Please enter the correct Student ID"); 
        stdId.focus(); 
        return false; 
    } 

    if (password.value == ""){ 
        window.alert("Please enter the password"); 
        password.focus(); 
        return false; 
    } 

    return true; 
}
*/
