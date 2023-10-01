const drops = document.querySelectorAll('.drop');

drops.forEach((drop) =>{
    drop.addEventListener('click', () => {
        drop.classList.toggle("active")
    })
})
