import type { GenericFile } from "./GenericFile";
import type { Section } from "./Section";

export interface TextFile extends GenericFile {
    header: string,
    sections: Section[],
    footer: string
}