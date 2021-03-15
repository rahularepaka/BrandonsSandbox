var puncOpen = 1;
var ntcdOpen = 1;
var agileOpen = 1;
var exicureOpen = 1;
document.getElementById("icon-punc").onclick = function() {openPunc()};
document.getElementById("icon-ntcd").onclick = function() {openNtcd()};
document.getElementById("icon-agile").onclick = function() {openAgile()};
document.getElementById("icon-exicure").onclick = function() {openExicure()};

function openPunc() {
    puncOpen = -1 * puncOpen;
    item = document.getElementById("opener-punc");
    label = document.getElementById("instruct");
    if (puncOpen == 1) {
        item.style.opacity = 1;
        label.style.opacity = 0;
    } else {
        item.style.opacity = 0;
        label.style.opacity = 1;
    }
}

function openNtcd() {
    ntcdOpen = -1 * ntcdOpen;
    item = document.getElementById("opener-ntcd");
    if (ntcdOpen == 1) {
        item.style.opacity = 1;
    } else {
        item.style.opacity = 0;
    }
}

function openAgile() {
    agileOpen = -1 * agileOpen;
    item = document.getElementById("opener-agile");
    if (agileOpen == 1) {
        item.style.opacity = 1;
    } else {
        item.style.opacity = 0;
    }
}

function openExicure() {
    exicureOpen = -1 * exicureOpen;
    item = document.getElementById("opener-exicure");
    if (exicureOpen == 1) {
        item.style.opacity = 1;
    } else {
        item.style.opacity = 0;
    }
}