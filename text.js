function getText(){
    let resp = document.getElementById("heading");
    console.log(resp);
    console.log(resp.innerText);
}
function changeText(){
    document.getElementById("heading").innerHTML="heading<span style='color:red'> Changed </span>";
}
function changeBg(){
    document.body.style.backgroundColor="green";
    document.body.style.color="orange";
}
let flag =0;
function ChangeMode(){
    if(!flag){ 
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        flag=1;
    }
    else{
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        flag=0;
    }
}