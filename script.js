const btnPrev = document.querySelector('.prevSlide');
const btnNext = document.querySelector('.nextSlide');
const slide = document.querySelectorAll('.slide')

let currSlide = 0;



const slideFunc = function(currSlide){
    slide.forEach((s, i) => {
        console.log(s, i)
        s.style.transform = `translateX(${(i-currSlide)*100}%)`
    })
};

slideFunc(currSlide)

function goNextSlide(){
    console.log('go next')
    
   if(currSlide === slide.length-1){
       currSlide = 0
   } else{
    currSlide++
   }
   console.log(currSlide)
  slideFunc(currSlide)
//    document.querySelector('.slide__active').classList.remove('slide__active')
//    document.querySelector(`.slide__${currSlide}`).classList.add('slide__active')
}


function goPrevSlide(){
    console.log('go prev')
    if(currSlide === 0){
        currSlide = slide.length - 1
    } else{
     currSlide--
    }
    console.log(currSlide, 'prev')

    slideFunc(currSlide)

    // document.querySelector('.slide__active').classList.remove('slide__active')
    // document.querySelector(`.slide__${currSlide}`).classList.add('slide__active')
}

btnNext.addEventListener('click', goNextSlide)
btnPrev.addEventListener('click', goPrevSlide)

document.addEventListener('keydown', (e) => {
    console.log(e.key)

    e.key === 'ArrowRight' && goNextSlide()
    e.key === 'ArrowLeft' && goPrevSlide()
})
