"use client";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      {[
        { id: "name",  label: "Full Name",   type: "text",  placeholder: "Your full name" },
        { id: "email", label: "Email",        type: "email", placeholder: "your@email.com" },
        { id: "phone", label: "Phone Number", type: "tel",   placeholder: "+44 ..." },
        { id: "city",  label: "City / Town",  type: "text",  placeholder: "Your city" },
      ].map(({ id, label, type, placeholder }) => (
        <div key={id} className="flex flex-col gap-1.5">
          <label htmlFor={id} className="text-[#8A8A94] text-[10px] tracking-[0.25em] uppercase font-sans">{label}</label>
          <input id={id} type={type} placeholder={placeholder}
            className="bg-transparent border border-[#C9A84C]/20 px-4 py-3 text-[#F0EDE6] text-sm font-sans placeholder:text-[#8A8A94]/50
                       focus:outline-none focus:border-[#C9A84C]/60 transition-colors duration-200" />
        </div>
      ))}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-[#8A8A94] text-[10px] tracking-[0.25em] uppercase font-sans">How Can We Help?</label>
        <textarea id="message" rows={5} placeholder="Briefly describe your legal matter..."
          className="bg-transparent border border-[#C9A84C]/20 px-4 py-3 text-[#F0EDE6] text-sm font-sans placeholder:text-[#8A8A94]/50
                     focus:outline-none focus:border-[#C9A84C]/60 transition-colors duration-200 resize-none" />
      </div>
      <button type="submit"
        className="mt-2 px-8 py-4 bg-[#C9A84C] text-[#0A0B0F] text-[11px] tracking-[0.22em] uppercase font-sans font-semibold
                   hover:bg-[#E8C97A] transition-colors duration-300 self-start">
        Send Message
      </button>
    </form>
  );
}
