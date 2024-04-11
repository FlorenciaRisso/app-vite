import React from 'react';

function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <React.Fragment>
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span> Dashboard DigitalByte {getCurrentYear()}</span>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;