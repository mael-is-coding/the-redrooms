import type { OpenedFile } from '../../data/types/OpenedFile'

export interface focus_info {
    focused: number,
    focusedZ: number,
    unfocusedZ: number
}

export interface OF_CTX {
// raw data
    all_files: any[], // eslint-disable-line
// maintaining window visiblity (states)
    opened_file_states: OpenedFile[],
    add_file_state: (fd: OpenedFile)=>void,
// data currently opened in UI 
    file_list: any[], // eslint-disable-line
    set_file_list: React.Dispatch<React.SetStateAction<any[]>>, // eslint-disable-line
    run_file: (file:any)=>void, // eslint-disable-line
    close_file: (file:any)=>void, //eslint-disable-line
// focus
    window_diff: number,
    increment_window_diff: () => number
    focus_infos: focus_info,
}

