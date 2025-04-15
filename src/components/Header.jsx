import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaGoodreadsG } from 'react-icons/fa';

export default function Header() {
	return (
		<div className="p-4 sm:p-6 md:p-8">
			<div className="flex justify-between items-baseline">
				<div className="text-xl sm:text-2xl text-gray-600">Asel Perera</div>
				<div className="flex items-baseline gap-4">
					<a
						href="/"
						className="text-base sm:text-lg text-gray-600 hover:text-gray-600"
					>
						About
					</a>
					<a
						href="https://www.linkedin.com/in/aselperera"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-gray-600 h-[14px]"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://www.github.com/aselperera"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-gray-600 h-[14px]"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.goodreads.com/user/show/89159989-asel-perera"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-gray-600 h-[14px]"
					>
						<FaGoodreadsG />
					</a>
				</div>
			</div>
		</div>
	);
}
