
import { useContext } from "react"
import { getComponent } from "../../utils/ComponentGetter"
import styles from './Desktop.module.css'
import { OpenedFileContext } from "../../contexts/opened-file-context/OpenedFileContext"
import { getIcon } from "../../utils/IconGetter"
import { TaskbarComponent } from "../../components/taskbar-component/TaskbarComponent"
import { TaskManager } from "../task-manager/TaskManager"

export function Desktop() {

    const of_context = useContext(OpenedFileContext)
    const all_files = of_context?.all_files

    if (all_files) {
        return (
            <main className={styles['']}>
                {// all running files : they appear as absolute positionned windows
                of_context.file_list.map((running_file) =>
                        getComponent(running_file)
                    )  
                }
                <TaskManager />
                {// all files : they appear as icons on the desktop
                all_files.map((file) => 
                    getIcon(
                        file.file_icon, 
                        file.file_name, 
                        "desktop", 
                        function event() {
                            of_context.run_file(file)
                        }
                    )
                )
            }
            <TaskbarComponent />
            </main>
        )
    }
}