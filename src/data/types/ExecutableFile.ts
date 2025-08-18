import type { GenericFile } from "./GenericFile";
import type { Section } from "./Section";
import type { Tech } from "./Tech";
import type { Iut_C } from "./Iut_C";

export interface ExecutableFile extends GenericFile {
    project_name: string,
    status: "done" | "ongoing" | "standby" | "discontinued",
    created: string
    finished: string | null | undefined
    explanation: Section[]
    repo_link: string,
    i_frame: string,
    iut_c: Iut_C,
    technologies: Tech[],
    body: Section[],
    footer: string
}