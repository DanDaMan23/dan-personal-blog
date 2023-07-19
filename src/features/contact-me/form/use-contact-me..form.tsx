import { FormEvent } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import emailjs from "@emailjs/browser"

export default function useContactMeForm() {
  const contactMeFormSchema = yup
    .object({
      fullName: yup.string().required(),
      email: yup.string().required(),
      subject: yup.string().required(),
      message: yup.string().required()
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
    isSubmitSuccessful
  }
}
