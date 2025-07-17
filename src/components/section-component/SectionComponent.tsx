
import style from './SectionComponent.module.css' 
import { type Section, type sectionJSON } from '../../data/types/Section'
import { SectionConverter } from '../../data/types/Type_converters'

/**
 * A component made to display basic texts from Section JSONs
 * @param data the JSON description of a section. 
 * @returns TSX
 */
export function SectionComponent({data}:{data:sectionJSON}){
    const section: Section = SectionConverter(data)
    return (
        <div>
            <h2 className={style['section-header']}>
                {section.section_header}
            </h2>
            <div className={style['section-contents']}>
                {section.section_contents}
            </div>
        </div>
    )
}