
import { connect } from "react-redux";
import { itemsSelector, getCurrentDate } from "../redux/selectors";
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from "./TaskContainer.module.scss";
import { actions } from "../redux/modules";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional


function TaskContainerComponent(props){
    const { name, delid, listItemsDelete } = props;

    function handleDelete(){
      listItemsDelete(delid);
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
                  <Tippy content={name}>
                  <ListItemText
                    primary={name}
                    secondary={getCurrentDate("-")}
                  />
                  </Tippy>
                </ListItem>
          </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
    items: itemsSelector(state),
});

const { listItemsDelete } = actions;
export const TasksContainer = connect(mapStateToProps, { listItemsDelete })(TaskContainerComponent);

