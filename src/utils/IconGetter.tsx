
import { IconComponent } from '../components/icon-component/IconComponent'

export function getIcon(icon_name: string, legend: string, for_: 'file' | 'desktop'): React.JSX.Element {
    switch (icon_name) {
        case 'java':
            return (
                <IconComponent
                img='../assets/icons/java.png'
                legend={legend}
                for_={for_}
                ></IconComponent>
            )


        case 'c':
            return (
                <IconComponent
                img='../assets/icons/c.png'
                legend={legend}
                for_={for_}
                ></IconComponent>
            )

        case 'js':
            return (
                <IconComponent
                img='../assets/icons/js.png'
                legend='java'
                for_={for_}
                ></IconComponent>
            )

        case 'ts':
            return (
                <IconComponent
                img='../assets/icons/ts.png'
                legend={legend}
                for_={for_}
                ></IconComponent>
            )

        case 'angular':
            return (
                <IconComponent
                img='../assets/icons/angular.png'
                legend={legend}
                for_={for_}
                ></IconComponent>
            )
        
        
        default:
            return (
                <IconComponent
                img='../assets/icons/unk.png'
                legend={legend}
                for_='file'
                >
                </IconComponent>
            )
    }
}