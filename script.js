var isstatus= document.querySelector("h5")

var AddFriend =document.querySelector("#Add")
var flag=0
// var removefriend= document.querySelector("#remove")

AddFriend.addEventListener("click", function(){
    if(flag == 0){
    isstatus.innerHTML ="Friends"
    isstatus.style.color="green"

    AddFriend.innerHTML="Remove Friend"

    flag = 1
    }
    else{
        isstatus.innerHTML="Stranger"
        isstatus.style.color="red"

        AddFriend.innerHTML="Add Friend"

        flag = 0
    }
})

// removefriend.addEventListener("click",function(){
//     isstatus.innerHTML="Stranger"
//     isstatus.style.color="red"
// })
