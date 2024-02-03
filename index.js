var displayInnput = document.getElementById('displayInnput');
function getVal(val) {
    displayInnput.value += val;
    console.log(val)
}

function calculateVal() {
   displayInnput.value = eval(displayInnput.value)
}

function clearText()
{
    displayInnput = "";
}