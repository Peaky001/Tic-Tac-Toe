document.getElementById("bigCont").style.display="none"
document.getElementById("usercont").style.display="none"
document.getElementById("oppnamecont").style.display="none"
document.getElementById("valuecont").style.display="none"
document.getElementById("whosTurn").style.display="none"

const socket = io();

let name;

document.getElementById("find").addEventListener("click",function(){
    name = document.getElementById("name").value;

    document.getElementById("user").innerText = name;

    if(name == null || name == ""){
        alert("enter the name");
    }

    else{
        socket.emit("find",{name:name});

        document.getElementById("loading").display = "block";
        document.getElementById("find").disabled = true;
    }
    });
    