import { useState } from "react";

import { authService } from '../apis/api';

export default function DigitalBistroRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const name = document.getElementById('name');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Неверный формат почты');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 8) {
      setPasswordError(true);
      setPasswordErrorMessage('Пароль должна содержать как минимум 8 символов');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage('ФИО обязательно');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegistrationError('');
    if (validateInputs()) {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const fullName = document.getElementById('name').value;
        
        setIsLoading(true);
        try {
            await authService.register({ fullName, email, password });
            window.location.href = "/login";
        } catch (error) {
            console.error('Ошибка регистрации:', error);
            setRegistrationError('Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }
  };

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

            <form className="space-y-lg" onSubmit={handleSubmit}>
              <div className="group">
                <label
                  className="font-label-sm text-label-sm text-outline mb-xs block transition-colors group-focus-within:text-primary"
                  htmlFor="name"
                >
                  FULL NAME
                </label>
                <input
                  className="w-full border-b border-outline-variant bg-transparent py-3 font-body-md text-on-surface placeholder:text-stone-300 transition-all form-input-focus border-x-0 border-t-0 focus:ring-0 px-0"
                  id="name"
                  name="full_name"
                  placeholder="Julian Vane"
                  type="text"
                />
                {nameError && <p className="text-red-500 text-sm mt-1">{nameErrorMessage}</p>}
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
                {emailError && <p className="text-red-500 text-sm mt-1">{emailErrorMessage}</p>}
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
                {passwordError && <p className="text-red-500 text-sm mt-1">{passwordErrorMessage}</p>}
              </div>

              <div className="pt-md">
                {registrationError && <p className="text-red-500 text-sm mb-2">{registrationError}</p>}
                <button
                  className="w-full bg-primary text-on-primary font-headline-md py-4 rounded-lg custom-shadow active:scale-[0.98] transition-all hover:bg-primary-container disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </button>
              </div>

              <div className="relative py-4 flex items-center">
                <div className="flex-grow border-t border-outline-variant" />
                <span className="flex-shrink mx-4 font-label-sm text-outline uppercase tracking-widest text-[10px]">
                  or
                </span>
                <div className="flex-grow border-t border-outline-variant" />
              </div>

              
            </form>

            <footer className="mt-xl text-center">
              <p className="font-body-md text-on-surface-variant">
                Already have an account?{' '}
                <a className="text-secondary font-bold hover:underline transition-all underline-offset-4" href="/login">
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
