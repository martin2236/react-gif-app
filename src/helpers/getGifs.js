export const getGifs = async(categorie) => {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=XJMdXHPCxe24fP9UqLBcOYTP9zh2poNd&q=${categorie}&limit=10`);
    const {data = []} = await resp.json();

    const gifs = data.map(gif => ({
        id:gif.id,
        title:gif.title,
        url:gif.images.downsized_medium.url
    }))

    return gifs
};