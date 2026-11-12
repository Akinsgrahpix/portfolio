
import React, { useState } from 'react';
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
  AtSign,
  Loader2,
} from 'lucide-react';

const Contact = () => {
  const initialForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const updateForm = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status) setStatus('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus('');

    const recipient = 'akinsgraphix1@gmail.com';
    const subject = formData.subject.trim() || `Portfolio inquiry from ${formData.name}`;

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      '',
      'Message:',
      formData.message,
    ].join('\n');

    const mailtoLink =
      `mailto:${recipient}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailtoLink;

      setStatus(
        'Your email app should open with your message prepared. Review it and press Send to deliver it.'
      );
    } catch {
      setStatus(
        'Unable to open your email app. Please email akinsgraphix1@gmail.com directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/[0.04] ' +
    'px-4 py-3.5 text-sm text-white placeholder:text-gray-500 ' +
    'outline-none transition-all duration-300 ' +
    'focus:border-orange-500/70 focus:bg-white/[0.07] ' +
    'focus:ring-2 focus:ring-orange-500/20';

  const contactItems = [
    {
      icon: Mail,
      label: 'Email me',
      value: 'akinsgraphix1@gmail.com',
      href: 'mailto:akinsgraphix1@gmail.com',
    },
    {
      icon: AtSign,
      label: 'Follow my work',
      value: '@akins_graphix1',
      href: 'https://www.instagram.com/akins_graphix1/',
    },
    {
      icon: MapPin,
      label: 'Based in',
      value: 'Ibadan, Oyo State, Nigeria',
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 md:py-32"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-orange-500/[0.08] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-orange-600/[0.07] blur-[140px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
            <Sparkles size={14} />
            Let's work together
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Have a project
            <br />
            in mind?{' '}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">
              Let's talk.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Have an idea that needs great design? Let's turn your vision into
            something meaningful, memorable, and visually outstanding.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Left: Contact information */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0c0c] p-7 sm:p-9">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-orange-500/10"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
              Contact information
            </p>

            <h3 className="mt-5 text-2xl font-bold sm:text-3xl">
              Let's create something exceptional.
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-gray-400">
              Whether you need a brand identity, promotional graphics, or a
              fresh creative direction, I'm ready to hear about your project.
            </p>

            <div className="mt-10 space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;

                const content = (
                  <>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/[0.08] text-orange-400 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-black">
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="mt-1 break-words text-sm font-medium text-gray-200">
                        {item.value}
                      </p>
                    </div>

                    {item.href && (
                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-gray-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-400"
                      />
                    )}
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('https://') ? '_blank' : undefined}
                    rel={
                      item.href.startsWith('https://')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-white/[0.08] hover:bg-white/[0.03]"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl p-3"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="my-8 border-t border-white/[0.08]" />

            <div className="mt-auto rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.04] p-5">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>

                <span className="text-sm font-semibold text-emerald-300">
                  Open to project inquiries
                </span>
              </div>

              <p className="mt-3 text-xs leading-6 text-gray-400">
                Tell me what you're building, your goals, and your timeline.
                Let's explore the right creative solution.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#0c0c0c] p-6 sm:p-9">
            <div className="mb-8">
              <h3 className="text-xl font-bold sm:text-2xl">
                Send me a message
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Fill in the details below to get the conversation started.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Full name <span className="text-orange-400">*</span>
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="John Doe"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={updateForm}
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email address <span className="text-orange-400">*</span>
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                      maxLength={254}
                      value={formData.email}
                      onChange={updateForm}
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Phone number
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+234 ..."
                      maxLength={30}
                      value={formData.phone}
                      onChange={updateForm}
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Subject
                  </label>

                  <div className="relative">
                    <MessageSquare
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="Project inquiry"
                      maxLength={150}
                      value={formData.subject}
                      onChange={updateForm}
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your message <span className="text-orange-400">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  required
                  minLength={10}
                  maxLength={5000}
                  placeholder="Tell me about your project, ideas, budget, or what you have in mind..."
                  value={formData.message}
                  onChange={updateForm}
                  className={`${inputClass} resize-y`}
                />

                <p className="mt-2 text-right text-xs text-gray-600">
                  {formData.message.length}/5000 characters
                </p>
              </div>

              {status && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-3 rounded-xl border border-orange-500/20 bg-orange-500/[0.06] p-4 text-sm leading-6 text-gray-300"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-orange-400"
                  />
                  <p>{status}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-black transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_35px_rgba(249,115,22,0.2)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={19} className="animate-spin" />
                    Preparing message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </>
                )}
              </button>

              <p className="flex items-center justify-center gap-2 text-center text-xs text-gray-600">
                <Clock size={14} />
                Let's turn your idea into something great.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600">
            Have a great idea?{' '}
            <a
              href="mailto:akinsgraphix1@gmail.com"
              className="font-medium text-orange-400 transition-colors hover:text-orange-300"
            >
              Let's make it happen.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
