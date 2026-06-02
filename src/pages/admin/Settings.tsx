import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, User, Globe, Palette, BarChart } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useThemeStore } from '@/store/useThemeStore';

export function Settings() {
  const { theme, toggleTheme } = useThemeStore();
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('Settings saved successfully!');
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">
            Kelola pengaturan sistem Anda
          </p>
        </div>
        <Button onClick={handleSave} disabled={isSaving}>
          <Save className="mr-2 h-4 w-4" />
          {isSaving ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Profile Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <CardTitle>Profile Settings</CardTitle>
              </div>
              <CardDescription>
                Informasi profil dan akun Anda
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full Name
                </label>
                <Input placeholder="John Doe" defaultValue="Admin User" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="admin@example.com"
                  defaultValue="admin@affiliatepro.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Role</label>
                <Badge>Administrator</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Website Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <CardTitle>Website Settings</CardTitle>
              </div>
              <CardDescription>
                Pengaturan umum website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Site Name
                </label>
                <Input placeholder="Site Name" defaultValue="Affiliate Pro" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Site Description
                </label>
                <Input
                  placeholder="Description"
                  defaultValue="Produk pilihan terbaik dari berbagai marketplace"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Contact Email
                </label>
                <Input
                  type="email"
                  placeholder="contact@example.com"
                  defaultValue="contact@affiliatepro.com"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Theme Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                <CardTitle>Theme Settings</CardTitle>
              </div>
              <CardDescription>
                Customize tampilan aplikasi
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Color Mode
                </label>
                <div className="flex gap-2">
                  <Button
                    variant={theme === 'light' ? 'default' : 'outline'}
                    onClick={() => theme === 'dark' && toggleTheme()}
                    className="flex-1"
                  >
                    Light
                  </Button>
                  <Button
                    variant={theme === 'dark' ? 'default' : 'outline'}
                    onClick={() => theme === 'light' && toggleTheme()}
                    className="flex-1"
                  >
                    Dark
                  </Button>
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Primary Color
                </label>
                <div className="flex gap-2">
                  <div className="h-10 w-10 cursor-pointer rounded-lg bg-blue-500 ring-2 ring-primary ring-offset-2" />
                  <div className="h-10 w-10 cursor-pointer rounded-lg bg-green-500" />
                  <div className="h-10 w-10 cursor-pointer rounded-lg bg-purple-500" />
                  <div className="h-10 w-10 cursor-pointer rounded-lg bg-orange-500" />
                  <div className="h-10 w-10 cursor-pointer rounded-lg bg-pink-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tracking Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <BarChart className="h-5 w-5" />
                <CardTitle>Tracking Settings</CardTitle>
              </div>
              <CardDescription>
                Pengaturan tracking dan analytics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Google Analytics ID
                </label>
                <Input placeholder="G-XXXXXXXXXX" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Facebook Pixel ID
                </label>
                <Input placeholder="123456789" />
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="font-medium">Enable Click Tracking</p>
                  <p className="text-sm text-muted-foreground">
                    Track affiliate link clicks
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Danger Zone</CardTitle>
            <CardDescription>
              Tindakan yang tidak dapat dibatalkan
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-destructive/50 p-4">
              <div>
                <p className="font-medium">Clear All Analytics Data</p>
                <p className="text-sm text-muted-foreground">
                  Hapus semua data analytics dan statistik
                </p>
              </div>
              <Button variant="destructive" size="sm">
                Clear Data
              </Button>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-destructive/50 p-4">
              <div>
                <p className="font-medium">Reset All Settings</p>
                <p className="text-sm text-muted-foreground">
                  Kembalikan semua pengaturan ke default
                </p>
              </div>
              <Button variant="destructive" size="sm">
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
