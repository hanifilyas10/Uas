"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

<<<<<<< HEAD

const CardItem = ({ title })=>{
  return (
      <div className="cursor-pointer hover:drop-shadow-lg drop-shadow-md bg-[#E5E5E5] w-[100px] ">
          <div className="flex justify-center">
              <img 
                  className="h-[100px]"
                  src="/images/icon.jpg"/>
          </div>
          <div className="p-4 bg-white ">
              <div className="text-[18px] truncate">{title}</div>

          </div>
      </div>
  )
}

export default function Blogs() {
  const router = useRouter();
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("");

=======
const CardItem = ({ title, subTitle})=>{
    return (
        <div className="cursor-pointer hover:drop-shadow-lg drop-shadow-md bg-[#E5E5E5] w-[310px] h-[474px]">
            <div className="flex justify-center">
                <img 
                    className="h-[300px]"
                    src="/images/no-image-icon.jpg"/>
            </div>
            <div className="p-4 bg-white h-[174px]">
                <div className="text-[18px]">{title}</div>
                <div className="text-[#767676] w-full h-[50px] text-ellipsis overflow-hidden">{subTitle}</div>
                <div className="mt-3 text-[#FFB400]">
                    Learn more
                </div>
            </div>
        </div>
    )
}

const LoadingCard=()=>{ 
    return (
        <div className="w-[310px] h-[474px] border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse ">
                <div className=" bg-slate-200 h-[300px]"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-3 bg-slate-200 rounded"></div>
                    <div className="space-y-2">
                        <div className="grid grid-cols-3 gap-4">
                        <div className="h-3 bg-slate-200 rounded col-span-2"></div>
                        <div className="h-3 bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div className="h-3 bg-slate-200 rounded"></div>
                    </div>
                    <div className="h-3 bg-slate-200 rounded"></div>
                </div>
            </div>
        </div>
    )
}

export default function Blogs(){
    const router = useRouter();
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
>>>>>>> 5dc8a079a816806dbe1e014be26b2024c674e959

    const onFetchBlogs=async()=>{
        try{
            setLoading(true)
            let res = await fetch('/api/blogs')
            let data = await res.json()
            setData(data.data)
            setLoading(false)
        }catch(err){
            console.log('err', err)
            setData([])
            setLoading(false)
        }
    }

    useEffect(() => {
        onFetchBlogs()
    }, [])

<<<<<<< HEAD
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        router.push(`/search?query=${searchTerm}`);
      }

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
    return (
      <>
        <h2 className="text-center text-5xl font-bold w-full mt-24 text-cyan-700">Artikel Populer</h2>
        <p className="text-center margin-0 mx-auto w-3/6	">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
          ipsum lorem ipsum lorem ipsum 
        </p>

        {/* Start Search Box */}
        <form onSubmit={handleSearchSubmit} className="flex items-center justify-center my-3 bg-gray-100">
        <div className="relative w-full max-w-2xl my-7">
          <input 
            type="search" 
            name="blogsearch"
            className="block w-full p-6 pl-10 text-lg text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            required 
          />
          </div>
        </form>
        {/* End Search Box */}

        <div className="flex justify-center gap-32">
        {filteredData.map((item, key) => (
                        <div 
=======
    return (
        <>
            <h2 className="text-center text-[32px] font-bold w-full">Blog</h2>
                
            <p className="text-center margin-0 mx-auto w-2/3">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-10">
                { isLoading && <LoadingCard/> }
                { isLoading && <LoadingCard/> }
                { isLoading && <LoadingCard/> }

                {  data.map((item, key)=><div 
>>>>>>> 5dc8a079a816806dbe1e014be26b2024c674e959
                        onClick={()=>router.push(`/blogs/${item._id}`)}
                        key={key}> 
                            <CardItem 
                                className="m-5 p-4 " 
                                title={item.title}
<<<<<<< HEAD
                                />
                        </div>
                    ))
                }
        </div>
      </>
    );
  }
  
=======
                                subTitle={item.subTitle}
                                />
                        </div>
                    )
                }
                
               
            </div>
        </>
    );
}
>>>>>>> 5dc8a079a816806dbe1e014be26b2024c674e959
