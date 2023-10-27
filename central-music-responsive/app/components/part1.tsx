import Image from "next/image";

export default function Part1() {
	return (
		<>
			<section className="flex flex-col justify-center items-center w-full gap-16 py-10 md:py-16 xl:py-32 px-8 xl:px-32 md:px-16">
				<section className="flex flex-col justify-center items-center text-white gap-8 rounded-lg w-full p-8 bg-[url('../public/block-bg-red.png')] bg-cover bg-no-repeat ">
					<h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">FREE GUITAR LESSONS</h1>
					<p className="text-sm md:text-md lg:text-lg xl:text-xl max-w-md text-center">
						Purchase any guitar over $499.99 and recieve a one-hour guitar
						lesson free.
					</p>
					<button className="text-sm md:text-md lg:text-lg xl:text-xl rounded-xl p-3 bg-gradient-to-br from-orange-500 to-orange-700 hover:bg-gradient-to-br hover:from-orange-600 hover:to-orange-800">
						Learn More
					</button>
				</section>
				<section className="flex flex-col flex-wrap w-full">
					<hr className="border-t-4 border-[#7f1d1d] w-[100px] self-center" />
					<h1 className="text-3xl xl:text-4xl font-extrabold opacity-70 text-center pt-3">
						New Products
					</h1>
					<section className="flex flex-row flex-wrap items-center justify-center gap-4 pt-10 text-sm">
						{["guitar1.png", "guitar2.png", "guitar3.png", "guitar4.png"].map((src) => (
								// eslint-disable-next-line react/jsx-key
								<section className="flex flex-col max-h-[400px] shadow-xl rounded-lg cursor-pointer hover:scale-105 ease-in-out duration-200">
									<Image
										src={`/products/${src}`}
										className="w-full object-cover p-0"
										alt="guitar"
										width="200"
										height="200"
									/>
									<section className="flex flex-row gap-20 p-7">
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
			</section>
		</>
	);
}
