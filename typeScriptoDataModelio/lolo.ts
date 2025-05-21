


// let age2:number=23;
// age = "25"



// let username:string = "John Doe";
// username = 24;



// let isLoggedIn:boolean = true;
// isLoggedIn = "false";



// let studentList:string[] = ["bardia","bardiaWithSh","bardiaWithSh2"]
// studentList.push(23)



// let bardiaData:{name:string,skill:string,game:string,aka:string,age:number} = {name:"bardia",skill:"ش",game:"war thunder",aka:"timePoor",age:15}
// bardiaData.name=23


// let behdadData:[string,number,string,string,boolean] = ["behdad",15,"valorant","noob",false]
// behdadData[3] = "Normal"
// behdadData[0] = 12





function greeting(sentence:string):string{
    if (sentence == "hi"){
        return "Hello";
    }
    else if (sentence == "bye"){
        return "Goodbye";
    }
    else{
        return "i don't understand"
    }
}
greeting("hi")


function circleArea(radius:number,pi:number=3.14){
    return pi*radius*radius;
}

circleArea(9)

function squareArea(side:number,count?:number){
    if (count == undefined){
        return side*4
    }
    else{
        return side*count;
    }
}

squareArea(5,4)




function polo(...args:string[]){

}

polo("ali","mamad","hasan","naqi","ahmad","kolo mani")