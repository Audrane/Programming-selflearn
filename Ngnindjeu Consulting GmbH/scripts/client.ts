function changeBgCl(item) {
    const slides = document.getElementsByClassName('tabBtn');

    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i] as HTMLButtonElement;
        slide.style.backgroundColor = "green";
    }
    var clickedElement: HTMLButtonElement = <HTMLButtonElement>item;
    /*
    alternative anstatt die for schleife von oben mit jquery
    $('#tickets').css('backgroundColor',"green");
    $('#Angestel').css('backgroundColor',"green");
    $('#managerView').css('backgroundColor',"green");
dann in html onclick="changeBgCl(this)"
     */

    clickedElement.style.backgroundColor = "red";
}



/*
$("#selectable tr").click(function(event){
  $(this).addClass("selected").siblings().removeClass("selected");
    var myRow: HTMLTableRowElement = <HTMLTableRowElement>document.getElementById("selectable");
    myRow.style.backgroundColor="green";
});

 */
/**
 * test et change ne doivent pa etre appele dans le html
 * explicite car le onclick est deja fait dans le typscript file
 */
function test() {
    const slides = document.getElementsByClassName('tabBtn');
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i] as HTMLElement;
        slide.style.backgroundColor = "green";
    }
}

$(function change() {
    $('#Angestel').click(function () {
        test();
        /*
        ma version principale
        $('#tickets').css('backgroundColor',"green");
        $('#managerView').css('backgroundColor',"green");*/
        // $('#info').css('backgroundColor',"green");
        $(this).css("backgroundColor", "red");
    });

    $('#tickets').click(function () {
        test();
        /*
        $('#managerView').css('backgroundColor',"green");
        $('#Angestel').css('backgroundColor',"green");*/
        //$('#info').css('backgroundColor',"green");
        $(this).css("backgroundColor", "red");
    });

    $('#managerView').click(function () {
        test();
        /*
        test() et ce block font la meme chose mais test est en typescript et ce block jquery
        $('#tickets').css('backgroundColor',"green");
        $('#Angestel').css('backgroundColor',"green");
        $('#info').css('backgroundColor',"green");

         */
        $(this).css("backgroundColor", "red");
    });


    $('#info').click(function () {
        test();
        /*
        $('#tickets').css('backgroundColor',"green");
        $('#Angestel').css('backgroundColor',"green");


        $('#managerview').css('backgroundColor',"green");

         */
        $(this).css("backgroundColor", "red");
    });
});

function myFunction(id) {
    const slides = document.getElementsByClassName('un');

    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i] as HTMLSelectElement;
        if(i%2==0){

            slide.style.backgroundColor = "#dddddd";
        }
       else
            slide.style.backgroundColor = "#A9A9A9";
    }
    var selectedElement: HTMLSelectElement = <HTMLSelectElement>id;
     selectedElement.style.backgroundColor='red';
}