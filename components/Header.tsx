"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HeaderMenu } from "@/StaticData/MenuRoutes";
import { AuthMenu } from "@/StaticData/MenuRoutes";
import Image from "next/image";
import Link from "next/link";
type Props = {
	showLogo ?:boolean
};

function Header({showLogo}: Props) {

	
	return (
		<nav className="bg-primary h-[3.5rem] shadow-md relative  top-0  w-full  text-white">
			<div className="flex items-center justify-between pl-1 pr-1 md:px-[2rem] md:py-[1rem]  w-full h-full sticky">
				<div className="h-full w-full flex items-center space-x-6">
					<FontAwesomeIcon
						icon={faBars}
						size="xl"
						fixedWidth
						className="cursor-pointer text-gray-200/70"
					/>
					{HeaderMenu.map((menu) => (
						<Link key={menu.id} className={"flex"} href={menu.path}>
							<p className="text-sm font-medium cursor-pointer hover:text-white/40">
								{menu.title}
							</p>
						</Link>
					))}
				</div>
				<Link className="w-full h-full flex justify-center items-center cursor-pointer" href="/">
					{
						showLogo && (
							<Image
							src="./logo-expanzo.svg"
							width={80}
							height={80}
							priority
							alt="Expanzo Logo"
						/>
						)
					}
				
				</Link>
				<div className="w-full h-full flex items-center justify-end space-x-8 ">
					{AuthMenu.map((auth) => (
						<div
							key={auth.id}
							className="flex items-center space-x-2 justify-center cursor-pointer hover:rounded-full  group">
							<div className="rounded-full bg-white/40 w-7 h-7  flex items-center justify-center hover:bg-white/10">
								<FontAwesomeIcon
									icon={auth.icon}
									className="rounded-full text-xs bg-transparent hover:bg-white/25"
								/>
							</div>
							<p className="text-xs hover:text-white/30 ">{auth.title} </p>
						</div>
					))}
				</div>
			</div>
		</nav>
	);
}

export default Header;
