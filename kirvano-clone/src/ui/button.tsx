import { ReactComponentElement } from "react";

export type ButtonProps = {
	class?: string,
	valor?: string,
	iconleft?: ReactComponentElement<'img'>,
	iconright?: ReactComponentElement<'img'>,
}

export default function Button(props: ButtonProps) {
	return (
		<>
			<a href="/" className={`
			inline-flex 
			items-center 
			py-2 
			px-4 
			bg-[#0d6ede]
			text-white
			rounded-lg 
			font-bold 
			tracking-wider 
			${props.class}`}>{props.iconleft}{props.valor}{props.iconright}</a>
		</>
	);
}
