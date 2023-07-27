import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <Link href="/" passHref>
                    <h2>Naasir&apos;s Dev Blog</h2>
                </Link>
            </div>
        </footer>
    );
}