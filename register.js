const fname=document.querySelector("#name")
const pass=document.querySelector("#pass")
const mail=document.querySelector("#mail")
const mob=document.querySelector("#mob")
const user=document.querySelector("#user")
const form=document.querySelector("#form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    validinput();
});

const seterror = (element,massage)=>{
    const control = element.parentElement;
    const err = control.querySelector(".error")

    err.innerText=massage;
    control.classList.add('error')
    control.classList.remove('success')
}

const success= element=>{
    const control = element.parentElement;
    const err = control.querySelector(".error");

    err.innerText="";
    control.classList.remove('error')
    control.classList.add('success')
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const isValidEmail = email => emailRegex.test(email);



const validinput = () =>{
    const namevalue = fname.value.trim();
    const mailval = mail.value.trim();
    const passval = pass.value.trim();
    const userval = user.value.trim();
    const mobval = mob.value.trim();

    if(namevalue===''){
        seterror(fname,'Name is required');
    }else{
        success(fname);
        var go = true
    }


    if(mailval==='' ){
        seterror(mail,'Email is required');
    }else if(!isValidEmail(mailval)){
        seterror(mail,'Email is invalid');
    }else{
        success(mail);
        var yes=true
    }


    if(passval===''){
        seterror(pass,'Password is required');
    }else if(passval.length<8 && passval.length>16){
        seterror(pass,"password is required")
    }else{
        success(pass);
        var no = true
    }


    if(userval===''){
        seterror(user,'Username is required');
    }else{
        success(user);
        var yeah = true
    }


    if(mobval===''){
        seterror(mob,'Mobile is required');
    }else if(mobval.length!==10){
        seterror(mob,'Mobile number is invalid');
    }else{
        success(mob);
        var no3 = true
    }

    if(go==true && no==true && yes==true && yeah ==true && no3==true){
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            window.location.href = "first.html";
        
        });
        
    }
}





