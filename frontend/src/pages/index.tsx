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

     <div className={styles.login}>
       <form>

        <Input
         placeholder="Digite seu email"
         type="text"
        />

        <Input placeholder="Digite sua senha"
        type="password"
        />

        <Button
         type="submit"
         loading={false}
        >
          Acessar

        </Button>

       </form>
     </div>
   </div>
   </>
  )
}
