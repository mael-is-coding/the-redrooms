import type { GenericFile } from "./GenericFile";
import type { Section } from "./Section";

export interface TextFile extends GenericFile {
    file_type: string,
    header: string,
    sections: Section[],
    footer: string
}