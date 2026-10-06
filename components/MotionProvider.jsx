"use client";

import { MotionConfig } from "framer-motion";

// Honors the visitor's "reduce motion" setting: slides become plain fades
const MotionProvider = ({ children }) => <MotionConfig reducedMotion="user">{children}</MotionConfig>;

export default MotionProvider;
