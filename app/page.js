async function Home(){
  const data = await getData()
     return (
         <>
             {data && data.map((item)=>{
                 return <p>{item.login}</p>
             })}
         </>
     )
 }
 export default Home;
 
 async function getData() {
     const res = await fetch('https://api.github.com/users', { next: { revalidate: 3600 } })
 
     if (!res.ok) {
    
       throw new Error('Failed to fetch data')
     }
    
     return res.json()
   }