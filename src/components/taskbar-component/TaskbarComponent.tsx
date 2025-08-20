import { useContext, useState } from 'react'
import styles from './TaskbarComponent.module.css'
import { OpenedFileContext } from '../../contexts/opened-file-context/OpenedFileContext'
import { getIcon } from '../../utils/IconGetter'
export function TaskbarComponent() {

    const of_context = useContext(OpenedFileContext)
    const [current_time, set_current_time] = useState<string>("???")

    setInterval(() => {
        const date = new Date()
        const minutes = (date.getMinutes() >= 10 ? `${date.getMinutes()}` : `0${date.getMinutes()}`)
        const hours = (date.getHours() >= 10 ? `${date.getHours()}` : `0${date.getHours()}`)
        set_current_time(`${hours}:${minutes}`)
    }, 1000)

    
    if(of_context) {
        return (
            <div className={styles['bar']}>
                <div className={styles['tasks-wrapper']}>{
                    of_context?.file_list.map((file) =>
                        getIcon(file.file_icon, file.project_name, 'bar', ()=>{})
                    )
                }</div>
                <div className={styles['hour-panel']}>{
                    current_time
                }</div>
            </div>
        )
    }
}