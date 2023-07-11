import { ChangeEvent, FormEvent, useState } from "react"
import emailjs from "@emailjs/browser"

export default function useContactMeForm() {
  interface IContactMeFormValues {
    fullName: string
    email: string
    subject: string
    message: string
  }

  const initialFormValues: IContactMeFormValues = {
    fullName: "",
    email: "",
    subject: "",
    message: ""
  }

  const [contactMeFormValues, setContactMeFormValues] =
    useState<IContactMeFormValues>(initialFormValues)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setContactMeFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    await emailjs
      .send(
        "service_tfdxghl",
        "template_cb5h6mg",
        {
          ...contactMeFormValues
        },
        "B1TgxrcFscxkVz81G"
      )
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })

    setContactMeFormValues(initialFormValues)
  }

  const handleClear = (e: FormEvent) => {
    e.preventDefault()

    setContactMeFormValues(initialFormValues)
  }

  return { handleChange, handleSubmit, contactMeFormValues, handleClear }
}
