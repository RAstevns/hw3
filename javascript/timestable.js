
function generateTable(event){
    console.log("Generating table");

    // prevent page from refreshing
    event.preventDefault();
    
    // get values from form
    var mincol = document.getElementsByName("mincol")[0].value;
    var maxcol = document.getElementsByName("maxcol")[0].value;
    var minrow = document.getElementsByName("minrow")[0].value;
    var maxrow = document.getElementsByName("maxrow")[0].value;

    var tablecontainer = document.getElementById("table-container");
    var table = document.createElement("table");

    // validate values
    if(mincol > maxcol || minrow > maxrow){
        alert("Minimum values must be less than Maximum values.");
        return;
    }
    if(mincol < -50 || maxcol < -50 || minrow < -50 || maxrow < -50){
        alert("Values must be greater than -50.");
        return;
    }
    if(mincol > 50 || maxcol > 50 || minrow > 50 || maxrow > 50){
        alert("Values must be less than 50.");
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
        headercolumn.innerHTML = i;
        row.appendChild(headercolumn);

        for(var j = mincol; j <= maxcol; j++){
            var cell = document.createElement("td");
            cell.innerHTML = i * j;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    
    
    // remove old table
    if(tablecontainer.contains(document.getElementsByTagName("table")[0])){
        tablecontainer.removeChild(document.getElementsByTagName("table")[0]);
    }

    // append new table
    tablecontainer.appendChild(table);
}
