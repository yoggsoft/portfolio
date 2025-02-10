import Image from 'next/image';
import { Icon } from '@/components/Icons';

export default function Hero () {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="-z-10 w-60 blur-[200px] h-60 rounded-full bg-brand-blue absolute pointer-events-none select-none top-80 md:top-56 right-0"></div>
        <div className="space-y-2">
          <Image
            src={'/android-chrome-512x512.png'}
            width={512}
            height={512}
            alt='Manuel Reyes'
            className='rounded-full mx-auto'
          />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none lg:m-6">Manuel Reyes</h1>
          <h2 className="text-2xl font-semibold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none lg:m-5">Full Stack Developer</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-3xl dark:text-gray-400 p-6">
            I enjoy creating <strong>unique</strong> experiences from wireframe to end-product that creates a direct impact on users worldwide.
          </p>
        </div>
        <div className="space-x-4">
          <a href="https://github.com/yoggsoft" target="_blank">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bord bg-background hover:bg-accent hover:opacity-75 hover:text-accent-foreground h-10 w-10">
              <Icon name='github' />
              <span className="sr-only">GitHub</span>
            </button>
          </a>
          <a href="https://linkedin.com/in/querales" target="_blank">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-background hover:bg-accent hover:opacity-75 hover:text-accent-foreground h-10 w-10">
              <Icon name='linkedin' />
              <span className="sr-only">LinkedIn</span>
            </button>
          </a>
          {/* <a href="mailto:hello@example.com">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-background hover:bg-accent hover:opacity-75 hover:text-accent-foreground h-10 w-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-4 w-4">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <span className="sr-only">Email</span>
            </button>
          </a> */}
        </div>
      </div>
    </div>
  );
}