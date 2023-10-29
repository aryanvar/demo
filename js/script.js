document.querySelector(".btnLogin-popup").addEventListener('click',function(){
    document.querySelector('.popup').style.display='flex'
})
document.querySelector(".close").addEventListener('click',function(){
    document.querySelector('.popup').style.display='none'
})

const validate=()=>{
    const username= document.getElementById('uname');
    const password= document.getElementById('pass');
    if(username.value==""|| password.value=="")
    {
        alert("No blank values are allowed ")
        
    }
    else{
        
    }
}