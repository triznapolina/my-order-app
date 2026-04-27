import { useState } from "react";

export default function DigitalBistroRegister() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <main className="min-h-screen flex flex-col md:flex-row overflow-hidden">
        <section className="hidden md:block md:w-1/2 lg:w-[55%] h-screen relative">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
          <img
            alt="Artisan culinary presentation"
            className="w-full h-full object-cover"
            data-alt="Close-up of a vibrant gourmet vegetable bowl on a textured ceramic plate, rustic wooden table, soft morning sunlight, fine dining aesthetic"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZh6bYc_FvTFr_lsv-tsPtCbzjLg7bTI9tWugHn2EtY_kO6HUf3EPUnvvCVdM6lGp980vHaLlDVbUFXEyJvqhFuKHXrKJtTm5LY3jqXCVe_j7nY8TnYt9JX-YEm0JNwp_xKXOxOEL4EKxDWcWf9GHWbS0QxgPlX1NpbjCdbK-TpzaPfo3UZPQz-VXPEc5dMiWdeY_3fGCQ6EyLWc7hn8eumR5Vw2oAYEwwrXLnH4Ip7s_rkQFUWFCRQ5rgWuQPGp2RldM9e5p1Qpw"
          />
          <div className="absolute bottom-12 left-12 z-20 max-w-md">
            <p className="font-headline-lg text-white mb-2 drop-shadow-md">The Digital Bistro</p>
            <p className="font-body-lg text-white/90 italic drop-shadow-sm">
              Crafted for the discerning palate. Experience the essence of provenance.
            </p>
          </div>
        </section>

        <section className="w-full md:w-1/2 lg:w-[45%] flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface relative">
          <div className="absolute top-8 left-8 md:hidden">
            <span className="font-display-xl text-primary tracking-tighter text-2xl">The Digital Bistro</span>
          </div>

          <div className="w-full max-w-md">
            <header className="mb-lg">
              <h1 className="font-display-xl text-display-xl text-primary mb-sm">Create account</h1>
              <p className="font-body-md text-on-surface-variant">
                Join our curated community of culinary enthusiasts.
              </p>
            </header>

            <form className="space-y-lg">
              <div className="group">
                <label
                  className="font-label-sm text-label-sm text-outline mb-xs block transition-colors group-focus-within:text-primary"
                  htmlFor="full_name"
                >
                  FULL NAME
                </label>
                <input
                  className="w-full border-b border-outline-variant bg-transparent py-3 font-body-md text-on-surface placeholder:text-stone-300 transition-all form-input-focus border-x-0 border-t-0 focus:ring-0 px-0"
                  id="full_name"
                  name="full_name"
                  placeholder="Julian Vane"
                  type="text"
                />
              </div>

              <div className="group">
                <label
                  className="font-label-sm text-label-sm text-outline mb-xs block transition-colors group-focus-within:text-primary"
                  htmlFor="email"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  className="w-full border-b border-outline-variant bg-transparent py-3 font-body-md text-on-surface placeholder:text-stone-300 transition-all form-input-focus border-x-0 border-t-0 focus:ring-0 px-0"
                  id="email"
                  name="email"
                  placeholder="julian@example.com"
                  type="email"
                />
              </div>

              <div className="group">
                <label
                  className="font-label-sm text-label-sm text-outline mb-xs block transition-colors group-focus-within:text-primary"
                  htmlFor="password"
                >
                  PASSWORD
                </label>
                <div className="relative">
                  <input
                    className="w-full border-b border-outline-variant bg-transparent py-3 font-body-md text-on-surface placeholder:text-stone-300 transition-all form-input-focus border-x-0 border-t-0 focus:ring-0 px-0"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              <div className="pt-md">
                <button
                  className="w-full bg-primary text-on-primary font-headline-md py-4 rounded-lg custom-shadow active:scale-[0.98] transition-all hover:bg-primary-container"
                  type="submit"
                >
                  Create Account
                </button>
              </div>

              <div className="relative py-4 flex items-center">
                <div className="flex-grow border-t border-outline-variant" />
                <span className="flex-shrink mx-4 font-label-sm text-outline uppercase tracking-widest text-[10px]">
                  or register with
                </span>
                <div className="flex-grow border-t border-outline-variant" />
              </div>

              <div className="grid grid-cols-2 gap-md">
                <button
                  className="flex items-center justify-center gap-2 border border-outline-variant rounded-lg py-3 font-body-md text-on-surface hover:bg-surface-container-low transition-colors active:scale-[0.98]"
                  type="button"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="currentColor" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor" />
                  </svg>
                  Google
                </button>
                <button
                  className="flex items-center justify-center gap-2 border border-outline-variant rounded-lg py-3 font-body-md text-on-surface hover:bg-surface-container-low transition-colors active:scale-[0.98]"
                  type="button"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill="currentColor" />
                  </svg>
                  Facebook
                </button>
              </div>
            </form>

            <footer className="mt-xl text-center">
              <p className="font-body-md text-on-surface-variant">
                Already have an account?{' '}
                <a className="text-secondary font-bold hover:underline transition-all underline-offset-4" href="#">
                  Log in
                </a>
              </p>
            </footer>
          </div>

          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 pointer-events-none overflow-hidden">
            <div className="w-64 h-64 border-[40px] border-primary rounded-full -mr-32 -mb-32" />
          </div>
        </section>
      </main>

      <div className="bg-surface py-6 px-margin-desktop border-t border-outline-variant/30 flex flex-col md:flex-row justify-center items-center gap-md">
        <p className="font-label-sm text-[10px] text-outline uppercase tracking-[0.2em]">© 2024 THE DIGITAL BISTRO</p>
        <div className="flex gap-lg">
          <a className="font-label-sm text-[10px] text-outline uppercase hover:text-primary transition-colors tracking-widest" href="#">
            Privacy Policy
          </a>
          <a className="font-label-sm text-[10px] text-outline uppercase hover:text-primary transition-colors tracking-widest" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}
