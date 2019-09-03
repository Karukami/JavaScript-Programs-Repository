function findLargest() {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;

	if (num1 != num2) {
		document.getElementById("result").innerHTML = "The largest number is: " + Math.max(num1, num2);
	}
	else {
		document.getElementById("result").innerHTML = "The largest number is: Both are equal!";
	}
}