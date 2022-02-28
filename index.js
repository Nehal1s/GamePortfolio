var home = document.querySelector('.home');
var work = document.querySelector('.WorkFell');


//close all
$('.button').click(function (e) { 
    Slideback();
    $('circle').removeClass('anim');

});

var topLength = 0;
var text = ""
//open one and close other
$('h2').click(function (e) { 
    Slideback();
    $('.button').css('opacity', '1');
    $(`.${e.target.className}Fell`).toggleClass('inFell');
    $('.oct').addClass('slide');
    $('.left h1').addClass('abs');
    $('.apt').css('opacity', '1');
    $('.apt').css('transform', 'translateX(0%)');
    $('.slider').css('pointer-events', "all");
    $('.slider').css('opacity', "1");
    if(e.target.className == "Projects"){ 
        topLength = 0;
        text = "PROJECTS";
    }
    else if(e.target.className == "Work") {
        topLength = 28;
        text = "WORK";
    }
    else if(e.target.className == "About") {
        topLength = 45;
        text = "ABOUT";
        $('.secondary_sec .sliderr').css('width', '70%');
        $('.higher_sec .sliderr').css('width', '62%');
        $('.college .sliderr').css('width', '86%');
    }
    else {
        topLength = 75;
        text = "CONTACT"
        $('.ContactFell div').addClass('animeeee');
    }
    $('.slider').css('top', topLength + '%');
    $('.slider h3').text(text);
});

//closing function
function Slideback() {
    $('.clock').removeClass('inFell');
    $('.oct').removeClass('slide');
    $('.button').css('opacity', '0');
    $('.left h1').removeClass('abs');
    $('.apt').css('transform', 'translateX(-20%)');
    $('.apt').css('opacity', '0');
    $('.slider').css('opacity', "0");
    $('.slider').css('pointer-events', "none");
    $('.secondary_sec .sliderr').css('width', '0%');
    $('.higher_sec .sliderr').css('width', '0%');
    $('.college .sliderr').css('width', '0%');
    $('.ContactFell div').removeClass('animeeee');


}
function abs() { 
    $('circle').toggleClass('anim');
    var no = 0;
    $('circle').addClass('anim');
    var id = setInterval(() => {
        if(no==65) clearInterval(id);
        $('#number').text(no + "%");
        no+=1;
    }, 23);
    
}

var treasure = "rand() % (max_number + 1 - minimum_number) + minimum_number";