import type { SoftSkill } from "./SoftSkill";
import type { Tech } from "./Tech";

export interface Skills {
    file_name: string
    file_type: string
    hard_skills: Tech[]
    soft_skills: SoftSkill[]
}