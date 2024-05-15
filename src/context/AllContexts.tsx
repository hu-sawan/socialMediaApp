import { ThemeProvider } from "./ThemeContext";

const AllContexts = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};

export default AllContexts;
