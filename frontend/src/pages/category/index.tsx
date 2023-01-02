import { FormEvent, useState } from "react";
import Head from "next/head";
import { Header } from "../../components/Header"; 
import styles from "./style.module.scss";

import { setupApiClient } from "../../services/api";
import { toast } from "react-toastify";

import { canSSRAuth } from "../../utils/canSSRAuth";

 export default function Category() {
    const [name, setName] = useState('');

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        if(name === '') {
            toast.warning('Prencha o campo antes de cadastrar!')
            return;
        }

        const apiClient = setupApiClient();
        await apiClient.post('/category', {
            name: name
        })

        toast.success('Categoria cadastrada com sucesso!')
        setName('');

    }

    return (
        <>
         <Head>
            <title>Nova categoria - Organize Flix</title>
         </Head>

         <div>
            <Header/>

            <main className={styles.container}>
                <h1>Cadastrar Categoria</h1>

                <form className={styles.form} onSubmit={handleRegister}>
                    <input type="text"
                     placeholder="Digite uma nova Categoria" 
                     className={styles.input}
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     />

                    <button className={styles.buttonAdd} type="submit">
                        Cadastrar
                    </button>
                </form>
         </main>
         </div>

        </>
    )
 }

 export const getServerSideProps = canSSRAuth( async (ctx) => {

    return {
        props: {}
    }
 })