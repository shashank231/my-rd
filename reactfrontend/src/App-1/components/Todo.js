import { connect } from 'react-redux'
import { useState } from "react";
import React from "react";
import { Tasks } from "./Tasks";
import { updateItems } from "../redux/modules";
import { itemsSelector, numSelector } from "../redux/selectors";
import Button from 'react-bootstrap/Button';
import styles from "./Todo.module.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoComponent(props){
  const { updateItems, items } = props;
  const [ task, setTask ] = useState("");

  const addNewItem = () => {
    let newItems = [...items];          // VVII
    newItems.push(task);
    updateItems(newItems);
    setTask('');
    toast.success("Task Added", { autoClose: 1000 });
  }

  const inputTextOnChange = (event) => {
    setTask(task => event.target.value);
  }

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


const mapStateToProps = (state) => ({
  items: itemsSelector(state),
  num: numSelector(state),
});


export const Todo = connect(mapStateToProps, {
  updateItems,
})(TodoComponent);