import { useContext, useState } from "react";
import { SectionComponent } from "../../components/section-component/SectionComponent";
import type { ExecutableFile } from "../../data/types/ExecutableFile";
import styles from "./Executable.module.css"
import { OpenedFileContext } from "../../contexts/opened-file-context/OpenedFileContext";
import minimize from "../../assets/icons/system_icons/minimize.svg"
import close from "../../assets/icons/system_icons/close_cross.svg"


export function Executable({data}: {data: ExecutableFile}) {

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
                <span className={styles['window-title']}>{data.project_name}</span>

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

            <h1>{data.project_name}</h1>
            
            <span className={styles['created']}>commencé en {
                data.created
            }</span>

            <span>{
                data.explanation.map((sectionData) =>
                    <SectionComponent
                    data={sectionData}
                    ></SectionComponent>
                )
            }</span>

            <h2>Pour avoir un aperçu de {data.project_name}</h2>
            <a href={data.repo_link}>regardez par ici !</a>
            <p></p><p></p>

            <b>Technologies principales :</b>
            <div>{
                data.technologies.map((t) =>
                    <span>{t.tech}; </span>
                ) 
            }</div>


            <article>{
                data.body.map((section) => 
                <SectionComponent
                data={section}>
                </SectionComponent>
                )
            }</article>


            <footer>{
                data.footer    
            }</footer>
        </div>
    )
}