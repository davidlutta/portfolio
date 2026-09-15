emailjs.init('dev_davidlutta_gmail_com');

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    if (!form) {
        return;
    }
    const status = document.getElementById('form-status');
    const button = form.querySelector('button[type="submit"]');

    function showStatus(text, type) {
        status.textContent = text;
        status.className = 'form-status ' + type;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (name === '' || email === '' || message === '') {
            showStatus("Please fill in every field.", 'error');
            return;
        }

        var template_params = {
            "from_name": name,
            "reply_to": email,
            "message_html": message + "\n\nReply to: " + email
        };

        var service_id = "default_service";
        var template_id = "template_Xp57S8Qi";
        var user_id = "user_XyUkwSI6FDkJBOfTjBqXw";
        button.disabled = true;
        showStatus("Sending…", 'pending');
        emailjs.send(service_id, template_id, template_params, user_id).then(() => {
            showStatus("Thanks, " + name + "! Your message has been sent.", 'success');
            form.reset();
        }).catch(() => {
            showStatus("Sorry, your message couldn't be sent. Please email me directly at davidlutta2010@gmail.com.", 'error');
        }).finally(() => {
            button.disabled = false;
        });
    });
});
