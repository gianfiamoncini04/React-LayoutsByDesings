import { ReactComponentElement } from "react";

export type ButtonProps = {
	valor?: string,
	iconleft?: ReactComponentElement<'img'>,
	iconright?: ReactComponentElement<'img'>,
}

export default function Button(props: ButtonProps) {
	return (
		<>
			<a href="/" className="inline-flex items-center py-2 px-4 bg-blue-600 rounded-lg text-zinc-50">{props.iconleft}{props.valor}{props.iconright}</a>
		</>
	);
}
