import React from "react"
import "./Input.scss"

function Input({
  type,
  name,
  placeholder,
  labelText,
  imgUrl,
  imgAlt = "",
  onChange = null,
  required = "false",
  defaultValue = "",
}) {
  return (
    <div className="input">
      <img
        className="input-img"
        src={imgUrl}
        alt={imgAlt}
      />
      <label
        className="input-label"
        htmlFor={name}>
        {labelText}
      </label>
      <input
        className="input-input"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        defaultValue={defaultValue}
      />
    </div>
  )
}

export default Input
