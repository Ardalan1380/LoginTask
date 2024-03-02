"use client"

import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LoginPage() {
    const [number , setNumber] = useState('');
    const router = useRouter();
    const numberHandler = (e) => {
        const value = e.target.value;
        const numberValue = value.replace(/[^0-9]/g, '');
        setNumber(numberValue);
    }

    const clickHandler =  () => {
        const formData = new FormData();
            axios.post("https://api.ebsalar.com/api/v1/login_register/" , 
            {
                "phone_number" : number
            }
            ).then(res => {
                if(res.status === 200) {
                    Cookies.set('phoneNumber', number);
                    router.push("/verifyCode")
                }
            })
            .catch(err => console.log(err))
     
    }

    return ( 
        <div className="flex justify-center items-center min-h-[100vh]">
            <div className="border h-[400px]">
            <h1 className="text-[20px] text-center font-semibold">Login Page</h1>            
            <div className="flex mt-[150px] flex-col">
                <label className="text-right">
                    شماره همراه
                </label>
                <input type="text" className="bg-[#F7F7F7] outline-none"  value={number} maxLength={11} placeholder="شماره تلفن را وارد کنید" onChange={numberHandler}/>

                <button onClick={clickHandler}>
                    ارسال
                </button>
            </div>
            </div>
        </div>
     );
}

export default LoginPage;