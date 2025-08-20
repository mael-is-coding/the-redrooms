
import { IconComponent } from '../components/icon-component/IconComponent'

// image imports
import douzhee from '../assets/icons/douzhee.png'
import java from '../assets/icons/java.png'
import c from '../assets/icons/c.jpg'
import js from '../assets/icons/js.png'
import ts from '../assets/icons/ts.png'
import angular from '../assets/icons/angular.png'
import TaskMgr from '../assets/icons/TaskMgr.svg'
import unk from '../assets/icons/unk.png'

export function getIcon(icon_name: string, legend: string, for_: 'file' | 'desktop' | 'bar', callback: () => void): React.JSX.Element {
    switch (icon_name) {

        case 'Douzhee':
            return (
                <IconComponent
                img={douzhee}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )

        case 'taskmgr':
            return (
                <IconComponent
                img={TaskMgr}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )

        case 'java':
            return (
                <IconComponent
                img={java}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )


        case 'c':
            return (
                <IconComponent
                img={c}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )

        case 'js':
            return (
                <IconComponent
                img={js}
                legend='java'
                for_={for_}
                callback={callback}
                />
            )

        case 'ts':
            return (
                <IconComponent
                img={ts}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )

        case 'angular':
            return (
                <IconComponent
                img= {angular}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )
        
        
        default:
            return (
                <IconComponent
                img={unk}
                legend={legend}
                for_='file'
                callback={callback}
                />
            )
    }
}