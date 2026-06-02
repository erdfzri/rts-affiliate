import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Plus,
  Search,
  ExternalLink,
  Edit,
  Trash2,
  Copy,
  CheckCircle2,
} from 'lucide-react';
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
import { products } from '@/data/mockData';
import type { Marketplace } from '@/types';

const marketplaceColors: Record<Marketplace, string> = {
  shopee: 'bg-orange-500',
  tiktok: 'bg-black',
  tokopedia: 'bg-green-500',
  lazada: 'bg-blue-500',
  blibli: 'bg-blue-600',
};

export function AffiliateLinks() {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const allLinks = products.flatMap((product) =>
    product.affiliateLinks.map((link) => ({
      id: `${product.id}-${link.marketplace}`,
      productName: product.name,
      productCode: product.code,
      marketplace: link.marketplace,
      url: link.url,
      priority: link.priority,
      clicks: product.clicks,
      status: product.status,
    }))
  );

  const filteredLinks = allLinks.filter(
    (link) =>
      link.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.productCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.marketplace.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopy = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Affiliate Links</h1>
          <p className="text-muted-foreground">
            Kelola semua link affiliate Anda
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Link
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Links
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{allLinks.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Links
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {allLinks.filter((l) => l.status === 'active').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Clicks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {allLinks.reduce((sum, l) => sum + l.clicks, 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Marketplaces
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search links..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </CardContent>
      </Card>

      {/* Links Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Links ({filteredLinks.length})</CardTitle>
          <CardDescription>
            Daftar lengkap affiliate links Anda
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm font-medium text-muted-foreground">
                  <th className="pb-3">Product</th>
                  <th className="pb-3">Code</th>
                  <th className="pb-3">Marketplace</th>
                  <th className="pb-3">URL</th>
                  <th className="pb-3">Priority</th>
                  <th className="pb-3">Clicks</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLinks.map((link, index) => (
                  <motion.tr
                    key={link.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02 }}
                    className="border-b transition-colors hover:bg-muted/50"
                  >
                    <td className="py-4">
                      <p className="max-w-xs truncate font-medium">
                        {link.productName}
                      </p>
                    </td>
                    <td className="py-4">
                      <code className="rounded bg-muted px-2 py-1 text-xs">
                        {link.productCode}
                      </code>
                    </td>
                    <td className="py-4">
                      <Badge
                        className={`${
                          marketplaceColors[link.marketplace]
                        } text-white`}
                      >
                        {link.marketplace}
                      </Badge>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <code className="max-w-xs truncate text-xs text-muted-foreground">
                          {link.url}
                        </code>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => handleCopy(link.url, link.id)}
                        >
                          {copiedId === link.id ? (
                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                    </td>
                    <td className="py-4">
                      <Badge variant="outline">{link.priority}</Badge>
                    </td>
                    <td className="py-4 font-medium">
                      {link.clicks.toLocaleString()}
                    </td>
                    <td className="py-4">
                      <Badge
                        variant={
                          link.status === 'active' ? 'default' : 'secondary'
                        }
                      >
                        {link.status}
                      </Badge>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => window.open(link.url, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredLinks.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No links found</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
