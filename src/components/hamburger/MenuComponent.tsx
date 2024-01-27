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
      <HamburgerButton isOpen={isOpen} toggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} />
    </>
  )
}
