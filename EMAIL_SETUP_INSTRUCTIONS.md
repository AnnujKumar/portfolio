# Email Setup Instructions for Portfolio Contact Form

## Option 1: Formspree (Recommended - Free & Easy)

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up with your email (annujinsan@gmail.com)
3. Create a new form
4. Copy the form endpoint URL (it will look like: `https://formspree.io/f/YOUR_FORM_ID`)
5. Replace the mailto implementation in Contact.jsx with the Formspree endpoint

### Code to replace in Contact.jsx:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  setSubmitMessage('')

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    })

    if (response.ok) {
      setSubmitMessage('Thank you! Your message has been sent successfully.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } else {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
    }
  } catch (error) {
    setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
  } finally {
    setIsSubmitting(false)
    setTimeout(() => setSubmitMessage(''), 5000)
  }
}
```

## Option 2: EmailJS (More Features)

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up and create a service
3. Set up email templates
4. Install EmailJS: `npm install @emailjs/browser`
5. Implement EmailJS in your contact form

## Option 3: Netlify Forms (If deployed on Netlify)

1. Add `netlify` attribute to your form
2. Add hidden input with name="form-name"
3. Netlify will automatically handle form submissions

## Current Implementation

The current implementation uses a mailto link which opens the user's default email client. This works but isn't as seamless as a proper form submission service.

## Benefits of Proper Email Service:

- Direct delivery to your inbox
- No dependency on user's email client
- Better user experience
- Form validation and spam protection
- Analytics and tracking
