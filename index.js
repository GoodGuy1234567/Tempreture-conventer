const C = document.getElementById("C");
const Cr = document.getElementById("Cr");
const F = document.getElementById("F");
const Fr = document.getElementById("Fr");
const K = document.getElementById("K");
const Kr = document.getElementById("Kr");
const TextInput = document.getElementById("textInput");
const Submit = document.getElementById("submit");
const results = document.getElementById("results")
let first = 0;
let second = 0;

Submit.onclick = function(){
    if(C.checked){
        first = 1
    }else if(F.checked){
        first = 2
    }else if(K.checked){
        first = 3
    }else{
        results.textContent = "You didn't choose something"
    };
    if(Cr.checked){
        second = 1
    }else if(Fr.checked){
        second = 2
    }else if(Kr.checked){
        second = 3
    }else{
        results.textContent = "You didn't choose something"
    };
    if(first == 0 && second == 0){
        results.textContent = 'Pick units before  pressing "Submit"'
    }else if(first == second){
        results.textContent = "You can't pick the same units of measurement"
    }else if(TextInput.value == ''){
        results.textContent = "Plese enter your tempreture"
    }else if(first == 1 && second == 2){
        results.textContent = TextInput.value * 1.8 + 32 + " ℉"
    }else if(first == 1 && second == 3){
        results.textContent = TextInput.value + 273.15 + " K"
    }else if(first == 2 && second == 1){
        results.textContent = (TextInput.value - 32) * 5 / 9  + " ℃"
    }else if(first == 2 && second == 3){
        results.textContent = (TextInput.value - 32) / 1.8 + 273.15 + " K"
    }else if(first == 3 && second == 1){
        results.textContent = TextInput.value - 273.15 + " ℃"
    }else if(first == 3 && second == 2){
        results.textContent = (TextInput.value - 273.15) * 1.8 + 32 + " ℉"
    }
}