import styles from './IconComponent.module.css'


/**
 * Generic Icon component. Can be used in any setup that needs an Icon.
 * Primarily for : Desktop, FileExplorer
 * @author Cosmos
 * @param img image link
 * @param legend the name of the link (displayed underneath)
 * @returns TSX
 */
export function IconComponent({img, legend, for_, callback}: {img: string, legend: string, for_: 'file' | 'desktop',  callback: ()=>void}): React.JSX.Element {  

    let style_class = styles['column']

    if(for_ == 'file') {
        style_class = styles['row']
    } else {
        style_class = styles['column']
    }

    return (
       <div className={style_class}
       onDoubleClick={callback}>
            <span className={styles['wrapper']}>
                <img width="50px" height="50px" src={img} alt='ICON'/>
                <span>{legend}</span>
            </span>
       </div> 
    )
    
}