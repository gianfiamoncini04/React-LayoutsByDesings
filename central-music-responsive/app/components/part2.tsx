"use client"

import Image from 'next/image'

export default function Part2() {
	return (
		<>
			<section className="flex flex-col flex-wrap w-full py-10 xl:py-32 md:py-16 px-8 xl:px-32 md:px-16 bg-[#ECECEC]">
				<hr className="border-t-4 border-[#7f1d1d] w-[100px] self-center" />
				<h1 className="text-3xl xl:text-4xl font-extrabold opacity-70 text-center pt-3">
					Popular Finds
				</h1>
				<section className="flex flex-row flex-wrap items-center justify-center gap-10 pt-16 text-sm">
					{["find1.png", "find2.png", "find3.png", "find4.png"].map((src) => (
							// eslint-disable-next-line react/jsx-key
							<section className="flex flex-col max-h-[400px] shadow-xl rounded-lg cursor-pointer hover:scale-105 ease-in-out duration-200">
								<Image
									src={`/products/${src}`}
									className="w-full object-cover p-0"
									alt="guitar"
									width="200"
									height="200"
								/>
								<section className="flex flex-row gap-20 p-5 justify-between items-start bg-white border-t border-gray-200 rounded-b-lg">
									<section className="flex flex-col">
										<h2 className="font-bold">Brand Name</h2>
										<h3 className="font-medium opacity-80">
											Product description here
										</h3>
										<small className="mt-4 w-fit px-1 rounded-full border border-black opacity-80">
											<span className="font-bold">0</span> colors available
										</small>
									</section>
									<p className="font-bold">$2,995</p>
								</section>
							</section>
						))}
				</section>
			</section>
		</>
	);
}
