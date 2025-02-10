import Link from 'next/link';

export default function Header () {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center mx-auto">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">manuelreyes.dev</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="transition-colors hover:text-foreground/80">About</a>
            <a href="#projects" className="transition-colors hover:text-foreground/80">Projects</a>
            <a href="#contact" className="transition-colors hover:text-foreground/80">Contact</a>
          </nav>
        </div>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ml-auto">Resume</button>
      </div>
    </header>
  );
}