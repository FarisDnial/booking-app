import { Typography } from "@material-tailwind/react";

export default function FooterWithLogo() {
    return (
        <footer className="w-full bg-black p-8 mt-5">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black text-center md:justify-between">
                <img src="https://firebasestorage.googleapis.com/v0/b/twitter-app-8a21a.appspot.com/o/posts%2FLensify3.png?alt=media&token=b25e1b92-72ff-48e2-ae06-e01c124f0fe1" alt="logo-ct" className="h-12 w-auto" />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                            as="a"
                            href="#about-us"
                            color="white"
                            className="font-normal"
                        >
                            About Us
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#our-services"
                            color="white"
                            className="font-normal"
                        >
                            Our Services
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#our-team"
                            color="white"
                            className="font-normal"
                        >
                            Our Team
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="white"
                            className="font-normal"
                        >
                            Contact Us
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-light" />
            <Typography color="white" className="text-center font-normal">
                &copy; 2024 Lensify
            </Typography>
        </footer>
    );
}