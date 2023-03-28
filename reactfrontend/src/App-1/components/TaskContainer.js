
// import React from "react";
import { connect } from "react-redux";
import { itemsSelector, getCurrentDate, deleteItemSelector } from "../redux/selectors";

import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from "./TaskContainer.module.scss";
import { updateItems } from "../redux/modules";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TaskContainerComponent(props){
    const { name, items, updateItems } = props;

    function handleDelete(){
      let newItems = [...items];          // VVII
      let index = items.indexOf(name);
      newItems.splice(index, 1);
      updateItems(newItems);
      toast.error("Task Deleted", { autoClose: 1000 });
    }

    return (
        <React.Fragment>
          <div className={styles.list_item}>
                <ListItem
                  className={styles.task_item}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={handleDelete} >
                      <DeleteIcon />
                    </IconButton>}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={name}
                    secondary={getCurrentDate("-")}
                  />
                </ListItem>
          </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
    items: itemsSelector(state),
});


export const TasksContainer = connect(mapStateToProps, { updateItems })(TaskContainerComponent);

