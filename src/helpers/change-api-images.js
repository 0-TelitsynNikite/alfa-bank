export default async function changeApiImages(url, item) {
    const res = await fetch(url);

    item.liked = false

    if (!res.ok) {
        item.image = 'https://blog.vverh.digital/wp-content/uploads/2020/06/oblojka-404.png'
    }

} 