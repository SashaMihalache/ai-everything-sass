'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { useProModal } from '@/hooks/use-pro-modal';
import { Badge } from '../ui/badge';
import { routes } from '@/constants';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';
import { Check, Zap } from 'lucide-react';
import { Button } from '../ui/button';

export const ProModal = () => {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to Brainstormer{' '}
              <Badge className="uppercase text-sm py-1" variant={'premium'}>
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center py-2 space-y-2 text-zinc-900 font-medium">
            {routes.map((tool) => {
              return (
                <Card
                  key={tool.label}
                  className="p-3 border-black/5 flex items-center justify-between"
                >
                  <div className="flex items-center gap-x-4">
                    <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                      <tool.icon className={cn('w-6 h-6', tool.color)} />
                    </div>
                    <div className="font-semibold text-sm">{tool.label}</div>
                  </div>
                  <Check className="text-primary w-5 h-5" />
                </Card>
              );
            })}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button size={'lg'} variant={'premium'} className="w-full">
            Upgrade <Zap className="w-4 h-4 fill-white ml-2" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
