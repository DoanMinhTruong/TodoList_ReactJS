import React from "react";
import "./TodoList.css"
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todoItems: [
                { title: "Đi đá banh", isComplete: false },
                { title: "Đi học", isComplete: false },
                { title: "Làm bài tập", isComplete: false },
                { title: "Finished Deadline", isComplete: false },
            ]
        }
    }
    onItemClicked(item) {
        return (event) => {
            const isComplete = item.isComplete;
            const { todoItems } = this.state;
            const index = todoItems.indexOf(item);
            this.setState({
                todoItems: [
                    ...todoItems.slice(0, index),
                    {
                        ...item,
                        isComplete: !isComplete
                    },
                    ...todoItems.slice(index + 1)
                ]
            });
        }
    }

    render() {
        const { todoItems } = this.state;
        if (todoItems.length) {
            return (
                <div className="TodoList">
                    {
                        todoItems.length && todoItems.map((item, key) =>
                            <TodoItem
                                key={key}
                                item={item}
                                onClick={this.onItemClicked(item)}
                            />
                        )
                    }
                </div>
            );
        }
    }
}
export default TodoList;