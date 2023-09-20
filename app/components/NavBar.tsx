import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';


export default function NavBar() {

  return (
    <nav className="bg-base-100 backdrop-blur-lg sticky top-0 z-30 shadow-lg flex align-items-center p-5 min-h-[4rem] w-full">
      <div className="w-[50%] justify-start">
        <div className="relative inline-block">
          <ul
            tabIndex={0}
            className="w-32 flex px-4 gap-4"
          >
            <span>
              <Link 
                href="/"
                className={`flex max-md:text-xl items-center gap-0.5 opacity-80 font-bold hover:opacity-100 hover:text-blue-500 transition-all group border-b border-transparent w-fit`}
              >
                Home
              </Link>
            </span>
            <span>
              <Link 
                href="/anime/random"
                className={`flex max-md:text-xl items-center gap-0.5 opacity-80 font-bold hover:opacity-100 hover:text-blue-500 transition-all group border-b border-transparent w-fit`}
              >
                Random
              </Link>
            </span>
          </ul>
        </div>
      </div>
      <div className="w-[50%] justify-end">
        <ThemeSwitcher />
      </div>
    </nav>
  )
}