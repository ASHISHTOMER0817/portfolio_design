import React, { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// Add your form submission logic here
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<div className="bg-black text-white min-h-screen flex items-center justify-center">
			<form
				className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md"
				onSubmit={handleSubmit}
			>
				<h2 className="text-2xl font-bold mb-6 text-center">
					Get in Touch
				</h2>

				<div className="mb-4">
					<label
						htmlFor="name"
						className="block text-sm font-medium mb-1"
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
						required
					/>
				</div>

				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium mb-1"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
						required
					/>
				</div>

				<div className="mb-4">
					<label
						htmlFor="message"
						className="block text-sm font-medium mb-1"
					>
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
						rows="4"
						required
					></textarea>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
