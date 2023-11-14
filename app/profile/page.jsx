async function Profile(){
    const data = await getData()
       return (
           <>
               {data && data.map((item)=>{
                   return <p>{item.login}</p>
               })}
           </>
       )
   }
   export default Profile;
   
   async function getData() {
       const res = await fetch('https://api.github.com/users',  { cache: 'no-store' })
   
       if (!res.ok) {
      
         throw new Error('Failed to fetch data')
       }
      
       return res.json()
     }