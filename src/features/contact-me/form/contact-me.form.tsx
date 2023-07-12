import useContactMeForm from "./use-contact-me..form"

import "./contact-me.form.scss"

export default function ContactMeForm() {
  const {
    handleChange,
    handleSubmit,
    handleClear,
    contactMeFormValues: { fullName, email, subject, message },
    validationErrors
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
      </div>
      <div className='button-area'>
        <button
          type='submit'
          className='primary-button'
        >
          Submit
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
