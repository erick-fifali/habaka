import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';
import './index.css';

function App() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <main className="relative pt-32 overflow-hidden hero-gradient pb-40">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto px-6 text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t('hero.badge')}
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8 max-w-4xl mx-auto text-slate-800">
            {t('hero.title1')} <br />
            <span className="text-primary italic">{t('hero.title2')}</span> {t('hero.title3')}
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-12 text-slate-500">
            {t('hero.subtitle')}
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-primary text-white text-base font-bold rounded-xl hover:translate-y-[-2px] hover:shadow-xl hover:shadow-primary/30 transition-all">
              {t('hero.cta')}
            </button>
          </motion.div>
        </motion.div>
      </main>

      {/* Section 1: Custom Software Solutions */}
      <section className="py-24 px-6 relative" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <span className="material-symbols-outlined text-sm">code</span> {t('services.software.badge')}
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-6">
                {t('services.software.title1')} <br /><span className="text-primary">{t('services.software.title2')}</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                {t('services.software.subtitle')}
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <motion.div variants={itemVariants} className="p-6 rounded-xl border border-slate-100 bg-white hover:border-primary/30 shadow-sm transition-all group">
                <span className="material-symbols-outlined text-primary text-3xl mb-4 block group-hover:scale-110 transition-transform">desktop_windows</span>
                <h3 className="font-bold text-lg mb-1">{t('services.software.showcase.title')}</h3>
                <p className="text-sm text-slate-500">{t('services.software.showcase.desc')}</p>
              </motion.div>
              <motion.div variants={itemVariants} className="p-6 rounded-xl border border-slate-100 bg-white hover:border-primary/30 shadow-sm transition-all group">
                <span className="material-symbols-outlined text-primary text-3xl mb-4 block group-hover:scale-110 transition-transform">shopping_cart</span>
                <h3 className="font-bold text-lg mb-1">{t('services.software.ecommerce.title')}</h3>
                <p className="text-sm text-slate-500">{t('services.software.ecommerce.desc')}</p>
              </motion.div>
              <motion.div variants={itemVariants} className="p-6 rounded-xl border border-slate-100 bg-white hover:border-primary/30 shadow-sm transition-all group">
                <span className="material-symbols-outlined text-primary text-3xl mb-4 block group-hover:scale-110 transition-transform">article</span>
                <h3 className="font-bold text-lg mb-1">{t('services.software.blogs.title')}</h3>
                <p className="text-sm text-slate-500">{t('services.software.blogs.desc')}</p>
              </motion.div>
              <motion.div variants={itemVariants} className="p-6 rounded-xl border border-slate-100 bg-white hover:border-primary/30 shadow-sm transition-all group">
                <span className="material-symbols-outlined text-primary text-3xl mb-4 block group-hover:scale-110 transition-transform">photo_library</span>
                <h3 className="font-bold text-lg mb-1">{t('services.software.portfolios.title')}</h3>
                <p className="text-sm text-slate-500">{t('services.software.portfolios.desc')}</p>
              </motion.div>
              <motion.div variants={itemVariants} className="p-6 rounded-xl border border-slate-100 bg-white hover:border-primary/30 shadow-sm transition-all group sm:col-span-2 flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl group-hover:rotate-45 transition-transform">autorenew</span>
                <div>
                  <h3 className="font-bold text-lg">{t('services.software.redesign.title')}</h3>
                  <p className="text-sm text-slate-500">{t('services.software.redesign.desc')}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Maintenance and Continuous Support */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="material-symbols-outlined text-sm">handshake</span> {t('services.maintenance.badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              {t('services.maintenance.title1')} <br /><span className="text-primary">{t('services.maintenance.title2')}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              {t('services.maintenance.subtitle')}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">system_update</span>
              </div>
              <h4 className="font-bold text-xl mb-3">{t('services.maintenance.updates.title')}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{t('services.maintenance.updates.desc')}</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <h4 className="font-bold text-xl mb-3">{t('services.maintenance.support.title')}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{t('services.maintenance.support.desc')}</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <h4 className="font-bold text-xl mb-3">{t('services.maintenance.reports.title')}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{t('services.maintenance.reports.desc')}</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h4 className="font-bold text-xl mb-3">{t('services.maintenance.advice.title')}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{t('services.maintenance.advice.desc')}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Sovereign Hosting */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={containerVariants}
                className="relative z-10 grid grid-cols-1 gap-4"
              >
                <motion.div variants={itemVariants} className="flex items-center gap-4 p-5 rounded-xl bg-white border border-slate-100 shadow-sm">
                  <span className="material-symbols-outlined text-primary">public</span>
                  <span className="font-medium">{t('services.hosting.features.f1')}</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-4 p-5 rounded-xl bg-white border border-slate-100 shadow-sm ml-4 md:ml-8">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                  <span className="font-medium">{t('services.hosting.features.f2')}</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-4 p-5 rounded-xl bg-white border border-slate-100 shadow-sm ml-8 md:ml-16">
                  <span className="material-symbols-outlined text-primary">share</span>
                  <span className="font-medium">{t('services.hosting.features.f3')}</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-4 p-5 rounded-xl bg-white border border-slate-100 shadow-sm ml-4 md:ml-8">
                  <span className="material-symbols-outlined text-primary">backup</span>
                  <span className="font-medium">{t('services.hosting.features.f4')}</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-4 p-5 rounded-xl bg-white border border-slate-100 shadow-sm">
                  <span className="material-symbols-outlined text-primary">near_me</span>
                  <span className="font-medium">{t('services.hosting.features.f5')}</span>
                </motion.div>
              </motion.div>
              {/* Abstract Graphic Shape */}
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <span className="material-symbols-outlined text-sm">security</span> {t('services.hosting.badge')}
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                {t('services.hosting.title1')} <br /><span className="text-primary">{t('services.hosting.title2')}</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('services.hosting.subtitle')}
              </p>
              <button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all group shadow-xl">
                {t('services.hosting.cta')}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 relative" id="why-us">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16 text-center mx-auto"
          >
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-3">{t('whyUs.badge')}</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">{t('whyUs.title')}</h3>
            <p className="text-slate-500 mt-6 text-lg">{t('whyUs.subtitle')}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Simplicity */}
            <motion.div variants={itemVariants} className="group flex flex-col p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="size-14 rounded-lg bg-gradient-to-br from-primary to-[#60a5fa] flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-3xl">bolt</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{t('whyUs.simplicity.title')}</h4>
              <p className="text-slate-500 leading-relaxed">{t('whyUs.simplicity.desc')}</p>
            </motion.div>

            {/* Tailored Solution */}
            <motion.div variants={itemVariants} className="group flex flex-col p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="size-14 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa] flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-500/20">
                <span className="material-symbols-outlined text-3xl">fingerprint</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{t('whyUs.tailored.title')}</h4>
              <p className="text-slate-500 leading-relaxed">{t('whyUs.tailored.desc')}</p>
            </motion.div>

            {/* Good Support */}
            <motion.div variants={itemVariants} className="group flex flex-col p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="size-14 rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#22d3ee] flex items-center justify-center text-white mb-6 shadow-lg shadow-cyan-500/20">
                <span className="material-symbols-outlined text-3xl">headset_mic</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{t('whyUs.support.title')}</h4>
              <p className="text-slate-500 leading-relaxed">{t('whyUs.support.desc')}</p>
            </motion.div>

            {/* Stability */}
            <motion.div variants={itemVariants} className="group flex flex-col p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 lg:col-start-1">
              <div className="size-14 rounded-lg bg-gradient-to-br from-[#10b981] to-[#34d399] flex items-center justify-center text-white mb-6 shadow-lg shadow-emerald-500/20">
                <span className="material-symbols-outlined text-3xl">shield</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{t('whyUs.stability.title')}</h4>
              <p className="text-slate-500 leading-relaxed">{t('whyUs.stability.desc')}</p>
            </motion.div>

            {/* Responsible Choice */}
            <motion.div variants={itemVariants} className="group flex flex-col p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 md:col-span-2 lg:col-span-2">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="shrink-0 size-14 rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                  <span className="material-symbols-outlined text-3xl">eco</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900">{t('whyUs.responsible.title')}</h4>
                  <p className="text-slate-500 leading-relaxed">{t('whyUs.responsible.desc')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 p-8 md:p-12 rounded-3xl bg-primary/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <h5 className="text-2xl font-bold mb-2">{t('whyUs.ctaBox.title')}</h5>
              <p className="text-slate-400">{t('whyUs.ctaBox.subtitle')}</p>
            </div>
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all whitespace-nowrap shadow-lg shadow-primary/20 hover:scale-[1.02]">
              {t('whyUs.ctaBox.button')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
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
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1" htmlFor="name">{t('contact.form.name')}</label>
                <input className="w-full h-14 px-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" id="name" name="name" placeholder={t('contact.form.namePlaceholder')} type="text" />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1" htmlFor="email">{t('contact.form.email')}</label>
                <input className="w-full h-14 px-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" id="email" name="email" placeholder={t('contact.form.emailPlaceholder')} type="email" />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1" htmlFor="subject">{t('contact.form.subject')}</label>
              <div className="relative">
                <select defaultValue="" className="w-full h-14 pl-4 pr-10 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white appearance-none focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" id="subject" name="subject">
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
              <textarea className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none" id="message" name="message" placeholder={t('contact.form.messagePlaceholder')} rows={5}></textarea>
            </div>

            {/* Submit */}
            <button className="w-full h-14 bg-primary hover:bg-primary/90 text-white text-lg font-bold rounded-xl transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2 group" type="submit">
              {t('contact.form.submit')}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
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

      <Footer />
    </>
  );
}

export default App;
