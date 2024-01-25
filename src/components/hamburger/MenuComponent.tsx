import { useState } from "react";
import { HamburgerButton } from "./HamburgerButton";
import { Sidebar } from "./Sidebar";

export const MenuComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <HamburgerButton toggle={toggleSidebar} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
    </>
  )
}
