
  import { ChangeEvent, FormEvent, useState } from 'react';
  import Head from 'next/head';
  import styles from "./style.module.scss";

  import { canSSRAuth } from '../../utils/canSSRAuth';
  import { Header } from '../../components/Header';
import { toast } from 'react-toastify';

import { FiUpload } from 'react-icons/fi'

  export default function Movie() {
    
    const [avatarUrl, setAvatarUrl] = useState('')
    const [imageAvatar, setImageAvatar] = useState(null)

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
                     
                <select>
                    <option>
                        Filme
                    </option>

                    <option>
                        Série
                    </option>
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

    return {
        props: {}
    }
  })