document.addEventListener('DOMContentLoaded', function (){

    let cont = document.querySelector('.cont')
    cont.addEventListener('click',(event)=>{
        if (event.target.classList.contains('next')) event.target.parentElement.querySelector('p').innerHTML++
        if (event.target.classList.contains('prev')) event.target.parentElement.querySelector('p').innerHTML--
    })

})

