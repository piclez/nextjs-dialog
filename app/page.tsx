"use client"
import React, { useState } from 'react'
import Dialog from './_components/dialog';
import Card from './_components/card';

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false);
  const onClickHandler = () => {
    setOpenDialog(true);
  }

  const userRoomList = [
    {
      name: "Room 1",
    },
    {
      name: "Room 2",
    },
  ]

  return (
    <div className="">
      {userRoomList?.length == 0 ?
        <p>No rooms.</p>
        :
        <div className="mt-10">
          <h2 className="font-medium text-primary text-xl mb-10">Rooms</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {userRoomList.map((room, index) => (
              <Card key={index} room={room} />
            ))}
          </div>
        </div>
      }

      <div className="mt-20 shadow-md rounded-md cursor-pointer" onClick={() => onClickHandler()}>Works</div>
      <div>
        <Dialog openDialog={openDialog}
          closeDialog={() => setOpenDialog(false)}
        />
      </div>
    </div>
  );
}
