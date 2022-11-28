import React, { FormEvent } from "react";
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

import Link from 'next/link';




export default function Home() {
  const { signIn } = useContext(AuthContext)

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    let data = {
      email: "algum@teste.com.br",
      password: "123123"
    }
    await signIn(data)
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
        />

       <h4 className={styles.label}>Sua senha:</h4>

        <Input placeholder="********"
        type="password"
        />

        <Button
         type="submit"
         loading={false}
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
