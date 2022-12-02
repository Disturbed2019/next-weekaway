import React from 'react'
import Image from 'next/image'

const Gallery = () => {
	return (
		<div id={'gallery'} className={'max-w-[1140px] m-auto w-full px-4 py-16'}>
			<h2 className={'uppercase text-center text-gray-700 p-4'}>Gallery</h2>
			<div className={'grid sm:grid-cols-5 gap-5'}>
				<div className={'sm:col-span-3 col-span-2 row-span-2'}>
					<Image
						src={'https://images.unsplash.com/photo-1622779536320-bb5f5b501a06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'}
						alt={'image'}
						width={640}
						height={426}
						priority
						className={'w-full h-full object-cover'}
					/>
				</div>
				<div>
					<Image
						src={'https://images.unsplash.com/photo-1584132905271-512c958d674a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
						alt={'image'}
						width={640}
						height={426}
						priority
						className={'w-full h-full object-cover'}
					/>
				</div>
				<div>
					<Image
						src={'https://images.unsplash.com/photo-1583522843296-3e19341aecb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
						alt={'image'}
						width={640}
						height={426}
						priority
						className={'w-full h-full object-cover'}
					/>
				</div>
				<div>
					<Image
						src={'https://images.unsplash.com/photo-1584132869994-873f9363a562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
						alt={'image'}
						width={640}
						height={426}
						priority
						className={'w-full h-full object-cover'}
					/>
				</div>
				<div>
					<Image
						src={'https://images.unsplash.com/photo-1627063893746-c410caf117f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
						alt={'image'}
						width={640}
						height={426}
						priority
						className={'w-full h-full object-cover'}
					/>
				</div>
			</div>
			
		</div>
	)
}

export default Gallery