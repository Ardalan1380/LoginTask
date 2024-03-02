'use client'

import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

function VerifyPage() {
    const [code , setCode] = useState('');
    const changeHandler = (e) => {
        setCode(e.target.value);
    }
    const router = useRouter();

    const number = Cookies.get("phoneNumber");

    const submitHandler =  () => {
        axios.post('https://api.ebsalar.com/api/v1/verify_login_register/' , {
            "phone_number" : number,
            "password" :  code
        })
        .then(res => {
            if(200) {
                console.log(res.data)
                 Cookies.set('refresh' , res.data.refresh)
                 Cookies.set('access' , res.data.access)
                 router.push('/contactUs')
            }
        })
        .catch(err => console.log(err))
    }

    return ( 
        <div className="flex justify-center items-center min-h-[100vh]">
            <div className="border h-[400px]">
            <h1 className="text-[20px] text-center font-semibold">VerifyPage Page</h1>            
            <div className="flex mt-[150px] flex-col">
                <label className="text-right">
                    کد ارسالی
                </label>
                <input type="text" className="bg-[#F7F7F7]" value={code} onChange={changeHandler}  maxLength={5} placeholder="لطفا کد ارسالی را وارد نمایید" />

                <button onClick={submitHandler}>
                    ارسال
                </button>
            </div>
            </div>
        </div>
     );
}

export default VerifyPage;