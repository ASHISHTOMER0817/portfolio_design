// import { useState } from "react";
// import "./App.css";
import "./index.css";
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import { SiApachedolphinscheduler } from "react-icons/si";
import amazon_icon from "./assets/icons/icons8-amazon.svg";
import { IoCloudDownload } from "react-icons/io5";
import doodle from "./assets/icons/icons8-stan-marsh.svg";
import html5 from "./assets/icons/html-5-svgrepo-com.svg";
import css from "./assets/icons/css-3-svgrepo-com.svg";
import react from "./assets/icons/react-svgrepo-com.svg";
import python from "./assets/icons/python-svgrepo-com.svg";
import nodejs from "./assets/icons/nodejs-svgrepo-com.svg";
import js from "./assets/icons/js-svgrepo-com.svg";
import github from "./assets/icons/github-142-svgrepo-com.svg";
import MyComponent from "./component/typed";
import ContactForm from "./component/ContactForm";
import bootstrap from "./assets/icons/bootstrap-fill-svgrepo-com.svg";
import docker from "./assets/icons/docker-svgrepo-com.svg";
import mongodb from "./assets/icons/mongodb-svgrepo-com.svg";
import nextjs from "./assets/icons/nextjs-icon-svgrepo-com.svg";

function App() {
	return (
		// <>
		<div className="h-screen overflow-y-auto snap-y snap-mandatory bg-gradient-to-r bg-black text-white">
			<div id="info" className=" h-[90vh] relative snap-center">
				<div className="px-8 max-[768px]:px-4 max-[768px]:gap-4 py-5 flex blu bg-gray-950 justify-between items-center mt-0 shadow-md w-full top-0">
					<div className="text-4xl font-bold">A</div>
					{/* <section>
						<span className="relative text-4xl font-bold group">
							<span className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
								A
							</span>
							<span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								Aditya
							</span>
						</span>
					</section> */}
					<section className="flex gap-8 max-[768px]:overflow-scroll max-[768px]:w-full ">
						{[
							{
								main: "Projects",
								link: "#projects",
							},
							{
								main: "Technologies",
								link: "#technologies",
							},
							{ main: "Works", link: "#works" },
							{ main: "Info", link: "#info" },
							{ main: "Contact", link: "#contact" },
							{
								main: "Resume",
								icon: <IoCloudDownload />,
								link: "Ashish Tomer's resume.pdf",
							},
						].map((item, index) => {
							return (
								<div
									key={index}
									className="group relative inline-block cursor-pointer"
								>
									<a
										href={`${
											item.main ===
											"Resume"
												? "/"
												: ""
										}${item.link}`}
										download={
											item.main ===
											"Resume"
												? true
												: false
										}
										className="text-lg font-bold hover:text-gray-700 flex gap-2 items-center"
									>
										{item.main}
										{item.main ===
											"Resume" && (
											<div className="float-right">
												{
													item.icon
												}
											</div>
										)}
									</a>
									<div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-900 transition-all duration-300 ease-in-out group-hover:w-full"></div>
								</div>
							);
						})}
					</section>
				</div>
				<div className=" h-[80%] w-[75%] flex md:flex-row max-[769px]:my-auto mx-auto flex-col justify-between items-center">
					<div>
						<img src={doodle} alt="" />
					</div>

					{/* <div className=" font-semibold inline-block text-xl">
							<div className="auto_written_text inline-block">
								Dynamic frontend developer{" "}
							</div>
							<div className="font-medium text-lg">
								{" "}
								with over 1 year of experience,
								specializing in creating
								innovative and modular
								solutions.{" "}
							</div>
						</div> */}
					<div className="flex flex-col text-xl items-center justify-center">
						<MyComponent />
						<div className="font-medium text-lg w-2/5">
							{" "}
							with over 1 year of experience,
							specializing in creating innovative
							and modular solutions.{" "}
						</div>
					</div>
				</div>
			</div>
			<div
				id="technologies"
				className=" snap-center px-6 py-8 my-4 gap-[3.5rem] items-center flex flex-col"
			>
				<div className="text-3xl font-bold underline underline-offset-2">
					Technologies learned
				</div>
				<div className="flex flex-wrap justify-center gap-10 my-auto">
					{[
						html5,

						css,

						js,

						python,

						react,

						github,

						nodejs,

						bootstrap,
						nextjs,
						docker,
						mongodb,
					].map((icon, index) => {
						return (
							<div
								key={index}
								className="flex flex-col items-center gap-2"
							>
								<img
									src={icon}
									alt=""
									className={`w-20 ${
										index === 5 || index === 7 || index === 8 ? 
										"bg-[#19efff]":''
									}`}
								/>
								{/* <div>{name}</div> */}
							</div>
						);
					})}
				</div>
			</div>
			<div
				id="projects"
				className=" snap-center px-6 py-8 my-20 gap-[3.5rem] items-center flex flex-col"
			>
				{/* <section className="px-6 py-8 gap-5 items-center flex flex-col">
				<div className="text-3xl font-bold underline underline-offset-2">
						Technologies learned
					</div>
					<div className="flex flex-wrap justify-center gap-10 my-auto">
						{[
							{
								icon: html5,
								name: "HTML",
							},
							{
								icon: css,
								name: "CSS",
							},
							{
								icon: js,
								name: "JS",
							},
							{
								icon: python,
								name: "Python",
							},
							{
								icon: react,
								name: "React",
							},
							{
								icon: github,
								name: "Github",
							},
							{
								icon: nodejs,
								name: "Node.js",
							},
						].map(({ icon, name }, index) => {
							return (
								<div
									key={index}
									className="flex flex-col items-center gap-2"
								>
									<img
										src={icon}
										alt=""
										className="w-20"
									/>
									<div>{name}</div>
								</div>
							);
						})}
					</div>
				</section> */}

				<div className="text-3xl font-bold underline underline-offset-2">
					Projects
				</div>
				<div className="justify-between w-8/12 mx-auto gap-10 items-center my-auto flex flex-col md:grid">
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
			</div>
			<div
				id="works"
				className=" snap-center flex flex-col px-6 py-8 my-20 gap-[3.5rem] text-2xl items-center"
			>
				<div className="text-3xl font-bold underline underline-offset-2">
					Work Experience
				</div>
				<div className="my-auto flex md:flex-row flex-col  gap-10 px-10">
					<div className="flex flex-col">
						<img
							src={amazon_icon}
							alt=""
							className="w-16 mx-auto"
						/>
						<div className="text-2xl mx-auto mb-10 font-extrabold underline underline-offset-4">
							Amazon incorporation
						</div>
						<div className=" font-bold flex items-center">
							<div>Role:</div>
							<div className="font-bold text-[20px] text-nowrap text-gray-700 ml-3">
								Senion developement engineer{" "}
							</div>
						</div>

						<div className="font-bold flex items-center">
							<div>Duration:</div>
							<div className=" font-bold text-[20px] text-nowrap text-gray-700 ml-3">
								June 2024 - Present
							</div>
						</div>
					</div>
					<div className="border border-l-2 border-white md:h-64 max-[768px]:hidden"></div>
					<div className="border border-l-2 border-white w-64 md:hidden  mx-auto"></div>

					{/* <div className=" flex flex-col gap-10"> */}
					{/* <div className="font-bold mx-auto">
							Experience:
						</div> */}
					<div className="flex flex-col">
						<div className="font-bold mx-auto text-[20px] text-gray-700 ml-3">
							Developed a React Native mobile app
							that tracks workout progress.
							Integrated local storage and API for
							real-time data updates.
						</div>
						<div className="font-bold mx-auto text-[20px] text-gray-700 ml-3">
							Developed a React Native mobile app
							that tracks workout progress.
							Integrated local storage and API for
							real-time data updates.
						</div>
						<div className="font-bold mx-auto text-[20px] text-gray-700 ml-3">
							Developed a React Native mobile app
							that tracks workout progress.
							Integrated local storage and API for
							real-time data updates.
						</div>
					</div>
					{/* </div> */}
				</div>
			</div>
			<ContactForm />
			<div
				id="contact"
				className=" items-center snap-center px-8 py-4 flex flex-col justify-center gap-4 bg-gray-950"
			>
				<div className="text-base font-extrabold">
					Feel free to contact me on
				</div>
				<div className="flex justify-center gap-6">
					{[
						<SiGmail className="font-bold text-base duration-300 cursor-pointer hover:text-gray-700 text-white" />,
						<SiLinkedin className="font-bold text-base duration-300 cursor-pointer hover:text-gray-700 text-white" />,
						<AiFillGithub className="font-bold text-base duration-300 cursor-pointer hover:text-gray-700 text-white" />,
						<SiApachedolphinscheduler className="font-bold text-base duration-300 cursor-pointer hover:text-gray-700 text-white" />,
					].map((icons) => {
						return icons;
					})}
				</div>{" "}
			</div>
		</div>
		// </>
	);
}

export default App;
