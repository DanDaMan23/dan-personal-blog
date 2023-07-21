import useContactMeForm from "./use-contact-me..form"

import "./contact-me.form.scss"
import ErrorMessage from "../../../components/error-message/error-message.component"
import SuccessMessage from "../../../components/success-message/success-message.component"

export default function ContactMeForm() {
  const { register, onSubmit, onClear, errors, isSubmitSuccessful, isLoading } =
    useContactMeForm()

  return (
    <form onSubmit={onSubmit} className='contact-me-form'>
      <div className='form-field'>
        <label htmlFor='fullName'>Full Name: </label>
        <input {...register("fullName")} placeholder='Enter your Full Name' />
        {errors.fullName && (
          <ErrorMessage className='error-field' message='Fullname Required' />
        )}
      </div>
      <div className='form-field'>
        <label htmlFor='email'>Email: </label>
        <input {...register("email")} placeholder='Enter your Email' />
        {errors.email && (
          <ErrorMessage className='error-field' message='Email Required' />
        )}
      </div>
      <div className='form-field'>
        <label htmlFor='subject'>Subject: </label>
        <input {...register("subject")} placeholder='Enter the Subject' />
        {errors.subject && (
          <ErrorMessage className='error-field' message='Subject Required' />
        )}
      </div>
      <div className='form-field'>
        <label htmlFor='message'>Message: </label>
        <textarea
          {...register("message")}
          cols={5}
          rows={10}
          placeholder='Enter your Message'
        ></textarea>
        {errors.message && (
          <ErrorMessage className='error-field' message='Message Required' />
        )}
      </div>
      <div className='status-area'>
        {isSubmitSuccessful && (
          <SuccessMessage message='Email Sent' className='email-sent' />
        )}
      </div>
      <div className='button-area'>
        <button type='submit' className='primary-button' disabled={isLoading}>
          {/* Submit */}
          {isLoading ? "Submitting..." : "Submit"}
        </button>
        <button type='button' className='secondary-button' onClick={onClear}>
          Clear
        </button>
      </div>
    </form>
  )
}
