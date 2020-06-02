var subtractProductAndSum = function(n) {
    var summ = 0;
    var mult = 1;
    var number = n.toString().split('');
for (var i = 0; i < number.length; i++) {
	summ+=Number(number[i]);
	mult*=Number(number[i]);
}
return mult - summ;
};