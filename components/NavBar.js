/** @format */

import { useRouter } from 'next/router';
import Link from 'next/link';

const navigationRoutes = ['home', 'people', 'fashion', 'homeware'];

export default function Navbar() {
	const router = useRouter();
	return (
		<nav className='nav_container'>
			{navigationRoutes.map((singleRoute) => {
				return (
					<NavigationLink
						key={singleRoute}
						href={`/${singleRoute}`}
						text={singleRoute === 'people' ? 'beautiful people' : singleRoute}
						router={router}
					/>
				);
			})}
		</nav>
	);
}

function NavigationLink({ href, text, router }) {
	const isActive = router.asPath === (href === '/home' ? '/' : href);
	return (
		<Link href={href === '/home' ? '/' : href}>
			<div className={`${isActive && 'navBarLinksActive'} navBarLinks`}>
				<div className={`${isActive && 'nav_item_active'} nav_item`}>
					{text}
				</div>
			</div>
		</Link>
	);
}
