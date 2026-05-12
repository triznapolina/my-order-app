import { useEffect, useState } from "react";
import { userService } from "../apis/api";

export default function PersonalInfoUser({
  isOpen,
  onClose,
  clientId,
  onSuccess,
}) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  // LOAD USER
  useEffect(() => {
    if (!isOpen || !clientId) return;

    const loadUser = async () => {
      try {
        setLoading(true);

        const res = await userService.getInfoById(clientId);

        const user = res.data;

        setForm({
          fullName: user.fullName || "",
          email: user.email || "",
          phoneNumber: user.phoneNumber || "",
          address: user.address || "",
        });
      } catch (e) {
        console.error("LOAD USER ERROR", e);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [isOpen, clientId]);

  // LOCK BODY SCROLL
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // SAVE
  const handleSubmit = async () => {
    try {
      await userService.updateClient({
        id: clientId,
        fullName: form.fullName,
        email: form.email,
        phoneNumber: form.phoneNumber,
        address: form.address,
      });

      onSuccess?.();

      onClose();
    } catch (e) {
      console.error("UPDATE ERROR", e);
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md">

      {/* BACKDROP */}
      <div
        className="fixed inset-0 z-[60] bg-primary/40 backdrop-blur-md flex items-end md:items-center justify-center p-0 md:p-lg"
        onClick={onClose}
      >

        {/* MODAL */}
        <div
          className="bg-surface w-full max-w-2xl rounded-t-[32px] md:rounded-[24px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-300"
          onClick={(e) => e.stopPropagation()}
        >

          {/* HEADER */}
          <div className="px-lg pt-lg pb-md flex justify-between items-center border-b border-surface-variant/30">

            <h2 className="font-headline-md text-primary tracking-tight">
              Personal Details
            </h2>

            {/* CLOSE */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 hover:bg-stone-100 rounded-full transition-colors"
            >
              <span className="material-symbols-outlined text-on-surface-variant">
                close
              </span>
            </button>

          </div>

          {/* BODY */}
          <div className="p-lg overflow-y-auto max-h-[618px] space-y-xl">

            {loading ? (
              <div className="text-center py-10">
                Loading...
              </div>
            ) : (
              <>
                {/* USER CARD */}
                <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm space-y-md">

                 
                  <div className="text-center">
                    <h2 className="font-headline-lg text-primary">
                      {form.fullName || "User"}
                    </h2>

                    <p className="font-body-md text-on-surface-variant">
                      {form.email}
                    </p>
                  </div>

                </div>

                {/* PERSONAL INFO */}
                <section className="space-y-lg">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">

                    {/* FULL NAME */}
                    <div className="space-y-xs">
                      <label className="font-label-sm text-primary uppercase block">
                        Full Name
                      </label>

                      <input
                        name="fullName"
                        type="text"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full bg-surface-container-low border-b-2 border-primary-container/20 focus:border-primary px-sm py-md font-body-md outline-none transition-all placeholder:text-stone-300"
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="space-y-xs">
                      <label className="font-label-sm text-primary uppercase block">
                        Email Address
                      </label>

                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full bg-surface-container-low border-b-2 border-primary-container/20 focus:border-primary px-sm py-md font-body-md outline-none transition-all placeholder:text-stone-300"
                      />
                    </div>

                    {/* PHONE */}
                    <div className="space-y-xs md:col-span-2">

                      <div className="flex justify-between items-center">
                        <label className="font-label-sm text-primary uppercase">
                          Telephone
                        </label>

                        <span className="bg-primary/10 text-primary-container px-2 py-0.5 rounded-full flex items-center gap-1">
                          <span
                            className="material-symbols-outlined text-[14px]"
                            style={{
                              fontVariationSettings: "'FILL' 1",
                            }}
                          >
                            verified
                          </span>

                          <span className="text-[10px] font-bold uppercase tracking-wider">
                            Verified
                          </span>
                        </span>

                      </div>

                      <input
                        name="phoneNumber"
                        type="tel"
                        value={form.phoneNumber}
                        onChange={handleChange}
                        placeholder="+1 (555) 012-3456"
                        className="w-full bg-surface-container-low border-b-2 border-primary-container/20 focus:border-primary px-sm py-md font-body-md outline-none transition-all placeholder:text-stone-300"
                      />

                    </div>

                  </div>

                </section>

                {/* ADDRESS */}
                <section className="space-y-md">

                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-sm"></span>

                    <h3 className="font-label-sm text-primary uppercase tracking-widest">
                      Default Delivery Address
                    </h3>
                  </div>

                  <div className="bg-surface-container rounded-xl p-md flex gap-4 items-start border border-stone-100">

                    <span className="material-symbols-outlined text-secondary pt-1">
                      location_on
                    </span>

                    <div className="flex-1 space-y-1">

                      <input
                        name="address"
                        type="text"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="Enter address"
                        className="w-full bg-transparent border-b border-primary-container/20 focus:border-primary px-sm py-md font-body-md outline-none"
                      />

                    </div>

                  </div>

                </section>
              </>
            )}

          </div>

          {/* FOOTER */}
          <div className="p-lg bg-surface-container-lowest border-t border-surface-variant/30 flex flex-col md:flex-row-reverse gap-md">

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full md:w-auto px-xl py-md bg-primary-container text-white rounded-lg font-label-sm uppercase tracking-widest shadow-lg hover:opacity-90 active:scale-95 transition-all"
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full md:w-auto px-xl py-md text-stone-500 font-label-sm uppercase tracking-widest hover:text-primary transition-colors"
            >
              Cancel
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}