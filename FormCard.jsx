import React from 'react'

const FormCard = ({persona}) => {
  return (
    <div className='form-card'> 
        <h3>Tu nombre es: {persona.name}</h3>
        <h4>Cumplis años en: {persona.bday}</h4>
    </div>
  )
}

export default FormCard