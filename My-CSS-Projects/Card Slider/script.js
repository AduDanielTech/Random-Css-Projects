const options = document.querySelectorAll('.option')

options.forEach((pages) => {
      pages.addEventListener('click', (e) => {
        options.forEach((notit) =>{
            if (notit !== pages) {
                notit.classList.remove('active')
            }
        })
       pages.classList.toggle('active')
      })
})
