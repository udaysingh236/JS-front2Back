document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    const xhr = new XMLHttpRequest();

    //Open a file
    xhr.open('GET', 'data.txt', true);
    xhr.onload = function() {
        console.log(`ReadyState is ${xhr.readyState}`);
        if (this.status === 200) {
            console.log(this.responseText);
            document.getElementById('output').innerHTML =
                `<h1> ${this.responseText} </h1>`;
        }
    }

    // xhr.onreadystatechange = function() {
    //     console.log(`ReadyState is ${xhr.readyState}`);
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);

    //     }
    // }

    xhr.send();
}