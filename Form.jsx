import React, { useState } from 'react'
import FormCard from './FormCard'

const Form = () => {
    const [persona, setPersona] = useState({
        name: '',
        bday: ''
    })
    const [show, setShow] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Tu nombre es ' + persona.name + ' y cumplis el ' + persona.bday)
        alert('Tu nombre es ' + persona.name + ' y cumplis el ' + persona.bday)
        if(persona.name.length > 3) setShow(true)
    }

    function setPersona() {
        if ( $("#primer-input").val().trim().length > 0 ) {
          alert("El campo contiene un string válido ");
        }
        else {
          alert("por favor chequea que la informacion sea correcta");
        }
      }

    
  return (
    <>
        <form className='formulario' onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input id ="primer-input" type="text" onChange={(e) => setPersona({...persona, name: e.target.value})}/>
            

            <label >Tu cumple:</label>
            <input id ="segundo-input" type="text" required minlength="6" onChange={(e) => setPersona({...persona, bday: e.target.value})}/>
            <button>Enviar</button>
        </form>

        {show ? <FormCard persona={persona}/>:null}
        {
            show && <FormCard persona={persona}/>
        }
        

    </>
  )
}

export default Form