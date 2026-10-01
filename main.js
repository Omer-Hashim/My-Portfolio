// Toggle logic Start
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});
// Toggle logic End

// Terminal Typing Strat
const terminalOutput = document.getElementById('terminal-output');

if (terminalOutput) {
    const lines = [
        '$ check_progress --stack=MERN',
        '> Frontend (React) ............ COMPLETE',
        '> Node.js ...................... COMPLETE',
        '> Express.js ................... COMPLETE',
        '> MongoDB ...................... IN_PROGRESS',
        '> Full-stack integration ....... PENDING'
    ];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        terminalOutput.textContent = lines.join('\n');
    } else {
        let lineIndex = 0, charIndex = 0;
        function typeNext() {
            if (lineIndex >= lines.length) return;
            const line = lines[lineIndex];
            terminalOutput.textContent += line[charIndex] ?? '';
            charIndex++;
            if (charIndex >= line.length) {
                terminalOutput.textContent += '\n';
                lineIndex++;
                charIndex = 0;
                setTimeout(typeNext, 250);
            } else {
                setTimeout(typeNext, 18);
            }
        }
        new IntersectionObserver((entries, obs) => {
            if (entries[0].isIntersecting) { typeNext(); obs.disconnect(); }
        }).observe(terminalOutput);
    }
}
// Terminal Typing End