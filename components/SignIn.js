import React, { useEffect } from 'react'
import SignInForm from './signInForm'
import { useForm, Form } from './useForm'
import { useRouter } from 'next/router'
import { useSignIn } from '../store'
import { auth } from '../services/firebase'

const initialValues = {
    username: '',
    password: '',
  }

export default function SignIn() {
  const router = useRouter()  
  const { isLogged, signIn } = useSignIn()
    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialValues)
    // auth.signInWithEmailAndPassword(values.username, values.password)

    useEffect(() => {
      if (isLogged) {
          router.push("/home");
        }
    });

    const handleSignIn = () => {      
      auth.signInWithEmailAndPassword(values.username, values.password)
        .then((userCredential) => {
          signIn()
          router.push('/home')
        var user = userCredential.user
        })
        .catch((error) => {
          console.log(error.code)
          console.log(error.message)
        });
      }
    

  return (
    <React.Fragment>
        <Form>
            <SignInForm
                    values={values}
                    handleInputChange={handleInputChange}
                    submit={handleSignIn}
                    submitTest={signIn}
                    logged={isLogged}
            />
        </Form>
    </React.Fragment>
  )
}
