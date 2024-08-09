import ActivityButtons from "./ActivityButtons"
import './Tasks.css'
function DoingTasks({ totalTasks }){
    return(
        <div className="tasks">
            <div>
                <img src="" alt="tag" />
                <p>DOING ({totalTasks})</p>
            </div>
            <div>
                <ActivityButtons content={`Design settings and search pages`} doneTasks={`1`} totalTasks={`3`} />
                <ActivityButtons content={`Add account management endpoimts`} doneTasks={`2`} totalTasks={`3`} />
                <ActivityButtons content={`Design onbording folw`} doneTasks={`1`} totalTasks={`3`} />
                <ActivityButtons content={`Add search endpoints`} doneTasks={`1`} totalTasks={`2`} />
                <ActivityButtons content={`Add authentication endpoints`} doneTasks={`1`} totalTasks={`2`} />
                <ActivityButtons content={`Research pricing points of various competitors and trial diffrent business models`} doneTasks={`1`} totalTasks={`3`} />
            </div>
        </div>
    )
}
export default DoingTasks