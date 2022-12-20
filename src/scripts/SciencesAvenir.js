const paywall = document.querySelector('#poool-widget')

if(paywall)
{
    paywall.remove()
}

const userPayingContents = document.querySelectorAll('.user-paying-content')
if(userPayingContents)
{
    userPayingContents.forEach(userPayingContent => 
    {
        userPayingContent.style.display = 'block'
        userPayingContent.removeAttribute('hidden')  
    })
}
