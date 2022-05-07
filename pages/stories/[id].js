export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(anime => {
        return {
        params: {id : anime.id.toString()}
        }
    })

    return {
       paths,
       fallback : false
    }
}

export const getStaticProps = async (context) => {
  const id = context.params.id.toString();
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id.toString());
  const data = await res.json();

  return {
      props : {anime: data}
  }
}

const Details = ({anime}) => {
    return (
       <div>
           <h1>{anime.name}</h1>
           <h2>{anime.email}</h2>
           <h2>{anime.address.city}</h2>
       </div>
    )
}
 
export default Details;