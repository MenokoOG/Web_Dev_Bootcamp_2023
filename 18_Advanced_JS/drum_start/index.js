// drum kit lesson, menoko og, 1-13-24
let numberOfDrumButtons = document.querySelectorAll(".drum").length

for (let i = 0;i < numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", () => {
        alert("I got clicked!!")
    
    })

}




