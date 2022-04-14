const transovi = document.querySelectorAll('.trans');
const options = {
    threshold: 0,
    rootMargin:'-220px'
}


const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.toggle('trans-change');
        observer.unobserve(entry.target);
    })
}, options)

transovi.forEach(trans => {
    observer.observe(trans)
})

