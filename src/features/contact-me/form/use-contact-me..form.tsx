import { FormEvent, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import emailjs from "@emailjs/browser"
import text from "./contact-me.form.json"

export default function useContactMeForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const contactMeFormSchema = yup
    .object({
      fullName: yup.string().required(text.fullName.validations.required),
      email: yup
        .string()
        .required(text.email.validations.required)
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          text.email.validations.invalidEmail
        ),
      subject: yup.string().required(text.subject.validations.required),
      message: yup.string().required(text.message.validations.required)
    })
    .required()

  type ContactMeFormData = yup.InferType<typeof contactMeFormSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitSuccessful },
    reset
  } = useForm<ContactMeFormData>({
    resolver: yupResolver(contactMeFormSchema)
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    handleSubmit(async (data: ContactMeFormData) => {
      setIsLoading(true)
      await emailjs
        .send(
          "service_tfdxghl",
          "template_cb5h6mg",
          {
            ...data
          },
          "B1TgxrcFscxkVz81G"
        )
        .then((response) => {
          console.log(response)
          reset()
        })
        .catch((error) => {
          console.log(error)
        })
      setIsLoading(false)
    })()
  }

  const onClear = (e: FormEvent) => {
    e.preventDefault()
    reset()
  }

  return {
    register,
    onSubmit,
    onClear,
    errors,
    isValid,
    isSubmitSuccessful,
    isLoading
  }
}
