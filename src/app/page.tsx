import { Hero } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex md:items-center">
      <div
        className="vignette fixed top-0 left-0 w-full h-full inset pointer-events-none z-50 hidden sm:block"
        style={{ boxShadow: '0 0 200px rgba(0,0,0,0.9) inset'}}
      ></div>
      <main className="container px-4 md:px-6 mx-auto">
        <section id="about" className="py-10 sm:py-12 md:py-24 lg:py-32">
          <Hero />
        </section>
      </main>
    </div>
  );
}
