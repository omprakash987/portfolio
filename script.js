const sections = document.querySelectorAll('.section'); 
const sectBtns = document.querySelectorAll('.controlls'); 
const sectBtn = document.querySelectorAll('.control'); 
const allSections = document.querySelector('.main-content');


function PageTransition(){


    for(let i=0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click',function(){
            console.log("working"); 
            let currentBtn = document.querySelectorAll('.active-btn'); 
            currentBtn[0].classList.remove('active-btn'); 
            this.classList.add('active-btn'); 


        });
    }


    /// section active class: 

 allSections.addEventListener('click',(e)=>{
    const id = e.target.dataset.id;
    if(id){
        //remove selected 
        sectBtn.forEach((btn)=>{
            btn.classList.remove('active')
        })
        e.target.classList.add('active');

        // hide other section  
        sections.forEach((section)=>{
            section.classList.remove('active'); 

        });


        const element = document.getElementById(id); 
        element.classList.add('active');

    }

 })


 // toggle theme

 const themeBtn = document.querySelector('.theme-btn'); 
 themeBtn.addEventListener('click',()=>{
    let element = document.body; 
    element.classList.toggle('light-mode');
 })

}






PageTransition();