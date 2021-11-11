//helpers van a ser funciones que hacen cierto trabajo en especifico, pueden recibir unas argumentos los procesan y hacen algun return

export const getGifs = async ( category ) => {
    //encodeURI: Reemplaza los espacios por porcentaje 20 entre otras cosas|
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category) }&limit=10&api_key=WhCV9n8rpqCJOPh5NNN2grEEjvWhdZBI`
    const resp = await fetch(url)
    const {data} = await resp.json()

    //para extraer cada información se barren esos gifs
    const gifs = data.map(gif =>{
        //el return va a transformar cada uno de los elementos que estan dentro del arreglo
        // y voy a retornar  un nuevo objeto con la información de interés
        return {
            id: gif.id,
            title: gif.title,
            //se coloca el signo de interrogación para asegurarse de que si se traen las imagenes
            url: gif.images?.downsized_medium.url
        }
    })
    return gifs

}