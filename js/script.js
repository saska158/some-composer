const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav')
const cursor2 = document.querySelector('.cursor2')
const cursor1 = document.querySelector('.cursor1')
const video = document.querySelector('.video-cursor')

const about = document.querySelector('.about');
const music = document.querySelector('.music');
const soundtracks = document.querySelector('.soundtracks');
const events = document.querySelector('.events');
const contact = document.querySelector('.contact');
const bi = document.querySelector('#b')
const dzej = document.querySelector('#j')
const ou = document.querySelector('#o')
const ar = document.querySelector('#r')
const kej = document.querySelector('#k')


    


hamburger.addEventListener('click', event => {
    mainNav.classList.toggle('main-nav-open');
    hamburger.classList.toggle('hamburger-merge')
})



document.addEventListener('mousemove', event => {
    if(event.target.closest('.main-nav-li')) {
    cursor2.style.cssText = `left: ${event.clientX * 1.2}px; 
      top: ${event.clientY / 2.5}px; display: block;`;
    } else {
        cursor2.style.cssText = `display: none;`;
    }

    })

    


document.addEventListener('mousemove', event => {
    cursor1.style.cssText = `left: ${event.clientX}px; 
      top: ${event.clientY}px;`;
    
    })

 


about.addEventListener('mouseover', e => {
    bi.play();
    video.src = 'mp4/video1.mp4'
})    

about.addEventListener('mouseout', e => {
    bi.pause();
    bi.currentTime = 0;
})

music.addEventListener('mouseover', e => {
    dzej.play();
    video.src = 'mp4/video2.mp4'
})   

music.addEventListener('mouseout', e => {
    dzej.pause();
    dzej.currentTime = 0;
})


soundtracks.addEventListener('mouseover', e => {
    ou.play();
    video.src = 'mp4/video3.mp4'
})   
soundtracks.addEventListener('mouseout', e => {
    ou.pause();
    ou.currentTime = 0;
})


events.addEventListener('mouseover', e => {
    ar.play();
    video.src = 'mp4/video4.mp4'
})  
events.addEventListener('mouseout', e => {
    ar.pause();
    ar.currentTime = 0;
})


contact.addEventListener('mouseover', e => {
    kej.play();
    video.src = 'mp4/video5.mp4'
})   
contact.addEventListener('mouseout', e => {
    kej.pause();
    kej.currentTime = 0;
})


