import React from 'react'

export default function check({ name, checkValue, onHandle, label }) {
  return (
    <div>
      <input
        type="checkbox"
        name={name}
        id={name}
        onChange={onHandle}
        value={checkValue}
      />
      <span>{label}</span>
    </div>
  )
}
