function insert_Row() {
    //Write your code here
  var table = document.getElementById("sampleTable");
	let newrow = table.insertRow();
	let cell1 = newrow.insertCell(0);
	let cell2 = newrow.insertCell(1);

	cell1.innerHTML = "Row1 Cell1";
	cell2.innerHTML = "Row1 Cell2";
  
}
