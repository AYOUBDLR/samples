import { useEffect } from 'react';
import { X } from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms' | null;

interface ModalDialogProps {
  activeDoc: LegalDocType;
  onClose: () => void;
}

export function ModalDialog({ activeDoc, onClose }: ModalDialogProps) {
  useEffect(() => {
    if (!activeDoc) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDoc, onClose]);

  if (!activeDoc) return null;

  const isPrivacy = activeDoc === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/50 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white rounded-2xl border border-zinc-200 shadow-xl p-6 sm:p-7 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-zinc-200">
          <div>
            <h3
              id="legal-modal-title"
              className="font-display text-lg font-bold text-zinc-900"
            >
              {isPrivacy ? 'Privacy Policy' : 'US Offer Terms & Eligibility'}
            </h3>
            <p className="mt-0.5 text-xs text-zinc-500">
              Free Samples · United States Promotional Program
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 -mr-2 -mt-1 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63B19]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600 max-h-[60vh] overflow-y-auto pr-1">
          {isPrivacy ? (
            <>
              <p>
                We collect your email address and optional 5-digit US ZIP code solely to deliver
                your sample confirmation link, verify residential US eligibility, and notify you of
                shipping status and upcoming brand sample drops.
              </p>
              <p>
                We never request credit card numbers, Social Security numbers, or banking
                credentials. You may opt out of drop alerts at any time using the one-click
                unsubscribe link included in every email.
              </p>
              <p>
                Sample fulfillment partners receive only the shipping details you explicitly confirm
                after clicking your inbox verification link.
              </p>
            </>
          ) : (
            <>
              <p>
                Open to legal residents of the 50 United States and the District of Columbia who are
                18 years of age or older at the time of submission.
              </p>
              <p>
                Limit one (1) sample box claim per valid email address and physical US household per
                weekly drop while supplies last. Automated entries, disposable email domains, and
                duplicate claims are excluded to keep inventory fair for real households.
              </p>
              <p>
                No purchase or payment method is required. Brand assortments vary slightly by
                regional fulfillment stock.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63B19]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
