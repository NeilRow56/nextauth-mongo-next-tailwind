import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Dashboard</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
			</Head>
			<header className="flex  justify-end pr-[15px]">
				<Header />
			</header>

			<main className="flex flex-col xl:flex-row items-center justify-center max-w-screen-lg mx-auto">
				<div className="flex mt-[255px]">
					<h1 className="text-2xl">Dashboard</h1>
				</div>
			</main>
		</div>
	);
}
