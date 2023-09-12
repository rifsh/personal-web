function sendMail() {
    var params = {
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        msg:document.getElementById('message').value
    };
const serviceid = "service_6l6ktkj" ;
const templateid = "template_czg0f4b";

emailjs
.send(serviceid, templateid, params) 
.then(
    res => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        console.log(res);
        alert("Yout message send successfully");
    }
)
.catch((err)=> console.log(err)); 
}