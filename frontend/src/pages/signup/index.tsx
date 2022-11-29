import React, { useState, FormEvent } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from '../../../styles/home.module.scss';

import logoImg from '../../../public/logo.svg';

//COMPONENTS
import { Input } from "../../components/ui/Input";  
import { Button } from "../../components/ui/Button";

import Link from 'next/link';




export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false);

  async function handleSignup(event: FormEvent) {
    event.preventDefault();

    if(name === '' || email === '' || password === '') {
      alert("PREENCHA TODOS OS CAMPOS")
      return;
    } 

    setLoading(true);
  }

  return (
   <>
   <Head>
     <title>Faça seu cadastro agora!</title>
   </Head>
   
   <div className={styles.containerCenter}>
     <Image src={logoImg} alt="Logo Organize Flix"/>
     
     <h3 className={styles.subTitle}>Cadastre-se e organize seus filmes!</h3>

     <div className={styles.login}>
       <form onSubmit={handleSignup}>

       <h4 className={styles.label}>Nome de usuário:</h4>

       <Input
         placeholder="Digite seu nome"
         type="text"
         value={name}
         onChange={ (e) => setName(e.target.value)}
        />

       <h4 className={styles.label}>Endereço de email:</h4>

        <Input
         placeholder="joao@exemple.com"
         type="text"
         value={email}
         onChange={ (e) => setEmail(e.target.value)}
        />

       <h4 className={styles.label}>Sua senha:</h4>

        <Input placeholder="********"
        type="password"
        value={password}
        onChange={ (e) => setPassword(e.target.value)}
        />

        <Button
         type="submit"
         loading={loading}
        >
          Cadastrar

        </Button>

       </form>

       <Link href="/" legacyBehavior>
         <a className={styles.text}>Já possui uma conta? Faça login!</a>
       </Link>
     </div>
   </div>
   </>
  )
}
