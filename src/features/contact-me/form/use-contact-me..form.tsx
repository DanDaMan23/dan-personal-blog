import { FormEvent, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import emailjs from "@emailjs/browser"
import text from "./contact-me.form.json"

declare global {
  interface Window {
    grecaptcha: { reset: () => void }
  }
}

export default function useContactMeForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const serviceId: string = process.env.REACT_APP_SITE_SERVICE_ID || ""
  const templateId: string = process.env.REACT_APP_SITE_TEMPLATE_ID || ""
  const publicKey: string = process.env.REACT_APP_PUBLIC_KEY || ""

  const contactMeFormSchema = yup
    .object({
      fullName: yup
        .string()
        .trim()
        .required(text.fullName.validations.required),
      email: yup
        .string()
        .trim()
        .required(text.email.validations.required)
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          text.email.validations.invalidEmail
        ),
      subject: yup.string().trim().required(text.subject.validations.required),
      message: yup.string().trim().required(text.message.validations.required),
      recaptcha: yup.string().trim().required(text.recaptchaRequired)
    })
    .required()

  type ContactMeFormData = yup.InferType<typeof contactMeFormSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitSuccessful },
    reset,
    setValue
  } = useForm<ContactMeFormData>({
    resolver: yupResolver(contactMeFormSchema)
  })

  const onClear = (e: FormEvent) => {
    e.preventDefault()
    reset()
    window.grecaptcha.reset()
    setValue("recaptcha", "")
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    handleSubmit(async (data: ContactMeFormData) => {
      setIsLoading(true)
      await emailjs
        .send(
          serviceId,
          templateId,
          {
            ...data
          },
          publicKey
        )
        .then((response) => {
          console.log(response)
          onClear(e)
        })
        .catch((error) => {
          console.log(error)
        })
      setIsLoading(false)
    })()
  }

  return {
    register,
    onSubmit,
    onClear,
    errors,
    isValid,
    isSubmitSuccessful,
    isLoading,
    setValue
  }
}
