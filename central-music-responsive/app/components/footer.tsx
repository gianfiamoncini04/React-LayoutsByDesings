"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
	return (
		<>
			<footer className="flex flex-col text-white">
				<section className="flex flex-col lg:flex-row gap-16 bg-[#505050] w-full justify-between items-center lg:items-start text-sm lg:text-md px-8 xl:px-32 md:px-16 py-10">
                    <section className="flex flex-row gap-24">
                        {[
                            ['My Account', 'Overview', 'Order History', 'Wishlist', 'Acount info'],
                            ['Store', 'Securiry Notice', 'Location & Hours', 'Rentals', 'Privacy Notice']
                        ].map(([title, h1, h2, h3, h4]) => (
							// eslint-disable-next-line react/jsx-key
                            <section className="flex flex-col font-light">
                                <hr className="border-t-2 border-white w-full self-start"/>
                                <h1 className="font-semibold pb-4">{title}</h1>
                                <h2 className="opacity-80 hover:opacity-100 cursor-pointer pb-2 lg:pb-1">{h1}</h2>
                                <h2 className="opacity-80 hover:opacity-100 cursor-pointer pb-2 lg:pb-1">{h2}</h2>
                                <h2 className="opacity-80 hover:opacity-100 cursor-pointer pb-2 lg:pb-1">{h3}</h2>
                                <h2 className="opacity-80 hover:opacity-100 cursor-pointer pb-2 lg:pb-1">{h4}</h2>
                            </section>
                        ))}
                    </section>
                    <section className="flex flex-col  justify-center lg:justify-start items-center lg:items-start gap-4">
						<Link href="/"><Image src="/logo.png" alt="logo" width="255" height="40" /></Link>
                        <section className="flex flex-row gap-4 lg:gap-2">
                            <Link href='/'><svg className="w-6 h-6 fill-white hover:fill-[#ffffff95] duration-300s" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></Link>
                            <Link href='/'><svg className="w-6 h-6 fill-white hover:fill-[#ffffff95] duration-300s" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></Link>
                            <Link href='/'><svg className="w-6 h-6 fill-white hover:fill-[#ffffff95] duration-300s" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/></svg></Link>
                            <Link href='/'><svg className="w-6 h-6 fill-white hover:fill-[#ffffff95] duration-300s" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg></Link>
                        </section>
                        <p className='font-light pt-16 text-center lg:text-start'>Made by <span className='font-bold  hover:text-[#ffffff95]'><Link href="https://github.com/gianfiamoncini04" target='_blank' rel='noopener noreferrer'>GIAN</Link></span> 🤙🏼<br />
                        Can be access the source code <span className='font-bold underline hover:text-[#ffffff95]'><Link href="https://github.com/gianfiamoncini04/LayoutsByDesings/tree/main/nexcent-react4" target='_blank' rel='noopener noreferrer'>here</Link></span>. <br />
                        Figma design used: <span className='font-bold underline hover:text-[#ffffff95]'><Link target='_blank' rel='noopener noreferrer' href="https://www.figma.com/community/file/1055496893768652881">CentralMusicStore</Link></span></p>
                    </section>
                </section>
				<section className="bg-[#252525] px-8 xl:px-32 md:px-16 py-1 lg:py-2"><p className="text-sm font-semibold opacity-80 text-center lg:text-start">&copy;2023 Music Store. All rights reserved</p></section>
			</footer>
		</>
	);
}
