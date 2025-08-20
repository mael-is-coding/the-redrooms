import type { UnorderedList } from "./UnorderedList"
export interface Section {
    section_header: string,
    section_contents: string,
    uls?: UnorderedList[]
}