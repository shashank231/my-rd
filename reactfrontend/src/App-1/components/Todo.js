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
  const { listItems, listItemsPost } = props;
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

  const inputTextOnChange = (event) => {
    setTask(task => event.target.value);
  }

  useEffect(() => {
    listItems();
  }, []);

  return (
      <React.Fragment>
        <div className={styles.parent_div}>
          <h1>To-DO</h1>
          <input 
            type="text" 
            className={styles.form__input} 
            id="name" 
            placeholder="Add your next task" 
            value={task}
            required=""
            onChange={inputTextOnChange}
          />
          <Button 
            className={styles.todo_btn1}
            variant="outline-secondary"
            id="button-addon2"
            as="input" 
            type="button" 
            value="Add task"
            onClick={addNewItem}
          />
          <ToastContainer />
          <div className={styles.tasks}>
              <Tasks />
          </div>

        </div>
      </React.Fragment>
  );
}


const mapStateToProps = (state) => ({});

const { listItems, listItemsPost } = actions;
export const Todo = connect(mapStateToProps, {
  listItems,
  listItemsPost,
})(TodoComponent);