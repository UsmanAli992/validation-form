
username = document.getElementById("username")
email = document.getElementById("email")
successfully = document.getElementById('successfully')
tableRecord = document.getElementById("tableRecord");
function submit(){
    if (username.value == '') {
        username.classList.add('is-invalid');
        return
    }
    
    if (username.value !== '') {
        username.classList.add('is-valid');
        
    }
    if (email.value == '') {
        email.classList.add('is-invalid');
        
    }
    if (email.value !== '') {
        email.classList.add('is-valid');
    }


    username.addEventListener('keyup',function()
{
    if (username.value !== '') {
        username.classList.remove('is-invalid');
    }
    if (username.value == '') {
        username.classList.add('is-invalid');
    }
    if (username.value !== '') {
        username.classList.add('is-valid');
    }
    })
     email.addEventListener('keyup',function()
    {
    if (email.value !== '') {
        email.classList.remove('is-invalid');
     }
    if (email.value == '') {
        email.classList.add('is-invalid');
     }
    if (email.value !== '') {
        email.classList.add('is-valid');
     }
    
    
    })
     let data = {
    users: "username.value",
    email: "email.value"
    }
     record = localStorage.getItem('record')
     if(record === null){
    localStorage.setItem('record',JSON.stringify([data]))}
    else{
        record = JSON.parse(record)
        record.push(data)
        localStorage.setItem('record',JSON.stringify(record))
    }
    
     if(record === null){
        localStorage.clear()
    }
    
}
