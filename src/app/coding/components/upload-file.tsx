'use client';

import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { Input } from "@/components/ui/input";
// import { Label } from "@radix-ui/react-label";

type accessProp = {
  access: string | undefined
}

export default function FileUpload({access}: accessProp) {
  console.log("access ##########", access)
  const [res, setRes] = useState({})
  const [err, setErr] = useState(null)
  const {toast} = useToast()
    
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');


  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    setFile(e.target.files[0]);

  };

  const handleUpload = async (e: React.FormEvent<HTMLInputElement> | any) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const handleClick = async () => {
      toast({ 
        className: 'bg-green-600 text-white',
        title: "باریک...." ,
        description: "کدت کار کرد "  
      });
    };

    const toastError = async () => {
      toast({ 
        className: 'bg-red-600 text-white',
        title: "دوباره تلاش کن...." ,
        description: "کدت کار نکرد "  
      });
    };

    const formData = new FormData();
    formData.append("code_program", file);
 
     const response = await fetch(`http://127.0.0.1:8080/api/v1/query/save_program/`, {
        method: 'POST',
        body: formData,
        headers: {
        Authorization: `Bearer ${access}`
        }
    })
    if(response.status == 200){

        const respon = await response.json()
        setRes(respon)
        handleClick()
        setErr(null)
    }if(response.status == 400){
      const err = await response.json()
      setErr(err)
      toastError()
      setRes({})
    }
   
  };


  return (
    <div className="flex flex-col my-5 dark:bg-card p-7 items-center justify-center">
      
      <h1 className=" text-red-600 my-7"> فرستادن نمونه برنامه  </h1>
      <form onSubmit={handleUpload} 
            className=" flex justify-center items-center gap-x-3 ">
        {/* <Label className=" border border-primary p-2 rounded-md text-sm"> اضافه کردن فایل + */}
        <Input  type="file" 
                className="hidden w-full h-full"
                accept=".py" 
                onChange={handleFileChange} />

          {/* </Label> */}
        <Button type="submit" > 
                 ارسال 
         </Button>
      </form>
      {uploadMessage && <p>{uploadMessage}</p>}

      {/* <div className="mt-4 dark:bg-card">
        {res !==null && 
          <>
          <p>{res?.test_result} </p>
        
   
        </>
      }
      </div>

      <div className="mt-4 dark:bg-card text-red-400">
        {err !==null && 
          <>
          <p>{err?.test_result} </p>
        
   
        </>
      }
      </div> */}
    </div>
  );
}
