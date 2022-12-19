import React, { FormEvent, useState } from "react";
import { useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from '../../styles/home.module.scss';

import logoImg from '../../public/logo.svg';

//COMPONENTS
import { Input } from "../components/ui/Input";  
import { Button } from "../components/ui/Button";

//CONTEXTS
import { AuthContext } from '../contexts/AuthContext';
import { toast } from "react-toastify";

import Link from 'next/link';

import { canSSRGuest } from "../utils/canSSRGuest";




export default function Home() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault();


    if(email === '' || password === '') {
      toast.warning("Preencha todos os campos!")
      return;
    }

    setLoading(true)
    
    let data = {
      email,
      password
    }

    await signIn(data)

    setLoading(false);
  }

  return (
   <>
   <Head>
     <title>OrganizeFlix - Faça  seu login</title>
   </Head>
   
   <div className={styles.containerCenter}>
     <Image src={logoImg} alt="Logo Organize Flix"/>
     
     <h3 className={styles.subTitle}>Faça login e organize seus filmes!</h3>

     <div className={styles.login}>
       <form onSubmit={handleLogin}>

       <h4 className={styles.label}>Endereço de email:</h4>

        <Input
         placeholder="joao@exemple.com"
         type="text"
         value={email}
         onChange={ (e) => setEmail(e.target.value) }
        />

       <h4 className={styles.label}>Sua senha:</h4>

        <Input placeholder="********"
        type="password"
        value={password}
        onChange={ (e) => setPassword(e.target.value) }
        />

        <Button
         type="submit"
         loading={loading}
        >
          Acessar 

        </Button>

       </form>

       <Link href="/signup" legacyBehavior>
         <a className={styles.text}>Não possui uma conta? Cadastre-se!</a>
       </Link>
     </div>
   </div>
   </>
  )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {

  return {
    props: {}
  }
})