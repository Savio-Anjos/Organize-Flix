import { useState } from "react";
import { canSSRAuth } from "../../utils/canSSRAuth"
import Head from "next/head";
import styles from './style.module.scss';

import { Header } from "../../components/Header";
import { FiRefreshCcw, FiTrash2, FiHeart } from 'react-icons/fi'

import { setupApiClient } from "../../services/api";
import { toast } from "react-toastify";

type ItemsProps = {
    id: string;
    name: string;
    seasons?: string | number;
}

interface HomeProps {
    items: ItemsProps[]
}

export default function Dashaboard( { items }: HomeProps) {

    const [itemList, setItemList] = useState(items || []);

    async function handleDeleteItem(id: string) {
        const apiCliente = setupApiClient();
        try {
            await apiCliente.delete('/item', {
                data: {
                    item_id: id  
                 }         
            }) 
            toast.success('Item deletado com sucesso!')
            const response = await apiCliente.get('/item')
            setItemList(response.data)
        } catch (err) {
            console.log('Erro ao excluir ', err)
        }
        
    }

    async function handleRefreshItems() {
        const apiCliente = setupApiClient();

        const response = await apiCliente.get('/item')
        setItemList(response.data)
    }

    async function handleFavorite(id: string, name: string) { 
        //console.log(id)
       // console.log(name)

       const apiCliente = setupApiClient();

       try {
        await apiCliente.post('/favorite', {
            
             id: id,
             name: name,
            
        })
        toast.success('Adicionado com sucesso!')
        
       } catch (err) {
        console.log(err)
        toast.error('Erro ao adicionar aos favoritos!')
       }

      
      

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
                    <h1>Meus Itens</h1>

                    <button onClick={handleRefreshItems}>
                        <FiRefreshCcw size={25} color="#3fffa3" />
                    </button>
                </div>
                <article className={styles.listItems}>

                    { itemList.map( item => (
                        <section key={item.id} className={styles.movieItem}>
                        <button>
                            <div className={styles.tag}></div>
                            <span>{item.name}</span>
                        </button>

                             <span className={styles.iconFavorites} onClick={() => handleFavorite(item.id, item.name)}>
                             <FiHeart className={styles.iconHeart} size={25}/>
                         </span>
                                         
                        <span className={styles.trashIcon} key={item.id} onClick={ () => handleDeleteItem( item.id)}>
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

    const response = await apiCliente.get('item');

    //console.log(response.data);

    return {
        props: {
            items: response.data
        }
    }
})