'use client'
import { MouseEventHandler, ReactNode } from "react";

// 헤더 아이콘 type
export interface IMenu {
	[key: string]: ReactNode | string | undefined;
}

// 아이콘에 할당할 함수 type
export interface IMenuFunc {
	left_func: MouseEventHandler<HTMLDivElement> | undefined;
	right_func: MouseEventHandler<HTMLDivElement> | undefined;
}

export interface IHeaderProp {
	menu: IMenu;
	func: IMenuFunc;
}

const Header = (props: IHeaderProp) => {
	const { left, center, right } = props.menu;
	const { left_func, right_func } = props.func;

	return (
		<div className="w-full flex justify-between items-center px-5 h-10 bg-transparent z-10 absolute top-0">
			{left ? (
				<div onClick={left_func}>{left}</div>
			) : (
				<div className="invisible">{right}</div>
			)}
			<div className="text-lg font-bold">{center}</div>
			{right ? (
				<div onClick={right_func}>{right}</div>
			) : (
				<div className="invisible">{left}</div>
			)}
		</div>
	);
};

export default Header;
