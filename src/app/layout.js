
// import App from "next/app";
import "./globals.css";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { MoonIcon, SearchIcon } from "lucide-react";
import { Theme } from "@radix-ui/themes";
import React from "react";

export const metadata = {
  title: 'next js project '
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Theme appearance="white"  >
          <header className="flex items-center justify-between w-full px-6 py-4 bg-[#0f172a] text-white mb-10  shadow-lg  ">
            {/* Left section: Logo + Nav */}
            <div className="flex items-center gap-12">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 rounded-xl p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-semibold">Base</span>
              </div>

              {/* Navigation */}
              <NavigationMenu.Root>
                <NavigationMenu.List className="flex gap-6">
                  <NavigationMenu.Item>
                    <NavigationMenu.Link className="text-sm hover:text-blue-400 transition">Home</NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link className="text-sm hover:text-blue-400 transition">About</NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link className="text-sm hover:text-blue-400 transition">Features</NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link className="text-sm hover:text-blue-400 transition">Pricing</NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="flex items-center gap-1 text-sm hover:text-blue-400 transition">
                      Pages <CaretDownIcon />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="absolute top-full mt-2 w-[200px] bg-white text-black shadow-md rounded-md p-4">
                      {/* Add dropdown links here */}
                      <ListItem title="Team">Meet the team</ListItem>
                      <ListItem title="Careers">Work with us</ListItem>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link className="text-sm hover:text-blue-400 transition">Support</NavigationMenu.Link>

                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Root>
            </div>

            {/* Right section: Icons + Auth */}
            <div className="flex items-center gap-4 bg-blue-600 px-6 py-2 rounded-full">
              <button className="bg-[#0f172a] p-2 rounded-full">
                <SearchIcon className="h-4 w-4 text-white" />
              </button>

              <button className="text-white text-sm font-medium">Sign In</button>
              <button className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                Sign Up
              </button>
            </div>
          </header>
          {children}
        </Theme>


      </body>
    </html>

  );
}
const ListItem = React.forwardRef(({ className, children, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={`block p-2 rounded-md hover:bg-gray-100 transition ${className || ""}`}
          ref={ref}
          {...props}
        >
          <div className="font-medium text-black">{title}</div>
          <p className="text-sm text-gray-600">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  );
});
ListItem.displayName = "ListItem";