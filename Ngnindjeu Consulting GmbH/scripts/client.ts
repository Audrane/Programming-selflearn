
$(function () {
    $(".rot").on("click", function () {
        $("#erst").empty();
    });
});

$(function change (){
  $('#Angestel').click(function () {
     $(this).css("backgroundColor","green");
  });

    $('#tickets').click(function () {
        $(this).css("backgroundColor","red");
    });

    $('.tablinks').click(function () {
        $(this).css("backgroundColor","yellow");
    });
});

/*
$(function change() {
    $('#tab').on("click",function() {
        $('#Angestel').css('backgroundColor',"green");
    });
    $('#tab').on("click",function() {
        $('#tickets').css('backgroundColor',"red");
    });
    $('#tab').on("click",function() {
        $('.tablinks').css('backgroundColor',"yellow");
    });
});



function change(){
    document.getElementById('defaultOpen').style.backgroundColor = "white";
   // document.getElementById('defaultOpen2').style.backgroundColor = "white";
}
*/

// @ts-ignore
jQuery($(".chosen-select").chosen({
    no_results_text: "Oops, nothing found!"
}));


