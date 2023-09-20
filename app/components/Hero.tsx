export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-start py-10 px-16">
      <h1 className="z-10 text-6xl md:text-7xl lg:text-8xl text-edge-outline font-display whitespace-nowrap bg-clip-text text-black dark:text-white">
        Anime Gen
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to zinc-300/0" />
      <div className="mt-10 text-center animate-fade-in">
        <h2 className="text-base text-zinc-500">
          Hi! Welcome to Anime Gen. An anime generator that recommends you 
          a random based on your pre-requisites and gives you small details based on it.
        </h2>
      </div>
    </div>
  )
}