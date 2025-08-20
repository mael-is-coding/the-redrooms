
import React, { useContext, useState } from 'react'
import type { TextFile } from '../../data/types/TextFile'
import styles from './FileComponent.module.css'
import { SectionComponent } from '../section-component/SectionComponent'
import { OpenedFileContext } from '../../contexts/opened-file-context/OpenedFileContext'

import minimize from "../../assets/icons/system_icons/minimize.svg"
import close from "../../assets/icons/system_icons/close_cross.svg"


export function FileComponent({data}:{data:TextFile}): React.JSX.Element {

    const of_ctx = useContext(OpenedFileContext)

    const [mouseStartX, setMouseStartX] = useState(0)
    const [mouseStartY, setMouseStartY] = useState(0)
    const [down, setDown] = useState(false)
    
    const [vertical, setVertical] = useState(0) // the AAT value of "top"
    const [horizontal, setHorizontal] = useState(0) // the AAT value of "left"

    const [display, setDisplay] = useState<'block' | 'none'>('block')

    const sections = data.sections

    return (
        <article
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
                <span>{data.file_name}</span>

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

            <div className={styles['sections']}>
                {sections.map((section) => 
                    <SectionComponent data={section} ></SectionComponent>
                )}
            </div>

            <div className={styles['footer']}>
                {data.footer}
            </div>
        </article>
    )
}