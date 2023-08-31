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
import axios from 'axios';
import { useState } from 'react';

export const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/stripe');

      window.location.href = response.data.url;
    } catch (err) {
      console.log(err, 'STRIPE_Client_ERROR');
    } finally {
      setLoading(false);
    }
  };

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
          <Button
            size={'lg'}
            variant={'premium'}
            className="w-full"
            onClick={onSubscribe}
          >
            Upgrade <Zap className="w-4 h-4 fill-white ml-2" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
