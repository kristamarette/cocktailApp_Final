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

//---------- SEARCH PAGE ---------

$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('/pages/data.json', function(data) {
		var output1 = '<div class="searchresults">';
		$.each(data, function(key, val) {
			if ((val.cocktailname.search(myExp) != -1) || val.prep.search(myExp) || val.garnish.search(myExp) || val.served.search(myExp) ||
			(val.recipe.search(myExp) != -1)) {
				output += '<h3>' + val.cocktailname + '</h3>';
                output += '<ul>';
                output += '<li>' + val.recipe + '</li>';
                output += '<li>' + val.prep + '</li>';
                output += '<li>' + 'Served: ' + val.served + '</li>';
                output += '<li>' + 'Garnished with: ' +  val.garnish + '</li>';
                output += '</ul>';
			}
		});
		output += '</div>';
		$('#update').html(output1);
	}); //get JSON
});