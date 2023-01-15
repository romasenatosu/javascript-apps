"use strict";

let containerElement = document.getElementById('tableContainer');

if (containerElement !== null) {
    let i;
    let j;

    for (i = 1; i <= 10; i++) {
        let table = document.createElement('table');

        for (j = 1; j <= 10; j++) {
            let row = document.createElement("tr");
            let col = document.createElement('td');

            col.innerText = `${i} * ${j} = ${i*j}`;

            row.appendChild(col);
            table.appendChild(row);
        }

        containerElement.appendChild(table);
    }
}
