import Head from "next/head";
import { Header } from "../../components/Header"; 
import styles from "./style.module.scss"


 export default function Category() {
    return (
        <>
         <Head>
            <title>Nova categoria - Organize Flix</title>
         </Head>

         <div>
            <Header/>

            <main className={styles.container}>
                <h1>Cadastrar Categoria</h1>

                <form className={styles.form}>
                    <input type="text"
                     placeholder="Digite uma nova Categoria" 
                     className={styles.input}
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