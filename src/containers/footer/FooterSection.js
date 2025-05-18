import "./FooterSection.scss";


const FooterSection = ({isDark}) => {
    return (
        <div className={isDark ? "dark-mode footer" : "footer"}>
            Codesaur {new Date().getFullYear()}
        </div>
    )
};

export default FooterSection;