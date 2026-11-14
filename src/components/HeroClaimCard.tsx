import { useState, type FormEvent, type RefObject } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, MailCheck, RotateCcw } from 'lucide-react';
import {
  GIRL_HERO_IMAGE,
  SAMPLE_BUNDLES,
  type BundleId,
} from '../data/samples';
import { SampleCardImage } from './SampleCardImage';

interface HeroClaimCardProps {
  selectedBundleId: BundleId;
  onSelectBundle: (id: BundleId) => void;
  emailInputRef: RefObject<HTMLInputElement | null>;
}

const DOMAIN_TYPOS: Record<string, string> = {
  'gmial.com': 'gmail.com',
  'gmal.com': 'gmail.com',
  'gamil.com': 'gmail.com',
  'gmail.co': 'gmail.com',
  'yaho.com': 'yahoo.com',
  'yahooo.com': 'yahoo.com',
  'hotmal.com': 'hotmail.com',
  'hotmial.com': 'hotmail.com',
  'outlok.com': 'outlook.com',
  'icloud.co': 'icloud.com',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const US_ZIP_REGEX = /^\d{5}$/;

export function HeroClaimCard({
  selectedBundleId,
  onSelectBundle,
  emailInputRef,
}: HeroClaimCardProps) {
  const [email, setEmail] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [usConfirmed, setUsConfirmed] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [suggestedEmail, setSuggestedEmail] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<{
    email: string;
    zip: string;
    bundleTitle: string;
    referenceCode: string;
  } | null>(null);

  const activeBundle =
    SAMPLE_BUNDLES.find((b) => b.id === selectedBundleId) ?? SAMPLE_BUNDLES[0];

  function checkDomainTypo(rawEmail: string): string | null {
    const trimmed = rawEmail.trim().toLowerCase();
    const parts = trimmed.split('@');
    if (parts.length !== 2) return null;
    const [local, domain] = parts;
    if (DOMAIN_TYPOS[domain]) {
      return `${local}@${DOMAIN_TYPOS[domain]}`;
    }
    return null;
  }

  function handleEmailChange(value: string) {
    setEmail(value);
    if (errorMsg) setErrorMsg(null);
    setSuggestedEmail(checkDomainTypo(value));
  }

  function applySuggestedEmail() {
    if (!suggestedEmail) return;
    setEmail(suggestedEmail);
    setSuggestedEmail(null);
    setErrorMsg(null);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const cleanedEmail = email.trim();
    const cleanedZip = zipCode.trim();

    if (!cleanedEmail) {
      setErrorMsg('Please enter your email address so we can send your confirmation link.');
      emailInputRef.current?.focus();
      return;
    }

    if (!EMAIL_REGEX.test(cleanedEmail)) {
      setErrorMsg('Enter a valid email address (for example, name@gmail.com).');
      emailInputRef.current?.focus();
      return;
    }

    if (cleanedZip && !US_ZIP_REGEX.test(cleanedZip)) {
      setErrorMsg('US ZIP code must be 5 digits (or leave blank to confirm via email).');
      return;
    }

    if (!usConfirmed) {
      setErrorMsg('Please confirm that you have a valid US mailing address (18+ residents).');
      return;
    }

    setErrorMsg(null);
    setIsSubmitting(true);

    window.setTimeout(() => {
      const code = `US-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRecord({
        email: cleanedEmail,
        zip: cleanedZip,
        bundleTitle: activeBundle.title,
        referenceCode: code,
      });
      setIsSubmitting(false);
    }, 360);
  }

  function handleReset() {
    setSubmittedRecord(null);
    setEmail('');
    setZipCode('');
    setErrorMsg(null);
    setSuggestedEmail(null);
    window.setTimeout(() => {
      emailInputRef.current?.focus();
    }, 50);
  }

  return (
    <div
      id="claim-card"
      className="max-w-5xl mx-auto bg-white rounded-2xl border border-zinc-200/90 shadow-[0_14px_40px_-14px_rgba(24,24,27,0.09)] overflow-hidden text-left"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left: Interactive Sample Focus Tabs + Valid Email Submit */}
        <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
          {submittedRecord ? (
            <div className="py-2 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-sm mb-3">
                  <MailCheck className="w-5 h-5 shrink-0" />
                  <span>Confirmation link sent</span>
                </div>

                <h2 className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-zinc-900">
                  Check your inbox to verify your US delivery
                </h2>

                <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-zinc-600">
                  We sent a one-click confirmation link to{' '}
                  <strong className="font-semibold text-zinc-900">
                    {submittedRecord.email}
                  </strong>{' '}
                  for your <strong className="font-semibold text-zinc-900">{submittedRecord.bundleTitle}</strong>.
                  Confirm your mailing address inside that email within 48 hours to dispatch your free box via USPS.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-zinc-200">
                  <div>
                    <div className="text-xs text-zinc-500">Selected Kit</div>
                    <div className="mt-0.5 text-sm font-semibold text-zinc-900">
                      {submittedRecord.bundleTitle}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500">Claim Reference</div>
                    <div className="mt-0.5 text-sm font-mono tabular-nums font-semibold text-zinc-900">
                      {submittedRecord.referenceCode}
                      {submittedRecord.zip ? ` · ZIP ${submittedRecord.zip}` : ''}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 pt-5 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-zinc-500">
                  Didn&apos;t see it? Check Promotions or Spam.
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200/80 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63B19]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Use another email
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-zinc-500">
                <span className="text-zinc-900 font-semibold">United States Residents 18+</span>
                <span aria-hidden="true">·</span>
                <span>Valid Email Submit</span>
                <span aria-hidden="true">·</span>
                <span>Ships Free</span>
              </div>

              <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                Select your beauty box &amp; enter your email
              </h2>

              {/* Interactive Segmented Control */}
              <div
                role="tablist"
                aria-label="Sample kit focus"
                className="mt-4 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-1.5 p-1 bg-zinc-100 rounded-xl"
              >
                {SAMPLE_BUNDLES.map((bundle) => {
                  const isActive = bundle.id === selectedBundleId;
                  return (
                    <button
                      key={bundle.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => onSelectBundle(bundle.id)}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63B19] ${
                        isActive
                          ? 'bg-white text-zinc-900 shadow-sm'
                          : 'text-zinc-600 hover:text-zinc-900'
                      }`}
                    >
                      {bundle.shortLabel}
                    </button>
                  );
                })}
              </div>

              <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  <div className="sm:col-span-8">
                    <label
                      htmlFor="claim-email"
                      className="block text-xs font-semibold text-zinc-700 mb-1.5"
                    >
                      Valid Email Address
                    </label>
                    <input
                      ref={emailInputRef}
                      id="claim-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      required
                      value={email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      placeholder="you@example.com"
                      aria-invalid={errorMsg ? 'true' : 'false'}
                      aria-describedby={errorMsg ? 'claim-error' : undefined}
                      className="w-full h-12 px-4 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 text-[15px] transition-colors focus:outline-none focus:border-[#E63B19] focus:ring-2 focus:ring-[#E63B19]/20"
                    />
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="claim-zip"
                      className="block text-xs font-semibold text-zinc-700 mb-1.5"
                    >
                      US ZIP <span className="font-normal text-zinc-400">(Optional)</span>
                    </label>
                    <input
                      id="claim-zip"
                      name="postalCode"
                      type="text"
                      inputMode="numeric"
                      maxLength={5}
                      value={zipCode}
                      onChange={(e) => {
                        setZipCode(e.target.value.replace(/[^\d]/g, '').slice(0, 5));
                        if (errorMsg) setErrorMsg(null);
                      }}
                      placeholder="90210"
                      className="w-full h-12 px-3.5 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 text-[15px] tabular-nums transition-colors focus:outline-none focus:border-[#E63B19] focus:ring-2 focus:ring-[#E63B19]/20"
                    />
                  </div>
                </div>

                {suggestedEmail && (
                  <div className="flex items-center justify-between gap-2 px-3.5 py-2 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
                    <span>
                      Did you mean <strong>{suggestedEmail}</strong>?
                    </span>
                    <button
                      type="button"
                      onClick={applySuggestedEmail}
                      className="font-semibold text-[#C82F11] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Use correction
                    </button>
                  </div>
                )}

                {errorMsg && (
                  <div
                    id="claim-error"
                    role="alert"
                    className="flex items-start gap-2 px-3.5 py-2.5 rounded-lg bg-red-50 border border-red-200 text-xs sm:text-sm text-red-800"
                  >
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={usConfirmed}
                    onChange={(e) => {
                      setUsConfirmed(e.target.checked);
                      if (errorMsg) setErrorMsg(null);
                    }}
                    className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-[#E63B19] focus:ring-[#E63B19] accent-[#E63B19]"
                  />
                  <span className="text-xs leading-relaxed text-zinc-600">
                    I am 18+ with a valid United States mailing address and agree to receive my
                    one-click sample confirmation email.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 px-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#E63B19] hover:bg-[#C82F11] active:scale-[0.995] disabled:opacity-70 text-white font-display font-bold text-[15px] transition-all duration-150 shadow-sm whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63B19] focus-visible:ring-offset-2"
                >
                  <span>{isSubmitting ? 'Sending Confirmation Link...' : 'Send My Free Samples'}</span>
                  {!isSubmitting && <ArrowRight className="w-4 h-4 shrink-0" />}
                </button>
              </form>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>No credit card</span>
                </span>
                <span aria-hidden="true">·</span>
                <span>No surveys</span>
                <span aria-hidden="true">·</span>
                <span>Unsubscribe anytime</span>
              </div>
            </div>
          )}
        </div>

        {/* Right: Hero Portrait of Smiling Woman with Miss Dior Sample + Selected Kit Scrim */}
        <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[360px] lg:min-h-full bg-zinc-100 border-t lg:border-t-0 lg:border-l border-zinc-200/80">
          <SampleCardImage
            src={GIRL_HERO_IMAGE}
            alt="Smiling woman holding a pink Miss Dior fragrance sample bottle"
            fallbackTitle={activeBundle.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5 sm:p-6">
            <div className="text-xs font-medium text-zinc-200">
              {activeBundle.category} · {activeBundle.itemCount} · {activeBundle.shippingNote}
            </div>
            <div className="mt-1 font-display text-lg font-bold text-white">
              {activeBundle.title}
            </div>
            <p className="mt-1 text-xs text-zinc-200/95 line-clamp-2">
              {activeBundle.items.slice(0, 3).join(' · ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
