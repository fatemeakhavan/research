
// "use client"
// import axios from "axios";
 // const {data , error ,isLoading} = useSWR("https://api.github.com/users",fetcher)
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //   axios.get("https://api.github.com/users").then((response) => {
    //     setData(response.data);
    //   });
    // }, []);
 async function User(){
    const data = await getData()
        return (
            <>
                {data && data.map((item)=>{
                    return( 

                          <div className="border-dashed border-2 border-indigo-600 ">
                               <h4>{item.id}</h4>
                               <p>{item.html_url}</p>
                          </div>
                    )
                    
                })}
            </>
            
        )
    }
    export default User;
    
    async function getData() {
        const res = await fetch('https://api.github.com/users', { next: { revalidate: 3600 } })

        if (!res.ok) {
       
          throw new Error('Failed to fetch data')
        }
       
        return res.json()
      }