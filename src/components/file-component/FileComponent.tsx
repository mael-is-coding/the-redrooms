
import React from 'react'
import type { TextFile } from '../../data/types/TextFile'
import styles from './FileComponent.module.css'
import { SectionComponent } from '../section-component/SectionComponent'
import { getIcon } from '../../utils/IconGetter'


export function FileComponent({data}:{data:TextFile}): React.JSX.Element {

    const sections = data.sections

    return (
        <article>
            <div className={styles['header']}>{
                getIcon(
                    data.file_type,
                    data.file_name,
                    "desktop"
                )    
            }</div>

            <span className={styles['file-title']}>{data.header}</span>

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