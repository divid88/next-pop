import React from 'react'
import {ListTutorial} from '../components/list-tutorials'
import DescribLesson from '../components/DescribLesson'
import EditorCode from '../components/EditorCode'


export default function Turorial() {

  const subjects = [
    {id: 1, title: 'شروع'},
    {id: 2, title: ' کامنت در پایتون'},
    {id: 3, title: ' متغیرها در پایتون'},
    {id: 4, title: ' متن در پایتون '},
    {id: 5, title: ' اعداد در پایتون'},
    {id: 6, title: 'شرط در پایتون'},
    {id: 7, title: ' حلقه ها در پایتون'},
    {id: 8, title: 'لیست '},
  ]
  return (
    
    <div className=' relative'>
    <div className='  grid md:grid-cols-12 '>
        
        <div className=' relative' >
        {/* list tutorial */}

            <ListTutorial subjects={subjects} />


        </div>
        {/* describe tutorial */}
        <div className=' col-span-12 md:m-4 h-[550px] overflow-scroll border 
                          rounded-lg '>
            
          <DescribLesson/>
        </div>
    </div>

    <EditorCode/>

    </div>
  )
}
