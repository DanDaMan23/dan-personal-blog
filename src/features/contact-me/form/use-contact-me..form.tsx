import { ChangeEvent, FormEvent, useState } from "react"

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(contactMeFormValues)
    setContactMeFormValues(initialFormValues)
  }

  return { handleChange, handleSubmit, contactMeFormValues }
}
