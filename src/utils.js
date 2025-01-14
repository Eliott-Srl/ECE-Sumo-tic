var hide = 1;
var count = 0;

document.addEventListener("keydown", (e) => {
    if (hide === 1) {
        if (count === 0 && e.key === '*') {
            count++;
        } else if (count === 1 && e.key === '/') {
            count++;
        } else if (count === 2 && e.key === 'é') {
            count++;
        } else if (count === 3 && e.key === 'Enter') {
            let template = document.getElementById('secret-template');

            template.style.display = 'block';
            hide = 0;

            count = 0;
        }
    } else {
        if (e.key === 'Enter') {
            let template = document.getElementById('secret-template');

            template.style.display = 'none';
            hide = 1;
            count = 0;
        }
    }
});

function letterSplit(collec) {
    for (var i = 0; i < collec.length; i++) {
        var letters = el[i].innerHTML.split("");
        el[i].innerHTML = "";
        for (var j = 0; j < letters.length; j++) {
            if (letters[j] == " ") {
                el[i].innerHTML += "<nav class='letters-menu space'>" + letters[j] + "</nav>";
            } else {
                el[i].innerHTML += "<nav class='letters-menu'>" + letters[j] + "</nav>";
            }
        }
    }
}

var el = document.getElementById("top").getElementsByClassName("phrase-menu");
letterSplit(el);