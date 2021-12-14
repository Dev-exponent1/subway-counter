let counterJs= document.getElementById('counter')
let saveJs=document.getElementById('entries')
let increment=0;
function count(){
    increment+=1;
    counterJs.textContent=increment;
}
function save() {
    let enter = increment + "-";
    saveJs.textContent+=enter;
    increment=0;
    counterJs.textContent=0;  
    alert("Saved successfully")
}

