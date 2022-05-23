import React from 'react';
import { Box } from '@mui/material';
import CompletedListItem from './CompletedListItem';

const CompletedTasks = ( { completedTasks,  taskUncompleted } ) => {
  return (
    <Box>
      <CompletedListItem completedTasks={completedTasks} taskUncompleted={taskUncompleted}/>
    </Box>
  )
}

export default CompletedTasks;
