//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


var firstOne = document.getElementsByClassName("name");

for(var i = 0; i<firstOne.length; i++){
 firstOne[i].addEventListener("click", showMenu);
}

function showMenu(){
var hideMenu = this.querySelectorAll(".menu")[0];
if(hideMenu.style.display === "none"){
hideMenu.style.display = "block";
}else{
	hideMenu.style.display = "none";
}
	
}