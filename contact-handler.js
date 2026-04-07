// Contact Form Handler — EmailJS
function handleContactSubmit(e) {
    e.preventDefault();

    const form = e.target;

    // Client-side validation
    if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        form.querySelectorAll('input[required], textarea[required]').forEach(input => {
            input.classList.toggle('is-invalid', !input.validity.valid);
            input.classList.toggle('is-valid', input.validity.valid);
        });
        showToast('Please fill in all required fields correctly.', 'error');
        return;
    }

    // UI: loading state
    showLoading();
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';

    const resetUI = () => {
        hideLoading();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    };

    // Init EmailJS
    emailjs.init(window.EMAILJS_PUBLIC_KEY);

    const templateParams = {
        from_name:    form.fullName.value.trim(),
        company_name: form.companyName.value.trim() || 'Not provided',
        from_email:   form.email.value.trim(),
        phone:        form.phone.value.trim(),
        service:      form.service.value || 'Not specified',
        message:      form.message.value.trim(),
        to_email:     'inquiry@saibrosgroup.com'
    };

    console.log('Sending via EmailJS...');

    // Send internal notification
    emailjs.send(window.EMAILJS_SERVICE_ID, window.EMAILJS_TEMPLATE_CONTACT, templateParams)
        .then(() => {
            console.log('Contact email sent!');
            // Send auto-reply
            return emailjs.send(window.EMAILJS_SERVICE_ID, window.EMAILJS_TEMPLATE_AUTOREPLY, templateParams);
        })
        .then(() => {
            console.log('Auto-reply sent!');
            resetUI();
            showToast('Thank you for your message! We will get back to you within 24 hours.', 'success');
            form.reset();
            form.classList.remove('was-validated');
            form.querySelectorAll('input, textarea, select').forEach(el => {
                el.classList.remove('is-valid', 'is-invalid');
            });
        })
        .catch(err => {
            console.error('EmailJS error:', err);
            resetUI();
            showToast('Failed to send message. Please try again or call us on +234 810 994 1885.', 'error');
        });
}
