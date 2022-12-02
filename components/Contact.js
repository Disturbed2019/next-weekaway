import React from 'react'
import Image from 'next/image'

const Contact = () => {
	return (
		<div id={'contact'} className={'max-w-[1140px] m-auto w-full px-4 py-16'}>
			<h2 className={'text-center text-gray-700'}>Send us a message</h2>
			<p className={'text-center text-gray-700 py-2'}>We're starting by!</p>
			<div className={'grid md:grid-cols-2'}>
				<Image
					src={'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
					alt={'image'}
					width={640}
					height={960}
					priority
					className={'w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'}
				/>
				<form>
					<div className={'grid grid-cols-2'}>
						<input
							className={'border m-2 p-2'}
							type='text' placeholder={'First Name'} />
						<input
							className={'border m-2 p-2'}
							type='text' placeholder={'Last Name'} />
						<input
							className={'border m-2 p-2'}
							type='email' placeholder={'Email'} />
						<input
							className={'border m-2 p-2'}
							type='tel' placeholder={'Phone'} />
						<input
							className={'border col-span-2 m-2 p-2'}
							type='text' placeholder={'Address'} />
						<textarea
							className={'border col-span-2 m-2 p-2'}
							cols='30' rows='10'></textarea>
						<button className={'col-span-2 m-2'}>Submit</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Contact