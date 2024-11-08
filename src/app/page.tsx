"use client";
import "./globals.css";
import { IoMdAdd } from "react-icons/io";
import NoteItem from "@/app/components/note-item";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { format } from "date-fns";

interface Note {
  id: string,
  noteText: string,
  dateAndTime: string,
  bgColor: string
}

const getDateAndTime = () => {
  const date = new Date();
  const formattedDate = format(date, "h:mm a 'at' MMM d, yyy");
  return formattedDate;
}

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<string>("red-500");

  const [notes, setNotes] = useState<Note[]>([{ id: uuidv4(), noteText: "Demo Text", dateAndTime: getDateAndTime() , bgColor: selectedColor}]);
  const newNote = () => {
    const dateAndTime = getDateAndTime();

    const  newNoteItem:Note = {
      id: uuidv4(),
      noteText: "",
      dateAndTime,
      bgColor: selectedColor
    };
    setNotes(prevNotes => [...prevNotes, newNoteItem]);
  }

  const setNewColor = (newColor: string) => {
    setSelectedColor(newColor);
  }


  return (
    <div className="w-5/6 mx-auto">
      <h3 className="text-2xl my-5 text-center">Next Notes</h3>
      <div className="flex gap-20">
        <div className="create-new-note  flex flex-col items-center gap-2">
          <button
            onClick={newNote}
            className="bg-gray-400 p-5 rounded-full">
            <IoMdAdd size={30} />

          </button>
          <button
            onClick={() => { setNewColor("red-500") }}
            className="bg-red-500 p-4 rounded-full border-b border-2 border-black"></button>
          <button
            onClick={() => { setNewColor("blue-400") }}

            className="bg-blue-400 p-4 rounded-full"></button>
          <button
            onClick={() => { setNewColor("green-600") }}

            className="bg-green-600 p-4 rounded-full"></button>
          <button
            onClick={() => { setNewColor("gray-200") }}

            className="bg-gray-200 p-4 rounded-full"></button>
          <button
            onClick={() => { setNewColor("cyan-900") }}

            className="bg-cyan-900 p-4 rounded-full"></button>
        </div>
        <div className="notes grid grid-cols-3 w-full gap-10">
          {notes.map(({ id, noteText, dateAndTime, bgColor }) => { return <NoteItem key={id}  noteText={noteText} dateAndTime={dateAndTime} bgColor={bgColor}/> })}

        </div>
      </div>
    </div>
  );
}
