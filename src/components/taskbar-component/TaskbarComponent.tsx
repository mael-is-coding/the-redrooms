import { useContext } from 'react'
import styles from './TaskbarComponent.module.css'
import { OpenedFileContext } from '../../contexts/opened-file-context/OpenedFileContext'
import { getIcon } from '../../utils/IconGetter'
export function TaskbarComponent() {

    const of_context = useContext(OpenedFileContext)

    
    if(of_context) {
        return (
            <div className={styles['bar']}>
                <div className={styles['row']}>
                    {getIcon('start', 'Démarrer', 'bar', () => {
                        alert("En construction ! Utilisez les icônes sur le bureau et fermez les fenêtres au lieu de les réduire.")
                    })}
                    {getIcon('taskmgr', 'Gestionnaire', 'bar', ()=>{
                        alert("En construction ! Utilisez les icônes sur le bureau et fermez les fenêtres au lieu de les réduire.")
                    })}
                    <div className={styles['tasks-wrapper']}>{
                        of_context?.file_list.map((file) =>
                            getIcon(file.file_icon, file.file_name, 'bar', ()=>{
                                alert("En construction ! Utilisez les icônes sur le bureau et fermez les fenêtres au lieu de les réduire.")
                            })
                        )
                    }</div>
                </div>
                <div className={styles['hour-panel']}>Maël Salem, 2025</div>
            </div>
        )
    }
}