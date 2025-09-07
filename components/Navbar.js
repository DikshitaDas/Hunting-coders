import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.mainNav}>
      <ul>
        {[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "About", path: "/about" },
          { name: "Contacts", path: "/contact" },
        ].map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={router.pathname === item.path ? styles.active : ""}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
