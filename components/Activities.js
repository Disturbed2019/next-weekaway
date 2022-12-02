import React from 'react'
import Image from 'next/image'
import blur from '../public/blur.png'

const Activities = () => {
	return (
		<div className={'max-w-[1140px] m-auto w-full md:flex mt-[-75px]'}>
			<div className={'relative p-4 '}>
				<h3 className={'absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold'}>Resorts</h3>
				<Image
					src={'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
					alt={'image'}
					width={640}
					height={426}
					priority
					className={'w-full h-full object-cover relative border-4 border-white shadow-lg'}
				/>
			</div>
			<div className={'relative p-4 '}>
				<h3 className={'absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold'}>Resorts</h3>
				<Image
					src={'https://images.unsplash.com/photo-1511316695145-4992006ffddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'}
					alt={'image'}
					width={640}
					height={426}
					priority
					className={'w-full h-full object-cover relative border-4 border-white shadow-lg'}
				/>
			</div>
			<div className={'relative p-4 '}>
				<h3 className={'absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold'}>Resorts</h3>
				<Image
					src={'https://images.unsplash.com/photo-1586508577428-120d6b072945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80'}
					alt={'image'}
					width={640}
					height={426}
					priority
					className={'w-full h-full object-cover relative border-4 border-white shadow-lg'}
					as={'image'}
				/>
			</div>
		
		</div>
	)
}

export default Activities