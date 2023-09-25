"use client"

import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';

export default function NavBar() { 

  return (
    <Navbar disableAnimation className='shadow-lg'>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className='hidden sm:flex'>
        <NavbarItem>
          <Link 
            href="/"
            className={`flex max-md:text-xl items-center gap-0.5 opacity-80 font-bold hover:opacity-100 hover:text-blue-500 transition-all group border-b border-transparent w-fit`}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            prefetch={false}
            href="/anime/random"
            className={`flex max-md:text-xl items-center gap-0.5 opacity-80 font-bold hover:opacity-100 hover:text-blue-500 transition-all group border-b border-transparent w-fit`}
          >
            Random
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/seasons/current"
            className={`flex max-md:text-xl items-center gap-0.5 opacity-80 font-bold hover:opacity-100 hover:text-blue-500 transition-all group border-b border-transparent w-fit`}
          >
            Current Season
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitcher />
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            className="w-full"
            href="/"
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full"
            href="/anime/random"
          >
            Random
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full"
            href="/seasons/current"
          >
            Current Season
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}