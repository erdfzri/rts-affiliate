import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { useSidebarStore } from '@/store/useSidebarStore';


export function MainLayout() {
  const { isCollapsed } = useSidebarStore();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      <motion.main
        initial={false}
        animate={{
          marginLeft: isCollapsed ? 80 : 256,
        }}
        className="pt-16 transition-all duration-300"
      >
        <div className="container mx-auto p-6">
          <Outlet />
        </div>
      </motion.main>
    </div>
  );
}
