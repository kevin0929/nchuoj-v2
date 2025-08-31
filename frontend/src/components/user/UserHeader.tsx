import Link from "next/link";

const UserHeader = () => {
    const navLinks = [
        { name: "Problems", href: "/problems" },
        { name: "Submissions", href: "/submissions" },
    ];

    return (
        <div className="px-4 py-4 bg-blue-900">
            <div className="flex space-x-4">
                <Link href="/" className="text-3xl font-bold text-white border-r border-r-white pr-8">
                    NCHUOJ
                </Link>
                <div className="flex space-x-8 pl-4 mt-1">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-xl font-semibold text-white">
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserHeader;