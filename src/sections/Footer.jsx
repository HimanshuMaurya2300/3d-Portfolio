
const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex items-center flex-wrap gap-5 justify-center lg:justify-between">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="https://github.com/HimanshuMaurya2300" target="_blank" rel="noreferrer" className="flex justify-center">
                        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/himanshu456/" target="_blank" rel="noreferrer" className="flex justify-center">
                        <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://x.com/Himansh087?t=cps57U0V9qvAeeRl8SmGWA&s=09" target="_blank" rel="noreferrer" className="flex justify-center">
                        <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.instagram.com/him.anshu080/profilecard/?igsh=b2Zrb3hxeWE3N2wz" target="_blank" rel="noreferrer" className="flex justify-center">
                        <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
                    </a>
                </div>
            </div>

            <p className="text-white-500">© 2024 Himanshu. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
