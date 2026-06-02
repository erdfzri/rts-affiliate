import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Moon,
  Sun,
  Command,
  Menu,
  Bell,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

import { useThemeStore } from '@/store/useThemeStore';
import { useCommandStore } from '@/store/useCommandStore';
import { useSidebarStore } from '@/store/useSidebarStore';


export function Navbar() {
  const { theme, toggleTheme } = useThemeStore();
  const { toggle: toggleCommand } = useCommandStore();
  const { toggleSidebar } = useSidebarStore();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="flex h-16 items-center px-4 md:px-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="mr-2 md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <Link to="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"
          >
            <span className="text-lg font-bold">A</span>
          </motion.div>
          <span className="hidden text-lg font-bold md:inline-block">
            Affiliate Pro
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:block">
            <Button
              variant="outline"
              className="relative h-9 w-64 justify-start text-sm text-muted-foreground"
              onClick={toggleCommand}
            >
              <Search className="mr-2 h-4 w-4" />
              <span>Search products...</span>
              <kbd className="pointer-events-none absolute right-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <Command className="h-3 w-3" />K
              </kbd>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleCommand}
          >
            <Search className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive" />
          </Button>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
