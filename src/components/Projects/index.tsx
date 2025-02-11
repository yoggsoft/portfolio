import Image from 'next/image';

export default function Projects () {
  return (
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
            {/* <Image
              alt="Task Management App"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-transform hover:scale-105"
              src="/placeholder.svg?height=400&amp;width=600"
              height={100}
              width={100}
              style={{position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent'}}
            /> */}
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
  )
}