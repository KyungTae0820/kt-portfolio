export const metadata = {
  // A plain string here would drop the "| KT Portfolio" suffix for the games pages below
  title: { default: "Projects", template: "%s | KT Portfolio" },
  description:
    "Projects by KyungTae Kim: algorithms, full-stack embedded systems, C++ games playable in the browser, and C++ fundamentals.",
};

export default function ProjectsLayout({ children }) {
  return children;
}
