emailjs.init('dev_davidlutta_gmail_com');
function sendEmail() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (email === '' || message === '') {
        alertify.error("Please Don't leave any field empty");
        return;
    } else {

        var template_params = {
            "from_name": name,
            "message_html": message
        };

        var service_id = "default_service";
        var template_id = "template_Xp57S8Qi";
        var user_id = "user_XyUkwSI6FDkJBOfTjBqXw";
        emailjs.send(service_id, template_id, template_params,user_id).then((res)=>{
            alertify.success("Successfully sent email");
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        }).catch((err)=>{
            alertify.error(err);
        });
    }
}
