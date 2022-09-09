let squares = document.querySelector('.square_items')
squares.addEventListener('click', (event)=>{
    if (event.target.closest('.square_item') && !event.target.closest('.square_item').classList.contains('active_square')) {
        event.target.closest('.square_item').classList.add('active_square')
        squares.append(event.target.closest('.square_item'))

    }
})

// active_square