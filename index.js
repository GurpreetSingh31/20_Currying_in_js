// currying is used we have 3 input and this has to come from different sources like in 
// online shopping app

function sendEmail(to){
    return function (subject){
        return function(body){
            console.log(`sending email to ${to} Subject:${subject}  ${body} `)
        }
    }
}

// this tradinal way to do this 
const step1 = sendEmail('preet@google.com')
const step2  = step1('Your Order Conformation')
step2('Congratulation! your order is dispatched ')