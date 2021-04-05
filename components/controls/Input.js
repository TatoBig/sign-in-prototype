import React from "react"
import { Controller } from "react-hook-form"
import { TextField } from "@material-ui/core"

function FormInput(props) {
    const {name, label, control, type} = props
    return (
        <Controller
            render={({ field }) => <TextField  id="standard-basic" variant="outlined" label={label} type={type} {...field} />}
            name={name}
            control={control}
        />
  )
}

export default FormInput