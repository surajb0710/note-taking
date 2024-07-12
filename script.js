const notesContainer=document.querySelector(".notes-container")
const createBtn=document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box")

function updateStorage(){
    console.log("Update Storage 01")
    localStorage.setItem("notes", notesContainer.innerHTML)
    console.log("Update Storage 02")
}

function showNotes(){
    console.log("showNotes 01")
    notesContainer.innerHTML=localStorage.getItem("notes")
    console.log("showNotes 02")
}
showNotes()

createBtn.addEventListener("click",()=>{
let inputBox = document.createElement("p")
let img=document.createElement("img")
inputBox.className="input-box"
inputBox.setAttribute("contenteditable", "true")
img.src="images/delete.png"
notesContainer.appendChild(inputBox).appendChild(img)
})

notesContainer.addEventListener("click",(e)=>{
if(e.target.tagName==="IMG"){
    e.target.parentElement.remove();
    updateStorage()
}else 
if(e.target.tagName==="p"){
    notes = document.querySelector(".input-box")
    notes.forEach(nt=>{
        nt.onkeyup=function()
        {
           updateStorage() 
        }
    })
}
})

document.addEventListener("keydown", event =>{
    if(event.key==="enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault()
    }
})