"use client";

import Image from "next/image";
import { useState } from "react";
export default function FutureIndiaFoundationWebsite(): import("react/jsx-runtime").JSX.Element {

  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="bg-white shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

    <div className="flex items-center gap-4">
      <Image
        src="/future-india-logo.png"
        alt="Future India Foundation"
        width={100}
        height={100}
      />
      <h1 className="text-3xl font-bold text-blue-900">
        Future India Foundation
      </h1>
    </div>

    <div className="hidden md:flex gap-8 font-medium">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>

    <a
  href="https://wa.me/919643005799?text=I%20want%20to%20donate"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-orange-500 text-white px-5 py-2 rounded-lg"
>
  Donate
</a>

  </div>
</nav>
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-900 via-blue-700 to-orange-500 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div>

  <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
    🇮🇳 Registered NGO • Empowering Communities
  </span>

  <h1 className="text-5xl font-bold leading-tight mb-6">
    FUTURE INDIA FOUNDATION
  </h1>

  <p>
    Empowering Youth, Transforming India
  </p>

</div>
            <p className="text-lg mb-8">
              Education • Skill Development • Health & Care • Community Support
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
                Join Us
              </button>

              <a
  href="https://wa.me/919643005799?text=I%20want%20to%20donate"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-orange-600 text-white px-4 py-4 rounded-2xl font-semibold text-xl shadow-lg hover:scale-105 transition"
>
  Donate Now
</a>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop"
              alt="NGO"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>
{/* Statistics Section */}
<section className="bg-white py-12">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

      <div>
        <h3 className="text-4xl font-bold text-blue-900">200+</h3>
        <p>Students Supported</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-blue-900">40+</h3>
        <p>Villages Reached</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-blue-900">10+</h3>
        <p>Health Camps</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-blue-900">10+</h3>
        <p>Years of Service</p>
      </div>

    </div>
  </div>
</section>
      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Support Our Mission
          </h2>

          <p className="text-lg mb-8">
            Your small contribution can change someone's future.
            Help us support education, healthcare and needy families.
          </p>

        <a
  href="upi://pay?pa=prajapati.uday1@ybl&pn=Future%20India%20Foundation&cu=INR"
  className="bg-orange-600 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition inline-block"
>
  Donate Now
</a>

<div className="mt-8 flex flex-col items-center">
  <img
    src="/upi-qr.jpeg"
    alt="Donate via UPI"
    className="w-64 h-64 rounded-xl shadow-lg"
  />

  <p className="mt-4 text-lg font-semibold">
    Scan & Donate via UPI
  </p>

  <p className="text-gray-600">
    UPI ID: prajapati.uday1@ybl
  </p>
</div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg leading-8 max-w-4xl mx-auto">
            Future India Foundation is a social welfare NGO dedicated to helping
            underprivileged children, empowering youth through skill development,
            supporting women empowerment, organizing health camps, and creating
            better opportunities for communities across India.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Our Services</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">{"\u{1F4DA}"}</div>  {/* 📚 */}
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <p>
                Free tuition, notebook distribution, scholarship guidance and digital learning support.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-4">Skill Development</h3>
              <p>
                Computer training, spoken English, job guidance and digital skills programs.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold mb-4">Health Support</h3>
              <p>
                Free medical camps, blood donation drives and medicine support for needy people.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-4">Social Welfare</h3>
              <p>
                Food distribution, clothes donation, community support and emergency help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-8">
              To empower youth and underprivileged communities through education,
              skill development, healthcare awareness and social welfare activities.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg leading-8">
              To build a stronger and better India where every individual gets equal opportunities,
              support and respect.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Our Activities</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl shadow-xl h-72 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl shadow-xl h-72 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl shadow-xl h-72 w-full object-cover"
            />
          </div>
        </div>
      </section>
<section id="contact" className="py-20 px-6 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-10">
      Contact Us
    </h2>

    <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="grid gap-6"
>
  <input
    type="hidden"
    name="access_key"
    value="0d47af21-4249-4cf4-ad7f-c144e5a05114"
  />

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="border p-4 rounded-2xl"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    className="border p-4 rounded-2xl"
    required
  />

  <input
    type="text"
    name="phone"
    placeholder="Phone Number"
    className="border p-4 rounded-2xl"
  />

  <textarea
    name="message"
    placeholder="Your Message"
    rows={5}
    className="border p-4 rounded-2xl"
    required
  ></textarea>

  <button
  type="submit"
  disabled={loading}
  className="bg-blue-700 text-white py-4 rounded-2xl text-xl font-semibold"
>
  {loading ? "Sending..." : "Send Message"}
</button>
</form>
  </div>
</section>
      {/* Footer */}
<footer className="bg-blue-900 text-white py-10 px-6">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-6">
  Connect With Us
</h2>

    <h3 className="text-2xl font-bold mb-4">
      Future India Foundation
    </h3>

    <p className="mb-2">📍 India</p>
    <p className="mb-2">✉ futureindiafoundation.ngo@gmail.com</p>
    <p className="mb-4">📞 +91 9643005599</p>

    {/* Social Media Buttons */}
    <div className="flex justify-center gap-4 flex-wrap mb-6">
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-600 px-6 py-3 rounded-2xl font-semibold text-white hover:bg-pink-700 transition"
      >
        Instagram
      </a>

      <a
        href="https://facebook.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 px-6 py-3 rounded-2xl font-semibold text-white hover:bg-blue-800 transition"
      >
        Facebook
      </a>

      <a
        href="https://youtube.com/@yourchannel"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 px-6 py-3 rounded-2xl font-semibold text-white hover:bg-red-700 transition"
      >
        YouTube
      </a>
    </div>

    <div className="border-t border-blue-700 mt-6 pt-6">
      <p>© 2026 Future India Foundation. All Rights Reserved.</p>
    </div>

  </div>
</footer>

{/* WhatsApp Button */}
<a
  href="https://wa.me/919643005599"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl hover:scale-110 transition"
>
  WhatsApp
</a>
</div>
);
}