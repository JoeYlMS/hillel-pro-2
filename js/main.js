document.addEventListener('DOMContentLoaded', function (){

    let cont = document.querySelector('.cont')
    let box = document.querySelectorAll('.box')
    let next = document.querySelector('.next')
    let number = document.querySelector('.number')
    let prev = document.querySelector('.prev')



    // box.forEach(function (box){
    //     box.addEventListener('click', function (event){
    //         if (event.target.classList.contains('next')) event.target.parentElement.querySelector('p').innerHTML++
    //         if (event.target.classList.contains('prev')) event.target.parentElement.querySelector('p').innerHTML--
    //     })
    // })
    cont.addEventListener('click',(event)=>{
        if (event.target.classList.contains('next')) event.target.parentElement.querySelector('p').innerHTML++
        if (event.target.classList.contains('prev')) event.target.parentElement.querySelector('p').innerHTML--
    })

})

