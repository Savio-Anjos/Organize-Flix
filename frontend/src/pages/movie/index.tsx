
  import { ChangeEvent, FormEvent, useState } from 'react';
  import Head from 'next/head';
  import styles from "./style.module.scss";

  import { canSSRAuth } from '../../utils/canSSRAuth';
  import { Header } from '../../components/Header';
import { toast } from 'react-toastify';

import { FiUpload } from 'react-icons/fi'

import { setupApiClient } from '../../services/api';

 type ItemProps = {
    id: string;
    name: string;
 }

 interface CategoryProps {
    categoryList: ItemProps[];
 }

  export default function Movie({ categoryList }: CategoryProps) {
    
    const [avatarUrl, setAvatarUrl] = useState('')
    const [imageAvatar, setImageAvatar] = useState(null)

    const [categories, setCaregories] = useState(categoryList || []);
    const [categorySelected, setCategorySelected] = useState(0);

    const [movie, setMovie] = useState('');
    const [seasons, setSeasons] = useState('')

    function handleFile(e: ChangeEvent<HTMLInputElement>) {
        
        if(!e.target.files) {
            return;
        }

        const image = e.target.files[0]

        if(!image) {
            return;
        }

        if(image.type === 'image/jpeg' || image.type === 'image/png') {
            setImageAvatar(image);
            setAvatarUrl(URL.createObjectURL(e.target.files[0]))
        }
    }

    function handleRegister(event: FormEvent) {
        event.preventDefault();
        
        if(movie === '') {
            toast.warn('Preencha os campos obrigatórios!')
            return;
        }
    }
    
    //Quando uma categoria é selecionada
    function handleChangeCategory(event) {
        setCategorySelected(event.target.value)
    }
    
    return (
        <>
          <Head>
            <title>Novo produto - Organize Flix</title>
          </Head>
          <div>
            <Header />

            <main className={styles.container}>
            <h1>Novo Filme</h1>
            <form className={styles.form}  onSubmit={handleRegister}>

                <label className={styles.labelAvatar}>
                    <span>
                        <FiUpload size={30} color="#FFF"/>

                    </span>

                    <input type="file" accept='image.png, image.jpeg' onChange={handleFile}/>
                      
                      {avatarUrl && (
                         <img 
                         className={styles.preview}
                         src={avatarUrl}
                         alt="Banner do filme"
                         width={250}
                         height={250} 
                         />
                      )}
                </label>
                     
                <select value={categorySelected} onChange={handleChangeCategory}>
                    {categories.map((item, index) => {
                        return(
                            <option key={item.id} value={index}>
                                {item.name}
                            </option>
                        )
                    })}
                </select>

                <input
                 type="text" 
                 placeholder="Digite o nome do filme"
                 className={styles.input}
                 value={movie}
                 onChange={(e) => setMovie(e.target.value)}
                />

                <input
                 type="text" 
                 placeholder="Temporadas(opcional)"
                 className={styles.input}
                 value={seasons}
                 onChange={(e) => setSeasons(e.target.value)}
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

  export const getServerSideProps = canSSRAuth(async (ctx) => {
     const apiClient = setupApiClient(ctx)
     
     const response = await apiClient.get('/category');
     //console.log(response.data);
     
    return {
        props: {
            categoryList: response.data
        }
    }
  })