import { connect } from 'react-redux'
import { useEffect, useState } from "react";
import React from "react";
import { Tasks } from "./Tasks";
import { actions } from "../redux/modules";
import Button from 'react-bootstrap/Button';
import styles from "./Todo.module.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoComponent(props){
  const { listItems, listItemsPost, listItemsDelete } = props;
  const [ task, setTask ] = useState("");

  const addNewItem = () => {
    if (task === ""){
      toast.info("Add Some Text!!", { autoClose: false });
    }else{
      listItemsPost(task);
      setTask('');
      toast.success("Task Added", { autoClose: 1000 });
    }
  }

  const clearALLItem = () => {
    listItemsDelete(-1);
    toast.error("All Tasks Deleted", { autoClose: 1000 });
  }

  const inputTextOnChange = (event) => {
    setTask(task => event.target.value);
  }

  useEffect(() => {
    listItems();
  }, []);

  return (
      <React.Fragment>
        <div className={styles.parent}>
          <h1>To-DO</h1>
          <input
            className={styles.parent_input}
            type="text" 
            id="name" 
            placeholder="Add your next task" 
            value={task}
            required=""
            onChange={inputTextOnChange}
          />
          <div className={styles.parent_btn}>
            <Button 
              className={styles.btn1}
              variant="outline-secondary"
              as="input" 
              type="button" 
              value="Add task"
              onClick={addNewItem}
            />
            <Button 
              className={styles.btn1}
              variant="outline-secondary"
              as="input" 
              type="button" 
              value="Clear All Tasks"
              onClick={clearALLItem}
            />
          </div>
          <ToastContainer />
          <div className={styles.tasks}>
              <Tasks />
          </div>

        </div>
      </React.Fragment>
  );
}


const mapStateToProps = (state) => ({});

const { listItems, listItemsPost, listItemsDelete } = actions;
export const Todo = connect(mapStateToProps, {
  listItems,
  listItemsPost,
  listItemsDelete,
})(TodoComponent);