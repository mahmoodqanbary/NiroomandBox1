/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

    /*=============== Menu Show ===============*/
    // Validate if constant exists

    if(navToggle){
       navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
       }) 
    }
    
    /*=============== Hide Menu ===============*/

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHedaer = () =>{
    const header = document.getElementById('header')

    this.scrollY >=50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHedaer);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')

     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionClass.classList.add('active-link')
     }else{
        sectionClass.classList.remove('active-link')
     }   
    })
}

window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`,{delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`,{interval: 100})
sr.reveal(`.choose__img, .calculate__content`,{origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`,{origin: 'right'})


/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message');

      
const culculateBmi = (e) =>{
    e.preventDefault()

    if(calculateCm.value == "" || calculateKg.value == ""){
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        // show messsage
        calculateMessage.textContent = '😮 مقادیر را وارد کنید '

        //remove message

        setTimeout(()=>{
            calculateMessage.textContent = ""
        }, 3000)
    } else{
        const cm = calculateCm.value / 100,
        kg = calculateKg.value,
        bmi = Math.round(kg / (cm * cm))

        //show your health status
        if(bmi < 18.5){
            //Add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = ` 😔 شاخص توده بدنی شما  ${bmi}  و خیلی لاغر هستید`
        }else if(bmi < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `🥳 شاخص توده بدنی شما  ${bmi} وزن شما ایده آل است `
        }else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `😔 شاخص توده بدنی شما  ${bmi} اضافه وزن دارید`
        }

        calculateCm.value = ''
        calculateKg.value = ''

        setTimeout(()=>{
            calculateMessage.textContent = ""
        }, 10000)

        
    }
}      

calculateForm.addEventListener('submit', culculateBmi)

     


/*=============== EMAIL JS ===============*/
