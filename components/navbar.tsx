"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Search, User } from 'lucide-react';

export default function Navbar() {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [country, setCountry] = useState('IND');

  const toggleExplore = () => setExploreOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-1xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between h-20 items-center">
          {/* Left group: logo + Explore */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="inline-block">
             <div className="flex items-center ">
             <Image
             src="/logo/bizlogo.png"
             alt="BizTradeFairs.com"
             width={160}  // Increase width
             height={80}  // Adjust proportionally
             className="h-42 w-auto " // Optional for responsiveness
             />
             </div>
           </Link>

            <div className="relative">
              <button
                onClick={toggleExplore}
                className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <span>Explore</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              {exploreOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <ul className="py-1">
                    <li>
                      <Link href="/trade-fairs"><p className="block px-4 py-2 hover:bg-gray-100">Trade Fairs</p></Link>
                    </li>
                    <li>
                      <Link href="/conferences"><p className="block px-4 py-2 hover:bg-gray-100">Conferences</p></Link>
                    </li>
                    <li>
                      <Link href="/webinars"><p className="block px-4 py-2 hover:bg-gray-100">Webinars</p></Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Center group: search bar */}
          <div className="w-full max-w-md flex-1  bg-gray-200">
            <div className="relative ">
              <input
                type="text"
                placeholder="Topic, Event or Location"
                className="w-full text-black py-2 pl-10 pr-12"
              />
              <Search className="w-5 h-5  absolute right-5 top-1/2 transform -translate-y-1/2 " />
            </div>
          </div>

          {/* Right group: links + country selector + profile */}
          <div className="flex items-center space-x-6">
            <Link href="/top-10">
              <p className="text-gray-700 hover:text-gray-900">Top 10 Must Visit</p>
            </Link>
            <Link href="/speakers">
              <p className="text-gray-700 hover:text-gray-900">Speakers</p>
            </Link>
            <Link href="/add-event">
              <p className="text-gray-700 hover:text-gray-900">Add Event</p>
            </Link>

            <div className="flex items-center space-x-1">
              {/* <Image
                src={`/flags/${country.toLowerCase()}.svg`}
                alt={country}
                width={24}
                height={16}
              /> */}
              <span className="text-gray-700">{country}</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>

            <button className="p-2 rounded-full bg-[#002C71] text-white hover:bg-gray-100 focus:outline-none">
              <User className="w-4 h-4 " />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
