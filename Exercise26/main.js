// blocking function

function synchronoustest(){
    alert("alertigan oki dheh si codeka consolekaga lo run gareeyo");
    return  { id: 1, name: "Abdirahman", city: "Nairobi"};
}

console.log("first message o laso daabacaayo wakan");

const userInfo = synchronoustest();
console.log("xogta waatan lakin wey soo daaheysaa", userInfo);


// non blocking function

function Asynchronoustest(calback){
    setTimeout(() => {
            const userdata =  { id: 1, name: "Abdirahman", city: "Nairobi"};
            calback(userdata);

        
    }, 2000);
}

console.log("first message o laso daabacaayo wakan");

Asynchronoustest(function(userdata){
    console.log("xogta waatan", userdata);
})

console.log("farintan masugeyso qeybta kore isla markiba wa laso daabacaa");
