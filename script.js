function insertValue(value) {
    result.value += value;
    playClickSound();
}

function clearResult() {
    result.value = '';
}

function deleteResult() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        playClickSound();
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

function playClickSound() {
    var clickSound = document.getElementById("clickSound");
    clickSound.play();
}