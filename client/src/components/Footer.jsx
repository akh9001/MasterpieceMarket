import React from 'react';
import { SiInstagram } from "react-icons/si";
import { TbBrandYoutube } from "react-icons/tb";
// import { FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
	return (
		<footer className="sticky bottom-0 z-50 w-full flex justify-between items-center p-4 bg-black opacity-100 text-white">
			<p className="text-3xl text-slate-50 md:ml-20 mx-10">
				<strong>Rent</strong>Car
			</p>
			<div className="flex flex-row items-center md:mr-40 mx-10">
				<TbBrandYoutube className='m-2 w-5 h-6' />
				<FaXTwitter className='m-2' />
				<SiInstagram className='m-2' />
			</div>
		</footer>
	);
}

export default Footer;