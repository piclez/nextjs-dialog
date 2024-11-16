import React, { useState } from 'react'
import Dialog from './dialog';

function Card({ room }) {
  const [openDialog, setOpenDialog] = useState(false);
  const onClickHandler = () => {
    setOpenDialog(true);
  }

  return (
    <div className="shadow-md rounded-md cursor-pointer" onClick={() => onClickHandler()}>
      <div className="p-4">
        <h2>{room?.name} - not working</h2>
      </div>
      <div>
        <Dialog openDialog={openDialog}
          closeDialog={() => setOpenDialog(false)}
        />
      </div>
    </div>
  )
}

export default Card
