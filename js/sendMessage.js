let form = document.getElementById('message-form')
let name = document.getElementById('name')
let email = document.getElementById('email')
let subject = document.getElementById('subject')
let message = document.getElementById('message')

let SecureToken = '1ab6be80-8cc3-4a25-b76b-955edcdc778a'

let adamSecureToken = "16eec1f0-b91f-409d-9740-d81130b39cb7"
let From = 'team@nomadworld.ai'
let To = 'team@nomadworld.ai'

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

let sendEmail = () => {
    if(name.value.length < 3) {
        alert('please enter your name')
        return false
    }
    
    if(!validateEmail(email.value)) {
        alert('please enter your email')
        return false
    }
    
    if(subject.value.length < 3) {
        alert('please enter your subject')
        return false
    }
    
    if(message.value.length < 5) {
        alert('please enter your message')
        return false
    }

    Email.send({
        SecureToken : SecureToken,
        To : To,
        From : From,
        Subject : subject.value,
        Body : `this message from " ${email.value} " : ` + message.value
    })
    .then(message => {
        name.value = ''
        email.value = ''
        subject.value = ''
        message.value = ''
        alert('your message is sent successfuly!')
    } 
)}

form.addEventListener('submit', e => {
    e.preventDefault()
    sendEmail()
})

let subscribe_form_0 = document.getElementById('subscribe-form-0')
let subscribe_form_1 = document.getElementById('subscribe-form-1')
let subscribe_form_2 = document.getElementById('subscribe-form-2')

let subscribe_email_0 = document.getElementById('email-0')
let subscribe_email_1 = document.getElementById('email-1')
let subscribe_email_2 = document.getElementById('email-2')

let subscribe = (subscribe_email) => {
    if(!validateEmail(subscribe_email.value)) {
        alert('please enter your email!')
        return false
    }

    Email.send({
        SecureToken : SecureToken,
        To : To + ', ' + subscribe_email.value,
        From : From,
        Subject : "new subscriber",
        Body : `new subscriber: ${subscribe_email.value}`
    })
    .then(message => {
        subscribe_email.value = ''
        alert('thank you!')
    });
}

subscribe_form_0.addEventListener('submit', e => {
    e.preventDefault()
    subscribe(subscribe_email_0)  
})

subscribe_form_1.addEventListener('submit', e => {
    e.preventDefault()
    subscribe(subscribe_email_1)  
})

subscribe_form_2.addEventListener('submit', e => {
    e.preventDefault()
    subscribe(subscribe_email_2)  
})