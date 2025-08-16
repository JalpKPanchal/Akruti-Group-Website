import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import NavbarNew from './NavbarNew';

export default function PageLayout({ children }) {
	return (
		<>
			<NavbarNew />
			<main className="pt-16 md:pt-20 font-times">
				{children}
			</main>
			<Footer />
		</>
	);
}
