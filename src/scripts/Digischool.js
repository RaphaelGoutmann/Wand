// Digischool.js

const blocker = document.querySelector("#headlessui-portal-root")

if(blocker) 
{ 
    blocker.remove()
    document.querySelector("html").style.overflow = "auto" 
}