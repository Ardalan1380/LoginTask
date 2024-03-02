"use client"

import axios from "axios";
import { useState } from "react";

function ContactPage() {

    const [text , setText] = useState('');
    const [message , setMessage] = useState('');
    const [error , setError] = useState('')
    const clickHandler = () => {
        axios.post('http://api.ebsalar.com/api/v1/front/contact_us/' , {
            "connection_way" : text
        }).then(res => alert(res.data.results)).catch(err => console.log(err))
    }

    return ( 
        <div className="flex justify-center item-center min-h-[100vh]">
             <div className="border h-[400px]">
            <h1 className="text-[20px] text-center font-semibold">Contact Page</h1>            
            <div className="flex mt-[150px] flex-col">
                <label className="text-right">
                   راه ارتباطی
                </label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="bg-[#F7F7F7] outline-none" />
                    <label className="text-right">
                    پیام
                </label>
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="bg-[#F7F7F7] outline-none" />
                <button onClick={clickHandler}>
                    ارسال
                </button>
            </div>
            </div>
        </div>
     );
}

export default ContactPage;