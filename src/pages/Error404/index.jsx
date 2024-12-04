import styles from './Error404.module.css';

const Error404 = () =>{
    return(
        <div className={styles.container}>
            <h3 className={styles.title}>Ops!</h3>
            <p className={styles.description}>No hemos encontrado la ruta que buscas</p>
        </div>
    )
}

export default Error404