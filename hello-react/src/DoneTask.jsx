import ActivityButtons from "./ActivityButtons"
import './Tasks.css'
function DoneTask({ totalTasks }){
    return(
        <div className="tasks">
            <div>
                <img src="" alt="tag" />
                <p>DONE ({totalTasks})</p>
            </div>
            <div>
                <ActivityButtons content={`Build UI for Onbording flow`} doneTasks={`0`} totalTasks={`3`} />
                <ActivityButtons content={`Build UI for search`} doneTasks={`0`} totalTasks={`1`} />
                <ActivityButtons content={`Build setting UI`} doneTasks={`0`} totalTasks={`2`} />
                <ActivityButtons content={`QA and test all major user journeys`} doneTasks={`0`} totalTasks={`2`} />
                <ActivityButtons content={`Design settings and search pages`} doneTasks={`1`} totalTasks={`3`} />
                <ActivityButtons content={`Add account management endpoimts`} doneTasks={`2`} totalTasks={`3`} />
                <ActivityButtons content={`Design onbording folw`} doneTasks={`1`} totalTasks={`3`} />
                <ActivityButtons content={`Add search endpoints`} doneTasks={`1`} totalTasks={`2`} />
            </div>
        </div>
    )
}
export default DoneTask