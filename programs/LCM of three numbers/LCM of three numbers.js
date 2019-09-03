function LCM() {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var num3 = document.getElementById("num3").value;
	var max = Math.max(num1, num2, num3);
	var lcm = max;
	if (num1 != 0 && num2 != 0 && num3 != 0) {
		while (lcm % num1 != 0 || lcm % num2 != 0 || lcm % num3 != 0) {
			lcm++;
		}
		document.getElementById("result").innerHTML = "The LCM is: " + lcm;
	}	
}