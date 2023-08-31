'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Video } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Empty } from '@/components/common/Empty';
import { Heading } from '@/components/common/Heading';
import { Loader } from '@/components/common/Loader';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { formSchema } from './contants';
import { useProModal } from '@/hooks/use-pro-modal';
import toast from 'react-hot-toast';

export default function VideoPage() {
  const router = useRouter();
  const proModal = useProModal();
  const [video, setVideo] = useState<string>();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      prompt: '',
    },
    resolver: zodResolver(formSchema),
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setVideo(undefined);

      const response = await axios.post('/api/video', values);

      setVideo(response.data[0]);

      form.reset();
    } catch (err: any) {
      if (err?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error('Something went wrong.');
      }
      console.log(err);
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Video Generation"
        description="Generate a short video from a prompt."
        icon={Video}
        iconColor="text-orange-500"
        bgColor="bg-orange-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        type="text"
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="ie. Dog playing guitar"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {!video && !isLoading && <Empty label="No video generated yet." />}
          {video && (
            <video
              className="w-full aspect-video mt-8 rounded-lg border bg-black"
              controls
            >
              <source src={video} />
            </video>
          )}
        </div>
      </div>
    </div>
  );
}
