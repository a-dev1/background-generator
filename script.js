var css = document.querySelector(".output");
var picker1 = document.querySelector(".color1");
var picker2 = document.querySelector(".color2");
var area = document.querySelector("#gradient");

function bc_setter() {
	area.style.background = "linear-gradient(to right," + picker1.value + "," + picker2.value;

	css.textContent = area.style.background;
	// css.textContent = "linear-gradient" + "(" + picker1.value + "," + picker2.value + ")";
}

picker1.addEventListener("input", bc_setter);
picker2.addEventListener("input", bc_setter);