import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import styles from './Intro.module.scss';

// Milliseconds from mount until the text starts leaving.
const EXIT_AT_MS = 3200;
// Length of the leaving animation, matching `$exit-duration` in the stylesheet:
// the words sliding back, then the separator fading out behind them.
const EXIT_DURATION_MS = 1250;
// Length of the quick fade after a skip, matching `$skip-duration`.
const SKIP_DURATION_MS = 300;
// Under reduced motion the finished line is shown still for this long instead.
const STATIC_HOLD_MS = 1500;

// Keys that skip the intro, besides clicking or tapping anywhere on it.
const SKIP_KEYS = new Set(['Escape', 'Enter', ' ']);

// Cancels every pending timer in the list and empties it.
function clearTimers(list: number[]) {
  list.splice(0).forEach((timer) => window.clearTimeout(timer));
}

// 'skip' fades the whole intro out at once instead of playing the exit.
type Phase = 'enter' | 'exit' | 'skip';

interface IntroProps {
  /** Called when the text starts leaving, so the page can fade in behind it. */
  onExitStart: () => void;
  /** Called once the intro has left the screen. */
  onFinish: () => void;
}

// Full-screen opening animation shown on the first render of the app. Under
// reduced motion it shows the finished line without movement. Either version
// can be skipped.
export function Intro({ onExitStart, onFinish }: IntroProps) {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [phase, setPhase] = useState<Phase>('enter');
  const timers = useRef<number[]>([]);
  // Set as soon as the intro starts leaving, so a second trigger is ignored
  // even before the new phase has rendered.
  const leaving = useRef(false);

  // Starts leaving, either on schedule or straight away when skipped.
  const leave = useCallback(
    (next: Exclude<Phase, 'enter'>) => {
      if (leaving.current) return;
      leaving.current = true;
      clearTimers(timers.current);
      setPhase(next);
      onExitStart();
      const duration = prefersReducedMotion
        ? 0
        : next === 'skip'
          ? SKIP_DURATION_MS
          : EXIT_DURATION_MS;
      timers.current.push(window.setTimeout(onFinish, duration));
    },
    [prefersReducedMotion, onExitStart, onFinish],
  );

  const skip = useCallback(() => leave('skip'), [leave]);

  useEffect(() => {
    const holdMs = prefersReducedMotion ? STATIC_HOLD_MS : EXIT_AT_MS;
    timers.current.push(window.setTimeout(() => leave('exit'), holdMs));
    const pending = timers.current;
    return () => clearTimers(pending);
  }, [prefersReducedMotion, leave]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!SKIP_KEYS.has(event.key) || leaving.current) return;
      event.preventDefault();
      skip();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [skip]);

  return (
    // Clicking anywhere skips; the button below is the keyboard and screen
    // reader route to the same thing.
    // oxlint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={styles.intro} data-phase={phase} onClick={skip}>
      <p className={styles.line}>
        {/* Each half is clipped up to the separator, so it stays hidden behind
            the pipe until it has slid out. */}
        <span className={`${styles.mask} ${styles.maskStart}`}>
          <span className={styles.name}>{t('identity.name')}</span>
        </span>

        <span className={styles.separatorGlyph} aria-hidden="true">
          {t('identity.separator')}
        </span>
        <span className={styles.separatorBar} aria-hidden="true" />

        <span className={`${styles.mask} ${styles.maskEnd}`}>
          <span className={styles.role}>{t('identity.role')}</span>
        </span>
      </p>

      <button type="button" className={styles.skip} onClick={skip}>
        {t('a11y.skipIntro')}
      </button>
    </div>
  );
}
