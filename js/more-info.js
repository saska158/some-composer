const moreInfos = document.querySelectorAll('.more-info');
const infosHidden = document.querySelectorAll('.info-hidden');

document.body.addEventListener('click', e => {
    if(e.target.closest('.more-info')) {
        showMoreInfo(e);
        
    }
})

function showMoreInfo(e) {
    infosHidden.forEach(infoHidden => {
        if(infoHidden.dataset.id == e.target.dataset.id) {
            infoHidden.classList.toggle('info-hidden-display');
            if(infoHidden.classList.contains('info-hidden-display')) {
                e.target.innerHTML = 'less info';
            } else {
                e.target.innerHTML = 'more info';
            }   
        }      
    })
}


