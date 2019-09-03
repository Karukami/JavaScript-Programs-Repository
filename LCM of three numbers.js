var num1 = 712;
var num2 = 15;
var num3 = 99;

LCM(num1, num2, num3);

function LCM(num1, num2, num3) {
	var max = Math.max(num1, num2, num3);
	var lcm = max;

	while (lcm % num1 != 0 || lcm % num2 != 0 || lcm % num3 != 0) {
		lcm++;
	}

	console.log(lcm);
}