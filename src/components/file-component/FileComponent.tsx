
import React from 'react'
import type { FileType } from '../../data/types/FileType'
import styles from './FileComponent.module.css'
import { IconComponent } from '../icon-component/IconComponent'
import { SectionComponent } from '../section-component/SectionComponent'

export function FileComponent({data}:{data:FileType}): React.JSX.Element {

    const sections = data.sections

    return (
        <article>
            <div className={styles['header']}>
                <IconComponent img="some link" legend="" for_ = "file"></IconComponent>
            </div>

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