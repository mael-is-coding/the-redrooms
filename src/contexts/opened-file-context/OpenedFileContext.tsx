
import { useState, createContext } from 'react'
import type { OF_CTX } from "./OF_CTX";

// data imports
import douzhee from '../../data/douzhee.json'


export const OpenedFileContext = createContext<OF_CTX | undefined>(undefined)

export function OpenedFileContextProvider({children}: {children:React.JSX.Element}) {

    const [FileList, setFileList] = useState<any[]>([]) //eslint-disable-line
    const [focused, set_focused] = useState<number>(0)
    const [window_diff, set_window_diff] = useState(0)

    function increment_window_diff() {
        set_window_diff(window_diff + 1)
        return window_diff
    }

    function runFile(file:any) { //eslint-disable-line
        setFileList([...FileList, file])
    }

    return (
        <OpenedFileContext.Provider
        value={{
            all_files: [douzhee],
            file_list: FileList,
            set_file_list: setFileList,
            set_focused: set_focused,
            run_file: runFile,
            window_diff: window_diff,
            increment_window_diff: increment_window_diff,
            focus_infos: {
                focused: focused,
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
