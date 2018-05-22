var prost = 0;
function proverka(a){
	for (var i = 2; i < a; i++) {
		if (a % i == 0){
			prost = 0;
			break;
		}else{
			prost = 1;
			return a;
		}
	}
}
var x = 1;
while(x <= 100){
	if (x == 1){
		alert(x + ' - простое');
		continue itt;
	}
	proverka(x);
	if (prost == 1){
		alert(x + ' - простое');
	}else{
	alert(x + ' - не простое');
	}
	itt: x++;
	prost = 0;
}