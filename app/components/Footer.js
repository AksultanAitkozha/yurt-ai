const Footer = () => (
    <div className="bg-white text-black p-8 md:p-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Inter' }}>Yurt.ai</h3>
                <p style={{ fontFamily: 'Inter' }}>Made with ❤️ in Kazakhstan</p>
            </div>
            <a
                href="https://www.linkedin.com/your-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-4 md:mt-0"
                style={{ fontFamily: 'Inter' }}
            >
                Contact me on Linkedin
            </a>
        </div>
    </div>
);

export default Footer;

  