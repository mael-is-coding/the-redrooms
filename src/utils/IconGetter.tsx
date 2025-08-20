
import { IconComponent } from '../components/icon-component/IconComponent'

// image imports
import douzhee from '../assets/icons/douzhee.png'
import java from '../assets/icons/java.png'
import c from '../assets/icons/c.jpg'
import js from '../assets/icons/js.png'
import ts from '../assets/icons/ts.png'
import angular from '../assets/icons/angular.png'
import react from '../assets/icons/react.png'
import vue from '../assets/icons/vue.jpeg'
import symfony from '../assets/icons/symfony.png'
import nest from '../assets/icons/nest.svg'
import python from '../assets/icons/shinypython.png'
import postgresql from '../assets/icons/postgresql.png'
import shinypython from '../assets/icons/shinypython.png'
import git from '../assets/icons/git.png'
import TaskMgr from '../assets/icons/TaskMgr.svg'
import StartButton from '../assets/icons/system_icons/start_icon.png'
import cosmos from '../assets/icons/cosmos.png'
import unk from '../assets/icons/unk.png'
import ucbl from '../assets/icons/ucbl.png'
import akretion from '../assets/icons/akretion.png'
import painting_bucket from '../assets/icons/painting_bucket.webp'
import file_explorer from '../assets/icons/system_icons/fileexplorer.webp'
import handshake from '../assets/icons/handshake.png'
import fire from '../assets/icons/fire.jpg'
import heart from '../assets/icons/heart.png'

export function getIcon(icon_name: string, legend: string, for_: 'file' | 'desktop' | 'bar', callback: () => void): React.JSX.Element {
    switch (icon_name) {

        case 'heart':
            return (
                <IconComponent
                img={heart}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )

        case 'fire':
            return (
                <IconComponent
                img={fire}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )

        case 'handshake':
            return (
                <IconComponent
                img={handshake}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )

        case 'file_explorer':
            return (
                <IconComponent
                img={file_explorer}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )

        case 'painting_bucket':
            return (
                <IconComponent
                img={painting_bucket}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )
            
        case 'postgresql':
            return (
                <IconComponent
                img={postgresql}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )

        case 'python':
            return (
                <IconComponent
                img={python}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )

        case 'shinypython':
            return (
                <IconComponent
                img={shinypython}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )

        case 'git':
            return (
                <IconComponent
                img={git}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )

        case 'nest':
            return (
                <IconComponent
                img={nest}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )

        case 'symfony':
            return (
                <IconComponent
                img={symfony}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )

        case 'vue':
            return (
                <IconComponent
                img={vue}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )

        case 'react':
            return (
                <IconComponent
                img={react}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )


        case 'akretion':
            return (
                <IconComponent
                img={akretion}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )

        case 'cosmos':
            return (
                <IconComponent
                img={cosmos}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )


        case 'ucbl':
            return (
                <IconComponent
                img={ucbl}
                legend={legend}
                for_={for_}
                callback={callback}
                />
            )

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

        case 'start':
            return (
                <IconComponent 
                img={StartButton}
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