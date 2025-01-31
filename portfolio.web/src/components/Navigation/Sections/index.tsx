import { ReactNode } from "react";
import About from "./About";
import Experience from "./Experience";
import { SectionType } from "../types";

const sectionComponents: Record<SectionType, ReactNode> = {
    about: <About />,
    experience: <Experience />
};

export default sectionComponents;