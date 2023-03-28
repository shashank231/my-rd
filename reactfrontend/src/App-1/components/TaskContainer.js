
// import React from "react";
import { connect } from "react-redux";
import { itemsSelector, getCurrentDate } from "../redux/selectors";
import { removeItem } from "../redux/modules";

import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from "./TaskContainer.module.scss";



function TaskContainerComponent(props){
    const { name } = props;

    return (
        <React.Fragment>
          <div className={styles.list_item}>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
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


export const TasksContainer = connect(mapStateToProps, {removeItem})(TaskContainerComponent);

