function TaskList(props) {
    console.log("props", props)
    const { tasks } = props;
    return (
        <div>
            {tasks.map(task => <div>{task}</div>)}
        </div>

    )
}
export default TaskList;