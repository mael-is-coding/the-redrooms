
import { useState, createContext } from 'react';
import type { OF_CTX } from "./OF_CTX";
import type { OpenedFile } from '../../data/types/OpenedFile';

// data imports
import douzhee from '../../data/douzhee.json';
import ngms from '../../data/ngms.json';
import conflictuair from '../../data/conclituair.json';
import competences from '../../data/competences_iut.json'
import aboutme from '../../data/aboutme.json'
import akretion from '../../data/akretion.json'
import skills from '../../data/skills.json'


export const OpenedFileContext = createContext<OF_CTX | undefined>(undefined) //eslint-disable-line

export function OpenedFileContextProvider({children}: {children:React.JSX.Element}) {

    const [FileList, setFileList] = useState<any[]>([]) //eslint-disable-line
    const [window_diff, set_window_diff] = useState<number>(0)
    const [opened_file_states, set_opened_file_states] = useState<OpenedFile[]>([])

    function increment_window_diff() {
        set_window_diff(window_diff + 1)
        return window_diff
    }

    function addFileState(file:OpenedFile) {
        let is_opened: boolean = false
        opened_file_states.map((state) => {
            if(state.file_name != file.file_name) {
                is_opened = true
            }
        })
        if(!is_opened) {
            set_opened_file_states([...opened_file_states, file])
        }
    }

    function runFile(file:any) { //eslint-disable-line
        setFileList([...FileList, file])
    }

    function closeFile(file:any) { //eslint-disable-line
        const newList: any[] = [] //eslint-disable-line
        FileList.map((f) => {
            if(f.project_name != file.project_name) {
                newList.push(file)
            }
        })
        setFileList(newList)
    }

    const list = [aboutme, skills, douzhee, ngms, conflictuair, akretion,
        competences]

    return (
        <OpenedFileContext.Provider
        value={{
            all_files: list,        
            file_list: FileList,
            set_file_list: setFileList,
            run_file: runFile,
            close_file: closeFile,
            opened_file_states: opened_file_states,
            add_file_state: addFileState, 
            window_diff: window_diff,
            increment_window_diff: increment_window_diff,
            focus_infos: {
                focused: 100,
                focusedZ: 10,
                unfocusedZ: 9
            }
        }}
        >{
            children
        }
        </OpenedFileContext.Provider>
    )
}
