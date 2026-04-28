import { useState } from 'react';

import { authService } from '../apis/api';

export default function DigitalBistroSignIn() {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');

    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    if (!validateInputs(email, password)) {
      return;
    }

    setIsSubmitting(true);
    try {
      const loginResponse = await authService.login({ email, password });

      const accessToken = loginResponse?.data?.accessToken;
      if (!accessToken) {
        throw new Error('Access token missing from login response.');
      }

      localStorage.setItem('token', accessToken);

      const roleResponse = await authService.extractRole(accessToken);
      const roleData = roleResponse?.data;
      const role = typeof roleData === 'string' ? roleData : roleData?.role || '';

      if (role === 'ROLE_ADMIN') {
        window.location.href = '/admin-orders';
      } else {
        window.location.href = '/user-info';
      }
    } catch (error) {
      console.error('Ошибка авторизации или получения роли:', error);
      const message = error?.response?.data?.message || 'Ошибка входа. Проверьте email и пароль.';
      setLoginError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateInputs = (email, password) => {
    let isValid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage('Неверный формат почты');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password || password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Пароль должна содержать как минимум 6 символов');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <div className="bg-background text-on-background selection:bg-primary-fixed-dim selection:text-on-primary-fixed min-h-screen flex flex-col">
      <main className="flex-grow flex items-stretch">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 bg-surface">
          <div className="max-w-md w-full mx-auto space-y-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                  restaurant_menu
                </span>
              </div>
              <span className="font-display-xl text-headline-md tracking-tighter text-emerald-900">
                The Digital Bistro
              </span>
            </div>
            <div className="space-y-2">
              <h1 className="font-display-xl text-display-xl text-primary">Welcome Back</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Savor the moment. Access your curated dining experiences and reservations.
              </p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="relative">
                  <label className="font-label-sm text-label-sm text-outline mb-2 block uppercase" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-surface-variant focus:border-primary focus:ring-0 font-body-md text-body-md transition-colors placeholder:text-stone-300"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                    type="email"
                  />
                  {emailError && <p className="text-red-500 text-sm mt-2">{emailErrorMessage}</p>}
                </div>
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-label-sm text-label-sm text-outline uppercase" htmlFor="password">
                      Password
                    </label>
                    <a className="font-label-sm text-label-sm text-secondary hover:opacity-80 transition-opacity" href="/reset-request">
                      Forgot Password?
                    </a>
                  </div>
                  <input
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-surface-variant focus:border-primary focus:ring-0 font-body-md text-body-md transition-colors placeholder:text-stone-300"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    type="password"
                  />
                  {passwordError && <p className="text-red-500 text-sm mt-2">{passwordErrorMessage}</p>}
                </div>
              </div>
              <button
                className="w-full bg-primary-container text-on-primary py-4 rounded-lg font-body-lg text-body-lg font-bold shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing In...' : 'Sign In'}
              </button>
              {loginError && <p className="text-red-500 text-sm mt-2">{loginError}</p>}
            </form>
            <div className="relative py-4">
              <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-surface-variant" />
              </div>
              <div className="relative flex justify-center text-label-sm uppercase">
                <span className="bg-surface px-4 text-outline font-label-sm">Or</span>
              </div>
            </div>
            <p className="text-center font-body-md text-body-md text-on-surface-variant">
              New to Earthy Gastronomy?{' '}
              <a className="text-secondary font-bold hover:underline underline-offset-4" href="/register">
                Create an account
              </a>
            </p>
          </div>
        </div>
        <div className="hidden lg:block w-1/2 relative overflow-hidden bg-primary-container">
          <img
            alt="Fine Dining Experience"
            className="absolute inset-0 w-full h-full object-cover opacity-80 scale-105 hover:scale-110 transition-transform duration-[10000ms]"
            data-alt="Close-up of a beautifully plated gourmet dish with vibrant greens and edible flowers, warm soft lighting on a dark stone tabletop."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMa1YT-AohwftMyUhkTb25-vvAK1KFSb7QdhmnNyXxPGJC71EWAuVTLxom_6IKOPW1Iz6QUVZOyAsFP5iIi9rWYKTGHyqgdeB8GXnTmO_siGSUiyAcUyq3HLqHvyBcIpf_NLeTtTSSjScpzDY6lI6XgTxW_BesN-VvwH0BHRenJ2-Vn--FRVNbcO-mvYrcyrKYZ4X1B8jF804xlMIwZG_BUkIicpvlt2cpgZOEEKcehr-_VewQM4EiHa-kWGBWuWLg6m0ueIEMbVE"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-24 left-16 right-16 space-y-6">
            <div className="inline-flex items-center gap-2 bg-on-tertiary-container/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="text-white font-label-sm uppercase tracking-widest">
                Michelin Rated Experience
              </span>
            </div>
            <h2 className="text-white font-display-xl text-display-xl leading-tight">
              "Gastronomy is the art of using food to create happiness."
            </h2>
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-secondary-container" />
              <span className="text-white/80 font-body-lg text-body-lg">The Digital Bistro Philosophy</span>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-stone-50 dark:bg-zinc-950 border-t border-stone-200 dark:border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 max-w-7xl mx-auto gap-6">
          <div className="text-lg font-bold text-emerald-900 dark:text-emerald-50 font-epilogue tracking-widest uppercase">
            The Digital Bistro
          </div>
          <div className="text-stone-400 dark:text-stone-500 font-epilogue text-sm uppercase tracking-widest text-center md:text-right">
            © 2024 The Digital Bistro. Crafted for the discerning palate.
          </div>
        </div>
      </footer>
    </div>
  );
}
