
function generateTable(event){
    console.log("Generating table");

    // prevent page from refreshing
    event.preventDefault();
    
    // get values from form
    var mincol = document.getElementsByName("mincol")[0].value;
    var maxcol = document.getElementsByName("maxcol")[0].value;
    var minrow = document.getElementsByName("minrow")[0].value;
    var maxrow = document.getElementsByName("maxrow")[0].value;
    var table = document.createElement("table");
    
    // validate values
    if(mincol > maxcol || minrow > maxrow){
        alert("Minimum values must be less than Maximum values.");
        return;
    }
    if(mincol < -100 || maxcol < -100 || minrow < -100 || maxrow < -100){
        alert("Values must be greater than -100.");
        return;
    }
    if(mincol > 100 || maxcol > 100 || minrow > 100 || maxrow > 100){
        alert("Values must be less than 100.");
        return;
    }

    // header row
    var headerrow = document.createElement("tr");
    var emptycell = document.createElement("td");
    headerrow.appendChild(emptycell);
    for(var i = mincol; i <= maxcol; i++){
        var cell = document.createElement("td");
        cell.innerHTML = i;
        headerrow.appendChild(cell);
    }
    table.appendChild(headerrow);


    // generate the table
    for(var i = minrow; i <= maxrow; i++){
        var row = document.createElement("tr");

        // header column
        var headercolumn = document.createElement("td");
        headercell.innerHTML = i;
        row.appendChild(headercell);

        for(var j = mincol; j <= maxcol; j++){
            var cell = document.createElement("td");
            cell.innerHTML = i * j;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    // remove old table
    if(document.body.contains(document.getElementsByTagName("table")[0])){
        document.body.removeChild(document.getElementsByTagName("table")[0]);
    }
    // append new table
    document.body.appendChild(table);
}