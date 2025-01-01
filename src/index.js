import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { LuDot } from "react-icons/lu";

// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <div className="App h-screen w-screen bg-gradient-to-r from-sky-500 to-indigo-500 relative">
			<header className="mx-8 pt-10 flex justify-between sticky top-0 ">
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
				<section className="flex gap-4">
					{["Projects", "Works", "Info", "Contact"].map(
						(item, index) => {
							return (
								<div
									key={index}
									className="group inline-block"
								>
									<span className="text-lg font-bold relative">
										{item}
									</span>
									<div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></div>
								</div>
							);
						}
					)}
				</section>
			</header>

			<div className="py-20 text-center w-1/2 mx-auto">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu
				fugiat nulla pariatur.
			</div>
		</div> */}
		{/* <div className=" bg-gradient-to-r from-sky-500 to-indigo-500"> */}
		<header className="px-8 pt-10 flex justify-between sticky top-0 shadow-md bg-gradient-to-r from-sky-500 to-indigo-500 z-10">
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
			<section className="flex gap-4">
				{["Projects", "Works", "Info", "Contact"].map(
					(item, index) => {
						return (
							<div
								key={index}
								className="group inline-block"
							>
								<span className="text-lg font-bold relative">
									{item}
								</span>
								<div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></div>
							</div>
						);
					}
				)}
			</section>
		</header>
		<div class="h-screen overflow-y-auto snap-y snap-mandatory bg-gradient-to-r from-sky-500 to-indigo-500 ">
			<div class="h-screen flex items-center justify-center snap-center w-1/2 mx-auto">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu
				fugiat nulla pariatur.
			</div>

			<div class="h-screen grid grid-flow-row grid-cols-3 gap-10 snap-center">
				<div>
					<div className="border border-black h-72 w-72"></div>
					<div>Project 1</div>
				</div>
				<div>
					<div className="border border-black h-72 w-72"></div>
					<div>Project 2</div>
				</div>
				<div>
					<div className="border border-black h-72 w-72"></div>
					<div>Project 3</div>
				</div>
				<div>
					<div className="border border-black h-72 w-72"></div>
					<div>Project 4</div>
				</div>
			</div>

			<div class="h-screen flex items-center justify-center snap-center">
				<h1 class="text-4xl text-white">Section 3</h1>
			</div>

			<div class="h-screen items-center snap-center px-8 py-4 flex flex-col justify-end bg-gradient-to-r from-sky-500 to-indigo-500">
				<div>made by Aditya Tomar</div>
				<div className="flex justify-center gap-4">
					<div className="flex items-center">
						<LuDot />
						<a href="/">LinkedIn</a>
					</div>
					<div className="flex items-center">
						<LuDot />
						<a href="/">Github</a>
					</div>
					<div className="flex items-center">
						<LuDot />
						<a href="/">Twitter</a>
					</div>
				</div>{" "}
			</div>
		</div>
		<footer className=""></footer>
		{/* </div> */}
	</React.StrictMode>
);
