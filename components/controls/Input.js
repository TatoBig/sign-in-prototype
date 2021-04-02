import { TextField } from '@material-ui/core'
import React from 'react'

const Input = (props) => {

    const {name, label, value, onChange, type} = props
    return (
        <TextField
            label={label}
            name={name}
            variant="outlined"
            value={value}
            onChange={onChange}            
            type={type}
          />
    )
}

export default Input
