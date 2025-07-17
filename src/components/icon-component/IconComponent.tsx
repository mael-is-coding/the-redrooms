import styles from './IconComponent.module.css'


/**
 * Generic Icon component. Can be used in any setup that needs an Icon.
 * Primarily for : Desktop, FileExplorer
 * @author Cosmos
 * @param img image link
 * @param legend the name of the link (displayed underneath)
 * @returns TSX
 */
export function IconComponent({img, legend}: {img: string, legend: string}) {  
    return (
        <span className={styles['wrapper']}>
            <img src={img} alt='ICON'/>
            <span>{legend}</span>
        </span>
    )
}