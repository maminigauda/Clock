function displayTime() {
	let dt = new Date();
	let hr = (dt.getHours())%12;
	let mn = dt.getMinutes();
	let sc = dt.getSeconds();
	let ms = dt.getMilliseconds();


	let tm = document.getElementById("tm");
	tm.innerHTML = (hr + ":" + mn + ":" + sc + ":" +ms);

}
setInterval(displayTime,1000);