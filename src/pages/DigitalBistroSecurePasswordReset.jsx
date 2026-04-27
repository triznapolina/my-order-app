import { useState } from "react";

export default function DigitalBistroSecurePasswordReset() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen overflow-hidden">
      <div
        className="fixed inset-0 bistro-backdrop z-0"
        data-alt="atmospheric interior of a dimly lit high-end digital bistro with warm ambient lighting and soft-focus artisan dining tables"
      >
        <div className="flex items-center justify-center min-h-screen p-margin-mobile">
          <div className="w-full max-w-md p-lg bg-surface/40 rounded-xl blur-sm pointer-events-none">
            <div className="h-8 w-32 bg-primary/20 rounded mb-md" />
            <div className="h-10 w-full bg-primary/10 rounded mb-sm" />
            <div className="h-10 w-full bg-primary/10 rounded" />
          </div>
        </div>
      </div>

      <div className="fixed inset-0 z-50 flex items-center justify-center p-margin-mobile bg-primary/30 backdrop-blur-sm">
        <main className="glass-panel w-full max-w-md rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.15)] overflow-hidden border border-white/20">
          <div className="pt-xl px-xl pb-md text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-fixed mb-md">
              <span className="material-symbols-outlined text-on-primary-fixed" data-icon="lock_reset">
                lock_reset
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Secure Your Account</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-sm">
              Please enter your new password to regain access to The Digital Bistro.
            </p>
          </div>

          <form className="px-xl pb-xl space-y-lg">
            <div className="space-y-unit">
              <label className="block font-label-sm text-label-sm text-on-surface-variant ml-unit" htmlFor="new_password">
                New Password
              </label>
              <div className="relative">
                <input
                  className="w-full px-md py-sm bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface transition-colors placeholder:text-outline/50"
                  id="new_password"
                  name="new_password"
                  placeholder="••••••••"
                  type={showNewPassword ? "text" : "password"}
                />
                <button
                  className="absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant"
                  type="button"
                  onClick={() => setShowNewPassword((prev) => !prev)}
                  aria-label={showNewPassword ? "Hide password" : "Show password"}
                >
                  <span className="material-symbols-outlined" data-icon={showNewPassword ? "visibility_off" : "visibility"}>
                    {showNewPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              <p className="text-[11px] font-body-md text-outline px-unit">Must be at least 8 characters with a number.</p>
            </div>

            <div className="space-y-unit">
              <label className="block font-label-sm text-label-sm text-on-surface-variant ml-unit" htmlFor="confirm_password">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  className="w-full px-md py-sm bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface transition-colors placeholder:text-outline/50"
                  id="confirm_password"
                  name="confirm_password"
                  placeholder="••••••••"
                  type={showConfirmPassword ? "text" : "password"}
                />
                <button
                  className="absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant"
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                >
                  <span className="material-symbols-outlined" data-icon={showConfirmPassword ? "visibility" : "visibility_off"}>
                    {showConfirmPassword ? "visibility" : "visibility_off"}
                  </span>
                </button>
              </div>
            </div>

            <div className="flex gap-1.5 h-1">
              <div className="flex-1 bg-secondary rounded-full" />
              <div className="flex-1 bg-secondary rounded-full" />
              <div className="flex-1 bg-secondary rounded-full" />
              <div className="flex-1 bg-surface-variant rounded-full" />
            </div>

            <div className="pt-md">
              <button
                className="w-full bg-primary text-on-primary py-md rounded-lg font-headline-md text-body-lg shadow-lg active:scale-[0.98] transition-transform flex items-center justify-center gap-md"
                type="submit"
              >
                Update Password
                <span className="material-symbols-outlined text-on-primary" data-icon="arrow_forward">
                  arrow_forward
                </span>
              </button>
              <button className="w-full mt-md text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors py-xs" type="button">
                Back to Login
              </button>
            </div>
          </form>

          <div className="h-2 w-full bg-gradient-to-r from-primary via-secondary to-tertiary opacity-40" />
        </main>
      </div>

      <div className="fixed bottom-lg right-lg z-10 opacity-20 pointer-events-none">
        <div className="w-64 h-64 bg-secondary-container rounded-full blur-[100px]" />
      </div>
      <div className="fixed top-lg left-lg z-10 opacity-20 pointer-events-none">
        <div className="w-96 h-96 bg-primary-fixed rounded-full blur-[120px]" />
      </div>

      <header className="sr-only">
        <h1>The Digital Bistro - Reset Your Password</h1>
      </header>
    </div>
  );
}
