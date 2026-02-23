import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value);
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                    <img src="/h-logo.png" alt="Habaka Logo" className="h-8 w-auto object-contain drop-shadow-sm" />
                    <span className="text-2xl font-black tracking-tight text-slate-800">Habaka</span>
                </div>

                <div className="pt-8 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                    <p>{t('footer.rights', { year: currentYear })}</p>
                    <div className="flex gap-8 items-center">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> {t('footer.status')}
                        </span>
                        <select
                            className="bg-transparent border border-slate-300 rounded px-2 py-1 text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            onChange={changeLanguage}
                            value={i18n.language}
                        >
                            <option value="en">English (US)</option>
                            <option value="fr">Français</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
}
