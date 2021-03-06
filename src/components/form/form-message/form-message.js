import * as lib from 'Lib/form/form.js';
import { sendFormHandler } from 'Lib/form/form-handlers.js';
import { sendFormJSON } from 'Lib/form/form-send.js';

const FormMessage = lib.form;

FormMessage.prototype = {
  constructor: FormMessage,
  init: lib.init,
  setListeners: lib.setListeners,
  destroy: lib.destroy,
  getFormData: lib.getFormData,
  resetForm: lib.resetForm,
  sendForm: sendFormJSON,
  submitForm: lib.submitForm,
  sendFormHandler: sendFormHandler,
  onSuccessHandler(res) {
    console.log(res);
    this.resetForm();
  },
  onErrorHandler(err) {
    console.log(err);
    this.resetForm();
  },
  // onErrorHandler: handlers.onErrorHandler,
  handleEvent: lib.handleEvent,
};

export default FormMessage;
