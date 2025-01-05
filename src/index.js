import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { LuDot } from "react-icons/lu";
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import { SiApachedolphinscheduler } from "react-icons/si";
import amazon_icon from "./assets/icons/icons8-amazon.svg";
import { IoCloudDownload } from "react-icons/io5";
import doodle from "./assets/icons/icons8-stan-marsh.svg";

// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<div className="h-screen overflow-y-auto snap-y snap-mandatory bg-gradient-to-r from-sky-500 to-indigo-500 ">
			<div className="h-screen flex flex-col items-center justify-center relative snap-center mx-auto">
				<div className="px-8 pt-10 flex justify-between mt-0 shadow-md w-full absolute top-0">
					<section>
						<span className="relative text-4xl font-bold group">
							<span className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
								A
							</span>
							<span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								Aditya
							</span>
						</span>
					</section>
					<section className="flex gap-16">
						{[
							"Projects",
							"Works",
							"Info",
							"Contact",
							{
								main: "Resume",
								sub: <IoCloudDownload />,
							},
						].map((item, index) => {
							return (
								<div
									key={index}
									className="group relative inline-block cursor-pointer"
								>
									<div className="text-lg font-bold hover:text-gray-700 flex gap-2 items-center">
										{index !== 4
											? item
											: item.main}
										{index === 4 && (
											<div className="float-right">
												{
													item.sub
												}
											</div>
										)}
									</div>
									<div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-900 transition-all duration-300 ease-in-out group-hover:w-full"></div>
								</div>
							);
						})}
					</section>
				</div>
				<div className=" h-[80%] w-[75%] grid grid-cols-2 items-center">
					<div>
						<img src={doodle} alt="" />
					</div>
					<div></div>
					<div></div>
					<div className="inline-block">

					<div className="auto_written_text font-semibold text-3xl">
						Lorem ipsum dolor sit amet, consectetur
					</div>
					</div>
				</div>
			</div>

			<div className="h-screen grid grid-cols-[20rem_20rem_20rem] justify-evenly gap-10 snap-center ">
				{[
					{
						url: "https://d3ui957tjb5bqd.cloudfront.net/uploads/2020/06/11092310/Graphic-Design-Portfolio-Tips-8.jpg",
						title: "Project 1",
						site: "invincible.com",
					},
					{
						url: "https://d3ui957tjb5bqd.cloudfront.net/uploads/2020/06/11092310/Graphic-Design-Portfolio-Tips-8.jpg",
						title: "Project 2",
						site: "invincible.com",
					},
					{
						url: "https://d3ui957tjb5bqd.cloudfront.net/uploads/2020/06/11092310/Graphic-Design-Portfolio-Tips-8.jpg",
						title: "Project 3",
						site: "invincible.com",
					},
					{
						url: "https://d3ui957tjb5bqd.cloudfront.net/uploads/2020/06/11092310/Graphic-Design-Portfolio-Tips-8.jpg",
						title: "Project 4",
						site: "invincible.com",
					},
				].map(({ url, title, site }, index) => {
					return (
						<div
							key={index}
							className={`flex flex-col items-center cursor-pointer ${
								index === 3 && "col-end-3"
							}`}
						>
							<div className="overflow-hidden w-[20rem] group relative">
								<div className=" text-center absolute group-hover:bg-gray-800 transition-colors duration-700 w-full h-full z-10 opacity-50 "></div>
								<div className="opacity-100 -z-10 group-hover:z-20 gap-2 flex flex-col justify-center items-center absolute h-full w-full">
									<div className="px-10 py-2 bg-blue-500 text-white text-2xl font-bold ">
										Visit
									</div>
									<div className="font-extrabold text-white">
										{site}
									</div>
								</div>
								<img
									src={url}
									alt=""
									className=" group-hover:scale-110 transition-all duration-700"
								/>
							</div>
							<div>{title}</div>
						</div>
					);
				})}
			</div>
			<div className="h-screen flex flex-col w-3/5 mx-auto text-2xl items-center justify-evenly snap-center">
				<div>
					<img
						src={amazon_icon}
						alt=""
						className=" text-5xl mx-auto"
					/>
					<div className="text-4xl mx-auto font-extrabold underline underline-offset-4">
						Company Name
					</div>
				</div>
				<div>
					<div className=" font-bold">
						Role:
						<div className="font-bold float-right text-[20px] text-gray-700 ml-3">
							Senion developement engineer{" "}
						</div>
					</div>

					<div className="font-bold">
						Duration:
						<div className=" font-bold float-right text-[20px] text-gray-700 ml-3">
							June 2024 - Present
						</div>
					</div>
				</div>
				<div className=" flex flex-col gap-2">
					<div className="font-bold mx-auto">
						Experience:
					</div>
					<div className="font-bold mx-auto text-[20px] text-gray-700 ml-3">
						Developed a React Native mobile app that
						tracks workout progress. Integrated local
						storage and API for real-time data updates.
					</div>
				</div>
			</div>

			<div className="h-screen items-center snap-center px-8 py-4 flex flex-col justify-center gap-10 bg-gradient-to-r from-sky-500 to-indigo-500">
				<div className="text-4xl font-extrabold">
					Feel free to contact me on
				</div>
				<div className="flex justify-center gap-16">
					{[
						{
							icons: (
								<SiGmail className="font-bold text-4xl duration-500 hover:text-sky-300 text-white" />
							),
							name: "Gmail",
						},
						{
							icons: (
								<SiLinkedin className="font-bold text-4xl duration-500 hover:text-sky-300 text-white" />
							),
							name: "LinkedIn",
						},
						{
							icons: (
								<AiFillGithub className="font-bold text-4xl duration-500 hover:text-sky-300 text-white" />
							),
							name: "Github",
						},
						{
							icons: (
								<SiApachedolphinscheduler className="font-bold text-4xl duration-500 hover:text-sky-300 text-white" />
							),
							name: "Twitter",
						},
					].map(({ icons, name }, index) => {
						return (
							<div
								key={index}
								className="flex items-center group flex-col gap-2 cursor-pointer"
							>
								{icons}
								<a
									href="/"
									className="font-bold group-hover:text-gray-700"
								>
									{name}
								</a>
							</div>
						);
					})}
				</div>{" "}
			</div>
		</div>
		<footer className=""></footer>
	</React.StrictMode>
);
