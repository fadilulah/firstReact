import './ActivityButtons.css'
function ActivityButtons ({ content,doneTasks,totalTasks }){
    return(
        <div className='holder'>
            <p>{content}</p>
            <p>{doneTasks} of {totalTasks} subtasks</p>
        </div>
    )
}
export default ActivityButtons