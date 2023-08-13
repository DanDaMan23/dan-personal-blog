import ErrorMessage from "../../../components/error-message/error-message.component"
import SuccessMessage from "../../../components/success-message/success-message.component"
import useContactMeForm from "./use-contact-me..form"
import ReCaptcha from "react-google-recaptcha"
import text from "./contact-me.form.json"

import "./contact-me.form.scss"

export default function ContactMeForm() {
  const { register, onSubmit, onClear, errors, isSubmitSuccessful, isLoading } =
    useContactMeForm()

  const captchaKey: string = process.env.REACT_APP_SITE_RECAPTCHA_KEY || ""

  return (
    <form
      onSubmit={onSubmit}
      className='contact-me-form'
      data-netlify-recaptcha='true'
      data-netlify='true'
    >
      <div className='form-field'>
        <label htmlFor='fullName'>{text.fullName.label}</label>
        <input
          {...register("fullName")}
          placeholder={text.fullName.placeholder}
        />
        {errors.fullName && (
          <ErrorMessage
            className='error-field'
            message={errors?.fullName?.message ?? ""}
          />
        )}
      </div>
      <div className='form-field'>
        <label htmlFor='email'>{text.email.label}</label>
        <input {...register("email")} placeholder={text.email.placeholder} />
        {errors.email && (
          <ErrorMessage
            className='error-field'
            message={errors?.email?.message ?? ""}
          />
        )}
      </div>
      <div className='form-field'>
        <label htmlFor='subject'>{text.subject.label}</label>
        <input
          {...register("subject")}
          placeholder={text.subject.placeholder}
        />
        {errors.subject && (
          <ErrorMessage
            className='error-field'
            message={errors?.subject.message ?? ""}
          />
        )}
      </div>
      <div className='form-field'>
        <label htmlFor='message'>{text.message.label}</label>
        <textarea
          {...register("message")}
          cols={5}
          rows={10}
          placeholder={text.message.placeholder}
        ></textarea>
        {errors.message && (
          <ErrorMessage
            className='error-field'
            message={errors?.message?.message ?? ""}
          />
        )}
      </div>
      <div className='form-field'>
        <div />
        <ReCaptcha sitekey={captchaKey}/>
      </div>
      <div className='status-area'>
        {isSubmitSuccessful && (
          <SuccessMessage
            message={text.successMessage}
            className='email-sent'
          />
        )}
      </div>
      <div className='button-area'>
        <button type='submit' className='primary-button' disabled={isLoading}>
          {isLoading ? text.buttons.submitting : text.buttons.submit}
        </button>
        <button type='button' className='secondary-button' onClick={onClear}>
          {text.buttons.clear}
        </button>
      </div>
    </form>
  )
}
