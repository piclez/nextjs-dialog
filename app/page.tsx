"use client";

import { useState } from "react";
import Card from "./_components/card";
import Dialog from "./_components/dialog";

const userRoomList = [
  {
    name: "Room 1",
  },
  {
    name: "Room 2",
  },
];

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = (isOpen: boolean) => {
    setOpenDialog(isOpen);
  };

  return (
    <div className="">
      {userRoomList?.length == 0 ? (
        <p>No rooms.</p>
      ) : (
        <div className="mt-10">
          <h2 className="font-medium text-primary text-xl mb-10">Rooms</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {userRoomList.map((room, index) => (
              <Card key={index} room={room} />
            ))}
          </div>
        </div>
      )}

      <div
        className="mt-20 shadow-md rounded-md cursor-pointer"
        onClick={handleOpenDialog}
      >
        Works
      </div>
      <div>
        <Dialog open={openDialog} onOpenChange={handleCloseDialog} />
      </div>
    </div>
  );
}
