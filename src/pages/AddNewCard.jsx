import { useEffect, useState } from "react";
import { cardService } from "../apis/api";

export default function AddNewCard({ isOpen, onClose, clientId, onSuccess }) {


const [cardNumber, setCardNumber] = useState("");
const [holderName, setHolderName] = useState("");
const [expiry, setExpiry] = useState("");
const [cvcNumber, setCvcNumber] = useState("");

  const [form, setForm] = useState({
    cardNumber: "",
    holderName: "",
    expiry: "",
    cvcNumber: ""
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await cardService.create(clientId, {
      cardNumber,
      holderName,
      expiry,
      cvcNumber,
    });

    onSuccess(); // обновить список
    onClose();   // закрыть модалку
  } catch (e) {
    console.error(e);
  }
};

const loadCards = async (userId) => {
  try {
    const res = await cardService.getByClientId(userId);
    setCards(res.data);
  } catch (e) {
    console.error(e);
  }
};

  return (
    <div className="fixed inset-0 z-[60] bg-primary/40 backdrop-blur-[2px] flex items-center justify-center p-md">

      <div className="bg-surface-container-lowest w-full max-w-lg rounded-xl shadow-[0px_20px_50px_rgba(27,48,34,0.15)] overflow-hidden border border-surface-container-high">

        {/* HEADER */}
        <div className="px-lg py-md border-b border-surface-container flex items-center justify-between">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-secondary">add_card</span>
            <h2 className="font-headline-md text-primary">Add New Card</h2>
          </div>

          <button onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-lg flex flex-col gap-lg">

          {/* CARD PREVIEW */}
          <div className="w-full h-48 rounded-xl bg-gradient-to-br from-primary-container to-primary p-lg text-white flex flex-col justify-between">
            <div className="font-mono text-xl tracking-[0.2em]">
              {form.cardNumber || "•••• •••• •••• ••••"}
            </div>

            <div className="flex justify-between">
              <span>{form.holderName || "YOUR NAME"}</span>
              <span>{form.expiry || "MM/YY"}</span>
            </div>
          </div>

          {/* NAME */}
          <input
            name="holderName"
            value={holderName}
            onChange={(e) => setHolderName(e.target.value)}
            placeholder="Cardholder Name"
            className="input"
          />

          {/* NUMBER */}
          <input
            name="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="0000 0000 0000 0000"
            className="input"
          />

          {/* EXPIRY */}
          <input
            name="expiry"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            placeholder="YYYY-MM-DD"
            className="input"
          />

          {/* CVV */}
          <input
            name="cvcNumber"
            value={cvcNumber}
            onChange={(e) => setCvcNumber(e.target.value)}
            placeholder="CVV"
            className="input"
          />

          {/* ACTIONS */}
          <div className="flex gap-md">
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancel
            </button>

            <button type="submit" className="btn-primary">
              Save Card
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}