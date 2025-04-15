export default function Homepage() {
	return (
		<div className="min-h-screen flex flex-col">
			<div className="flex flex-col md:flex-row w-full">
				<div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4">
					<img
						src="profile.jpeg"
						alt="Asel Perera"
						className="w-full max-w-md h-auto object-cover rounded-lg"
					></img>
					<p className="text-sm text-gray-600 mt-2 italic">
						Me, at the Nine Arches Bridge in Ella, Sri Lanka
					</p>
				</div>
				<div className="w-full md:w-1/2 flex justify-center items-center p-4 text-center md:text-left">
					<p>
						Hello, reader! My name is Asel, I'm a software engineer from London.
					</p>
				</div>
			</div>
		</div>
	);
}
