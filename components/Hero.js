import React from 'react'
import Image from 'next/image'

const Hero = () => {
	return (
		<div className={'relative w-full h-[90vh]'}>
			<Image
				src={'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'}
				alt={'image'}
				priority={true}
				fill
				className={'object-cover w-full h-full'}
			/>
			
			<div className={'max-w-[1140px] mx-auto'}>
				<div className={'absolute top-[40%] md:-[50%] w-full  max-w-[600px] flex flex-col text-white p-4 bg-gray-700/50'}>
					<h1 className={'font-bold text-4xl'}>Find Your Special Trip</h1>
					<h2 className={'text-4xl py-4 italic'}>With Weekaway</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eos et exercitationem explicabo fugit
						hic incidunt placeat provident reprehenderit tempore, ullam vero? Architecto eos, fugiat. Dolorem fuga nemo
						nulla provident?
					</p>
				</div>
			</div>
		</div>
	)
}

export default Hero