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