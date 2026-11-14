import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

const INITIAL_SECONDS = 23 * 3600 + 59 * 60 + 12;

export function CountdownTimer() {
  const [secondsLeft, setSecondsLeft] = useState<number>(() => {
    try {
      const saved = window.sessionStorage.getItem('fs_drop_deadline');
      if (saved) {
        const remaining = Math.floor((Number(saved) - Date.now()) / 1000);
        if (remaining > 0 && remaining <= INITIAL_SECONDS) {
          return remaining;
        }
      }
      const deadline = Date.now() + INITIAL_SECONDS * 1000;
      window.sessionStorage.setItem('fs_drop_deadline', String(deadline));
    } catch {
      // Ignore storage access restrictions
    }
    return INITIAL_SECONDS;
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          try {
            window.sessionStorage.setItem(
              'fs_drop_deadline',
              String(Date.now() + INITIAL_SECONDS * 1000)
            );
          } catch {
            // Ignore
          }
          return INITIAL_SECONDS;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const days = Math.floor(secondsLeft / 86400);
  const hours = Math.floor((secondsLeft % 86400) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  const pad = (n: number) => String(n).padStart(2, '0');

  const units = [
    { label: 'Days', value: pad(days), highlight: false },
    { label: 'Hours', value: pad(hours), highlight: false },
    { label: 'Mins', value: pad(minutes), highlight: false },
    { label: 'Secs', value: pad(seconds), highlight: true },
  ];

  return (
    <div
      className="my-5 w-full max-w-md mx-auto rounded-2xl bg-zinc-950 border border-zinc-800 px-4 py-4 sm:px-6 sm:py-4 text-center shadow-sm"
      role="timer"
      aria-live="off"
      aria-label={`Limited drop ends in ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`}
    >
      <div className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wide text-zinc-300">
        <Clock className="w-3.5 h-3.5 text-[#FF6B4A] shrink-0" aria-hidden="true" />
        <span>Limited Drop Allocation Ends In</span>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
        {units.map((unit) => (
          <div
            key={unit.label}
            className={`rounded-xl py-2.5 px-2 border flex flex-col items-center justify-center ${
              unit.highlight
                ? 'bg-[#C82F11] border-[#E63B19] text-white'
                : 'bg-zinc-900 border-zinc-800 text-white'
            }`}
          >
            <span className="font-display text-2xl sm:text-[28px] font-extrabold leading-none tabular-nums tracking-tight">
              {unit.value}
            </span>
            <span
              className={`mt-1 text-[11px] font-medium ${
                unit.highlight ? 'text-white/90' : 'text-zinc-400'
              }`}
            >
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
