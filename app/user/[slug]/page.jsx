// "use client"

// import useSWR from "swr"

// const fetcher = url => fetch(url).then(r => r.json())
// const Post = ({params})=> {
//     const {data , error ,isLoading} = useSWR(`https://api.github.com/users/${params.slug}`,fetcher)

// return(<>
// {data && <div>{data.avatar_url}</div>}
// </>)
// }
// export default Post


async function UserInfo(){
 const data = await getData()
    return (
        <>
            {data && data.map((item)=>{
                return (
                    <p>{item.html_url}</p>
                )
            })}
        </>
    )
}
export default UserInfo;

async function getData() {
    const res = await fetch('https://api.github.com/users', { next: { revalidate: 3600 } })

    if (!res.ok) {
   
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }