import Link from "next/link";
import Button from "./Button";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { getTransition, shutterDown } from "@/utils/motion";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="h-20 bg-black text-gray-400 flex items-center">
      <div className="wrapper flex justify-between items-center overflow-hidden">
        <motion.div
          variants={shutterDown()}
          initial="from"
          animate="to"
          transition={getTransition()}
        >
          <Link href="/" className="text-white font-semibold">
            Cordemy
          </Link>
        </motion.div>

        <div className="flex gap-5">
          <Link href="/" className="hover:text-white transition-color">
            Home
          </Link>
          <Link href="/courses" className="hover:text-white transition-color">
            Courses
          </Link>
          {session && (
            <Link href="/orders" className="hover:text-white transition-color">
              Orders
            </Link>
          )}
          <Link href="/about" className="hover:text-white transition-color">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition-color">
            Contact
          </Link>
        </div>

        <div>
          {!session ? (
            <Button
              href="/users/login"
              placeholder="Sign in"
              color="secondary"
            />
          ) : (
            <Button
              href="/users/profile"
              placeholder="Profile"
              color="secondary"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
