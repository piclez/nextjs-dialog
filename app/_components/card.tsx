import { useState } from "react";
import Dialog from "./dialog";

function Card({ room }: { room: { name: string } }) {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = (isOpen: boolean) => {
    setOpenDialog(isOpen);
  };

  return (
    <div
      className="shadow-md rounded-md cursor-pointer"
      onClick={handleOpenDialog}
    >
      <div className="p-4">
        <h2>{room?.name} - not working</h2>
      </div>
      <div>
        <Dialog open={openDialog} onOpenChange={handleCloseDialog} />
      </div>
    </div>
  );
}

export default Card;
