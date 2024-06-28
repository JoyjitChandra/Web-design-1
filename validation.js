const fullname= document.getElementById('fullname')
const email= document.getElementById('email')
const subject= document.getElementById('subject')
const message= document.getElementById('message')

const errorName= document.getElementById('errorName')
const errorEmail= document.getElementById('errorEmail')
const errorSubject= document.getElementById('errorSubject')
const errorMessage= document.getElementById('errorMessage')

form.addEventListener('submit', (e)=>{
    let err = []
    if(fullname.value === '' || fullname.value == null ){
        err.push('Please Enter Your Name')
        errorName.innerText = err
    }
    if(subject.value === '' || subject.value == null ){
        err.push('Please Enter The Subject')
        errorSubject.innerText = "Please Enter The Subject";
    }
    if(err.length > 0){
        e.preventDefault();
    }
})