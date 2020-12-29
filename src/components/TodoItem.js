import React from "react";
import "./TodoItem.css"
import classNames from 'classnames';
import check from "../img/check.svg";

class TodoItem extends React.Component {
    render() {
        const { item, onClick } = this.props
        return (
            <div onClick={onClick} className={classNames("TodoItem", { "TodoItem-Complete": item.isComplete })}>
                <img src={check} width={32} height={32}></img>
                <div>{item.title}</div>
            </div>
        );
    }
}
export default TodoItem;