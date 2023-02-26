import React from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'
import "./TodoItem.css"
const TodoItem = ({todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo}) => {
    const {id, text, checked} = todo

    const onClick = () =>  {
        onChangeSelectedTodo(todo);
        onInsertToggle();
    }
    return <div className="TodoItem" onClick={onCheckToggle}>
        <div className={ `content ${checked ? "checked": ""}`}>
            {checked ? (
                <MdCheckBox
                    onClick={() => {onCheckToggle(id)}}/>
            ): (
                <MdCheckBoxOutlineBlank
                    onClick={() => {onCheckToggle(id)}}/>
            )}
            <div className="text" onClick={onClick}>{text}</div>
        </div>
    </div>
}

export default TodoItem