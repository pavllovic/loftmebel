import FormMessage from 'Components/form/form-message/form-message.js';

const form = document.querySelector('[name="form-person"]');
const formMessage = new FormMessage(form);

formMessage.init();