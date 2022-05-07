import styles from '../../styles/Anime.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: {anime: data}
    }
}



const Anime = ({anime}) => {
    return ( 
        <div>
        <h1>All Anime Youtubers</h1>
        {anime.map(anime => (
            <Link href={'/stories/' + anime.id} key={anime.id}>
             <a className={styles.single}>
             <h3>{anime.name}</h3>
             </a>
            </Link>
        ))}
        </div>
     );
}
 
export default Anime;
