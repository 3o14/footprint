import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";

const MyGuestbooks = () => {
	const guestbooks = ["원쥬의 홈", "사무실"];

	if (guestbooks.length < 3) {
		guestbooks.push("add");
	}

	return (
		<section className="flex flex-col items-start justify-between px-7 py-5 min-h-1/3 m-0 w-screen">
			<p className="text-xl font-bold pb-4">나의 방명록</p>
			<ul className="w-full overflow-x-auto whitespace-nowrap overflow-y-hidden flex gap-4">
				{guestbooks.map((book, index) =>
					book !== "add" ? (
						<li key={index} className="flex flex-col items-center">
							<div className="w-32 h-32 overflow-hidden rounded-full">
								<Image src="/dummy1.png" alt="dummy" width={700} height={700} />
							</div>
							<p className="pt-2">{book}</p>
						</li>
					) : (
						<Link key={index} href="/add-guestbook">
							<div className="w-32 h-32 bg-[#EEE] rounded-full flex items-center justify-center">
								<FaPlus size="2rem" className="text-gray-300" />
							</div>
						</Link>
					)
				)}
			</ul>
		</section>
	);
};

export default MyGuestbooks;
