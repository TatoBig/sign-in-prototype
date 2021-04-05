import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSignIn } from '../store'

function home () {
    const router = useRouter()
    const { isLogged } = useSignIn()
      useEffect(() => {
        if (!isLogged) {
            router.push("/");
          }
      },[]);

    return (        
        <React.Fragment>
            <h1>Ha accedido</h1>          
        </React.Fragment>
    )
        
}

export default home
