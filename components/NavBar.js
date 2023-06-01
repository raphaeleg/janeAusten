/** @format */

import { useRouter } from 'next/router';
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from './GlobalContext';

export const NavItem = ( { text, href, active } ) => {
	return (
		<Link href={href == '/home' ? '/' : href}>
			<a
				className={`nav__item ${active ? "active" : ""}`}
			>
				{text}
			</a>
		</Link>
	);
};


const NavBar = () => {
	const { navActive, setNavActive, activeIdx, setActiveIdx, navigationRoutes } = useGlobalContext();
	const router = useRouter();

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
								setActiveIdx( id );
								setNavActive( false );
							}}
							key={singleRoute}
						>
							<NavItem active={activeIdx === id} text={singleRoute === 'people' ? 'beautiful people' : singleRoute} href={`/${singleRoute}`} />
						</div>
					) )}
				</div>
			</nav>
			<div class="progress-container">
				<div class="progress-bar" id="myBar"></div>
			</div>
		</header>
	);
};

export default NavBar;