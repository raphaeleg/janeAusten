/** @format */

import Link from "next/link";
import React from "react";
import { useGlobalContext } from './GlobalContext';

export const NavItem = ( { text, href, active } ) => {
	return (
		<Link legacyBehavior href={href == '/home' ? '/' : href}>
			<p
				className={`nav__item ${active ? "active" : ""}`}
			>
				{text}
			</p>
		</Link>
	);
};


const NavBar = () => {
	const { navActive, setNavActive, activeNavIdx, setActiveNavIdx, navigationRoutes } = useGlobalContext();

	return (
		<header>
			<nav className={`nav`}>
				<div
					onClick={() => setNavActive( !navActive )}
					className={`nav__menu-bar`}
				>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className={`${navActive ? "active" : ""} nav__menu-list`}>
					{navigationRoutes.map( ( singleRoute, id ) => (
						<div
							onClick={() => {
								setActiveNavIdx( id );
								setNavActive( false );
							}}
							key={singleRoute}
						>
							<NavItem active={activeNavIdx === id} text={singleRoute === 'people' ? 'beautiful people' : singleRoute} href={`/${singleRoute}`} />
						</div>
					) )}
				</div>
			</nav>
			<div className="progress-container">
				<div className="progress-bar" id="myBar"></div>
			</div>
		</header>
	);
};

export default NavBar;