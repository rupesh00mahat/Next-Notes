"use client";
import React, { useState } from 'react'
interface NoteItemProps {
  noteText: string;
  dateAndTime: string;
  bgColor: string;
}
function NoteItem({ noteText, dateAndTime, bgColor}:NoteItemProps) {
  const [text, setText] = useState(noteText);
  return (
    <div className={`note bg-${bgColor} p-5 rounded-2xl shadow-lg text-xl w-full h-80`}>
            <textarea value={text}
            onChange={(e)=>{
              setText(e.target.value);
            }}
            className="bg-inherit block w-full border-none !outline-none h-[90%]"></textarea>
            <div className="date-and-time border-t p-2 text-center">
              {dateAndTime}
            </div>
          </div>
         
  )
}


export default NoteItem