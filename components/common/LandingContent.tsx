'use client';

import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const testimonials = [
  {
    name: 'Sasha',
    avatar: 'S',
    title: 'Software Engineer',
    description: "This is the best application I've used!",
  },
  {
    name: 'John',
    avatar: 'J',
    title: 'Software Developer',
    description: 'This application is amazing!',
  },
  {
    name: 'Jane',
    avatar: 'J',
    title: 'Frontend Developer',
    description: 'I love the user interface of this application!',
  },
  {
    name: 'Bob',
    avatar: 'B',
    title: 'Full Stack Developer',
    description: 'This application has made my life so much easier!',
  },
  {
    name: 'Alice',
    avatar: 'A',
    title: 'Software Engineer',
    description: 'I highly recommend this application to anyone!',
  },
  {
    name: 'David',
    avatar: 'D',
    title: 'Backend Developer',
    description: 'This application has saved me so much time!',
  },
  {
    name: 'Emily',
    avatar: 'E',
    title: 'Web Developer',
    description: 'This application is a game changer!',
  },
  {
    name: 'Mike',
    avatar: 'M',
    title: 'Software Architect',
    description: 'This application is the best I have ever used!',
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center w-full justify-between gap-x-2">
                <div>
                  <p className="text-lg">{testimonial.name}</p>
                  <p className="text-zinc-400 text-sm">{testimonial.title}</p>
                </div>
                <div
                  className={cn(
                    'flex items-center justify-center w-10 h-10 rounded-full',
                    'bg-gradient-to-r from-purple-500 to-pink-600'
                  )}
                >
                  <p className="text-lg">{testimonial.avatar}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {testimonial.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
