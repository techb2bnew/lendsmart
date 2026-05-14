/** Same social icons as footer; parent sets colour via `className` (e.g. `text-black` or `text-white`). */
export default function SocialLinks({ className = "" }: { className?: string }) {
  const linkClass = "transition hover:text-[#79c44a]";
  return (
    <div className={className}>
      <a href="#" aria-label="Facebook" className={linkClass}>
        <svg width="20" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M14 8h3V4h-3c-3.3 0-6 2.7-6 6v3H5v4h3v7h4v-7h4l1-4h-5v-3c0-1.1.9-2 2-2Z" />
        </svg>
      </a>
      <a href="#" aria-label="X" className={linkClass}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.3 22H3.1l7.3-8.4L1 2h6.3l4.4 5.8L18.9 2Zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20Z" />
        </svg>
      </a>
      <a href="#" aria-label="LinkedIn" className={linkClass}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 7.03A1.97 1.97 0 1 0 5.25 3.1a1.97 1.97 0 0 0 0 3.94ZM20.44 20h-3.37v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94V20H9.7V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.2-1.77 3.42 0 4.05 2.25 4.05 5.18V20Z" />
        </svg>
      </a>
      <a href="#" aria-label="Instagram" className={linkClass}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.25 1.65a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" />
        </svg>
      </a>
    </div>
  );
}
