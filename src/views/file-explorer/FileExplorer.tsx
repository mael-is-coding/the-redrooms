import { OpenedFileContext } from "../../contexts/opened-file-context/OpenedFileContext";
import { getComponent } from "../../utils/ComponentGetter";
import { useContext } from "react";
import styles from './FileExplorer.module.css'

export function FileExplorer() {
    const OF_Context = useContext(OpenedFileContext)
    return (
        <div className={styles['window']}>{
            OF_Context?.file_list.map((file)=>
                getComponent(file)
                )
        }</div>
    )
}