/** @format */

import Link from "next/link";
import React, {useEffect} from "react";
import { useGlobalContext } from './GlobalContext';

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
							className={`${singleRoute==='home' ? "nav_home" : ""}`}
						>
							<Link legacyBehavior href={singleRoute == 'home' ? '/' : `/${singleRoute}`}>
								<p
									className={`nav__item ${activeNavIdx == id && "active"}`}
								>
									{singleRoute}
								</p>
							</Link>
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