import { useState } from "react"

function Input(props) {
  const { placeholder, name, type, onValueChange } = props
  const [value, setValue] = useState() // desestruturação - destructuring

  const onChange = (event) => {
    setValue(event.target.value)
    onValueChange(event.target.value)
  }

  return (
    <>
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event)}
      />
    </>
  )
}

export default Input;