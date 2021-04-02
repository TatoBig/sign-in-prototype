import React from 'react'
import { Button } from '@material-ui/core/'
import Input from './controls/Input'
import Link from 'next/link'
import { useSelector } from 'react-redux'


function signInForm(props) {
    return (
    <React.Fragment>
        <Input 
            name="username" 
            label="Usuario"
            value={props.values.username}
            onChange={props.handleInputChange}
          />
          <Input 
            name="password" 
            label="Contraseña"
            type="password"
            value={props.values.password}
            onChange={props.handleInputChange}
          />      
        <Button variant="text" color="default" onClick={props.submit}>
            {props.logged ? 
            <Link href="/home">
                <a>Ingresando...</a>
            </Link> : 
            'Ingresar'}              
        </Button>
        <Button variant="text" color="default" onClick={props.submitTest}>
          sign in
        </Button>
    </React.Fragment>
  )
}

export default signInForm