let questionButton = $(".questionmark");
let alert = $(".questionMarkAlertContainer").hide();
let okay = $(".okayPrompt");

questionButton.on('click',()=> {
    alert.fadeIn();
})

okay.on('click', ()=> {
    alert.fadeOut();
})