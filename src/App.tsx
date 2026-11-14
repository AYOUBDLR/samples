import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { GiftMark } from './components/GiftMark';
import { SampleCardImage } from './components/SampleCardImage';
import { CountdownTimer } from './components/CountdownTimer';
import { ModalDialog, type LegalDocType } from './components/ModalDialog';
import { BEAUTY_BOX_BANNER_IMAGE, GIRL_HERO_IMAGE } from './data/samples';

const OFFER_REDIRECT_URL = 'https://appcomplete.org/sl/v186r';

export default function App() {
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>(null);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAFAFA] text-zinc-900">
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-[900px] mx-auto text-center">
          {/* Reference Brand Mark & Hero Copy */}
          <GiftMark />

          <h1
            className="mt-5 font-display font-extrabold tracking-tight text-zinc-900 mx-auto max-w-xl leading-[1.08]"
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              textWrap: 'balance',
            }}
          >
            Free samples, delivered to your door
          </h1>

          <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-zinc-600 max-w-lg mx-auto">
            You have the chance to receive real products from real brands — no credit card, no
            catch.
            <br className="hidden sm:inline" /> We find the freebies, you just claim them.
          </p>

          {/* Focused Sweepstakes Card */}
          <div className="mt-7 sm:mt-8 bg-white rounded-2xl border border-zinc-200/90 shadow-[0_16px_44px_-14px_rgba(24,24,27,0.1)] overflow-hidden text-left">
            {/* Dual Visual Showcase: Girl with Sample + Luxury Beauty Samples Studio Box */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-200/80">
              <div className="md:col-span-5 bg-zinc-100 h-[240px] sm:h-[270px] md:h-[300px] overflow-hidden border-b md:border-b-0 md:border-r border-zinc-200/80">
                <SampleCardImage
                  src={GIRL_HERO_IMAGE}
                  alt="Smiling woman holding a pink glass fragrance sample bottle"
                  fallbackTitle="Free Fragrance Sample"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="md:col-span-7 bg-[#F5F2EE] h-[240px] sm:h-[270px] md:h-[300px] overflow-hidden">
                <SampleCardImage
                  src={BEAUTY_BOX_BANNER_IMAGE}
                  alt="Luxury beauty and fragrance sample collection arranged next to a white gift box with a crimson ribbon"
                  fallbackTitle="Luxury Beauty & Skincare Samples"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Direct Sweepstakes Claim Action */}
            <div className="p-6 sm:p-8">
              <div className="text-center max-w-xl mx-auto">
                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs font-medium text-zinc-500">
                  <span className="font-semibold text-zinc-900">US Residents 18+</span>
                  <span aria-hidden="true">·</span>
                  <span>Limited Weekly Drop</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-[#C82F11] tabular-nums">
                    $0.00 Total Cost
                  </span>
                </div>

                <h2
                  className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-tight text-zinc-900"
                  style={{ textWrap: 'balance' }}
                >
                  You May Be Eligible For A Luxury Beauty &amp; Fragrance Sample Box
                </h2>

                {/* Split-Flap Countdown Timer */}
                <div className="flex justify-center">
                  <CountdownTimer />
                </div>

                <div>
                  <a
                    href={OFFER_REDIRECT_URL}
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto min-w-[280px] h-14 px-10 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#E63B19] hover:bg-[#C82F11] active:scale-[0.99] text-white font-display font-bold text-base sm:text-lg transition-all duration-150 shadow-sm whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63B19] focus-visible:ring-offset-2"
                  >
                    <span>Claim Free Samples</span>
                    <ArrowRight className="w-5 h-5 shrink-0" />
                  </a>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-zinc-500">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>No credit card needed</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Free US shipping</span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>1 claim per household</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-5 px-4 sm:px-6 text-center text-xs text-zinc-500 border-t border-zinc-200/70 bg-white">
        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            US Residents 18+ only · No purchase necessary · While supplies last
          </span>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setActiveLegalDoc('privacy')}
              className="hover:text-zinc-900 underline-offset-2 hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActiveLegalDoc('terms')}
              className="hover:text-zinc-900 underline-offset-2 hover:underline cursor-pointer"
            >
              Official Rules
            </button>
          </div>
        </div>
      </footer>

      <ModalDialog
        activeDoc={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
      />
    </div>
  );
}
