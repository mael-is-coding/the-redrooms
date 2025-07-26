import type { Section } from "./Section";

export interface FileType {
    file_type: string,
    header: string,
    sections: Section[],
    footer: string
}