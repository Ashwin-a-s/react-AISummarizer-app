import { useState,useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Loader from './Loader';

function Home() {
  const [url,setUrl] = useState("");
  const [para,setPara] = useState("");
  const [local,setLocal] = useState([{}]);
  const [err,setErr] = useState(false);
  const [loader,setLoader] = useState(false);

  useEffect(() =>{
    const storedData = localStorage.getItem("arr");
    if(storedData == null){
      localStorage.setItem("arr",'[{}]')
    }
    else{
      setLocal(JSON.parse(storedData));
    }
},[])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2e891af826msh1f8a6612e2f0ab7p1be7f2jsnc570ff28e9b1',
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
  };

  const dataFetch = async(e)=>{
    e.preventDefault();
    try{
      setLoader(true)
      const apiUrl = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${url}&length=3`;
      const res = await fetch(apiUrl,options)
      const data = await res.json();
      console.log(res);
        if(res.ok){
            setPara(data.summary)
            const storedData = localStorage.getItem("arr");
            setLocal(JSON.parse(storedData));
            const obj = {
                'link':url,
                'para':data.summary 
            }
            console.log(res)
            const updatedLocal = [...local,obj];
            localStorage.setItem("arr",JSON.stringify(updatedLocal));
            console.log(updatedLocal);
            setErr(false);
        }
        else{
            setErr(true)
        }
    } 
    catch(error){
        console.error("hii"+error)
    }finally{
      setLoader(false);
    }  
  }

  return ( 
    <>
    <Navbar />
    <Hero />
        <div className='container max-w-xl m-auto'>
        <h1 className='text-3xl text-center m-10'>AI Summarizer</h1>
            <form className='flex p-10' onSubmit={dataFetch}>
              <input className="w-full py-2 rounded-md border-2 action:border-white" type="text" placeholder='paste here....' value={url} onChange={(e)=>setUrl(e.target.value)}/>
              <button type="submit" className='-ml-12 p-3 text-lg rounded-md'> <FaSearch/> </button>
            </form>
        
        </div>
        <Loader loading={loader}/>
            { (err) || para == ""? (
                <h1 className='font-bold text-2xl text-center text-red-500'>Paste a link to a Article for Summary</h1>
            ) : (
                <div className="flex justify-center flex-col p-6 mb-10 bg-gray-100 m-4 rounded-md">
                            <div className="flex gap-2 items-center">
                                <p className="text-green-500 font-bold text-lg">Link : </p>
                                <a href={url} className="text-blue-700 hover:text-blue-400">{url}</a>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold mt-4 text-green-500">Summary : </h1>
                                <p className="text-pretty p-4">{para}</p>
                            </div>
                </div>
            )

            }
    </>   
  )
}

export default Home
