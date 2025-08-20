
import style from './SectionComponent.module.css' 
import { type Section } from '../../data/types/Section'
import { Ul_component } from '../unordered-list-component/UlComponent'

/**
 * A component made to display basic texts from Section JSONs
 * @param data the JSON description of a section. 
 * @returns TSX
 */
export function SectionComponent({data}:{data:Section}){
    return (
        <div className={style['window']}>
            <h2 className={style['section-header']}>
                {data.section_header}
            </h2>
            <div className={style['section-contents']}>
                {data.section_contents}
            </div>
            {
                data.uls?.map((UL) =>
                    <Ul_component data={UL} />
                )
            }
        </div>
    )
}