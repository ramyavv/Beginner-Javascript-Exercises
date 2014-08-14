do{
var number = window.prompt("Please enter a number between 10 and 300","10")
}
while(number < 10 || number>300 || isNaN(number));
document.write('<table>');
document.write('<tr>');
document.write('<th>' + 'A' + '</th>' + '<th>' + 'B' + '</th>' + '<th>' + 'C' + '</th>');
document.write('</tr>');
for(i=1;i<number;i++){
	for(j=i+1;j<number;j++){
		//for(k=j+1;k<number;k++){
		//	if((k*k)==(j*j)+(i*i)){
			var k = Math.sqrt(i*i+j*j);
			if (k % 1 == 0 && k < number) {
				document.write('<tr>');
				document.write('<td>' + i + '</td>');
				document.write('<td>' + j + '</td>');
				document.write('<td>' + k + '</td>');
				document.write('</tr>');

	

		}
			// }
	}
}

document.write('</table>');
console.log("Yay! you got it!");