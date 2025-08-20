import styles from './IconComponent.module.css'


/**
 * Generic Icon component. Can be used in any setup that needs an Icon.
 * Primarily for : Desktop, FileExplorer
 * @author Cosmos
 * @param img image link
 * @param legend the name of the link (displayed underneath)
 * @returns TSX
 */
export function IconComponent({img, legend, for_, callback}: {img: string, legend: string, for_: 'file' | 'desktop' | 'bar',  callback: ()=>void}): React.JSX.Element {  

    let container_class = styles['column']
    let bg = 'inherit'
    let color = 'white'
    let wd = 40
    let ht = 40

    if(for_ == 'file') {
        container_class = styles['row']
        wd = 70
        ht = 70
    } else if (for_ == 'bar') {
        container_class = styles['bar']
        bg = 'var(--window-item-color)'
        color = 'black'
    } else {
        container_class = styles['column']
        wd = 40
        ht = 40
    }

    if(for_ == 'bar') {
        return (
            <div className={container_class}
                onClick={callback}
                >
                <div className={styles['image-and-caption']}>
                    <img src={img} alt='ICON'
                    style={{
                        background: bg,
                        width: `${wd}px`,
                        height: `${ht}px`
                    }}
                    />
                    <span className={styles['caption']}
                    style={{
                        color: color,
                    }}
                    >{legend}</span>
                </div>
            </div>
        )
    }
    return (
        <div className={container_class}
            onDoubleClick={callback}
            >
            <div className={styles['image-and-caption']}>
                <img src={img} alt='ICON'
                style={{
                    background: bg,
                    width: `${wd}px`,
                    height: `${ht}px`
                }}
                />
                <span className={styles['caption']}
                style={{
                    color: color,
                }}
                >{legend}</span>
            </div>
        </div>
    )
    
}