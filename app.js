var isStatus = document.querySelector("h5");
var btn = document.querySelector(".add");

var check = 0;

btn.addEventListener("click", () => {
    if(check == 0){
        isStatus.innerHTML = "Friends";
        isStatus.style.color = "green";
        check = 1;
        btn.innerHTML = "Remove Friend";
    }
    else{
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "red";
        check = 0;
        btn.innerHTML = "Add Friend";
    }
})
