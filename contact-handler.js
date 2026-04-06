// Contact Form Handler — Using Netlify Function
function handleContactSubmit(e) {
    e.preventDefault();

    const form = e.target;

    // Client-side validation
    if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        form.querySelectorAll('input[required], textarea[required]').forEach(input => {
            input.classList.toggle('is-invalid', !input.validity.valid);
            input.classList.toggle('is-valid',   input.validity.valid);
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

    const fullName    = form.fullName.value.trim();
    const companyName = form.companyName.value.trim();
    const email       = form.email.value.trim();
    const phone       = form.phone.value.trim();
    const service     = form.service.value;
    const message     = form.message.value.trim();

    const resetUI = () => {
        hideLoading();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    };

    // Use Netlify function
    const FUNCTION_URL = '/.netlify/functions/send-email';
    
    const payload = {
        fullName,
        companyName,
        email,
        phone,
        service,
        message
    };

    console.log('Sending email via serverless function...');
    
    fetch(FUNCTION_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(res => {
        console.log('Response status:', res.status);
        if (!res.ok) {
            return res.json().then(e => {
                console.error('Error response:', e);
                return Promise.reject(e);
            });
        }
        return res.json();
    })
    .then(data => {
        console.log('Success:', data);
        resetUI();
        showToast('Thank you for your message! We will get back to you within 24 hours.', 'success');
        form.reset();
        form.classList.remove('was-validated');
        form.querySelectorAll('input, textarea, select').forEach(el => {
            el.classList.remove('is-valid', 'is-invalid');
        });
    })
    .catch(err => {
        console.error('Error:', err);
        resetUI();
        showToast('Failed to send message. Please try again or call us directly on +234 810 994 1885.', 'error');
    });
}
