export const getAllPosts = async (filter: {key: string, value: string}[]) => {
    let queryString = new URLSearchParams()
    if (filter && filter.length) {
        filter.map(f => {
            queryString.append(f.key, f.value)
        })
    }
    await new Promise(r => setTimeout(r, 3000))
    return new Array(10).map(each => {
        return {
            
        }
    })
}