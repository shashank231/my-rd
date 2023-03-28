
import React from "react";
import { connect, useSelector } from "react-redux";
import { itemsSelector } from "../redux/selectors";
import { removeItem } from "../redux/modules";
import { TasksContainer } from "./TaskContainer";


function TasksComponent(props){
    const { items } = props;
    return (
        <React.Fragment>
            {items.map((item, index) => {
                return <TasksContainer name={item} key={index} />;
            })}
        </React.Fragment>
    );
}


const mapStateToProps = (state) => ({
    items: itemsSelector(state),
});


export const Tasks = connect(mapStateToProps, {
    removeItem,
})(TasksComponent);

