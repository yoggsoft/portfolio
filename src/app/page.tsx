// import Image from 'next/image';
import { Header, Hero } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 md:px-6 mx-auto">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <Hero />
        </section>
        {/* <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden" data-v0-t="card">
                <div className="relative aspect-video">
                  <Image
                    alt="E-commerce Platform"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-transform hover:scale-105"
                    src="/placeholder.svg?height=400&amp;width=600"
                    height={100}
                    width={100}
                    style={{position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent'}}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-xl mb-2">E-commerce Platform</h3>
                  <p className="text-sm text-muted-foreground mb-4">A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Next.js</span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Prisma</span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Stripe</span>
                  </div>
                </div>
                <div className="flex items-center p-4 pt-0">
                  <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
                    
                    View on GitHub
                  </a>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden" data-v0-t="card">
                <div className="relative aspect-video">
                  <Image
                    alt="Task Management App"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-transform hover:scale-105"
                    src="/placeholder.svg?height=400&amp;width=600"
                    height={100}
                    width={100}
                    style={{position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent'}}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-xl mb-2">Task Management App</h3>
                  <p className="text-sm text-muted-foreground mb-4">A real-time task management application with team collaboration features.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">React</span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Node.js</span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Socket.io</span>
                  </div>
                </div>
                <div className="flex items-center p-4 pt-0">
                  <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
                    View on GitHub
                  </a>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden" data-v0-t="card">
                <div className="relative aspect-video">
                  <Image
                    alt="AI Chat Interface"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-transform hover:scale-105"
                    src="/placeholder.svg?height=400&amp;width=600"
                    height={100}
                    width={100}
                    style={{position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent'}}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-xl mb-2">AI Chat Interface</h3>
                  <p className="text-sm text-muted-foreground mb-4">An AI-powered chat interface with natural language processing capabilities.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">OpenAI</span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Next.js</span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">TailwindCSS</span>
                  </div>
                </div>
                <div className="flex items-center p-4 pt-0">
                  <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Tech Stack</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6" data-v0-t="card">
                <h3 className="text-lg font-semibold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">React</span><span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">Next.js</span><span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">TypeScript</span><span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">TailwindCSS</span><span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">Redux</span><span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">GraphQL</span></div></div><div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6" data-v0-t="card"><h3 className="text-lg font-semibold mb-4">Backend</h3><div className="flex flex-wrap gap-2"><span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">Node.js</span><span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">Express</span><span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">Python</span>
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">Django</span>
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">PostgreSQL</span>
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">MongoDB</span>
              </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Get in Touch</h2>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6" data-v0-t="card">
                <form action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')" className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="name" required name="name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" required type="email" name="email" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="message" name="message" required></textarea>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full" type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© ${(new Date()).getFullYear()} Manuel Reyes. All rights reserved.</p>
          {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a href="#" className="text-xs hover:underline underline-offset-4">Terms of Service</a>
            <a href="#" className="text-xs hover:underline underline-offset-4">Privacy</a>
          </nav> */}
        </div>
      </footer>
    </div>
  );
}
