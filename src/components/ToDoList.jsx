import React from "react";
import { Box } from "@mui/material";
import ListItem from "./ListItem";

const ToDoList = ({ tasks, onDelete, onComplete, completedList, checkedBoxes }) => {
  return (
    <Box>
      <ListItem
        tasks={tasks}
        onDelete={onDelete}
        onComplete={onComplete}
        completedList={completedList}
        checkedBoxes={checkedBoxes}
      />
    </Box>
  );
};

export default ToDoList;
