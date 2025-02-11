// import Link from 'next/link';
// import { Icon } from '@/components/Icons';

export default function Header () {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center mx-auto">
        <div className="mr-4 hidden md:flex justify-between grow">
          {/* <div className='flex'>
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block text-2xl uppercase">ManuelReyes.dev</span>
            </Link>
          </div> */}
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {/* <a href="#about" className="transition-colors hover:text-foreground/80">About</a>
            <a href="#projects" className="transition-colors hover:text-foreground/80">Projects</a> */}
            {/* <a href="https://github.com/yoggsoft" target="_blank">
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
            </a> */}
          </nav>
        </div>
        {/* <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ml-auto">
            Resume
        </button> */}
      </div>
    </header>
  );
}