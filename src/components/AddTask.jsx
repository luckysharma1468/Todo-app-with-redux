import React, { useRef } from "react";
import { Stack, TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import '../styles/AddTask.css';

const AddTask = ({ onTaskAdded }) => {
  const inputRef = useRef();

  const handleAddTask = () => {
    const newTask = inputRef.current.value;
    onTaskAdded({"id": uuidv4() , "name": newTask});
    inputRef.current.value = "";
  };

  return (
    <Stack direction="row" spacing={2} className="main">
      <TextField
        type="text"
        label="Add Task"
        placeholder="Add your task !"
        inputRef={inputRef}
      />
      <Button variant="contained" onClick={handleAddTask}>
        ADD
      </Button>
    </Stack>
  );
};

export default AddTask;
