import useContactMeForm from "./use-contact-me..form"

import "./contact-me.form.scss"
import ErrorMessage from "../../../components/error-message/error-message.component"
import SuccessMessage from "../../../components/success-message/success-message.component"

export default function ContactMeForm() {
  const {
    handleChange,
    handleSubmit,
    handleClear,
    contactMeFormValues: { fullName, email, subject, message },
    validationErrors,
    formSubmissionStatus
  } = useContactMeForm()

  return (
    <form onSubmit={handleSubmit} className='contact-me-form'>
      <div className='form-field'>
        <label htmlFor='fullName'>Full Name: </label>
        <input
          type='text'
          name='fullName'
          id='fullName'
          value={fullName}
          onChange={handleChange}
        />
        {validationErrors.fullName && (
          <ErrorMessage className='error-field' message='Fullname Required' />
        )}
      </div>
      <div className='form-field'>
        <label htmlFor='email'>Email: </label>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={handleChange}
        />
        {validationErrors.email && (
          <ErrorMessage className='error-field' message='Email Required' />
        )}
      </div>
      <div className='form-field'>
        <label htmlFor='subject'>Subject: </label>
        <input
          type='text'
          name='subject'
          id='subject'
          value={subject}
          onChange={handleChange}
        />
        {validationErrors.subject && (
          <ErrorMessage className='error-field' message='Subject Required' />
        )}
      </div>
      <div className='form-field'>
        <label htmlFor='message'>Message: </label>
        <textarea
          name='message'
          id='message'
          value={message}
          onChange={handleChange}
          cols={5}
          rows={10}
        ></textarea>
        {validationErrors.message && (
          <ErrorMessage className='error-field' message='Message Required' />
        )}
      </div>
      <div className='status-area'>
        {formSubmissionStatus === "done" && (
          <SuccessMessage message='Email Sent' className='email-sent' />
        )}
      </div>
      <div className='button-area'>
        <button type='submit' className='primary-button'>
          {formSubmissionStatus === "loading" ? "Submitting..." : "Submit"}
        </button>
        <button
          type='button'
          className='secondary-button'
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </form>
  )
}
