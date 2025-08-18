import { Executable } from "../views/executable/Executable";
import { FileComponent } from "../components/file-component/FileComponent";


export function getComponent(data:any) { // eslint-disable-line
    console.log("get component called")
    switch (data.file_type) {
        case 'executable':
            if(data.project_name) {
                return (
                    <Executable data={data} key={data.file_type}>
                    </Executable>
                )
            } break;

        default:
            return (
                <FileComponent data={data} key={data.file_type}>
                </FileComponent>
            )
    }
}