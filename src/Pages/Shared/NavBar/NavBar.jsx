import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import userDefaultPictur from "../../../assets/user.png";

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:justify-center">
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center text-[#706F6F] text-lg">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-[#706F6F] text-lg"
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1  text-[#706F6F] text-lg font-normal"
      >
        <a href="#" className="flex items-center">
          Career
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="hidden lg:flex items-center">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            {" "}
          </Typography>
        </div>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center">
          {" "}
          <img
            src={userDefaultPictur}
            alt="Profile"
            className="h-6 w-6 rounded-full mr-2"
          />
          <Button className="hidden md:block" variant="gradient" size="sm">
            <span>Login</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-2 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Login</span>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
