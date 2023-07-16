const burgerMenu = document.querySelector('.burger-menu')
const navMenu = document.querySelector('.header-nav')
const burgerItems = document.querySelectorAll('.burger-item')

 burgerMenu.addEventListener('click', ()=>{
    if(!burgerMenu.classList.contains('active')){
        burgerMenu.classList.add('active')
        navMenu.style.transform="translateX(0)" 
        burgerItems[0].style.transform="rotate(45deg)translateY(15px)"
        burgerItems[1].style.opacity = "0"
        burgerItems[2].style.transform = "rotate(-45deg)translateY(-15px)" 
    }else   {
        burgerMenu.classList.remove('active')
        navMenu.style.transform = "0"  
        burgerItems[0].style.transform=""
        burgerItems[1].style.opacity = ""
        burgerItems[2].style.transform = "" 
    }
    
 })


 const modalWindow = document.querySelector('#modal')
 const btn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const blurWindom = document.querySelector('.blur-windom')

function closeModal( ){
    modalWindow.classList.add('active')
    modalWindow.style.transform = ""
    btn.innerHTML = "open modal"
    blurWindom.style.display = ''  
}

 btn.addEventListener('click', ()=>{
    if (modalWindow.classList.contains('active')){
       closeModal()
    }else{
        blurWindom.style.display = "block" 
        modalWindow.classList.remove('active')
        modalWindow.style.transform = "scale(1)"
        btn.innerHTML = "close modal"
        
    }
 })

 closeBtn.addEventListener('click',()=>closeModal())

blurWindom.addEventListener('click', ()=>closeModal())