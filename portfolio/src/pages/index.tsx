import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "../components/navigation-bar";
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout() {
    const location = useLocation(); // 👈 get the current URL pathname

    return (
        <>
            <NavigationBar />
            <AnimatePresence mode="wait" initial={false}>
                <motion.main
                    key={location.pathname} // 👈 this is important! it forces remount when path changes
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    className="mx-3 md:mx-0"
                >
                    <Outlet />
                </motion.main>
            </AnimatePresence>
        </>
    );
}
