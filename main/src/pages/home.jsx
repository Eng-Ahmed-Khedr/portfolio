import { Badge, Button, ButtonGroup } from "flowbite-react";
import { FaAngleDown, FaGithub, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";

export default function Home() {
    return (
        <div className="hero relative text-center h-screen bg-[#0A1226] flex justify-center items-center flex-col gap-15">
            <div className="intro relative mt-50">
                <Badge className="absolute -top-8 right-1/3 rounded-full px-5 py-1.5 !bg-[#0a1a39] !text-md !font-bold !text-[#4E9BF9] !border-2 !border-[#4E9BF9]">Frontend Developer</Badge>
                <h1 className="text-7xl font-bold text-white">
                    Hi, I'm <span className="text-[#4E9BF9]">Ahmed Khedr</span>
                </h1>
            </div>
            <p className="text-[#CAD5E2] text-2xl">
                I'm a frontend developer with experience in building <br />responsive and user-friendly interfaces.
            </p>
            <div className="flex gap-4">
                <Button className="!bg-[#2B7FFF] !rounded-xl !px-5 !py-8 !text-xl" >Get In Touch</Button>
                <Button className="!bg-[#1D293D] !rounded-xl !px-5 !py-8 !text-xl">View Projects</Button>
            </div>
            <ButtonGroup className="!flex !gap-5">
                <Button className="!bg-transparent !rounded-xl !border-none !px-2 !py-1 !text-xl !text-[#90A1B9] hover:!text-white transition-all duration-300 ease-in-out">
                    <FaGithub className="me-2 h-4 w-4" />
                </Button>
                <Button className="!bg-transparent !rounded-xl !border-none !px-2 !py-1 !text-xl !text-[#90A1B9] hover:!text-white transition-all duration-300 ease-in-out">
                    <FaLinkedinIn className="me-2 h-4 w-4" />
                </Button>
                <Button className="!bg-transparent !rounded-xl !border-none !px-2 !py-1 !text-xl !text-[#90A1B9] hover:!text-white transition-all duration-300 ease-in-out">
                    <FaRegEnvelope className="me-2 h-4 w-4" />
                </Button>
            </ButtonGroup>
            <FaAngleDown className="text-7xl mt-10 text-white transition-transform duration-300 animate-bounce" />
        </div>

    )
}   