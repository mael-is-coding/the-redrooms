
import { useContext } from "react"
import { getComponent } from "../../utils/ComponentGetter"
import './Desktop.module.css'
import { OpenedFileContext } from "../../contexts/opened-file-context/OpenedFileContext"
import { getIcon } from "../../utils/IconGetter"

export function Desktop() {

    const of_context = useContext(OpenedFileContext)
    const all_files = of_context?.all_files

    if (all_files) {
        return (
            <main>
                {// all running files : they appear as absolute positionned windows
                of_context.file_list.map((running_file) =>
                        getComponent(running_file)
                    )  
                }
                {// all files : they appear as icons on the desktop
                all_files.map((file) => 
                    getIcon(
                        file.technologies[0].tech, 
                        file.project_name, 
                        "desktop", 
                        function event() {
                            of_context.run_file(file)
                        }
                    )
                )
            }</main>
        )
    }
}