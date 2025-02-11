import Image from 'next/image';
import { Icon } from '@/components/Icons';
import { IconNameType } from '@/components/Icons/IconIndex';

export type ItemType = {
  title: item,
  url: string,
  icon: IconNameType
};

export type item =
  'facebook' |
  'instagram' |
  'youtube' |
  'tiktok' |
  'amazon' |
  'apple' |
  'applemusic' |
  'deezer' |
  'spotify' |
  'soundcloud' |
  'ytmusic';


export default function Hero () {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 gap-6">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 sm:gap-4 md:gap-8 lg:gap-12 text-center">
          <Image
            src={'/android-chrome-512x512.png'}
            width={512}
            height={512}
            alt='Manuel Reyes'
            className='
              rounded-full
              drop-shadow-lg
              mb-6
              sm:mb-auto
              w-[20rem] h-[20rem]
              lg:h-[24rem] lg:w-[24rem]
              2xl:h-[512px] 2xl:w-[512px] transition-all duration-300'
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none lg:m-6">Manuel Reyes</h1>
            <h2 className="text-2xl font-semibold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none lg:m-5">Full Stack Developer</h2>
            <p className="mx-auto max-w-[600px] text-xl md:text-3xl p-6 drop-shadow-md">
              I enjoy creating <strong>unique</strong> experiences from wireframe to end-product that creates a direct impact on users worldwide.
            </p>
            <div className="flex justify-center gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}