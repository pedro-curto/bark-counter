let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
let previousSaves = [];

function increment() {
    count += 1;
    countEl.textContent = count;
    console.log("hi!")
}

function save() {
    if (previousSaves.length >= 5) {
        previousSaves.shift();
    }
    previousSaves.push(count);
    saveEl.textContent = "Previous barks: " + previousSaves.join(" - ");

    count = 0;
    countEl.textContent = count;
}
