
// Credits to: Caraballo, Orlando NYCDA Instructor SEI-2018 */

let flip = document.getElementsByClassName("ani")[0] 
flip.addEventListener("click", animation)

function animation(event){ 

    event.target.classList.add("ani-2")
}
