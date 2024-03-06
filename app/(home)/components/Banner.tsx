import Image from "next/image";

const Banner = () => {
	let name = "이원주";
	let footprintCount = 13;
	let totalCount = 40;
	let leftCount = 15;
	return (
		<div className="flex flex-col items-start justify-between bg-sub-2 w-screen pl-7 pr-5 h-1/3 bg-[#F2F1EB]">
			<section className="flex flex-col items-start text-xl font-bold pt-14 pb-5 leading-8">
				<p>👋🏻 안녕하세요 이원주님,</p>
				<p>오늘의 발자국을 확인해 보세요</p>
			</section>

			{/* 발자국 스탬프 프로그레스 바 */}
			<section className="w-full">
				<fieldset className="flex items-center text-left font-medium text-primary-1">
					{leftCount}
					<Image
						src="/green-paw-icon.png"
						alt="green-paw-icon"
						width={15}
						height={15}
					/>
					until next grage
				</fieldset>

				{/* 게이지바 */}
				<fieldset className="pb-5 w-full flex items-center gap-2">
					<div className="w-[75%] bg-gray-300 rounded-full h-2.5">
						<div
							className="bg-primary-1 h-2.5 rounded-full"
							style={{ width: "45%" }} // @TODO: 추후 실제 data값으로 수정
						></div>
					</div>

					<div className="flex items-center">
						<span className="text-primary-1 text-2xl font-bold">
							{footprintCount}
						</span>
						<div className="flex">
							{/* @TODO:
                등급별 발자국 개수 안내 페이지 필요
              */}
							/{totalCount}
							<Image
								src="/paw-icon.png"
								alt="paw-icon"
								width={15}
								height={15}
							/>
						</div>
					</div>
				</fieldset>
			</section>
		</div>
	);
};

export default Banner;
