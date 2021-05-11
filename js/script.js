

// ------- NAVIGATION -------

const get = element => document.getElementById(element);

let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");

open.addEventListener('click', ()=> {
    nav.classList.add('open-nav');
})

exit.addEventListener('click', ()=> {
    nav.classList.remove('open-nav');
})


// -------- ALL RECIPES ---------

	
	$.getJSON('/pages/data.json', function(data) {
		var output = '<div class="cards">';
		$.each(data, function(key, val) {
				output += '<h3>' + val.cocktailname + '</h3>';
                output += '<ul>';
                output += '<li>' + val.recipe + '</li>';
                output += '<li>' + val.prep + '</li>';
                output += '<li>' + 'Served: ' + val.served + '</li>';
                output += '<li>' + 'Garnished with: ' +  val.garnish + '</li>';
                output += '</ul>';

			});
		output += '</div>';
		$('#cards').html(output);
	}); //get JSON

// //---------- SEARCH PAGE ---------

$('#searchInfo').keyup(function() {
    var searchField = $('#searchInfo').val();
    var myExp = new RegExp(searchField, "i");
    $.getJSON('/pages/data.json', function(data) {
        var output = '<ul class="searchresults">';
        $.each(data, function(key, val) {
            if ((val.cocktailname.search(myExp) != -1) || (val.recipe.search(myExp) != -1)) {
                output += '<h3>' + val.cocktailname + '</h3>';
                output += '<ul class="searchCards">';
                output += '<li>' + val.recipe + '</li>';
                output += '<li>' + val.prep + '</li>';
                output += '<li>' + 'Served: ' + val.served + '</li>';
                output += '<li>' + 'Garnished with: ' +  val.garnish + '</li>';
                output += '</ul>';
            }
        });
        output += '</ul>';
        $('#update').html(output);
    }); //get JSON

});

//-------- GSAP --------

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(SplitText, ScrollTrigger);

let split
let animation = gsap.timeline({repeat:-1, yoyo:true, repeatDelay:0.3})

function init() {
	gsap.set(".title", {autoAlpha:1})
	split = new SplitText(".title", {type:"chars"})
	animation.from(split.chars, {opacity:0, y:25, ease:"back(4)", stagger:0.05})
	GSDevTools.create({animation:animation})
}

window.addEventListener("load", init);

gsap.to("label", {
    text:{
        value:"Request info about a cocktail...",
        delimiter: "",}, //no space effect enters letter by letter
        // text:{
        //     value:"welcome to the typewriter effect with GSAP 3",
        //     delimiter: " ",}, with a single space the effect enters word by word
        ease:"power1.in", 
        duration: 2, 
        repeat:-1, 
        yoyo:true, 
        repeatDelay:0.3
    });