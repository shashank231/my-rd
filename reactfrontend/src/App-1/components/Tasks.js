
import React from "react";
import { connect, useSelector } from "react-redux";
import { itemsSelector } from "../redux/selectors";
import { removeItem } from "../redux/modules";


function TasksComponent(props){
    const {
        removeItem,
        items,
    } = props;
    const removeThisItem = () => {
        let newitems

    }

    return (
        <React.Fragment>
            {items.map((item) => {
                return(
                    <div>
                        <h3>{item}</h3>
                        <button 
                            type='submit'
                            onClick={removeThisItem}
                        >
                            Remove Task
                        </button>
                    </div>
                );
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

