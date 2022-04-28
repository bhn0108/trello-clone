import React from 'react'
import {v4 as uuid} from 'uuid';

export const AddTaskCardButton = ({ TaskCardsList, setTaskCardsList }) => {

const addTaskCard = () => {

  const taskCardId = uuid();

  setTaskCardsList([
    ...TaskCardsList,
    {
      id: taskCardId,
      draggableId: `task${taskCardId}`,
    },
  ]);
}

  return (
    <div>
      <div className="addTaskCardButtonArea">
        <button className="addTaskCardButton" onClick={addTaskCard}>+</button>
      </div>
    </div>
  );
};
