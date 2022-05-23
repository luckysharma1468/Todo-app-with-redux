import React from "react";
import { Box, FormControlLabel, Checkbox, IconButton } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";

const ListItem = ({ tasks = [], onDelete, onComplete, checkedBoxes }) => {
  const handleChange = (event) => {
    const checkedValue = event.target.value;
    checkedBoxes(checkedValue);
  };

  return (
    <>
      {tasks.map((task) => (
        <Box key={task.id}>
          <FormControlLabel
            label={task.name}
            control={
              <Checkbox
                value={task.id}
                color="secondary"
                onChange={handleChange}
              />
            }
          />
          <IconButton color="success" onClick={() => onComplete(task.id)}>
            <DoneIcon />
          </IconButton>
          <IconButton color="warning" onClick={() => onDelete(task.id)}>
            <ClearIcon />
          </IconButton>
        </Box>
      ))}
    </>
  );
};

export default ListItem;
