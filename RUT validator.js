var rut = "19315750";
var dv = 5;
var series = [2, 3, 4, 5, 6, 7, 2, 3, 4];
var total = 0;
var mod = 0;

var rutSplit = rut.split("");
rutSplit.reverse();
rutSplit.join("");

for (var i = 0; i < rut.length; i++) {
	total += rutSplit[i]*series[i];
}

mod = (Math.floor(total / 11))*11;

if (dv == (11 - (total - mod))) {
	console.log("El rut es valido.");
}
else {
	console.log("El rut no es valido");
}