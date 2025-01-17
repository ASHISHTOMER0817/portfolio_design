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
						{/* <img src={doodle} alt="" /> */}
						<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="200px" height="200px"><path fill="#fcbf95" d="M42.5,23.8c-0.9-0.3-2-1-2.9-1.3c-0.8-0.2-1.8-0.1-2.6-0.3c-4.5-1-8-1.6-12.4-1.6c-1.5,0-3.5-0.4-5-0.3 c-1.5,0.1-3.1,0.5-4.6,0.6c-2.5,0.3-4.2,0.5-6.6,0.9c-0.9,0.2-2.4,0.3-3.3,0.6c-0.4,0.1-1.3,0.9-1.7,1V25c0,1.9,1.2,7.2,1.6,8.8 c0.4,1.6,0.1,0.7,0.9,2.2c1,1.8,1.5,2.6,2.9,4c1.1,1.1,3.1,2.2,4.4,3c0.6,0.4,1.8,0.7,2.4,1c0.9,0.4,2,0.2,2.9,0.5 c1.9,0.6,3.3,0.9,5.4,0.9c2,0,5.5-0.8,7.3-1.4c2.5-0.7,2.4-0.4,4.4-2c1.1-0.9,3-2.4,3.9-3.5c0.7-0.8,1.4-2.1,1.9-3c1-1.7,1.5-2,2-4 c0.1-0.3,0.5-2.2,0.6-2.5c0.3-1.3,0.4-2.6,0.4-4v-1C43.8,23.7,43.2,24,42.5,23.8z"/><path fill="#d6e5e5" d="M24,26.6c0,2.1-0.3,3.9-1.5,5.3c-0.4,0.5-1,1.2-1.5,1.6c-0.4,0.2-1.1,0.4-1.5,0.5c-0.6,0.2-1.2,0.5-1.8,0.5 c-0.9,0-2-0.2-2.7-0.5c-1.3-0.7-1.6-1.5-2-3.1c-0.2-1-0.6-2.6-0.4-3.7c0.3-1.9,0.7-3.4,1.9-4.6c1.1-1,2.9-2,4.2-2.1 c1.2-0.1,2.9,0.8,3.8,1.5c0.4,0.4,0.7,1,1,1.6C24.1,24.6,24,25.1,24,26.6z"/><path fill="#d6e5e5" d="M24,26.8c0,2.2,0.1,4.2,1.5,5.7c1.1,1.2,3.2,1.9,4.8,2c1.9,0.1,3.3-0.4,4.2-2c0.6-1,1-2.7,1-4 c0-0.3,0-0.7-0.1-1.1c-0.1-0.7-0.3-1.3-0.5-1.9c-0.3-0.7-1.9-2.4-2.4-3c-1.2-1.4-1.5-1.4-3.2-1.5c-1-0.1-1,0-1.8,0.5 c-0.4,0.2-1.7,0.7-2,1c-0.4,0.4-0.7,1-0.9,1.5C24.2,24.8,24,25.8,24,26.8z"/><path fill="#4b7bb2" d="M24,19.1c6.4,0,13.1,1.1,19.9,3.2c-0.1-1.2-0.2-2.3-0.5-3.4c-0.5-2.1-0.5-3.3-1.8-5c-1.3-1.8-4.3-5.4-5.8-6.6 C35,6.6,34,6.6,33,6.1c-3-1.6-5.4-1.5-9-1.5c-1.7,0-3.4,0.2-5,0.6c-0.9,0.2-1,0-1.9,0.3c-0.6,0.2-2,0.6-2.6,0.9 c-1,0.6-1.5,1.1-2.4,1.5c-1.8,0.9-1.9,1.2-3.2,2.6c-0.6,0.7-0.6,0.8-1.4,1.2c-0.6,0.3-1.3,2-1.5,2.5c-0.3,0.6-0.9,1.5-1.1,2.2 c-0.7,1.6-0.6,3.3-0.7,5C10.2,20,17.2,19.1,24,19.1z"/><path fill="#ed2224" d="M22.9,7.6l0.1,1c0,0.5,0.5,0.9,1,0.9s1-0.4,1-0.9l0.1-1l0.8,0.7c0.4,0.3,1,0.3,1.4,0c0.4-0.3,0.3-0.9,0-1.4 l-0.5-0.7l0.9-0.1c0.5,0,1-0.5,1-1c0-0.5-0.4-1-1-1l-1-0.1l0.7-0.8c0.2-0.2,0.3-0.4,0.3-0.6c0-0.3-0.1-0.5-0.3-0.7 c-0.4-0.4-1-0.4-1.4,0l-0.8,0.7l-0.1-1c0-0.5-0.5-0.9-1-0.9c-0.3,0-0.6,0.1-0.8,0.4C23,1.1,23,1.3,23,1.5l0,1.1l-0.9-0.7 c-0.4-0.4-1-0.4-1.4,0c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.2,0.1,0.5,0.3,0.6L21.4,4l-1,0.1c-0.5,0-1,0.5-1,1c0,0.5,0.4,1,1,1l1,0.1 l-0.7,0.8c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.5,0.3,0.7c0.4,0.4,1,0.4,1.4,0L22.9,7.6z"/><path fill="#ed2224" d="M24.7,20.7c4.3,0,7.9,0.6,12.4,1.6c0.8,0.2,1.8,0.1,2.6,0.3c0.9,0.2,2,1,2.9,1.3c0.7,0.2,1.3,0,2,0.2v-1.7 v-1.4c-1.8-1.3-2.2-1-3.5-1.3c-0.4-0.1-2.1-0.4-2.6-0.5c-2.5-0.6-3.2-0.7-5.7-1c-1.7-0.2-2.8-0.5-4.4-0.6c-0.9,0-3.3,0.1-4.2,0.1 c-1,0-3.5,0-4.5,0.1c-1.5,0.1-3,0.1-4.5,0.2c-1,0.1-1.3,0.2-2.4,0.3c-2,0.2-2.6,0.3-4.4,0.6c-1.4,0.3-5.2,0.7-4.8,1.9l0,3 c0.4-0.1,1.3-0.9,1.7-1c0.9-0.2,2.3-0.4,3.3-0.6c2.4-0.5,4.1-0.7,6.6-0.9c1.5-0.2,3.1-0.5,4.6-0.6C21.2,20.3,23.2,20.7,24.7,20.7z"/><g><path fill="#010101" d="M24,45.9c-2.1,0-3.6-0.3-5.5-0.9c-0.4-0.1-0.8-0.1-1.2-0.2c-0.6,0-1.2-0.1-1.8-0.4c-0.3-0.1-0.6-0.2-0.9-0.4 c-0.6-0.2-1.1-0.4-1.5-0.7L12.3,43c-1.3-0.8-2.8-1.7-3.8-2.7c-1.5-1.5-2.1-2.4-3-4.1c-0.2-0.4-0.3-0.6-0.4-0.7 c-0.2-0.3-0.2-0.4-0.3-0.8c0-0.2-0.1-0.4-0.2-0.7C4.1,32.2,3,26.9,3,25v-1.5C3,23.2,3.2,23,3.5,23S4,23.2,4,23.5V25 c0,1.7,1.1,6.9,1.6,8.7c0.1,0.3,0.1,0.6,0.2,0.7c0.1,0.3,0.1,0.3,0.2,0.5c0.1,0.1,0.2,0.4,0.4,0.8c1,1.8,1.5,2.5,2.8,3.9 c0.9,0.9,2.4,1.8,3.6,2.5l0.7,0.4c0.3,0.2,0.8,0.4,1.4,0.6c0.4,0.1,0.8,0.3,1,0.4c0.4,0.2,0.9,0.2,1.4,0.3c0.5,0,0.9,0.1,1.4,0.2 c1.9,0.6,3.2,0.9,5.2,0.9c1.8,0,5-0.7,7.2-1.4c0.5-0.2,0.9-0.3,1.3-0.4c1.2-0.3,1.4-0.4,2.9-1.6c1.2-1,3-2.4,3.8-3.4 c0.5-0.6,1.1-1.6,1.6-2.4l0.3-0.5c0.2-0.4,0.4-0.7,0.6-1c0.6-1,0.9-1.5,1.3-2.9c0.1-0.3,0.5-2.1,0.6-2.5c0.3-1.3,0.4-2.6,0.4-3.9 v-1c0-0.3,0.2-0.5,0.5-0.5S45,23.7,45,24v1c0,1.4-0.1,2.8-0.4,4.1c-0.1,0.3-0.5,2.2-0.6,2.5c-0.4,1.6-0.8,2.2-1.4,3.2 c-0.2,0.3-0.4,0.6-0.6,0.9l-0.3,0.5c-0.5,0.8-1.1,1.9-1.7,2.6c-0.9,1.1-2.7,2.6-4,3.6c-1.6,1.3-1.9,1.4-3.3,1.8 c-0.3,0.1-0.7,0.2-1.3,0.4C29.7,45,26.2,45.9,24,45.9z"/><path fill="#010101" d="M17.5,35c-0.8,0-2-0.2-2.7-0.6c-1.5-0.8-1.8-1.8-2.2-3.4c-0.3-1.1-0.6-2.7-0.4-3.9c0.3-2.1,0.7-3.6,2.1-4.9 c1.2-1.2,3.1-2.1,4.5-2.2c1.5-0.1,3.3,1,4.2,1.7c0.4,0.3,0.6,0.8,0.8,1.2c0.1,0.2,0.2,0.3,0.3,0.5c0.6,1,0.6,1.6,0.6,2.6 c0,0.2,0,0.4,0,0.6l0,0c0,1.9-0.2,4-1.6,5.7c-0.5,0.6-1.1,1.3-1.6,1.6c-0.3,0.2-0.7,0.3-1.1,0.4c-0.2,0.1-0.4,0.1-0.5,0.2 c-0.6,0.2-1.2,0.5-2,0.6C17.6,35,17.6,35,17.5,35z M18.8,21c0,0-0.1,0-0.1,0c-1.2,0.1-2.9,0.9-3.9,1.9c-1.1,1.1-1.5,2.4-1.8,4.3 c-0.1,0.8,0,2,0.4,3.5c0.4,1.6,0.6,2.2,1.8,2.8c0.6,0.3,1.6,0.5,2.4,0.5c0.6,0,1.1-0.3,1.6-0.5c0.2-0.1,0.4-0.1,0.6-0.2 c0.3-0.1,0.6-0.2,0.8-0.3c0.4-0.3,1-0.9,1.4-1.4c1.3-1.5,1.4-3.3,1.4-5.1l0,0c0-0.2,0-0.4,0-0.6c0-1,0-1.3-0.4-2 c-0.1-0.2-0.2-0.4-0.3-0.5c-0.2-0.3-0.4-0.7-0.6-0.9C21.3,21.7,19.8,21,18.8,21z"/><path fill="#010101" d="M30.7,35c-0.1,0-0.2,0-0.4,0c-1.6-0.1-3.9-0.8-5.1-2.2c-1.5-1.6-1.6-4-1.6-6l0,0c0-1.1,0.2-2.1,0.6-3 c0.3-0.7,0.6-1.2,1-1.6c0.2-0.3,0.7-0.5,1.4-0.8c0.3-0.1,0.6-0.2,0.7-0.3l0.1-0.1c0.8-0.5,0.9-0.5,2-0.5l0.3,0 c1.6,0.1,2.1,0.2,3.3,1.7c0.1,0.2,0.3,0.4,0.6,0.6c0.9,1,1.7,1.9,1.9,2.5c0.3,0.7,0.5,1.4,0.6,2.1c0.1,0.4,0.1,0.7,0.1,1.1 c0,1.3-0.4,3.1-1.1,4.3C34.1,34.3,32.7,35,30.7,35z M24.5,26.8c0,2,0.1,4,1.4,5.3c1,1.1,3.1,1.8,4.5,1.8c1.9,0.1,3-0.4,3.7-1.7 c0.5-1,1-2.6,0.9-3.7c0-0.3,0-0.7-0.1-1c-0.1-0.6-0.3-1.2-0.5-1.8c-0.2-0.5-1.1-1.6-1.7-2.2c-0.2-0.3-0.5-0.5-0.6-0.7 c-1-1.2-1.2-1.2-2.6-1.3l-0.3,0c-0.8-0.1-0.8,0-1.4,0.3l-0.1,0.1c-0.2,0.1-0.5,0.2-0.8,0.4c-0.3,0.1-1,0.4-1.1,0.5 c-0.3,0.3-0.5,0.8-0.8,1.4C24.7,25,24.5,25.9,24.5,26.8L24.5,26.8z"/><circle cx="21" cy="28" r="1" fill="#010101"/><circle cx="27" cy="28" r="1" fill="#010101"/><path fill="#010101" d="M28.6,5.1c0,0,0,0.1,0,0.1c1.4,0.2,2.7,0.5,4.2,1.3c0.5,0.3,0.9,0.4,1.4,0.5c0.5,0.1,1,0.3,1.4,0.6 c1.5,1.2,4.5,4.8,5.7,6.5c0.9,1.2,1.1,2.2,1.4,3.4c0.1,0.4,0.2,0.9,0.3,1.4c0.1,0.3,0.2,0.7,0.2,1c0.3,0.1,0.7,0.4,1.1,0.7 c-0.1-0.7-0.2-1.3-0.4-1.9c-0.1-0.5-0.2-0.9-0.3-1.4C43.3,16,43,15,42,13.6c-1.2-1.6-4.2-5.4-5.9-6.7c-0.6-0.4-1.1-0.6-1.7-0.8 C34,6,33.6,5.9,33.3,5.7c-1.9-1-3.6-1.4-5.4-1.5C28.3,4.3,28.6,4.6,28.6,5.1z"/><path fill="#010101" d="M4.8,19.4c0.1-1,0.2-1.9,0.6-2.7c0.2-0.5,0.6-1.3,0.9-1.8l0.2-0.3c0.1-0.1,0.1-0.3,0.2-0.5 c0.2-0.4,0.8-1.6,1.1-1.8c0.6-0.3,0.8-0.5,1.1-0.9C9,11.2,9.1,11.1,9.3,11l0.5-0.6c0.8-0.9,1.1-1.3,2.5-2c0.6-0.3,1-0.6,1.5-0.9 c0.3-0.2,0.6-0.4,1-0.7c0.3-0.2,1.1-0.4,1.6-0.6C16.8,6.1,17.1,6,17.3,6c0.4-0.1,0.6-0.2,0.8-0.2c0.2,0,0.5,0,1-0.1 c0.1,0,0.3-0.1,0.4-0.1c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.2,0.1-0.4,0.2-0.5c-0.2,0-0.5,0.1-0.7,0.1c-0.3,0.1-0.5,0.1-0.8,0.1 c-0.3,0-0.6,0-1.2,0.2c-0.2,0.1-0.5,0.2-0.8,0.3c-0.7,0.2-1.4,0.4-1.8,0.7c-0.4,0.2-0.7,0.5-1.1,0.7c-0.4,0.3-0.8,0.6-1.3,0.8 C10.3,8.3,10,8.7,9.1,9.7l-0.5,0.6c-0.2,0.2-0.3,0.3-0.4,0.4c-0.3,0.3-0.4,0.4-0.9,0.7c-0.5,0.3-1,1.2-1.5,2.2 c-0.1,0.2-0.2,0.3-0.2,0.4l-0.2,0.3c-0.3,0.6-0.8,1.4-1,1.9c-0.5,1.2-0.6,2.4-0.7,3.6C4,19.7,4.4,19.5,4.8,19.4z"/><path fill="#010101" d="M44.5,24.5c-0.1,0-0.1,0-0.2,0c-0.3-0.1-0.5-0.1-0.9-0.1c-0.3,0-0.7,0-1.1-0.1c-0.5-0.1-1-0.4-1.5-0.6 s-1-0.5-1.4-0.6c-0.4-0.1-0.8-0.1-1.3-0.1c-0.4,0-0.9,0-1.3-0.1c-4.4-1-7.9-1.6-12.2-1.6c-0.7,0-1.4-0.1-2.2-0.2 c-1-0.1-2-0.2-2.8-0.1c-0.9,0-1.8,0.2-2.6,0.3c-0.6,0.1-1.3,0.2-1.9,0.3l-0.4,0c-2.3,0.3-3.9,0.4-6.2,0.9c-0.4,0.1-0.9,0.2-1.4,0.2 c-0.7,0.1-1.3,0.2-1.8,0.3c-0.1,0-0.5,0.3-0.7,0.4c-0.4,0.3-0.7,0.5-1,0.5c-0.1,0-0.3,0-0.4-0.1C3.1,23.8,3,23.6,3,23.5l0-2.9 c-0.1-0.3,0-0.5,0.1-0.8c0.5-0.8,2.2-1.2,4.3-1.5c0.3,0,0.6-0.1,0.8-0.1c1.4-0.3,2.1-0.4,3.2-0.5c0.4,0,0.8-0.1,1.2-0.1l0.8-0.1 c0.5-0.1,0.9-0.1,1.6-0.2c1.1-0.1,2.3-0.1,3.4-0.2l1.1,0c1,0,3.5-0.1,4.6-0.1c0.4,0,1,0,1.6-0.1c1,0,2-0.1,2.6-0.1 c1.1,0,1.9,0.2,2.7,0.3c0.5,0.1,1.1,0.2,1.7,0.3l0.4,0c2.2,0.3,3,0.4,5.4,1c0.2,0,0.6,0.1,1.1,0.2c0.6,0.1,1.2,0.2,1.4,0.3 c0.3,0.1,0.6,0.1,0.9,0.2c0.8,0.1,1.4,0.2,2.8,1.3c0.1,0.1,0.2,0.2,0.2,0.4V24c0,0.2-0.1,0.3-0.2,0.4 C44.7,24.4,44.6,24.5,44.5,24.5z M20.1,19.9c0.8,0,1.6,0.1,2.4,0.2c0.8,0.1,1.5,0.1,2.1,0.1c4.4,0,8,0.6,12.5,1.6 c0.3,0.1,0.7,0.1,1.1,0.1c0.5,0,1,0.1,1.5,0.2c0.5,0.1,1.1,0.4,1.6,0.7c0.5,0.2,0.9,0.5,1.3,0.6c0.3,0.1,0.5,0.1,0.8,0.1 c0.2,0,0.3,0,0.5,0v-2.3c-1-0.8-1.5-0.8-2.2-0.9c-0.3,0-0.6-0.1-1-0.2c-0.2-0.1-0.8-0.2-1.4-0.3c-0.5-0.1-1-0.2-1.2-0.2 c-2.4-0.6-3.1-0.7-5.3-0.9l-0.4,0c-0.7-0.1-1.2-0.2-1.8-0.3c-0.8-0.1-1.6-0.3-2.6-0.3c-0.5,0-1.5,0-2.5,0.1c-0.7,0-1.3,0.1-1.7,0.1 c-1,0-3.5,0-4.5,0.1l-1.1,0c-1.1,0-2.2,0.1-3.3,0.2c-0.7,0.1-1.1,0.1-1.5,0.2l-0.8,0.1c-0.5,0.1-0.9,0.1-1.3,0.1 c-1.1,0.1-1.8,0.2-3.1,0.5c-0.2,0-0.5,0.1-0.8,0.1c-2.3,0.4-3.5,0.7-3.6,1c0,0.1,0,0.1,0,0.2l0,2.1c0,0,0,0,0,0 c0.4-0.3,0.7-0.5,1-0.6c0.5-0.1,1.2-0.2,1.9-0.3c0.5-0.1,1-0.1,1.4-0.2c2.3-0.5,3.9-0.6,6.3-0.9l0.4,0c0.6-0.1,1.2-0.2,1.9-0.3 c0.9-0.1,1.8-0.3,2.8-0.4C19.8,19.9,20,19.9,20.1,19.9z"/><path fill="#010101" d="M24.5,42c-2.8,0-3.4-1.2-3.5-1.3c-0.1-0.3,0-0.5,0.3-0.7c0.3-0.1,0.5,0,0.7,0.3l0,0c0,0,0.4,0.7,2.5,0.7 c1.9,0,2.7-0.4,2.8-0.4c0.2-0.1,0.5,0,0.7,0.2s0.1,0.5-0.2,0.7C27.7,41.5,26.7,42,24.5,42z"/><path fill="#010101" d="M29.1,5.1c0-0.8-0.6-1.4-1.4-1.5c0.2-0.3,0.4-0.6,0.4-1c0-0.4-0.2-0.8-0.5-1.1C27,1,26.1,1,25.5,1.5 c0-0.8-0.7-1.4-1.5-1.4c-0.5,0-0.9,0.2-1.2,0.6c-0.2,0.2-0.3,0.5-0.3,0.9C21.9,1,21,1,20.4,1.6c-0.3,0.3-0.5,0.7-0.5,1.1 c0,0.4,0.1,0.7,0.4,1c-0.8,0-1.4,0.7-1.4,1.5c0,0.8,0.6,1.4,1.4,1.5c-0.2,0.3-0.4,0.6-0.4,1c0,0.4,0.2,0.8,0.5,1.1 C20.7,8.9,21.1,9,21.5,9c0.4,0,0.7-0.1,1-0.4c0,0.8,0.7,1.4,1.5,1.4c0.8,0,1.5-0.6,1.5-1.4c0.6,0.5,1.5,0.5,2.1-0.1 c0.5-0.5,0.6-1.3,0.1-2c0,0,0,0,0,0C28.5,6.5,29.1,5.9,29.1,5.1z M26.5,2.1c0.1,0,0.3,0,0.4,0.2c0.1,0.1,0.1,0.2,0.1,0.3 S27,2.9,26.9,3c-0.1,0.1-0.8,0.7-1.4,1c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c0.4-0.8,0.8-1.7,0.9-1.8C26.3,2.2,26.4,2.1,26.5,2.1z M23.5,1.3c0.1-0.1,0.3-0.2,0.5-0.2c0.3,0,0.5,0.2,0.5,0.5c0,0,0,0.1,0,0.2c0.1,0.3,0.2,1.3-0.4,2.2c-0.6-1-0.6-1.8-0.7-2.2 c0-0.1,0-0.2,0-0.3C23.5,1.5,23.5,1.4,23.5,1.3z M21.1,2.3c0.2-0.2,0.5-0.2,0.7,0c0.1,0.1,0.7,1.1,1.2,1.9c-0.1,0-0.2,0-0.3-0.1 c-1-0.2-1.3-0.7-1.5-0.9C21.2,3.1,21.1,3,21.1,3c-0.1-0.1-0.1-0.2-0.1-0.3S21,2.4,21.1,2.3z M19.9,5.1c0-0.3,0.2-0.5,0.5-0.5 c0.2,0,1.3,0.3,2.5,0.6c-0.3,0.2-0.6,0.3-0.9,0.5c-0.5,0.1-0.9,0-1.2,0c-0.1,0-0.2,0-0.3,0C20.1,5.6,19.9,5.4,19.9,5.1z M21.1,7.9 c-0.1-0.1-0.1-0.2-0.1-0.3s0.1-0.3,0.1-0.3c0.1-0.1,0.6-0.3,1-0.5c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.2-0.1,0.3-0.1 c0,0.2-0.1,0.5-0.1,0.8l-0.7,0.7C21.6,8.1,21.3,8.1,21.1,7.9z M24,9.1c-0.3,0-0.5-0.2-0.5-0.5v-1c0,0,0-0.1,0-0.1 c0-0.9,0.2-1.4,0.4-1.7c0.3,0.7,0.5,1.4,0.6,1.7v1C24.5,8.8,24.3,9.1,24,9.1z M26.9,7.9c-0.2,0.2-0.6,0.2-0.8,0l-0.7-0.7 c-0.1-0.4-0.2-0.9-0.5-1.4c0.7,0.3,1.5,0.8,1.8,1.3C27,7.3,27.1,7.7,26.9,7.9z M27.6,5.6c-0.1,0-0.3,0-0.4,0.1 c-0.2,0.1-0.4,0.1-0.8-0.2c0,0,0,0-0.1,0c-0.2-0.2-0.5-0.3-0.7-0.4c0.1,0,0.2-0.1,0.3-0.1c0.2-0.1,0.4-0.2,0.5-0.3c0,0,0,0,0,0h1.1 c0.3,0,0.5,0.2,0.5,0.5S27.9,5.6,27.6,5.6z"/></g></svg>
					</div>
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
							<img
								src={icon}
								alt=""
								className={`w-20 ${
									index === 5 ||
									index === 7 ||
									index === 8
										? "bg-[#19efff]"
										: ""
								}`}
							/>
						);
					})}
				</div>
			</div>
			<div
				id="projects"
				className=" snap-center px-6 py-8 my-20 gap-[3.5rem] items-center flex flex-col"
			>
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
