import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Turnstile } from '@marsidev/react-turnstile';
import type { TurnstileInstance } from '@marsidev/react-turnstile';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    const turnstileRef = useRef<TurnstileInstance | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!turnstileToken) {
            alert('Please complete the captcha verification.');
            return;
        }

        setFormStatus('loading');

        const formDataObj = new FormData(e.currentTarget);
        const data = Object.fromEntries(formDataObj.entries());
        data['cf-turnstile-response'] = turnstileToken;

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                turnstileRef.current?.reset();
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                setFormStatus('error');
                turnstileRef.current?.reset();
                setTimeout(() => setFormStatus('idle'), 5000);
            }
        } catch (err) {
            console.error('Form submission error:', err);
            setFormStatus('error');
            turnstileRef.current?.reset();
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };

    return (
        <section className="flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100" id="contact">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
            </div>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-2xl mb-16"
            >
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">{t('contact.badge')}</span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                    {t('contact.title1')} <span className="text-primary">{t('contact.title2')}</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    {t('contact.subtitle')}
                </p>
            </motion.div>

            {/* Contact Form Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-2xl bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/60 dark:border-slate-800/60 rounded-2xl shadow-2xl shadow-slate-200/40 dark:shadow-none p-8 md:p-12"
            >
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Honeypot Field to trap bots */}
                    <div style={{ display: 'none' }} aria-hidden="true">
                        <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" />
                    </div>

                    {formStatus === 'success' && (
                        <div className="p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl border border-green-200 dark:border-green-800 flex items-center gap-3">
                            <span className="material-symbols-outlined">check_circle</span>
                            <p>{t('contact.form.success') || 'Your message has been sent successfully!'}</p>
                        </div>
                    )}

                    {formStatus === 'error' && (
                        <div className="p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-xl border border-red-200 dark:border-red-800 flex items-center gap-3">
                            <span className="material-symbols-outlined">error</span>
                            <p>{t('contact.form.error') || 'Failed to send message. Please try again later.'}</p>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1" htmlFor="name">{t('contact.form.name')}</label>
                            <input required value={formData.name} onChange={handleInputChange} className="w-full h-14 px-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" id="name" name="name" placeholder={t('contact.form.namePlaceholder')} type="text" />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1" htmlFor="email">{t('contact.form.email')}</label>
                            <input required value={formData.email} onChange={handleInputChange} className="w-full h-14 px-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" id="email" name="email" placeholder={t('contact.form.emailPlaceholder')} type="email" />
                        </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1" htmlFor="subject">{t('contact.form.subject')}</label>
                        <div className="relative">
                            <select required value={formData.subject} onChange={handleInputChange} className="w-full h-14 pl-4 pr-10 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white appearance-none focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" id="subject" name="subject">
                                <option disabled value="">{t('contact.form.subjectPlaceholder')}</option>
                                <option value="web">{t('contact.form.options.web')}</option>
                                <option value="mobile">{t('contact.form.options.mobile')}</option>
                                <option value="cloud">{t('contact.form.options.cloud')}</option>
                                <option value="consulting">{t('contact.form.options.consulting')}</option>
                            </select>
                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                                <span className="material-symbols-outlined">expand_more</span>
                            </div>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1" htmlFor="message">{t('contact.form.message')}</label>
                        <textarea required value={formData.message} onChange={handleInputChange} className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none" id="message" name="message" placeholder={t('contact.form.messagePlaceholder')} rows={5}></textarea>
                    </div>

                    {/* Turnstile Widget */}
                    <div className="flex justify-center my-4 overflow-hidden rounded-xl">
                        <Turnstile
                            ref={turnstileRef}
                            siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'} // Testing key as fallback
                            onSuccess={(token) => setTurnstileToken(token)}
                            onError={() => setFormStatus('error')}
                            options={{ theme: 'auto' }}
                        />
                    </div>

                    {/* Submit */}
                    <button
                        disabled={formStatus === 'loading'}
                        className="w-full h-14 bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-white text-lg font-bold rounded-xl transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2 group"
                        type="submit"
                    >
                        {formStatus === 'loading' ? (
                            <>
                                <span className="material-symbols-outlined animate-spin">refresh</span>
                                {t('contact.form.sending') || 'Sending...'}
                            </>
                        ) : (
                            <>
                                {t('contact.form.submit')}
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                            </>
                        )}
                    </button>
                </form>
            </motion.div>

            {/* Secondary Contact Methods */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 text-slate-500 dark:text-slate-400"
            >
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">mail</span>
                    <span className="text-sm font-medium">{t('contact.methods.email')}</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <span className="text-sm font-medium">{t('contact.methods.location')}</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                    <span className="text-sm font-medium">{t('contact.methods.time')}</span>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactSection;
