'use client'

import { useRouter } from "next/navigation"

function HomePage() {
    const router = useRouter();
    const LoginHandler = () => {
        router.push("/login")
    }

   
    return ( 
        <div className="flex justify-center items-center mx-auto min-h-[100vh]">
      <div className="flex mx-2">

        <button onClick={LoginHandler} className="border">
            Login Page
        </button>
      </div>
   </div>
     );
}

export default HomePage;