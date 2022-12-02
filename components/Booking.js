import React from 'react'

const Booking = () => {
	return (
		<div id={'deals'} className={'max-w-[1140px] m-auto w-full p-4'}>
			<form action='#' className={'lg:flex lg:justify-between w-full items-center '}>
				<div className={'flex flex-col my-2 py-2'}>
					<label htmlFor='destination'>Destination</label>
					<select name='destination' id='destination' className={'lg:w-[300px] md:w-full border rounded-md p-2'}>
						<option value='Grand Antiqua'>Grand Antiqua</option>
						<option value='Key West'>Key West</option>
						<option value='Maldives'>Maldives</option>
						<option value='Cozumel'>Cozumel</option>
					</select>
				</div>
				<div className={'flex w-full'}>
					<div className={'flex flex-col w-full lg:max-w-[250px] my-2 py-2'}>
						<label htmlFor='date'>Check In</label>
						<input type='date' id={'date'} className={'border rounded-md p-2'} />
					</div>
					<div className={'flex flex-col w-full lg:max-w-[250px] my-2 py-2'}>
						<label htmlFor='date'>Check Out</label>
						<input type='date' id={'date'} className={'border rounded-md p-2'} />
					</div>
				</div>
				<div className={'flex flex-col my-2 p-2 w-full'}>
					<label htmlFor=''>Search</label>
					<button className={'w-full'}>Rates & Availabilities</button>
				</div>
			</form>
		</div>
	)
}

export default Booking