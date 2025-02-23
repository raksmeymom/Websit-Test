import { Button, Navbar } from "flowbite-react";

export function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src="logo.jpg" className="mr-3 h-6 sm:h-9" alt="#" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">E_Learning</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <a href="/login" className="mt-6 inline-block px-6 py-3 text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700 transition">
        Get started
      </a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/home" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/service">Services</Navbar.Link>
        <Navbar.Link href="/pricing">Pricing</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
        {/* <Navbar.Link href="/getstart">Login</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
