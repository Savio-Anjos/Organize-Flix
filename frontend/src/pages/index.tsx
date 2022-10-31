import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from '../../styles/home.module.scss';

import logoImg from '../../public/logo.svg';

//COMPONENTS
import { Input } from "../components/ui/Input";  
import { Button } from "../components/ui/Button";




export default function Home() {
  return (
   <>
   <Head>
     <title>OrganizeFlix - Faça  seu login</title>
   </Head>
   
   <div className={styles.containerCenter}>
     <Image src={logoImg} alt="Logo Organize Flix"/>
     
     <h3 className={styles.subTitle}>Faça login e organize seus filmes!</h3>

     <div className={styles.login}>
       <form>

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

       <a className={styles.text}>Não possui uma conta? Cadastre-se!</a>
     </div>
   </div>
   </>
  )
}
