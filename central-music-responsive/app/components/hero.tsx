"use client";

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from 'react'

export default function Hero() {
	const [isAtivo, setIsAtivo] = useState(false)

	return (
		<>
			<section className="bg-[url('../public/hero-bg.png')] bg-cover bg-no-repeat min-h-screen text-white px-8 xl:px-32 md:px-16">
				<nav className="flex flex-row justify-between items-center top-0 py-8">
					<section>
						<Link href="/"><Image src="/logo.png" alt="logo" width="255" height="40" /></Link>
					</section>
					<ul className="hidden flex-row gap-20 2xl:flex">
						{[ 'Guitars', 'Acessories', 'Storage', 'Lessons', 'Repairs'].map((title) => (
						// eslint-disable-next-line react/jsx-key
						<li className="font-semibold duration-300 hover:ring hover:ring-white p-2 rounded"><Link href="/">{title}</Link></li>
						))}
					</ul>
					<section className="hidden flex-row gap-4 2xl:flex">
						<Link href="/"><svg className="w-8 h-8 fill-white hover:fill-[#ffffff95] duration-300s" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></Link>
						<Link href="/"><svg className="w-8 h-8 fill-white hover:fill-[#ffffff95] duration-300s" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg></Link>
					</section>
					<section className="block 2xl:hidden">
						<button onClick={() => {setIsAtivo(!isAtivo)}}>
							<svg className="fill-white w-8 h-8 hover:drop-shadow-[0_0_5px_#ffffff80]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
						</button>
						<nav className={`flex flex-col absolute gap-10 right-0 top-0 z-[999] min-h-screen bg-black p-8 w-[150px] sm:w-[200px] md:w-[300px] origin-right animate-open-menu ${isAtivo ? "flex" : "hidden"}`}>
							<button className="self-end" onClick={() => {setIsAtivo(!isAtivo)}}>
								<svg className="fill-white w-6 h-6 hover:drop-shadow-[0_0_5px_#ffffff80]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
							</button>
							<ul className="flex flex-col gap-4">
								{[ 'Guitars', 'Acessories', 'Storage', 'Lessons', 'Repairs',].map((title) => (
								// eslint-disable-next-line react/jsx-key
								<li className="font-semibold duration-300 hover:ring hover:ring-white p-2 rounded"><Link href="/">{title}</Link></li>
								))}
								<section className="flex flex-row gap-4 pt-8">
									<Link href="/"><svg className="w-8 h-8 fill-white hover:fill-[#ffffff95] duration-300s" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></Link>
									<Link href="/"><svg className="w-8 h-8 fill-white hover:fill-[#ffffff95] duration-300s" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg></Link>
								</section>
							</ul>
						</nav>
					</section>
				</nav> 
        		<p className="text-5xl md:text-5xl lg:text-7xl font-extrabold max-w-2xl min-h-[90vh] grid place-items-center drop-shadow-[0_0_50px_#ffffff80]">Fullfilling dreams with strings attached</p>
			</section>
		</>
	);
}
