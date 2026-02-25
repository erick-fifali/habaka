import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t } = useTranslation();
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.on('change', (latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    const navBackground = useTransform(
        scrollY,
        [0, 50],
        ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']
    );

    const navBorder = useTransform(
        scrollY,
        [0, 50],
        ['rgba(241, 245, 249, 0)', 'rgba(241, 245, 249, 1)']
    );

    return (
        <motion.nav
            style={{ background: navBackground, borderColor: navBorder }}
            className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 ${isScrolled ? 'glass-nav backdrop-blur-md' : ''}`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center">
                        <img src="/h-logo.png" alt="Habaka Logo" className="h-15 w-auto object-contain drop-shadow-lg" />
                    </div>
                    {/* <span className="text-2xl font-black tracking-tight text-slate-800">Habaka</span> */}
                </div>
                <div className="hidden md:flex items-center gap-10">
                    <a className="text-sm font-medium hover:text-primary transition-colors text-slate-500" href="#services">{t('header.services')}</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors text-slate-500" href="#why-us">{t('header.whyUs')}</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors text-slate-500" href="#contact">{t('header.contact')}</a>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                        {t('header.getStarted')}
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
