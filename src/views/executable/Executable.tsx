import { useContext, useState } from "react";
import { SectionComponent } from "../../components/section-component/SectionComponent";
import type { ExecutableFile } from "../../data/types/ExecutableFile";
import styles from "./Executable.module.css"
import { OpenedFileContext } from "../../contexts/opened-file-context/OpenedFileContext";


export function Executable({data}: {data: ExecutableFile}) {

    const iframe_link: string = (data.i_frame ? data.i_frame : data.repo_link)

    const of_ctx = useContext(OpenedFileContext)

    const [mouseStartX, setMouseStartX] = useState(0)
    const [mouseStartY, setMouseStartY] = useState(0)
    const [down, setDown] = useState(false)
    const [focus, setFocus] = useState(of_ctx?.unfocusedZ)
    
    const [vertical, setVertical] = useState(0) // the AAT value of "top"
    const [horizontal, setHorizontal] = useState(0) // the AAT value of "left"

    return (
        <div 
            className={styles['window']}

            onMouseDown={function setInitialPos(event) {
                setDown(true)
                setMouseStartX(event.clientX)
                setMouseStartY(event.clientY) 

                if(of_ctx) {
                    setFocus(of_ctx?.focusedZ)
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
                    setFocus(of_ctx.unfocusedZ)
                }
            }}

            onMouseLeave={ () => {
                setDown(false)
            }}

            style={{
                top: vertical,
                left: horizontal,
                zIndex: focus
            }}
            >

            <nav>
                <span className={styles['window-title']}>{data.project_name}</span>

                <div className={styles['split']}>
                    <span>-</span>
                    <span>X</span>
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

            <h2>Aperçu de {data.project_name}</h2>
            <iframe src={iframe_link} title={data.project_name} width="400px" height="300px"></iframe>

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