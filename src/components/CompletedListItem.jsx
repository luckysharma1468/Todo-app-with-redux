import React from "react";
import { Box, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const CompletedListItem = ({ completedTasks, taskUncompleted }) => {
  return (
    <>
      {completedTasks.map((task) => (
        <Box key={task.id}>
          <IconButton
            color="warning"
            onClick={() => taskUncompleted(task.id)}
            size="small"
            sx={{
              padding: "0 70px",
            }}
          >
            <span style={{ color: "white" }}>{task.name}</span>
            <ClearIcon />
          </IconButton>
        </Box>
      ))}
    </>
  );
};

export default CompletedListItem;
