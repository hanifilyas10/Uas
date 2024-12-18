"use client"
import { useRouter } from 'next/navigation'

export default function AdminMenu() {
    const router = useRouter()

    
    const onLogOut= async ()=>{
      const res =  await fetch(`/api/auth/logout`,{
        method:'POST',
      })

      let response = await res.json()
      if(res.status == 200){
        router.push('/', { scroll: false })
      }
    }

    return (
        <header className="py-2 bg-white">
          <nav className="w-full">
            <div className="max-w-5xl mx-auto px-6 md:px-12 xl:px-6">
              <div className="flex flex-wrap items-center justify-between">
                <div>
<<<<<<< HEAD
                  <a href="/admin">M HANIF ILYAS</a>
=======
                  <a href="/admin">Admin Panel</a>
>>>>>>> 5dc8a079a816806dbe1e014be26b2024c674e959
                </div>
                <div>
                  <ul className="flex flex-row gap-6">
                    <li className="mt-1">
                      <a className="btn-link" href="/admin/work">Work</a>
                    </li>
                    <li className="mt-1">
                      <a className="btn-link" href="/admin/message">Messages</a>
                    </li>
                    <li className="mt-1">
                      <a className="btn-link" href="/admin/blogs">Blogs</a>
                    </li>
                    <li>
                        <button  className="btn-primary" onClick={onLogOut}>
                            <span className="relative text-sm font-semibold text-white">
                                Log Out
                            </span>
                         </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
    )
}