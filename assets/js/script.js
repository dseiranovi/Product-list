const options = document.getElementById("options")
const submformCM = document.getElementById("submformCM")
const submformMB = document.getElementById("submformMB")
const submformKG = document.getElementById("submformKG")





function req() {
    const SKU = document.getElementById("SKU").value
    const NAME = document.getElementById("NAME").value
    const PRICE = document.getElementById("PRICE").value

    
    if (!SKU) {

        alert('Pelase Fill SKU Field');
    }
    else if (!NAME) {

        alert('Pelase Fill Name Field');
    }

    else if (!PRICE) {

        alert('Pelase Fill Price Field');
    }
    else {
        const SAVE = document.getElementById("SAVE")
        SAVE.setAttribute("form", "myform")
    }

}




function Select(param) {
    console.log(param);
    switch (param) {
        case "MB":
            submformMB.style.display = null;
            submformCM.style.display = 'none';
            submformKG.style.display = 'none';
            break;
        case "CM":
            submformCM.style.display = null;
            submformMB.style.display = 'none';
            submformKG.style.display = 'none';
            break;
        case "KG":
            submformKG.style.display = null;
            submformCM.style.display = 'none';
            submformMB.style.display = 'none';
            break;
    }

}




























