import React, { useEffect } from 'react'
import SignInForm from './signInForm'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'
import { useSignIn } from '../store'
import { auth } from '../services/firebase'

export default function SignIn() {
  const router = useRouter()  
  const { isLogged, signIn } = useSignIn()
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    auth.signInWithEmailAndPassword(data.username, data.password)
        .then((userCredential) => {
          signIn()
          router.push('/home')
        var user = userCredential.user
        })
        .catch((error) => {
          console.log(error.code)
          console.log(error.message)
        });
  };

    useEffect(() => {
      if (isLogged) {
          router.push("/home");
        }
    },[]);

  return (
    <React.Fragment>
            <SignInForm
              handleSubmit={handleSubmit}
              control={control}
              onSubmit={onSubmit}
              logged={isLogged}
            />
    </React.Fragment>
  )
}
