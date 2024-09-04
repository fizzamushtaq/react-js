import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()

//  first method of fetch api data:

    // const [data,setData] = useState ([])
    // useEffect(()=>{
    // fetch('https://api.github.com/users/fizzamushtaq')
    // .then(Response => Response.json())
    // .then(data => {
    //     console.log(data);
    //     setData(data)
        
    // })
    // },[])

    return (
        <div className='text-2xl text-center bg-slate-600 my-4 p-4 text-white'>
            Github Followers {data.followers}
            <img src={data.avatar_url} alt="Github picture" width={300}  />
        </div>
    )
}

export default Github

// second method to fetch api data:

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/fizzamushtaq')
    return response.json()
}