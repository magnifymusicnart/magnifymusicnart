/* ============================================================
   MAGNIFY MUSIC AND ART CENTRE — SITE CONTENT
   ============================================================
   Edit everything in THIS file to update the website.
   You never need to touch index.html, styles.css, or script.js
   for normal updates — just change the text below and save.

   Rules to keep things from breaking:
   - Keep the quote marks "like this" around every piece of text.
   - Keep the commas at the end of each line.
   - If you're not sure, just change the words INSIDE the quotes.
   ============================================================ */

const SITE_CONTENT = {

  business: {
    name: "Magnify Music and Art Centre",
    shortName: "Magnify Music and Art Centre",
    tagline: "Music and art lessons in Kajang — piano, strings, voice, guitar, ukulele, and creative art classes for all ages.",
    email: "magnifymusicnart@gmail.com",
    phone: "011-2675 6780",
    phoneLink: "tel:+601126756780",
    address: "20-1, Mutiara Avenue, Jalan Mutiara 1A, Mutiara Heights, 43000 Kajang, Selangor",
    facebook: "https://web.facebook.com/p/Magnify-Music-and-Art-Centre-61587418019094/?_rdc=1&_rdr#",
    instagram: "https://www.instagram.com/magnifymusicnart/",
    mapEmbedQuery: "20-1, Mutiara Avenue, Jalan Mutiara 1A, Mutiara Heights, 43000 Kajang, Selangor"
  },

  hero: {
    eyebrow: "Kajang, Selangor",
    headline: "Every voice, every instrument, finds its stage here.",
    subheadline: "Magnify Music and Art Centre is a home for young and adult learners in Kajang to study piano, strings, guitar, voice, and visual art — one lesson at a time.",
    ctaPrimary: "Enrol Now",
    ctaSecondary: "View Courses"
  },

  /* COURSES — add, remove, or edit any course below.
     "note" controls where the little coloured dot sits on the staff
     graphic — this is decorative and can be left as-is. */
  courses: [
    {
      name: "Piano",
      description: "From first notes to grade exams and performance repertoire, taught one-on-one at your own pace.",
      note: "G4"
    },
    {
      name: "Guitar",
      description: "Acoustic and contemporary guitar for beginners through to advanced players.",
      note: "D4"
    },
    {
      name: "Ukulele",
      description: "A friendly first instrument for young beginners, or a fun second instrument for anyone.",
      note: "A4"
    },
    {
      name: "Violin",
      description: "Foundational technique, tone, and musicianship for young learners and returning players.",
      note: "E5"
    },
    {
      name: "Cello",
      description: "Individual cello tuition covering technique, repertoire, and ensemble-readiness.",
      note: "C3"
    },
    {
      name: "Vocal",
      description: "Vocal technique, breath control, and performance confidence for singers of all levels.",
      note: "B4"
    },
    {
      name: "Art & Craft",
      description: "Drawing, painting, and hands-on craft classes that build creative confidence.",
      note: "F4"
    }
  ],

  /* SERVICES — the centre's rentals and facility offerings. */
  services: [
    {
      name: "Music Room / Instrument Rental",
      description: "Book a fully equipped practice room or rent an instrument for individual practice sessions."
    },
    {
      name: "Recital Space Rental",
      description: "A ready-made performance space for recitals, small showcases, and student concerts."
    },
    {
      name: "Grand Piano Rental",
      description: "Access to a grand piano for serious practice, exam preparation, or recording sessions."
    },
    {
      name: "Recording Purposes",
      description: "A quiet, acoustically considered space suited to audio recording sessions."
    }
  ],

  about: {
    heading: "About Magnify",
    paragraphs: [
      "Magnify Music and Art Centre was founded to give students in Kajang a place to grow musically and creatively — one lesson, one recital, one small breakthrough at a time.",
      "Our teaching is led with a performer's ear and an educator's patience, covering piano and strings alongside guitar, ukulele, vocal, and visual art, for beginners through to exam-track students."
    ]
  },

  contact: {
    heading: "Get in touch",
    subheading: "Questions about enrolment, room rental, or class schedules — send us a message and we'll get back to you.",
    formSubjectDefault: "New enquiry from website"
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "Courses", href: "#courses" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ],

  footer: {
    note: "Magnify the Journey, Discover the Magnificent"
  }
};
