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

  const [validationErrors, setValidationErrors] = useState<
    Partial<IContactMeFormValues>
  >({})

  const [formSubmissionStatus, setFormSubmissionStatus] = useState<
    "init" | "loading" | "done"
  >("init")

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setContactMeFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleValidation = () => {
    setValidationErrors({})

    if (contactMeFormValues.fullName.trim().length === 0) {
      setValidationErrors((prev) => ({
        ...prev,
        fullName: "Full Name is Required"
      }))
    }

    if (contactMeFormValues.email.trim().length === 0) {
      setValidationErrors((prev) => ({
        ...prev,
        email: "Email is Required"
      }))
    }

    if (contactMeFormValues.subject.trim().length === 0) {
      setValidationErrors((prev) => ({
        ...prev,
        subject: "Subject is Required"
      }))
    }

    if (contactMeFormValues.message.trim().length === 0) {
      setValidationErrors((prev) => ({
        ...prev,
        message: "Message is Required"
      }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    handleValidation()

    // If error occur, then stop the process, otherwise continue
    if (
      Object.keys(validationErrors).length !== 0 &&
      Object.values(contactMeFormValues).every(
        (value) => value.trim().length !== 0
      )
    ) {
      setFormSubmissionStatus("loading")
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
      setFormSubmissionStatus("done")
    }
  }

  const handleClear = (e: FormEvent) => {
    e.preventDefault()

    setContactMeFormValues(initialFormValues)
    setValidationErrors({})
  }

  return {
    handleChange,
    handleSubmit,
    contactMeFormValues,
    handleClear,
    validationErrors,
    handleValidation,
    formSubmissionStatus
  }
}
