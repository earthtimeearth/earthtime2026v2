@import "tailwindcss";

:root {
  --background: #ff892b;  /* brand orange fallback */
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #ff892b;   /* keep orange for consistency */
    --foreground: #ededed;
  }
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #ff892b; /* behind video & for browser chrome */
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  overscroll-behavior: none;
}

* { box-sizing: border-box; }
