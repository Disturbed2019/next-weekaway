import React, { useState } from 'react'
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaTwitter, FaBars } from 'react-icons/fa'
import Link from 'next/link'


const NavBar = () => {
	const [nav, setNav] = useState(false)
	
	const handleNav = () => {
		setNav(!nav)
	}
	
	
	return (
		<div className={'w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'}>
			<ul className={'hidden sm:flex px-4 '}>
				<li>
					<Link href={'/'}>home</Link>
				</li>
				<li>
					<Link href={'#gallery'}>
						Gallery
					</Link>
				</li>
				<li>
					<Link href={'#deals'}>Deals</Link>
				</li>
				<li>
					<Link href={'#contact'}>Contact</Link>
				</li>
			</ul>
			<div className={'flex justify-between'}>
				<FaFacebookF
					className={'mx-4'}
				/>
				<FaTwitter
					className={'mx-4'}
				/>
				<FaGooglePlusG
					className={'mx-4'}
				/>
				<FaInstagram
					className={'mx-4'}
				/>
			</div>
			
			{/*Burger*/}
			<div className={'sm:hidden z-10'} onClick={handleNav}>
				<FaBars
					size={20}
					className={'mr-4 cursor-pointer'}
					
				/>
			</div>
			{/*Mobile Menu*/}
			<div
				onClick={handleNav}
				className={nav
				? 'w-full overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen bg-black/90 px-4 py-7 flex flex-col'
			: 'absolute top-0 h-screen left-[-100%] easy-in duration-500'
			}>
				<ul className={'w-full h-full text-center pt-12'}>
					<li className={'text-2xl py-8'}>
						<Link href={'/'}>home</Link>
					</li>
					<li className={'text-2xl py-8'}>
						<Link href={'#gallery'}>Gallery</Link>
					</li>
					<li className={'text-2xl py-8'}>
						<Link href={'#deals'}>Deals</Link>
					</li>
					<li className={'text-2xl py-8'}>
						<Link href={'#contact'}>Contact</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default NavBar