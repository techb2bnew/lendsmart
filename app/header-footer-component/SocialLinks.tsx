/** Same social icons as footer; parent sets colour via `className` (e.g. `text-black` or `text-white`). */
export default function SocialLinks({ className = "" }: { className?: string }) {
  const linkClass = "transition hover:text-[#79c44a]";
  return (
    <div className={className}>
      <a target="_blank" href="https://www.linkedin.com/in/bharat-kainth-mortgage-broker/" aria-label="LinkedIn" className={linkClass}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 7.03A1.97 1.97 0 1 0 5.25 3.1a1.97 1.97 0 0 0 0 3.94ZM20.44 20h-3.37v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94V20H9.7V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.2-1.77 3.42 0 4.05 2.25 4.05 5.18V20Z" />
        </svg>
      </a>
      <a target='_blank' href="https://www.facebook.com/profile.php?id=61590849864808" aria-label="Facebook" className={linkClass}>
        <svg width="20" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M14 8h3V4h-3c-3.3 0-6 2.7-6 6v3H5v4h3v7h4v-7h4l1-4h-5v-3c0-1.1.9-2 2-2Z" />
        </svg>
      </a>
      <a target="_blank" href="https://www.instagram.com/lendsmart_mortgages" aria-label="Instagram" className={linkClass}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.25 1.65a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" />
        </svg>
      </a>
      <a target="_blank" href="https://www.tiktok.com/@lendsmart_mortgages" aria-label="X" className={linkClass}>
        <svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48" />
        </svg>
      </a>
    </div>
  );
}
