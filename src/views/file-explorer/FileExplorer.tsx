import { OpenedFileContext } from "../../contexts/opened-file-context/OpenedFileContext";
import { useContext, useState } from "react";
import styles from './FileExplorer.module.css'
import minimize from "../../assets/icons/system_icons/minimize.svg"
import close from "../../assets/icons/system_icons/close_cross.svg"
import type { Skills } from "../../data/types/Skills";
import { getIcon } from "../../utils/IconGetter";

export function FileExplorer({data}:{data:Skills}) {
        const of_ctx = useContext(OpenedFileContext)

    const [mouseStartX, setMouseStartX] = useState(0)
    const [mouseStartY, setMouseStartY] = useState(0)
    const [down, setDown] = useState(false)
    
    const [vertical, setVertical] = useState(0) // the AAT value of "top"
    const [horizontal, setHorizontal] = useState(0) // the AAT value of "left"

    const [display, setDisplay] = useState<'block' | 'none'>('block')

    return (
        <div 
            className={styles['window']}

            onMouseDown={function setInitialPos(event) {
                setDown(true)
                setMouseStartX(event.clientX)
                setMouseStartY(event.clientY) 

                if(of_ctx) {
                    // set focus to 'true' here
                }
            }}

            onMouseMove={ function updateWindowPos(event) {
                if(down) {
                    const distanceX = (mouseStartX - event.clientX) * -1
                    const distanceY = (mouseStartY - event.clientY) * -1
                    setMouseStartY(vertical + distanceY)
                    setMouseStartX(horizontal + distanceX)
                    setVertical(vertical + distanceY)
                    setHorizontal(horizontal + distanceX)
                }
            }}

            onMouseUp={ () => {
                setDown(false)

                if(of_ctx) {
                    // set focus to 'false'
                }
            }}

            onMouseLeave={ () => {
                setDown(false)
            }}

            style={{
                top: vertical,
                left: horizontal,
                display: display
            }}
            >

            <nav>
                <span className={styles['window-title']}>Explorateur de compétences</span>

                <div className={styles['split']}>
                    <img id={styles['minimize']} src={minimize} alt="-" 
                    onClick={() => {
                        setDisplay('none')
                    }}
                    />
                    <img id={styles['close']} src={close} alt="X"
                    onClick={() => {
                        of_ctx?.close_file(data)
                    }}
                    />
                </div>
            </nav>

            <h3>Mes Hard Skills</h3>
            <div className={styles['hard-skills']}>{
                data.hard_skills.map((tech) =>
                    getIcon(tech.tech.toLowerCase(), tech.tech, "desktop", () => {
                        alert('Fonctionnalité en construction !')
                    })
                )
            }</div>

            <h3>Mes Soft skills</h3>
            <div className={styles['soft-skills']}>{
                data.soft_skills.map((soft_skill) =>
                    getIcon(soft_skill.icon_name, soft_skill.soft_skill, 'desktop', () => {
                        alert('Fonctionnalité en construction !')
                    }))
            }</div>
        </div>
    )
}
