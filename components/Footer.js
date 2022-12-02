import React from 'react'
import {BsChatSquareDots} from "react-icons/bs";


const Footer = () => {
	return (
		<div className={'max-w-[1140px] w-full m-auto py-8 border-t-4'}>
			<div className={'flex justify-center items-center m-auto'}>
				<BsChatSquareDots
					size={30}
					className={'text-[var(--primary-dark)] mr-2'}
				/>
				<h2 className={'text-xl font-bold text-gray-700'}>Weekaway</h2>
			</div>
			
		</div>
	)
}

export default Footer