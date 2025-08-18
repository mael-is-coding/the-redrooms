
export interface focus_info {
    focused: number,
    focusedZ: number,
    unfocusedZ: number
}

export interface OF_CTX {
    all_files: any[], // eslint-disable-line
    file_list: any[], // eslint-disable-line 
    set_file_list:  React.Dispatch<React.SetStateAction<any[]>>, // eslint-disable-line
    run_file: (file:any)=>void, // eslint-disable-line
    window_diff: number,
    increment_window_diff: () => number
    focus_infos: focus_info,
    set_focused: React.Dispatch<React.SetStateAction<number>>
}

