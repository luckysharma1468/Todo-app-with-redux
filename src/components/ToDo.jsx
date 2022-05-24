import React from "react";
import { Box, Card, Button, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  addTaskToTasks,
  removeTaskFromTasks,
  putBacktoToDO,
  setTaskAsCompleted,
  selectedTasks,
  setGroupTasksAsCompleted,
  clearAllTasks,
  removeFromSelectedTasks,
} from "../reducer";
import Heading from "./Heading";
import AddTask from "./AddTask";
import ToDoList from "./ToDoList";
import CompletedList from "./CompletedList";
import "../styles/ToDo.css";

const ToDo = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const completedTasks = useSelector((state) => state.task.completedTasks);
  const checkedGroup = useSelector((state) => state.task.completeGroup);

  const dispatch = useDispatch();

  const addTask = (newTask) => {
    dispatch(addTaskToTasks(newTask));
  };

  const removeTask = (id) => {
    dispatch(removeTaskFromTasks(id));
  };

  const markUncompleted = (id) => {
    dispatch(putBacktoToDO(id));
  };

  const markCompleted = (id) => {
    dispatch(setTaskAsCompleted(id));
    removeTask(id);
  };

  const markGroupChecked = (checkedId) => {
    if(checkedGroup.includes(checkedId)){
      dispatch(removeFromSelectedTasks(checkedId));
    }else{
      dispatch(selectedTasks(checkedId));
    }
    
  };

  return (
    <Box>
      <Heading tag="h3">ToDo APP</Heading>
      <AddTask onTaskAdded={addTask} />
      <Grid
        container
        spacing={2}
        mx={2}
        my={2}
        justifyContent="center"
        className="cards"
      >
        <Grid item xs={12} sm="auto">
          <Card variant="outlined" sx={{
            backgroundColor: "orange",
            color: "white"
          }} className="todo">
            <Heading tag="h5">To-Do Tasks</Heading>
            <ToDoList
              tasks={tasks}
              onDelete={removeTask}
              onComplete={markCompleted}
              checkedBoxes={markGroupChecked}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm="auto">
          <Card variant="outlined" sx={{
            backgroundColor: "brown",
            color: "white"
          }} className="completed-tasks">
            <Heading tag="h5">Completed Tasks</Heading>
            <CompletedList
              completedTasks={completedTasks}
              taskUncompleted={markUncompleted}
            />
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
      >
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch(setGroupTasksAsCompleted())}
          >
            Mark Completed
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="success"
            onClick={() => dispatch(clearAllTasks())}
          >
            Empty Completed
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ToDo;
