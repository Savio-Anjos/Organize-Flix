import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from '../../../styles/home.module.scss';

import logoImg from '../../../public/logo.svg';

//COMPONENTS
import { Input } from "../../components/ui/Input";  
import { Button } from "../../components/ui/Button";

import Link from 'next/link';




export default function SignUp() {
  return (
   <>
   <Head>
     <title>Faça seu cadastro agora!</title>
   </Head>
   
   <div className={styles.containerCenter}>
     <Image src={logoImg} alt="Logo Organize Flix"/>
     
     <h3 className={styles.subTitle}>Cadastre-se e organize seus filmes!</h3>

     <div className={styles.login}>
       <form>

       <h4 className={styles.label}>Nome de usuário:</h4>

       <Input
         placeholder="Digite seu nome"
         type="text"
        />

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
