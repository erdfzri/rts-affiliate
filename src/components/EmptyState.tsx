import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <Card>
      <CardContent className="flex min-h-[400px] items-center justify-center p-8">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-muted p-6">
              <Icon className="h-12 w-12 text-muted-foreground" />
            </div>
          </div>
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          <p className="mb-6 text-muted-foreground">{description}</p>
          {action && (
            <Button onClick={action.onClick}>{action.label}</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
