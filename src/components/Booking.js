import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const barbers = ["Marcus Sterling", "Isabella Rose", "James Mitchell", "Any Available"];

const services = [
  "Men's Haircut",
  "Women's Haircut",
  "Kids Haircut",
  "Beard Trim",
  "Hot Towel Shave",
  "Full Color",
  "Highlights",
  "Styling",
];

const timeSlots = [
  "9:00 AM","10:00 AM","11:00 AM","12:00 PM",
  "1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM",
];

const Booking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    barber: "",
    service: "",
    date: "",
    time: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Booking Confirmed! You’ll receive an email shortly.");

    setIsSubmitting(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
      barber: "",
      service: "",
      date: "",
      time: "",
    });
  };

  // Simple SVG icons
  const Icon = ({ children }) => (
    <span className="text-primary w-4 h-4 inline-flex items-center">{children}</span>
  );

  return (
    <section id="booking" className="py-24 lg:py-32 relative overflow-hidden bg-[#0e0e0e] text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111]/50 to-black" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-500/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-yellow-500 text-sm font-semibold tracking-wider uppercase mb-4">
              Book Online
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Make a <span className="text-yellow-500">Reservation</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Schedule your appointment online and experience our premium grooming services.
            </p>
          </div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-3xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Row 1 */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="flex items-center gap-2 mb-1">
                    <Icon>👤</Icon> Full Name
                  </label>
                  <input
                    className="w-full h-12 rounded-xl bg-white/5 border border-gray-700 focus:border-yellow-500 px-4"
                    placeholder="John Doe"
                    value={formData.name}
                    required
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 mb-1">
                    <Icon>✉️</Icon> Email
                  </label>
                  <input
                    type="email"
                    className="w-full h-12 rounded-xl bg-white/5 border border-gray-700 focus:border-yellow-500 px-4"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 mb-1">
                    <Icon>📞</Icon> Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full h-12 rounded-xl bg-white/5 border border-gray-700 focus:border-yellow-500 px-4"
                    placeholder="+1 (555) 000-0000"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 mb-1">
                    <Icon>💈</Icon> Choose Barber
                  </label>
                  <select
                    className="w-full h-12 rounded-xl bg-white/5 border border-gray-700 focus:border-yellow-500 px-4"
                    value={formData.barber}
                    required
                    onChange={(e) => setFormData({ ...formData, barber: e.target.value })}
                  >
                    <option value="">Select barber</option>
                    {barbers.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 mb-1">
                    <Icon>✂️</Icon> Choose Service
                  </label>
                  <select
                    className="w-full h-12 rounded-xl bg-white/5 border border-gray-700 focus:border-yellow-500 px-4"
                    value={formData.service}
                    required
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="">Select service</option>
                    {services.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 mb-1">
                    <Icon>📅</Icon> Pick Date
                  </label>
                  <input
                    type="date"
                    className="w-full h-12 rounded-xl bg-white/5 border border-gray-700 focus:border-yellow-500 px-4"
                    value={formData.date}
                    required
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 mb-1">
                    <Icon>⏰</Icon> Pick Time
                  </label>
                  <select
                    className="w-full h-12 rounded-xl bg-white/5 border border-gray-700 focus:border-yellow-500 px-4"
                    value={formData.time}
                    required
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button
                disabled={isSubmitting}
                className="w-full h-14 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black text-lg font-bold transition-all shadow-xl hover:shadow-yellow-500/30"
              >
                {isSubmitting ? "Booking..." : "Confirm Booking"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
