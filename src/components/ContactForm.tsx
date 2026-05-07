"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const FIELDS = [
  { id: "name",  label: "Full Name",   type: "text",  placeholder: "Your full name", required: true,  maxLength: 100 },
  { id: "email", label: "Email",        type: "email", placeholder: "your@email.com", required: true,  maxLength: 200 },
  { id: "phone", label: "Phone Number", type: "tel",   placeholder: "+44 ...",        required: false, maxLength: 30  },
  { id: "city",  label: "City / Town",  type: "text",  placeholder: "Your city",      required: false, maxLength: 100 },
] as const;

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", city: "", message: "" });
  const [botcheck, setBotcheck] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (id: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [id]: e.target.value }));
  };

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    if (botcheck.trim() !== "") {
      setStatus("success");
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const data = new FormData();
    data.append("access_key", accessKey);
    data.append("subject", `New enquiry from abbottsolicitors.com — ${values.name || "(no name)"}`);
    data.append("from_name", "Abbott Solicitors Website");
    data.append("replyto", values.email);
    data.append("name", values.name);
    data.append("email", values.email);
    data.append("phone", values.phone);
    data.append("city", values.city);
    data.append("message", values.message);
    data.append("botcheck", botcheck);

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setStatus("success");
        setValues({ name: "", email: "", phone: "", city: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "bg-transparent border border-[#C9A84C]/20 px-4 py-3 text-[#F0EDE6] text-base font-sans placeholder:text-[#8A8A94]/50 " +
    "focus:outline-none focus:border-[#C9A84C]/60 transition-colors duration-200 disabled:opacity-50";

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      {FIELDS.map(({ id, label, type, placeholder, required, maxLength }) => (
        <div key={id} className="flex flex-col gap-1.5">
          <label htmlFor={id} className="text-[#8A8A94] text-[10px] tracking-[0.25em] uppercase font-sans">
            {label}{required && <span className="text-[#C9A84C]/70"> *</span>}
          </label>
          <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            required={required}
            maxLength={maxLength}
            autoComplete={id === "name" ? "name" : id === "email" ? "email" : id === "phone" ? "tel" : id === "city" ? "address-level2" : "off"}
            value={values[id as keyof typeof values]}
            onChange={onChange(id as keyof typeof values)}
            disabled={status === "submitting"}
            className={inputClass}
          />
        </div>
      ))}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-[#8A8A94] text-[10px] tracking-[0.25em] uppercase font-sans">
          How Can We Help?<span className="text-[#C9A84C]/70"> *</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Briefly describe your legal matter..."
          required
          maxLength={5000}
          value={values.message}
          onChange={onChange("message")}
          disabled={status === "submitting"}
          className={`${inputClass} resize-none`}
        />
      </div>

      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        value={botcheck}
        onChange={(e) => setBotcheck(e.target.value)}
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0, pointerEvents: "none" }}
      />

      <p className="text-[#8A8A94] text-xs font-sans mt-1">
        By submitting, you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-[#C9A84C] transition-colors">Privacy Policy</a>.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 px-8 py-4 bg-[#C9A84C] text-[#0A0B0F] text-[11px] tracking-[0.22em] uppercase font-sans font-semibold
                   hover:bg-[#E8C97A] transition-colors duration-300 self-start disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-[#C9A84C] text-sm font-sans mt-2" role="status">
          Thanks — we&apos;ve received your enquiry and will be in touch within 1 business day.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm font-sans mt-2" role="alert">
          Sorry, something went wrong. Please email{" "}
          <a href="mailto:info@abbottsolicitors.com" className="underline">info@abbottsolicitors.com</a> directly.
        </p>
      )}
    </form>
  );
}
