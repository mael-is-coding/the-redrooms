import { Executable } from "../views/executable/Executable";
import { FileComponent } from "../components/file-component/FileComponent";
import { FileExplorer } from "../views/file-explorer/FileExplorer";


export function getComponent(data:any) { // eslint-disable-line
    console.log("get component called")
    switch (data.file_type) {

        case 'skills':
            if(data.hard_skills) {
                console.log("va bien mourir mael")
                return (
                    <FileExplorer data={data} />
                )
            } break;

        case 'executable':
            if(data.project_name) {
                return (
                    <Executable data={data} key={data.file_type} />
                )
            } break;

        case 'text':
            if(data.header) {
                return (
                    <FileComponent data={data} />
                )
            } break;

        default:
            return (
                <FileComponent data={data} key={data.file_type}>
                </FileComponent>
            )
    }
}