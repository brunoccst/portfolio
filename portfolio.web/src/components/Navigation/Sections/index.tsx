import { ReactNode } from "react";
import About from "./About";
import Experience from "./Experience";

const sectionComponents: Record<string, ReactNode> = {
    about: <About />,
    experience: <Experience />
};

export default sectionComponents