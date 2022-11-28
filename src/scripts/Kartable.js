// Kartable.js

// Le popup apparait grâce à un script js
// Il serait donc necessaire de détecter son apparition pour 
// le supprimer immédiatement, ce que ce script ne permet pas.
// Il se contente simplement d'attendre un temps raisonnable 
// avant d'engager cette suppression (1000ms en l'occurence)

setTimeout(() => 
{
    const blocker = document.querySelector("body > kartable-app > ng-component > push-more-content > kartable-modal-fullscreen > div"); 
    if(blocker) 
    {
        blocker.remove(); 
        document.querySelector("body").style.overflow = "auto"
    }

}, 1000)