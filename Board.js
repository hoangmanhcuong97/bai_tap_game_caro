const VALUE_EMPTY = 1;
const VALUE_X = 2;
const VALUE_O = 3;


function render(row, column) {
        let resume = "<table cellpadding='0' cellspacing='0'>";
        for (let i = 0; i < row; i++) {
            resume += "<tr>";
            for (let j = 0; j < column; j++) {
                resume += "<td>";
                resume += "<button id='but"+i+"_"+j+"' onclick=''></button>"
                resume += "</td>";
            }
            resume += "</tr>";
        }
        resume += "</table>";
        return resume;
};


function drawBoard() {
       let rows = parseInt(document.getElementById("row").value);
       let columns = parseInt(document.getElementById("column").value);
        document.getElementById("main").innerHTML = render(rows, columns);
};

