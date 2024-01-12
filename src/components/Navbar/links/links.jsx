"use client"
import { useState } from "react";


const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog"
    },
];

const Links = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="m-6">
            <ul className="flex space-x-8">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.path}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Links;
