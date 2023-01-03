import { useState } from "react";
import { canSSRAuth } from "../../utils/canSSRAuth"
import Head from "next/head";
import styles from './style.module.scss';

import { Header } from "../../components/Header";
import { FiRefreshCcw, FiTrash2 } from 'react-icons/fi'

import { setupApiClient } from "../../services/api";
import { toast } from "react-toastify";

type ItemsProps = {
    id: string;
    name: string;
}

interface HomeProps {
    items: ItemsProps[]
}

export default function Dashaboard( { items }: HomeProps) {

    const [favoriteList, setFavoriteList] = useState(items || []);

    async function handleDeleteFavorite(id: string) {
        const apiCliente = setupApiClient();
        try {
            await apiCliente.delete('/favorite', {
                data: {
                    favorite_id: id  
                 }         
            }) 
            toast.success('Item deletado com sucesso!')
            const response = await apiCliente.get('/favorite')
            setFavoriteList(response.data)
        } catch (err) {
            console.log('Erro ao excluir ', err)
        }
        
    }

    async function handleRefreshFavorites() {
        const apiCliente = setupApiClient();

        const response = await apiCliente.get('/favorite')
        setFavoriteList(response.data)
    }

    return (
        <>

        <Head>
            <title>Painel - OrganizeFlix</title>
        </Head> 
        <div>
            <Header/>

            <main className={styles.container}>

                <div className={styles.containerHeader}>
                    <h1>Meus Favoritos</h1>

                    <button onClick={handleRefreshFavorites}>
                        <FiRefreshCcw size={25} color="#3fffa3" />
                    </button>
                </div>
                <article className={styles.listItems}>

                    { favoriteList.map( item => (
                        <section key={item.id} className={styles.movieItem}>
                        <button>
                            <div className={styles.tag}></div>
                            <span>{item.name}</span>
                        </button>
                        <span className={styles.trashIcon} key={item.id} onClick={ () => handleDeleteFavorite( item.id)}>
                             <FiTrash2 className={styles.icon} size={25}/>
                            </span>
                        </section>
                    ))}

                    

                </article>
            </main>
        </div>
        
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
     
    const apiCliente = setupApiClient(ctx);

    const response = await apiCliente.get('favorite');

    //console.log(response.data);

    return {
        props: {
            items: response.data
        }
    }
})