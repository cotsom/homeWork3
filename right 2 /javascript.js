for (var i = 0; i <= 10; i++) {
	if (i == 0) {
		alert(i + ' - это ноль');
	}

	if ( (i % 2 == 0) && (!(i == 0)) ){
		alert(i + '  - четное');
	}else if(!(i % 2 == 0)){
		alert(i + '  - нечетное');
	}
}