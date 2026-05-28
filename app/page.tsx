export default function FutureIndiaFoundationWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-orange-500 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              FUTURE INDIA FOUNDATION
            </h1>
            <p className="text-xl mb-6">
              Empowering Youth, Transforming India
            </p>
            <p className="text-lg mb-8">
              Education • Skill Development • Health & Care • Community Support
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
                Join Us
              </button>

              <button className="bg-orange-600 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
                Donate Now
              </button>
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

      {/* About Section */}
      <section className="py-20 px-6 bg-orange-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Support Our Mission
          </h2>

          <p className="text-lg mb-8">
            Your small contribution can change someone's future.
            Help us support education, healthcare and needy families.
          </p>

          <button className="bg-orange-600 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
            Donate Now
          </button>
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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Our Services</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">📚</div>
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
<section className="py-20 px-6 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-10">
      Contact Us
    </h2>

    <form className="grid gap-6">
      <input
        type="text"
        placeholder="Your Name"
        className="border p-4 rounded-2xl"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="border p-4 rounded-2xl"
      />

      <input
        type="text"
        placeholder="Phone Number"
        className="border p-4 rounded-2xl"
      />

      <textarea
        placeholder="Your Message"
        rows={5}
        className="border p-4 rounded-2xl"
      ></textarea>

      <button className="bg-blue-700 text-white py-4 rounded-2xl text-xl font-semibold">
        Send Message
      </button>
    </form>
  </div>
</section>
      {/* Contact */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

          <p className="text-xl mb-4">
            FUTURE INDIA FOUNDATION
          </p>

          <p className="mb-2">Delhi, India</p>
          <p className="mb-2">futureindiafoundation.ngo@gmail.com</p>
          <p className="mb-8">+91-9643005599</p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
  href="https://instagram.com/yourusername"
  target="_blank"
  className="bg-pink-600 px-6 py-3 rounded-2xl font-semibold text-white"
>
  Instagram
</a>

            <a
  href="https://facebook.com/yourusername"
  target="_blank"
  className="bg-blue-800 px-6 py-3 rounded-2xl font-semibold text-white"
>
  Facebook
</a>

            <a
  href="https://youtube.com/@yourchannel"
  target="_blank"
  className="bg-red-600 px-6 py-3 rounded-2xl font-semibold text-white"
>
  YouTube
</a>
          </div>
        </div>
      </section>

      {/* Footer */}
<footer className="bg-black text-white text-center py-6">
  <p>
    © 2026 Future India Foundation | All Rights Reserved
  </p>
</footer>

{/* WhatsApp Button */}
<a
  href="https://wa.me/919643005599"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl hover:scale-110 transition"
>
  WhatsApp
</a>

</div>
);
}