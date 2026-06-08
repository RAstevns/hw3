
function generateTable(event){
    console.log("Generating table");

    
    // prevent page from refreshing
    event.preventDefault();
    
    // get values from form
    var mincol = Number(document.getElementsByName("mincol")[0].value);
    var maxcol = Number(document.getElementsByName("maxcol")[0].value);
    var minrow = Number(document.getElementsByName("minrow")[0].value);
    var maxrow = Number(document.getElementsByName("maxrow")[0].value);

    var form = document.getElementById("form");
    var tablecontainer = document.getElementById("table-container");
    var table = document.createElement("table");

    


    // remove old error messages
    if(form.contains(document.getElementsByTagName("p")[0])){
        form.removeChild(document.getElementsByTagName("p")[0]);
    }   

    // validate values
    var invalid = false;
    if(mincol > maxcol || minrow > maxrow){
        var errormessage = document.createElement("p");
        errormessage.innerHTML = "Minimum values must be less than Maximum values.";
        form.appendChild(errormessage);
        invalid = true;
    }
    if(mincol < -50 || maxcol < -50 || minrow < -50 || maxrow < -50){
        var errormessage = document.createElement("p");
        errormessage.innerHTML = "Values must be greater than -50.";
        form.appendChild(errormessage);
        invalid = true;
    }
    if(mincol > 50 || maxcol > 50 || minrow > 50 || maxrow > 50){
        var errormessage = document.createElement("p");
        errormessage.innerHTML = " Values must be less than 50.";
        form.appendChild(errormessage);
        invalid = true;
    }
    if(invalid) return;

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
