let currentform = 0;
showForm(currentform);

function showForm(n) {

    let formcontn = document.getElementsByClassName("form-contn");
    let stepper=document.getElementsByClassName("step-point2");
    let stepinpoints=document.getElementsByClassName("inp");
    stepper[n].classList.add('active');
    formcontn[n].classList.add('active');
    stepinpoints[n].classList.add('active');
    console.log(formcontn);
}

console.log(document.querySelector("stepinbar"));

// first form function


function firstForm(sym) {
    if (sym == "uk") {
        document.getElementById("currsym").innerHTML = "£";

    } else {
        document.getElementById("currsym").innerHTML = "$";
    }
    let formcontn = document.getElementsByClassName("form-contn");
    
    formcontn[currentform].classList.remove('active');
    currentform++;
    showForm(currentform);
    updateStepWidth();



}
function form5Clicked() {
    let form5btn = document.getElementsByName("opt5");
    console.log(form5btn);
    for (let i = 0; i < form5btn.length; i++) {
        console.log("jumped");
        if (form5btn[i].checked) {
            console.log(form5btn[i].value);
            if (form5btn[i].value == 3) {
                document.getElementById("popupwrap").style.display="flex";
            }
            else {
                firstForm();
            }
        }
    }

}


function form6fun(ev) {
    if (ev.target.value && ev.target.value != "" && ev.target.value != null) {
        let hidenxt = document.getElementById("hidenxt");
        hidenxt.style.display = "block";
    }

}

function form2fun() {
    let chkboxes = document.getElementsByName("que2");
    let lbls = document.querySelectorAll("[chklbl]");

    console.log(chkboxes, lbls);
    for (let i = 0; i < chkboxes.length; i++) {
        if (chkboxes[i].checked) {
            lbls[i].style.background = "var(--secondary-color)";
            lbls[i].style.color = "white";
        } else {
            lbls[i].style.background = "transparent";
            lbls[i].style.border = "3px solid var(--secondary-color)";
            lbls[i].style.color = "var(--secondary-color)";

        }
    }


}

function bckbtn() {
    if (currentform <= 0) {
        return null
    }
    let formcontn = document.getElementsByClassName("form-contn");
    formcontn[currentform].classList.remove('active');
    let steps = document.getElementsByClassName('step-point2');
    let stepinpoints=document.getElementsByClassName("inp");
    steps[currentform].classList.remove('active');
    stepinpoints[currentform].classList.remove('active');
    currentform--;

    showForm(currentform);
    updateStepWidth();

}

function chngrangeval() {
    let rangeval = document.getElementById("amt").value;
    document.getElementById("amnt").innerHTML = (1000 * rangeval);
}
console.log(document.getElementById("popupwrap"));

function pbnt(){
    let pbnt=  document.getElementById("popupwrap");
    pbnt.style.display="none";
   
}
function pbnt2(){
    let pbnt=  document.getElementById("popupwrap");
    pbnt.style.display="none";
    firstForm(); 
}
function showPopup(){
    let pbnt=  document.getElementById("popupwrap");
    pbnt.style.display="flex";
    
}
function subApp(){
    window.location.href="https://portfolio-nikitasoni.netlify.app";
}


// Updating the stepper Width

    
    function updateStepWidth(){
        let activeSteps = document.querySelectorAll(".step-point2.active");
        let steps = document.getElementsByClassName('step-point2');
        let bar=document.getElementById('stepinbar');
        console.log(activeSteps,steps.length);
        const currentWidth = ((activeSteps.length) / (steps.length)) * 110;
        bar.style.width = currentWidth + "%";
        console.log(bar.style.width = currentWidth + "%")

    }
