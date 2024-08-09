import ActivityButtons from "./ActivityButtons"
import './Tasks.css'

function TodoTasks({ totalTasks }){
    return(
        <div className="tasks">
            <div>
                <img src="" alt="tag" />
                <p>TODO ({totalTasks})</p>
            </div>
            <div>
                <ActivityButtons content={`Build UI for Onbording flow`} doneTasks={`0`} totalTasks={`3`} />
                <ActivityButtons content={`Build UI for search`} doneTasks={`0`} totalTasks={`1`} />
                <ActivityButtons content={`Build setting UI`} doneTasks={`0`} totalTasks={`2`} />
                <ActivityButtons content={`QA and test all major user journeys`} doneTasks={`0`} totalTasks={`2`} />
            </div>
        </div>
    )
}
export default TodoTasks