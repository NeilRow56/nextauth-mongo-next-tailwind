import HeaderLink from './HeaderLink';
import Link from 'next/link';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const spring = {
	type: 'spring',
	stiffness: 700,
	damping: 30,
};

function Header() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme, theme } = useTheme();

	// After mounting, we have access to the theme
	useEffect(() => setMounted(true), []);

	return (
		<header className="sticky top-0 z-40 bg-white dark:bg-[#1D2226] flex items-center justify-around py-1.5 px-3 focus-within:shadow-lg">
			{/* Left */}

			{/* Right */}

			<div className="flex  items-center  space-x-6">
				<Link href="/home">
					<a>
						<HeaderLink
							Icon={HomeRoundedIcon}
							text="Home"
							feed
							active
						/>
					</a>
				</Link>
				<HeaderLink Icon={LoginIcon} text="Login" />
				<HeaderLink Icon={LogoutIcon} text="Logout" />

				<HeaderLink Icon={Avatar} text="Me" />
				<HeaderLink Icon={AppsOutlinedIcon} text="Work" feed hidden />

				{/* Dark mode toggle */}
				{mounted && (
					<div
						className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${
							resolvedTheme === 'dark'
								? 'justify-end'
								: 'justify-start'
						}`}
						onClick={() =>
							setTheme(
								resolvedTheme === 'dark' ? 'light' : 'dark'
							)
						}
					>
						<span className="absolute left-0">🌜</span>
						<motion.div
							className="w-5 h-5 bg-white rounded-full z-40"
							layout
							transition={spring}
						/>

						<span className="absolute right-0.5">🌞</span>
					</div>
				)}
			</div>
		</header>
	);
}

export default Header;
