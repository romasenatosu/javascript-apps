const tbodyElement = document.getElementById('usersRow');

function ajaxRequest(url, harvester, method='GET', data=null) {
    const ajax = new XMLHttpRequest();

    ajax.onreadystatechange = () => {
        if (ajax.status === 200 && ajax.readyState === 4) {
            if (typeof harvester === 'function') {
                harvester(ajax);
            }
        }
    }

    ajax.open(method, url);
    ajax.send(data);
}

function xmlHarvester(obj) {
    if (tbodyElement !== null && typeof obj === 'object') {
        let resp = obj.responseXML;
        let rootElement = resp.getElementsByTagName('users');
        let userElement = rootElement[0];
        let len = userElement.children.length;
        let i = 0;
        console.log(len);

        for (i; i < len; i++) {
            let id = userElement.children[i].children[0].innerHTML;
            let name = userElement.children[i].children[1].innerHTML;
            let surname = userElement.children[i].children[2].innerHTML;

            console.log(id, name, surname);

            let tr = document.createElement('tr');
            let idTd = document.createElement('td');
            idTd.innerHTML = id;

            let nameTd = document.createElement('td');
            nameTd.innerHTML = name;

            let surnameTd = document.createElement('td');
            surnameTd.innerHTML = surname;

            tr.appendChild(idTd);
            tr.appendChild(nameTd);
            tr.appendChild(surnameTd);
            tbodyElement.appendChild(tr);
        }
    }
}

ajaxRequest('users.xml', xmlHarvester);
