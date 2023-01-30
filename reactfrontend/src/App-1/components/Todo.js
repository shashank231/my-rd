import { connect } from 'react-redux'
import { useState } from "react";
import React from "react";
import { Tasks } from "./Tasks";
import { addItem, removeItem, removeAllItems, changeNum } from "../redux/modules";
import { itemsSelector, numSelector } from "../redux/selectors";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function TodoComponent(props){
  const {
    addItem,
    items,
    changeNum,
    num,
  } = props;

  const [ task, setTask ] = useState("");
  const [ numb, setNumb ] = useState("");

  const addNewItem = () => {
    let newItems = [...items];          // VVII
    newItems.push(task);
    addItem(newItems);
  }

  const addNewNum = () => {
    changeNum(numb);
  }

  return (
      <React.Fragment>
          <h1>To-DO</h1>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Add your next task"
              aria-label="Add your next task"
              aria-describedby="basic-addon2"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            <Button 
              variant="outline-secondary"
              id="button-addon2"
              as="input" 
              type="button" 
              value="Add task"
              onClick={addNewItem}
            />
          </InputGroup>
          <Tasks />

          {/* <h1> NUM </h1>
          <input
            placeholder="Enter your num"
            onChange={(e) => setNumb(e.target.value)}
            value={numb}
          />
          <button 
            type='submit'
            onClick={addNewNum}
          >
            Change num
          </button>
          <br />
          {num} */}

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