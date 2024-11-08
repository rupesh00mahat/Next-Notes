"use client";
import React, { useRef } from 'react'

function NoteItem({id:number, noteText:string, dateAndTime, bgColor}) {
  const noteItemRef = useRef("");
  return (
    <div className={`note bg-${bgColor} p-5 rounded-2xl shadow-lg text-xl w-full h-80`}>
            <textarea ref={noteItemRef}
            onChange={(e)=>{
              console.log(e.target.value);
            }}
            className="bg-inherit block w-full border-none !outline-none h-[90%]"></textarea>
            <div className="date-and-time border-t p-2 text-center">
              {dateAndTime}
            </div>
          </div>
         
  )
}


export default NoteItem