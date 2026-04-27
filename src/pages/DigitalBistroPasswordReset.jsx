import React from "react";

export default function DigitalBistroPasswordReset() {
  return (
    <div className="font-body-md text-on-background selection:bg-secondary-fixed selection:text-on-secondary-fixed bg-background min-h-screen">
      <header className="bg-stone-50/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-stone-200/60 dark:border-white/10 shadow-sm sticky top-0 z-50">
        <nav className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-emerald-900 dark:text-emerald-50 tracking-tighter font-display antialiased tracking-tight">
            The Digital Bistro
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a className="text-stone-500 dark:text-stone-400 font-medium hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300" href="#">
              Menu
            </a>
            <a className="text-stone-500 dark:text-stone-400 font-medium hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300" href="#">
              Reservations
            </a>
            <a className="text-stone-500 dark:text-stone-400 font-medium hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300" href="#">
              Our Story
            </a>
          </div>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-display font-bold active:scale-95 transition-transform hover:opacity-90">
            Book a Table
          </button>
        </nav>
      </header>

      <main className="min-h-[819px] flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter max-w-6xl w-full items-center">
          <div className="hidden lg:block lg:col-span-5 h-[600px] relative rounded-xl overflow-hidden shadow-2xl">
            <img
              alt="Artisanal dining scene"
              className="absolute inset-0 w-full h-full object-cover"
              data-alt="Moody atmospheric shot of a high-end restaurant table with a single candle flickering and a minimalist ceramic bowl on linen tablecloth"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4nDGhuBV3d3v61CQzuiqP2q-BO6sMRHf5EymQcW4y8nbwYfWa2noPEXirHNksEio9TYtiMdtAsQb7tQs_IIXaXHjPN_EFoat6mXPLsWQ_NgTbH7MWX_9K0atKgmteOwyLPa131v0FKmUH43kdvPyWS80OxTFyq81fbCq6a8XiMDKBZLQFpTo6aNFhSD6wP4jRlhamBZt2E1OKUUsDsusCsmVVckRyCMC6vk0QGhcikG7LD9HoU1A49E-tREL8peYLXzbX9W9k"
            />
            <div className="absolute inset-0 bg-primary/20 backdrop-sepia-[0.2]" />
            <div className="absolute bottom-12 left-12 right-12">
              <p className="font-display-xl text-display-xl text-white mb-4">Reclaim your seat at the table.</p>
              <p className="font-body-lg text-body-lg text-white/80">
                Every dish has a story, and every guest has a place. Let's get you back to your profile.
              </p>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center items-center lg:items-start lg:pl-12">
            <div className="w-full max-w-md">
              <div className="mb-12 text-center lg:text-left">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface-container mb-6">
                  <span className="material-symbols-outlined text-secondary text-3xl">lock_reset</span>
                </span>
                <h1 className="font-headline-lg text-headline-lg text-primary mb-4">Forgot Password?</h1>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Enter the email address associated with your account. We will send a secure link to reset your password and reconnect you with our seasonal flavors.
                </p>
              </div>

              <form className="space-y-8">
                <div className="relative">
                  <label className="block font-label-sm text-label-sm text-primary uppercase mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 px-0 py-3 font-body-lg text-body-lg transition-colors placeholder:text-stone-300"
                    id="email"
                    name="email"
                    placeholder="name@domain.com"
                    required
                    type="email"
                  />
                </div>
                <button
                  className="w-full bg-secondary text-on-secondary py-4 rounded-lg font-display font-bold text-lg shadow-lg shadow-secondary/20 hover:opacity-95 active:scale-95 transition-all"
                  type="submit"
                >
                  Send Reset Link
                </button>
              </form>

              <div className="mt-12 flex flex-col items-center lg:items-start gap-6 border-t border-surface-variant pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-secondary rounded-full" />
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Check your spam folder if the link doesn't arrive in 5 minutes.
                  </p>
                </div>
                <a className="inline-flex items-center gap-2 font-display font-bold text-primary hover:text-secondary transition-colors group" href="#">
                  <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">
                    arrow_back
                  </span>
                  Return to Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-stone-50 dark:bg-zinc-950 border-t border-stone-200 dark:border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 max-w-7xl mx-auto gap-6 font-display text-sm uppercase tracking-widest text-emerald-900 dark:text-emerald-50">
          <div className="text-lg font-bold">The Digital Bistro</div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-stone-400 dark:text-stone-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-stone-400 dark:text-stone-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">
              Terms of Service
            </a>
            <a className="text-stone-400 dark:text-stone-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">
              Sustainability
            </a>
            <a className="text-stone-400 dark:text-stone-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">
              Contact
            </a>
          </div>
          <div className="text-stone-400 dark:text-stone-500 normal-case tracking-normal">
            © 2024 The Digital Bistro. Crafted for the discerning palate.
          </div>
        </div>
      </footer>
    </div>
  );
}
