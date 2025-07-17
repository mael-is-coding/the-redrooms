
import type { Section, sectionJSON } from "./Section";

export function SectionConverter(sectionJSON: sectionJSON): Section {
    return {
        section_header: sectionJSON['section-header'],
        section_contents : sectionJSON['section-contents'] 
    }
}