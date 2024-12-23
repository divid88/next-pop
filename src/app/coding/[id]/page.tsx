import DescribLesson from '../components/DescribLesson' 
import React from 'react'
import FileUpload from '../components/upload-file'
import { cookies } from 'next/headers'
import { ListCoding } from '../components/list-coding'


export default async function page({ params }: { params: { id: number } }) {
  const access = (await cookies()).get('access')
    const accessToken = access?.value

    const { id } = params;
     
    
    const subjects = [
      {id: 1, title: 'استرینگ', tests: [{id: 1, description: 'برعکس کردن یک متن'}]}
    ]


  return (
    <div className=' relative '>
<ListCoding subjects={subjects}/>
         <DescribLesson />

         

         <FileUpload access={accessToken}/>
    </div>
  )
}