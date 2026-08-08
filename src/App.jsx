import React, { useState } from 'react';
import { 
  School, BookOpen, Users, Award, MapPin, Phone, Mail, Clock, 
  ChevronRight, CheckCircle, GraduationCap, Laptop, BookMarked, 
  Menu, X, Heart, Star, Send, Building2, UserCheck
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    classApplying: 'Class 6',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phone) {
      alert('Please fill in student name and phone number.');
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar */}
      <div className="bg-blue-900 text-blue-100 text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-amber-400" /> Mohammadabad, Ghazipur, Uttar Pradesh (Pin: 233227)</span>
            <span className="hidden md:inline text-blue-300">|</span>
            <span className="flex items-center gap-1.5"><Phone size={14} className="text-amber-400" /> +91 9415XXXXXX / Est. 2004</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-amber-500 text-blue-950 font-semibold px-2 py-0.5 rounded text-xs">Pvt. Unaided Co-Ed</span>
            <span className="bg-blue-800 text-blue-200 px-2 py-0.5 rounded text-xs">English Medium</span>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <School size={28} />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-blue-950 tracking-tight leading-none">Ideal Public School</h1>
              <p className="text-xs text-slate-500 font-medium mt-1">Mohammadabad, Ghazipur, U.P. • Est. 2004</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#academics" className="hover:text-blue-600 transition-colors">Academics</a>
            <a href="#facilities" className="hover:text-blue-600 transition-colors">Facilities</a>
            <a href="#faculty" className="hover:text-blue-600 transition-colors">Faculty</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-semibold shadow-sm transition-all transform hover:-translate-y-0.5">
              Admissions Open 2026
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium border-b border-slate-100">About</a>
            <a href="#academics" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium border-b border-slate-100">Academics</a>
            <a href="#facilities" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium border-b border-slate-100">Facilities</a>
            <a href="#faculty" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium border-b border-slate-100">Faculty</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium border-b border-slate-100">Contact</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-center bg-blue-600 text-white py-2.5 rounded-lg font-semibold shadow">
              Admissions Open 2026
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-800/80 border border-blue-700/50 text-blue-200 px-3.5 py-1.5 rounded-full text-xs font-medium backdrop-blur">
                <Star size={14} className="text-amber-400 fill-amber-400" />
                <span>22+ Years of Academic Excellence in Mohammadabad, Ghazipur</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Nurturing Young Minds for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Brighter Future</span>
              </h2>
              <p className="text-lg text-blue-100/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Ideal Public School provides top-tier English Medium education from Pre-Primary to Class 8. Focused on holistic growth, strong moral values, and academic rigor in Ghazipur, UP.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a href="#contact" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2">
                  Apply for Admission <ChevronRight size={18} />
                </a>
                <a href="#about" className="w-full sm:w-auto bg-white/10 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur border border-white/20 transition-all flex items-center justify-center">
                  Discover Our School
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6">
                <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4 flex items-center gap-2">
                  <Award className="text-amber-400" /> School Quick Snapshot
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-900/50 p-4 rounded-2xl border border-blue-800">
                    <p className="text-3xl font-extrabold text-amber-400">2004</p>
                    <p className="text-xs text-blue-200 mt-1 font-medium">Established Year</p>
                  </div>
                  <div className="bg-blue-900/50 p-4 rounded-2xl border border-blue-800">
                    <p className="text-3xl font-extrabold text-amber-400">27</p>
                    <p className="text-xs text-blue-200 mt-1 font-medium">Classrooms</p>
                  </div>
                  <div className="bg-blue-900/50 p-4 rounded-2xl border border-blue-800">
                    <p className="text-3xl font-extrabold text-amber-400">28</p>
                    <p className="text-xs text-blue-200 mt-1 font-medium">Expert Teachers</p>
                  </div>
                  <div className="bg-blue-900/50 p-4 rounded-2xl border border-blue-800">
                    <p className="text-3xl font-extrabold text-amber-400">600+</p>
                    <p className="text-xs text-blue-200 mt-1 font-medium">Library Books</p>
                  </div>
                </div>
                <div className="text-xs text-blue-200/80 bg-blue-950/60 p-3.5 rounded-xl border border-blue-900 flex items-center gap-2">
                  <CheckCircle size={16} className="text-emerald-400 shrink-0" />
                  <span>Private Unaided Co-Educational English Medium Institution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs bg-blue-50 px-3 py-1 rounded-full">About Ideal Public School</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Dedicated to Excellence in Education Since 2004</h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Located in Mohammadabad, Ghazipur (UP), Ideal Public School is committed to shaping disciplined, confident, and knowledgeable young individuals equipped for the modern world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 space-y-4 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl">
                <Building2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Heritage & Status</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Established in 2004 as a Private Unaided Co-Educational institution. We provide comprehensive English Medium schooling from Pre-Primary up to Class 8 under professional guidance.
              </p>
              <ul className="space-y-2 pt-2 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-600" /> Co-Educational Campus</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-600" /> English Medium Curriculum</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-600" /> Pre-Primary to Class 8</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 space-y-4 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center font-bold text-xl">
                <UserCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Head Teacher's Message</h3>
              <blockquote className="text-slate-600 text-sm italic leading-relaxed">
                "Education is not merely the accumulation of facts, but the training of the mind to think. At Ideal Public School, Mohammadabad, our mission is to empower every child with strong moral grounding, academic curiosity, and life skills."
              </blockquote>
              <div className="pt-2 border-t border-slate-200">
                <p className="font-bold text-slate-900 text-sm">Shri Krishna Ram</p>
                <p className="text-xs text-slate-500">Head Teacher & Principal</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 space-y-4 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-xl">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Mission & Values</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We foster a safe, inclusive, and stimulating environment where students discover their true potential through interactive learning, moral education, and extracurricular engagement.
              </p>
              <ul className="space-y-2 pt-2 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-600" /> Moral & Ethical Development</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-600" /> Interactive & Activity Based</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-600" /> Individual Student Attention</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="py-20 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs bg-blue-50 px-3 py-1 rounded-full">Academic Programs</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Comprehensive Curriculum for Growing Minds</h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Structured learning paths tailored for each developmental stage, ensuring deep understanding and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md shadow-blue-500/20">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Pre-Primary Section</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Playgroup, Nursery, LKG, and UKG. Designed with joyful learning techniques, motor skill development, basic phonics, and socialization.
              </p>
              <div className="pt-2 text-xs font-semibold text-blue-600">Activity-Based • Caring Environment</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md shadow-indigo-500/20">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Primary Classes (1 - 5)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Building robust foundations in English, Hindi, Mathematics, Environmental Studies, General Knowledge, and Computer Science.
              </p>
              <div className="pt-2 text-xs font-semibold text-indigo-600">Strong Foundations • Conceptual Clarity</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md shadow-amber-500/20">
                <BookMarked size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Middle School (6 - 8)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Advanced core subjects including Science (Physics, Chemistry, Biology), Social Science, Sanskrit/Urdu, and analytical Mathematics.
              </p>
              <div className="pt-2 text-xs font-semibold text-amber-600">Analytical Thinking • Board Prep Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs bg-blue-50 px-3 py-1 rounded-full">Campus Infrastructure</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">World-Class Facilities for Student Success</h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Providing a secure, well-equipped, and conducive environment for academic and co-curricular pursuits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">
                <Building2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">27 Spacious Classrooms</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Well-ventilated, bright, and spacious classrooms designed to maintain an optimal student-teacher ratio for personalized attention.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center font-bold">
                <BookMarked size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Library with 600+ Books</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Rich collection of textbooks, encyclopedias, storybooks, and reference materials encouraging a lifelong habit of reading.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold">
                <Laptop size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Computer Laboratory</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Equipped with modern computers (5 PCs) with high-speed connectivity, introducing students to essential digital literacy from an early age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="py-20 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs bg-blue-900 px-3 py-1 rounded-full border border-blue-800">Our Educators</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Experienced & Passionate Faculty</h2>
            <p className="text-blue-200 text-base sm:text-lg">
              Our 28 dedicated educators combine professional teaching expertise with genuine care for every student's growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-900/60 border border-blue-800 p-8 rounded-2xl space-y-3">
              <div className="text-4xl font-extrabold text-amber-400">28</div>
              <h3 className="text-lg font-bold text-white">Total Dedicated Teachers</h3>
              <p className="text-sm text-blue-200">Qualified professionals committed to academic excellence and moral guidance.</p>
            </div>

            <div className="bg-blue-900/60 border border-blue-800 p-8 rounded-2xl space-y-3">
              <div className="text-4xl font-extrabold text-amber-400">18</div>
              <h3 className="text-lg font-bold text-white">Male Educators</h3>
              <p className="text-sm text-blue-200">Experienced faculty members specializing in sciences, mathematics, and sports.</p>
            </div>

            <div className="bg-blue-900/60 border border-blue-800 p-8 rounded-2xl space-y-3">
              <div className="text-4xl font-extrabold text-amber-400">10</div>
              <h3 className="text-lg font-bold text-white">Female Educators</h3>
              <p className="text-sm text-blue-200">Nurturing mentors specializing in pre-primary care, languages, and arts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions & Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-xs bg-blue-50 px-3 py-1 rounded-full">Get In Touch</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Admission Enquiries & Contact Details</h2>
              <p className="text-slate-600 text-base">
                Admissions for the academic session 2026-27 are now open. Reach out to our administrative office or submit the enquiry form.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">School Address</h4>
                    <p className="text-slate-600 text-sm mt-0.5">Ideal Public School, Mohammadabad, Ghazipur, Uttar Pradesh - 233227</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Phone Number</h4>
                    <p className="text-slate-600 text-sm mt-0.5">+91 9415XXXXXX / +91 542XXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">School Hours</h4>
                    <p className="text-slate-600 text-sm mt-0.5">Monday to Saturday: 8:00 AM – 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-200">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Enquiry Submitted Successfully!</h3>
                  <p className="text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-slate-900">{formData.parentName || 'Parent'}</span>. Our admissions team at Ideal Public School, Mohammadabad will contact you shortly regarding <span className="font-semibold text-slate-900">{formData.studentName}</span>.
                  </p>
                  <button 
                    onClick={() => { setFormSubmitted(false); setFormData({ studentName: '', parentName: '', classApplying: 'Class 6', phone: '', email: '', message: '' }); }}
                    className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-xl shadow transition"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Online Admission Enquiry</h3>
                    <p className="text-slate-500 text-sm mt-1">Fill out the form below and our office will get back to you.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Student's Full Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.studentName}
                        onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                        placeholder="e.g. Aarav Sharma" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Parent / Guardian Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                        placeholder="e.g. Rajesh Sharma" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Class Applying For *</label>
                      <select 
                        value={formData.classApplying}
                        onChange={(e) => setFormData({...formData, classApplying: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition"
                      >
                        <option>Pre-Primary (Nursery/LKG/UKG)</option>
                        <option>Class 1</option>
                        <option>Class 2</option>
                        <option>Class 3</option>
                        <option>Class 4</option>
                        <option>Class 5</option>
                        <option>Class 6</option>
                        <option>Class 7</option>
                        <option>Class 8</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="e.g. 9876543210" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Additional Message / Query</label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Any specific question regarding admission, transport, or fee structure..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={18} /> Submit Admission Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <School size={20} />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Ideal Public School</p>
              <p className="text-xs text-slate-500">Mohammadabad, Ghazipur, UP (Est. 2004)</p>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Ideal Public School. All rights reserved. Private Unaided Co-Ed English Medium Institution.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#academics" className="hover:text-white transition">Academics</a>
            <a href="#facilities" className="hover:text-white transition">Facilities</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
