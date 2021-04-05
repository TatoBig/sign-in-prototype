// import { makeStyles } from '@material-ui/core';
// import React, { useState } from 'react'

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& .MuiTextField-root': {
//         margin: theme.spacing(1),
//         width: '30ch',
//       },
//     },
//   }));

// export function useForm(initialValues){

//     const [ values, setValues ] = useState(initialValues)

//     const handleInputChange = (e) => {
//         const { name, value } = e.target
//         setValues({
//           ...values,
//           [name]: value
//         })
//       }

//     return {
//         values,
//         setValues,
//         handleInputChange
//     }
// }

// export function Form (props) {
//     const classes = useStyles()
//     return (
//         <form className={classes.root} noValidate autoComplete="off"> 
//             {props.children}
//         </form>
//     )
// }
