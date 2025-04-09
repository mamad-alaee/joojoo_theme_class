





const video_getter_btn = document.getElementById("video_getter_btn")
video_getter_btn.addEventListener("click",function (){
    document.getElementById("video_h1").innerHTML = "show video"
})




function click_handler(){
    document.getElementById("video_h1").innerHTML = "show video"
    document.getElementById("mainBody").style.backgroundColor = ""
}


// document.getElementById("name_inputio").addEventListener("keydown",function (){
//     console.log("mouse enter")
// })


function mamad_heydarie(){
    let colors = ["red","green","blue","yellow"]
    rand_index = Math.floor(Math.random() * colors.length)
   document.getElementById("name_inputio").style.backgroundColor = colors[rand_index]
}


function def_color(){
    document.getElementById("name_inputio").style.backgroundColor = "white"

}