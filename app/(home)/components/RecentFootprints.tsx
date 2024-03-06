import { FaPaw } from "react-icons/fa";

const RecentFootprints = () => {
	let footrpints = ["12.13", "12.13", "12.13", "12.13", "12.13", "12.13"];
	return (
		<section className="flex flex-col items-start px-7 pt-10 h-1/3 w-screen">
			<p className="text-xl font-bold">최근에 달린 발자국</p>
			<ul className="w-full overflow-x-auto whitespace-nowrap overflow-y-hidden flex gap-4 pt-5">
				{footrpints.map((footrprint, index) => (
					<li key={index}>
						<FaPaw size="4rem" className="text-[#88AB8E]" />
					</li>
				))}
			</ul>
		</section>
	);
};

export default RecentFootprints;
