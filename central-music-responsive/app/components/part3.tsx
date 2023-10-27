"use client";

import Image from "next/image";

export default function Part3() {
	return (
		<>
			<section className="flex flex-col flex-wrap w-full py-10 xl:py-32 md:py-16 px-8 xl:px-32 md:px-16">
				<hr className="border-t-4 border-[#7f1d1d] w-[100px] self-center" />
				<h1 className="text-3xl xl:text-4xl font-extrabold opacity-70 text-center pt-3">
					Gear Heads
				</h1>
				<section className="flex flex-row flex-wrap w-full items-center justify-center gap-16 pt-16 text-sm">
					{["article1.png", "article2.png", "article3.png", "article4.png", "article5.png"].map((src) => (
							// eslint-disable-next-line react/jsx-key
							<section className="flex flex-col shadow-xl rounded-lg cursor-pointer hover:scale-105 ease-in-out duration-200 odd:bg-[#252525] odd:text-white even:bg-[#eaeaea]">
								<section className="w-full">
									<Image
										src={`/products/${src}`}
										alt="article"
										className="w-[400px] h-[400px] object-cover p-0 rounded-lg"
										width="400"
										height="400"
									/>
								</section>
								<section className="flex flex-col gap-2 p-7">
									<h2 className="font-bold">Article Title</h2>
									<h3 className="font-medium opacity-80">Article Subhead</h3>
								</section>
							</section>
						)
					)}
				</section>
			</section>
		</>
	);
}
