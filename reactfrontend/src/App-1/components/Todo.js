import { connect } from 'react-redux'
import { useState } from "react";
import React from "react";
import { Tasks } from "./Tasks";
import { addItem, removeItem, removeAllItems, changeNum } from "../redux/modules";
import { itemsSelector, numSelector } from "../redux/selectors";
import Button from 'react-bootstrap/Button';
import styles from "./Todo.module.scss";


function TodoComponent(props){
  const {
    addItem,
    items,
  } = props;

  const [ task, setTask ] = useState("");

  const addNewItem = () => {
    let newItems = [...items];          // VVII
    newItems.push(task);
    addItem(newItems);
    setTask('');
  }

  const inputTextOnChange = (event) => {
    console.log(event.target.value);
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
            variant="outline-secondary"
            id="button-addon2"
            as="input" 
            type="button" 
            value="Add task"
            onClick={addNewItem}
          />
          <Tasks />

        </div>
      </React.Fragment>
  );
}


const mapStateToProps = (state) => ({
  items: itemsSelector(state),
  num: numSelector(state),
});


export const Todo = connect(mapStateToProps, {
  changeNum,
  addItem,
  removeItem,
  removeAllItems,
})(TodoComponent);