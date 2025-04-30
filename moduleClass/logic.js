import { sayHello, sayGoodBye, sayMyName } from "../moduleClass/lolo.js";



document.getElementById("typeTxt")
.addEventListener("keypress",function(e){
    let value = e.target.value ?? "";
    if(value.includes("hello")){
        console.log("Hello1")
        sayHello()
    }
    else if(value.includes("hi")){
        console.log("Hello1")
        sayHello()
    }
    else if(value.includes("goodbye")){
        console.log("Goodbye1");
        sayGoodBye()
    }
    else if(value.includes("bye")){
        console.log("Goodbye1");
        sayGoodBye()
    }
    else if(value.includes("name")){
        console.log("Hasan");
        sayMyName()
    }
})