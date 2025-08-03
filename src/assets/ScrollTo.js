const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        const navbarHeight = 64; // Approximate height of your fixed navigation bar
        const scrollPosition = section.offsetTop - navbarHeight;
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
};

export default scrollToSection;