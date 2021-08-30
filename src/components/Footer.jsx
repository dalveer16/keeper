import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright © {year} Dalveer Singh</p>
        </footer>
    );
}

export default Footer;