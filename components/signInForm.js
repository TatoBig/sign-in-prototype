import React from 'react'
import { Button } from '@material-ui/core/'
import Input from './controls/Input'


function signInForm(props) {
    return (
    <React.Fragment>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Input 
          control={props.control}
          label="Usuario"
          name="username"
        />
        <Input 
          control={props.control}
          label="Contraseña"
          name="password"
          type="password"
        />        
        <Button variant="text" color="default" type="submit">
            Ingresar
        </Button>
      </form>
    </React.Fragment>
  )
}

export default signInForm