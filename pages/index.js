import { db } from "../services/firebase";
import React from 'react'
import styles from '../styles/Home.module.css'
import SignIn from "../components/SignIn";



export default function Home() {
 
  return (
    <React.Fragment>
      <div className={styles.container}>      
        <SignIn/>
      </div>
    </React.Fragment>
  )
}

 // db.doc("hello/world").set({ hello: "world" });
  // db.collection('prueba').add({
  //     nombre: "Edgar",
  //     edad: 54
  //   })
  //   .then(() => {
  //       console.log('Documento agregadoooooo');
  //   })
  //   .catch((error) => {
  //       console.error('Error al escribir el documento', error);
  //   });
