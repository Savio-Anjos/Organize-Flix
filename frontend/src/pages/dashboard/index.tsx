import { canSSRAuth } from "../../utils/canSSRAuth"
import Head from "next/head";
import styles from './style.module.scss';

import { Header } from "../../components/Header";
import { FiRefreshCcw } from 'react-icons/fi'

export default function Dashaboard() {
    return (
        <>

        <Head>
            <title>Painel - OrganizeFlix</title>
        </Head> 
        <div>
            <Header/>

            <main className={styles.container}>

                <div className={styles.containerHeader}>
                    <h1>Meus Itens</h1>

                    <button>
                        <FiRefreshCcw size={25} color="#3fffa3" />
                    </button>
                </div>
                <article className={styles.listItems}>

                    <section className={styles.movieItem}>
                    <button>
                        <div className={styles.tag}></div>
                        <span>Boku no hero</span>
                    </button>
                    </section>

                </article>
            </main>
        </div>
        
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    return {
        props: {}
    }
})