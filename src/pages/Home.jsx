import {
  LockIcon,
  CloudIcon,
  PackageIcon,
  Users,
  GripVertical,
  Triangle,
  Target,
  TrendingUp,
  Network,
  Compass,
  Building,
  Sparkles,
  ArrowRight,
  Layers,
  BarChart3,
  User,
  ShieldCheck,
  MessageSquareQuote,
  Mail,
  HelpCircle,
  Camera,
  Briefcase,
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/navbar/NavBar';

export default function Hero() {
  const [openIndex, setOpenIndex] = useState(null);
  const [inset, setInset] = useState(50);
  const [dragging, setDragging] = useState(false);

  const companyLogos = [
    'slack',
    'framer',
    'netflix',
    'google',
    'linkedin',
    'instagram',
    'facebook',
  ];

  const links = [
    { name: '+91 1234-567-890', href: '#' },
    { name: 'connect2rootsacademy@gmail.com', href: '#' },
    { name: 'Bengaluru, India', href: '#' },
    { name: 'www.connect2rootsacademy.com', href: '#' },
  ];

  const faqs = [
    {
      question: 'How to use this component?',
      answer:
        "To use this component, you need to import it in your project and use it in your JSX code. Here's an example of how to use it:",
    },
    {
      question: 'Are there any other components available?',
      answer:
        "Yes, there are many other components available in this library. You can find them in the 'Components' section of the website.",
    },
    {
      question: 'Are components responsive?',
      answer:
        'Yes, all components are responsive and can be used on different screen sizes.',
    },
    {
      question: 'Can I customize the components?',
      answer:
        "Yes, you can customize the components by passing props to them. You can find more information about customizing components in the 'Customization' section of the website.",
    },
  ];

  const handleMove = (e) => {
    if (!dragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clientX =
      e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;

    let percentage = ((clientX - rect.left) / rect.width) * 100;
    percentage = Math.max(0, Math.min(100, percentage));
    setInset(percentage);
  };

  const FADE_UP = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', duration: 0.8 },
    },
  };

  const STAGGER = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const features = [
    {
      id: 'deforestation',
      title: 'C2R Career Catalyst Mentorship Program',
      image:
        'https://plus.unsplash.com/premium_photo-1661771773771-a093c948ba92?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyZWVyfGVufDB8fDB8fHww',
      href: '#',
    },
    {
      id: 'ocean',
      title: 'Skill Development & Employability Tracks',
      image:
        'https://images.unsplash.com/photo-1617900906639-cab7adceb499?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2tpbGxzfGVufDB8fDB8fHww',
      href: '#',
    },
    {
      id: 'animals',
      title: 'Job Alignment & Placement Support',
      image:
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Sm9ifGVufDB8fDB8fHww',
      href: '#',
    },
  ];

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 90%', 'end 10%'],
  });

  const maxWidth = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['80rem', '100%', '80rem']
  );

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['16px', '0px', '16px']
  );

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.01, 0.96]);

  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('bento-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: 'backOut',
      },
    },
  };

  const gridItems = [
    {
      id: 1,
      title: 'Our Vision',
      icon: Target,
      content:
        'A future where every young adult is strategically guided, skilled for relevance, and sustainably employed in careers that unlock their potential.',
      color: 'bg-white',
      textColor: 'text-gray-900',
      iconColor: 'text-emerald-700',
      accentColor: 'border-emerald-700',
      hasImage: false,
    },
    {
      id: 2,
      title: 'Our Mission',
      icon: Users,
      content:
        'By 2033, guide and empower 1 million youth through our unique Mentor-First Pathway with free, personalized career mentoring leading to secured livelihoods.',
      color: 'bg-white',
      textColor: 'text-white',
      iconColor: 'text-emerald-700',
      accentColor: 'border-emerald-400',
      hasImage: true,
      imageUrl:
        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Mentor-First Pathway',
      icon: TrendingUp,
      content:
        'Bridging the gap between aspiration and opportunity by connecting expertise with need, lived experience with future vision.',
      color: 'bg-emerald-800',
      textColor: 'text-white',
      iconColor: 'text-emerald-200',
      accentColor: 'border-emerald-300',
      hasImage: false,
    },
    {
      id: 4,
      title: 'Demystifying Futures',
      icon: Compass,
      content:
        'Translating emerging sector trends like AI-augmented roles in GCCs into actionable pathways for underserved youth.',
      color: 'bg-white',
      textColor: 'text-gray-900',
      iconColor: 'text-emerald-700',
      accentColor: 'border-emerald-700',
      hasImage: false,
      specialIcon: Sparkles,
    },
    {
      id: 5,
      title: 'Career Resilience',
      icon: Network,
      content:
        'Equipping youth with adaptive mindset and networking skills needed to thrive in a rapidly changing economy.',
      color: 'bg-white',
      textColor: 'text-white',
      iconColor: 'text-emerald-700',
      accentColor: 'border-emerald-700',
      hasImage: true,
      imageUrl:
        'https://images.unsplash.com/photo-1459180129673-eefb56f79b45?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyZWVyfGVufDB8fDB8fHww',
    },
    {
      id: 6,
      title: '2047 Imperative',
      icon: Building,
      content:
        "Preparing today's youth to become architects of a $30-trillion economy, navigating AI, fintech, and sustainable tech landscapes.",
      color: 'bg-emerald-950',
      textColor: 'text-white',
      iconColor: 'text-emerald-300',
      accentColor: 'border-emerald-400',
      hasImage: false,
    },
  ];

  const images = [
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
  ];
  const [activeImage, setActiveImage] = useState(images[0]);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <main>
      <div className="fixed inset-0 -z-10 bg-white">
        {/* Dots layer */}
        <div
          className={[
            'pointer-events-none absolute inset-0',
            'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]',
            'bg-size-[16px_16px]',
            // Mask the edges so the dots fade out toward the sides
            'mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]',
            '[-webkit-mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]',
            'mask-no-repeat [-webkit-mask-repeat:no-repeat]',
          ].join(' ')}
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen w-full relative bg-white">
        {/* Soft Green Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        radial-gradient(circle at center, #8FFFB0, transparent)
      `,
          }}
        />
        {/* Your Content/Components */}
        <div className="min-h-screen pb-20 -mt-20">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black"
          >
            <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-green-300 blur-[100px] opacity-30"></div>

            <div className="flex items-center mt-24">
              <div className="flex items-center mt-24">
                <div className="flex -space-x-3 pr-3">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                    alt="user3"
                    className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-1"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                    alt="user1"
                    className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-2"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                    alt="user2"
                    className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-3"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                    alt="user3"
                    className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-4"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="user5"
                    className="size-8 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-5"
                  />
                </div>

                <div>
                  <div className="flex ">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star text-transparent fill-yellow-600"
                          aria-hidden="true"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                      ))}
                  </div>
                  <p className="text-sm text-gray-700">Used by 10,000+ users</p>
                </div>
              </div>
            </div>

            {/* Heading */}
            <motion.h1
              variants={item}
              className="text-5xl md:text-7xl font-extrabold max-w-4xl text-center mt-4 md:leading-17.5"
            >
              Preparing Bharat’s Youth for{' '}
              <span className="bg-linear-to-r from-green-500 to-green-900 bg-clip-text text-transparent text-nowrap">
                2047:
              </span>{' '}
              Future Jobs, Mentorship & Leadership
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={item}
              className="max-w-2xl text-center text-base my-7"
            >
              We connect students with industry mentors, futuristic skills, and
              corporate partnerships, building a bridge from classroom to career
              in AI, Fintech, Global Captives, and beyond.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={item} className="flex items-center gap-4">
              <a
                href="/"
                className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-9 h-12 m-1 ring-offset-2 ring-1 ring-green-400 flex items-center transition-colors"
              >
                Get started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="ml-1 size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>

              <button className="flex items-center gap-2 border border-slate-400 hover:bg-green-50 transition rounded-xl px-7 h-12 text-slate-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                  <rect x="2" y="6" width="14" height="12" rx="2" />
                </svg>
                <span>Try demo</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Numbers achievements */}
      <section className="-mb-30 -mt-35 py-32 px-4 md:px-16 lg:px-24 xl:px-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="relative overflow-hidden rounded-xl bg-[#142b0b] p-10 md:p-16"
        >
          {/* Heading */}
          <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <BarChart3 className="w-4 h-4" />
            IMPACT AT A GLANCE
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: 'easeOut' },
              },
            }}
            className="flex flex-col gap-4 text-center md:text-left"
          >
            <h2 className="text-4xl font-semibold text-neutral-100">
              Our Achievements in Numbers
            </h2>
            <p className="max-w-xl text-neutral-400">
              Providing businesses with effective tools to improve workflows,
              boost efficiency, and encourage growth.
            </p>
          </motion.div>

          {/* Numbers */}
          <motion.div
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.25,
                  delayChildren: 0.2,
                },
              },
            }}
            className="mt-10 flex flex-wrap justify-between gap-10 text-center"
          >
            {[
              { label: 'Students Impacted', value: '10,000+' },
              { label: 'Active Mentors', value: '800+' },
              { label: 'Institutions', value: '99+' },
              { label: 'Recognized Awards', value: '10+' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: 'easeOut' },
                  },
                }}
                className="flex flex-col gap-4"
              >
                <p className="text-neutral-400">{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl text-neutral-100">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* GRID OVERLAY */}
          <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(to_right,#0001_1px,transparent_1px),linear-gradient(to_bottom,#0001_1px,transparent_1px)] bg-size:[80px_80px] md:block" />
        </motion.div>
      </section>

      {/* why 2047? */}
      <section>
        <div className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <svg
            className="size-full absolute -z-10 inset-0"
            width="1440"
            height="720"
            viewBox="0 0 1440 720"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="#86EFAC"
              strokeOpacity=".7"
              d="M-15.227 702.342H1439.7"
            />
            <circle
              cx="711.819"
              cy="372.562"
              r="308.334"
              stroke="#86EFAC"
              strokeOpacity=".7"
            />
            <circle
              cx="16.942"
              cy="20.834"
              r="308.334"
              stroke="#86EFAC"
              strokeOpacity=".7"
            />
            <path
              stroke="#86EFAC"
              strokeOpacity=".7"
              d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7"
            />
            <circle
              cx="782.595"
              cy="411.166"
              r="308.334"
              stroke="#86EFAC"
              strokeOpacity=".7"
            />
          </svg>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
                    <Compass className="w-4 h-4" />
                    VISION 2047
                  </div>
                  <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Why 2047?
                  </h1>
                  <p className="mt-6 text-xl/8 text-gray-700">
                    India is entering a decisive phase where its young
                    population can become its greatest strength or its biggest
                    missed opportunity. As technology reshapes how we learn,
                    work, and grow, preparing students for the future is no
                    longer optional; it is essential.
                  </p>
                </div>
              </div>
            </div>
            <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="https://plus.unsplash.com/premium_photo-1670002518021-22f130a91f7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudHMlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D"
                className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
                  <p>
                    India stands at a defining moment in its growth journey. As
                    the nation approaches 2047, the centenary of its
                    independence, the challenge is no longer just population
                    size but preparedness. India’s demographic dividend must
                    transform into a skills dividend. With rapid technological
                    advancement reshaping industries, more than 60% of future
                    jobs will demand new-age digital and technical competencies.
                    Our mission is to ensure that every student, regardless of
                    background, is equipped to participate meaningfully in this
                    future so no potential is left behind.
                  </p>
                  <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                      <CloudIcon
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-green-600"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Future-ready skills:
                        </strong>{' '}
                        Preparing students with in-demand digital, technical,
                        and problem-solving capabilities aligned with emerging
                        industries.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <LockIcon
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-green-600"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Inclusive access:
                        </strong>{' '}
                        Bridging the urban–rural and socio-economic skill gap
                        through equitable learning opportunities.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <PackageIcon
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-green-600"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Nation-building impact:
                        </strong>{' '}
                        Empowering youth to contribute to India’s economic
                        growth, innovation, and global competitiveness by 2047.
                      </span>
                    </li>
                  </ul>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Why does 2047 matter?
                  </h2>
                  <p className="mt-6">
                    By 2047, over 60% of jobs will require advanced digital and
                    technical skills that many students today do not have access
                    to. 2047 represents a national milestone—and an urgent
                    deadline—to convert India’s demographic advantage into a
                    skilled, confident, and globally competitive workforce,
                    ensuring no student is left behind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*triange approach */}
      <section ref={sectionRef} className="mb-32">
        <motion.div
          style={{
            maxWidth,
            borderRadius,
            scale,
            opacity,
            y,
          }}
          className="mx-auto bg-[#142b0b] shadow-2xl overflow-hidden"
        >
          <div className="px-6 py-14 sm:px-12 md:px-16 md:py-20 lg:px-24">
            {[...Array(12)].map((_, i) => {
              const animations = [
                { y: [0, -50, 0] },
                { x: [0, 50, 0] },
                { rotate: [0, 180, 360] },
                { scale: [1, 1.5, 1] },
              ];

              return (
                <motion.div
                  key={i}
                  className="absolute text-green-400/25"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={animations[i % animations.length]}
                  transition={{
                    duration: 10 + i,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Triangle size={18 + (i % 4) * 6} />
                </motion.div>
              );
            })}

            {/* HEADING */}
            <div className="relative z-10 text-center mb-14 md:mb-16">
              <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
                <Triangle className="w-4 h-4" />
                OUR APPROACH
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                The TRIANGLE Approach
              </h2>
            </div>

            {/* CONTENT + TRIANGLE */}
            <div className="relative z-10 flex flex-col items-center gap-16 lg:flex-row lg:justify-between">
              {/* LEFT */}
              <div className="space-y-8 max-w-sm text-white">
                {[
                  {
                    title: 'Targeted Futuristic Pathways',
                    text: 'Career tracks aligned with AI, Fintech, GCCs, Green Energy, and Digital Manufacturing.',
                  },
                  {
                    title: 'Applied Learning',
                    text: 'Hands-on exposure through internships, innovation challenges, and real-world projects.',
                  },
                  {
                    title: 'Equity & Access',
                    text: 'Focused outreach to underserved regions, first-generation learners, and women.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <Triangle className="mt-1 text-green-400" size={14} />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CENTER TRIANGLE */}
              <div className="flex justify-center">
                <svg viewBox="0 0 420 380" className="w-56 sm:w-64">
                  <polygon
                    points="210,40 380,320 40,320"
                    fill="none"
                    stroke="#86efac"
                    strokeWidth="3"
                  />
                  <line
                    x1="210"
                    y1="40"
                    x2="210"
                    y2="220"
                    stroke="#86efac"
                    strokeDasharray="6 6"
                  />
                  <line
                    x1="380"
                    y1="320"
                    x2="210"
                    y2="220"
                    stroke="#86efac"
                    strokeDasharray="6 6"
                  />
                  <line
                    x1="40"
                    y1="320"
                    x2="210"
                    y2="220"
                    stroke="#86efac"
                    strokeDasharray="6 6"
                  />

                  <circle cx="210" cy="40" r="18" fill="#22c55e" />
                  <circle cx="380" cy="320" r="18" fill="#22c55e" />
                  <circle cx="40" cy="320" r="18" fill="#22c55e" />
                  <circle cx="210" cy="220" r="26" fill="#16a34a" />

                  <text
                    x="210"
                    y="18"
                    textAnchor="middle"
                    className="fill-green-100 text-sm font-medium"
                  >
                    Government
                  </text>
                  <text
                    x="380"
                    y="350"
                    textAnchor="middle"
                    className="fill-green-100 text-sm font-medium"
                  >
                    Corporate
                  </text>
                  <text
                    x="40"
                    y="350"
                    textAnchor="middle"
                    className="fill-green-100 text-sm font-medium"
                  >
                    NGOs
                  </text>
                  <text
                    x="210"
                    y="226"
                    textAnchor="middle"
                    className="fill-white text-sm font-semibold"
                  >
                    Student
                  </text>
                </svg>
              </div>

              {/* RIGHT */}
              <div className="space-y-8 max-w-sm text-white">
                {[
                  {
                    title: 'Robust Mentor Network',
                    text: 'Corporate professionals guiding students as long-term career catalysts.',
                  },
                  {
                    title: 'Industry–Academia Alignment',
                    text: 'Curriculum co-creation, live projects, and hiring pipelines.',
                  },
                  {
                    title: 'Governance & Impact',
                    text: 'Digital tracking of skills, mentorship outcomes, and placements.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <Triangle className="mt-1 text-green-400" size={14} />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Get involved nd programs */}
      <section className="py-32 px-4 text-center -mt-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center uppercase gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            Participation Framework
          </div>
          <motion.h1
            variants={FADE_UP}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900"
          >
            Opportunities for Collaboration and
            <br />
            <span className="text-green-600">Engagement</span>
          </motion.h1>

          <motion.p
            variants={FADE_UP}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            We invite corporates, government bodies, non-profit organizations,
            volunteers, students, and institutions to engage with us through
            structured partnerships and programs that advance skills development
            and inclusive impact.
          </motion.p>
        </div>

        <div className="flex items-center gap-6 h-100 w-full max-w-5xl mt-10 mx-auto">
          <div className="relative group grow transition-all w-56 h-100 duration-500 hover:w-full">
            <img
              className="h-full w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&h=400&auto=format&fit=crop"
              alt="image"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-3xl">For Corporates:</h1>
              <p className="text-sm">
                Partner with us to co-create industry-relevant curriculum,
                provide mentors, and offer meaningful internship opportunities.
              </p>
            </div>
          </div>
          <div className="relative group grow transition-all w-56 h-100 duration-500 hover:w-full">
            <img
              className="h-full w-full object-cover object-right"
              src="https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&h=400&auto=format&fit=crop"
              alt="image"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-3xl">For Government & NGOs:</h1>
              <p className="text-sm">
                Collaborate with us on large-scale skilling and employability
                missions that drive inclusive growth.
              </p>
            </div>
          </div>
          <div className="relative group grow transition-all w-56 h-100 duration-500 hover:w-full">
            <img
              className="h-full w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&h=400&auto=format&fit=crop"
              alt="image"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-3xl">For Students & Institutions:</h1>
              <p className="text-sm">
                Register for our mentorship programs and gain access to
                guidance, skills, and career pathways.
              </p>
            </div>
          </div>
          <div className="relative group grow transition-all w-56 h-100 duration-500 hover:w-full">
            <img
              className="h-full w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&h=400&auto=format&fit=crop"
              alt="image"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-3xl">Prompt engineers</h1>
              <p className="text-sm">
                Bridging the gap between human intent and machine understanding
                through expert prompt design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <motion.section
        variants={STAGGER}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl px-4 py-16 sm:py-24"
      >
        {/* HERO CONTENT */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center uppercase gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <Layers className="w-4 h-4" />
            OUR PROGRAMS
          </div>
          <motion.h1
            variants={FADE_UP}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900"
          >
            Programs That Enable
            <br />
            Learning, Leadership, and Lasting{' '}
            <span className="text-green-600">Community Impact.</span>
          </motion.h1>

          <motion.p
            variants={FADE_UP}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Structured initiatives designed to empower individuals through
            mentorship, education, and purpose-driven action.
          </motion.p>
        </div>

        <motion.div
          variants={STAGGER}
          className="mt-16 grid grid-cols-1 gap-6 sm:mt-24 md:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.a
              key={feature.id}
              href={feature.href}
              variants={FADE_UP}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="block"
            >
              <div className="group h-full overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md">
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition group-hover:bg-gray-200">
                      <svg
                        className="h-5 w-5 text-gray-600 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>

      {/* comparision Section */}
      <section className="w-full py-20 lg:py-32 ">
        <div className="mx-auto max-w-7xl px-6 bg-[#142b0b] p-10 md:p-16 rounded-xl">
          <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            IMPACT & PROGRESS
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="flex flex-col gap-6 max-w-xl">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-100">
                Changing lives through mentorship and access
              </h2>

              <p className="text-base leading-relaxed text-neutral-400">
                Through focused mentorship, real world exposure, and sustained
                guidance, we have helped students break barriers that once felt
                unreachable. Our approach goes beyond academics building
                confidence, clarity, and direction for learners navigating
                complex personal and professional journeys.
              </p>

              <button className="w-fit rounded-md border border-neutral-600 px-6 py-3 text-sm font-medium text-neutral-100 bg-neutral-800 hover:bg-green-800 transition">
                Read more
              </button>
            </div>

            {/* RIGHT COMPARISON BOX */}
            <div className="w-full max-w-lg ml-auto">
              <div
                className="relative aspect-video w-full overflow-hidden rounded-xl select-none"
                onMouseMove={handleMove}
                onMouseUp={() => setDragging(false)}
                onMouseLeave={() => setDragging(false)}
                onTouchMove={handleMove}
                onTouchEnd={() => setDragging(false)}
              >
                {/* Divider line */}
                <div
                  className="absolute top-0 z-20 h-full w-0.5 bg-green-500"
                  style={{ left: `${inset}%` }}
                >
                  <button
                    className="absolute top-1/2 -translate-y-1/2 -ml-3 flex h-10 w-6 items-center justify-center rounded-md bg-white shadow border cursor-ew-resize hover:scale-110 transition"
                    onMouseDown={(e) => {
                      setDragging(true);
                      handleMove(e);
                    }}
                    onTouchStart={(e) => {
                      setDragging(true);
                      handleMove(e);
                    }}
                  >
                    <GripVertical className="h-4 w-4 text-green-600" />
                  </button>
                </div>

                {/* Top image */}
                <img
                  src="https://images.unsplash.com/photo-1650954224577-5086da8f3599?w=900&auto=format&fit=crop&q=60"
                  alt="Before"
                  className="absolute inset-0 z-10 h-full w-full object-cover rounded-2xl border border-neutral-400"
                  style={{ clipPath: `inset(0 0 0 ${inset}%)` }}
                  draggable={false}
                />

                {/* Bottom image */}
                <img
                  src="https://images.unsplash.com/photo-1635002249922-272946a8b677?w=900&auto=format&fit=crop&q=60"
                  alt="After"
                  className="absolute inset-0 h-full w-full object-cover rounded-2xl border-2 border-neutral-400"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento */}
      <section
        id="bento-section"
        className="min-h-screen bg-linear-to-b from-white to-emerald-50 py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
              <ShieldCheck className="w-4 h-4" />
              CORE PILLARS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Building Futures, One Connection at a Time
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to empower India's youth through
              strategic guidance, industry-aligned skilling, and sustainable
              employment pathways.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]"
          >
            {gridItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                className={`
                ${item.color} 
                ${item.textColor} 
                rounded-2xl 
                border ${item.accentColor} 
                overflow-hidden 
                shadow-lg 
                shadow-emerald-900/5 
                hover:shadow-xl 
                hover:shadow-emerald-900/10 
                transition-shadow 
                duration-300
                relative
                group
                ${
                  item.id === 2 || item.id === 5
                    ? 'md:col-span-1 lg:col-span-1'
                    : ''
                }
              `}
              >
                {/* Content Container */}
                <div className="p-6 h-full flex flex-col relative z-10">
                  {/* Icon */}
                  <motion.div
                    variants={iconVariants}
                    className={`
                    w-12 h-12 
                    rounded-xl 
                    flex items-center justify-center 
                    ${item.iconColor} 
                    bg-emerald-50/10 
                    mb-4
                    ${
                      item.textColor.includes('white')
                        ? 'bg-white/10'
                        : 'bg-emerald-100'
                    }
                  `}
                  >
                    {item.specialIcon ? (
                      <item.specialIcon className="w-6 h-6" />
                    ) : (
                      <item.icon className="w-6 h-6" />
                    )}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Content */}
                  <p className="text-sm leading-relaxed opacity-90 grow">
                    {item.content}
                  </p>

                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-emerald-600" />
                  </div>
                </div>

                {/* Background Image for specific boxes */}
                {item.hasImage && item.imageUrl && (
                  <div className="absolute inset-0 z-0">
                    <div
                      className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent"
                      aria-hidden="true"
                    />
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div
                  className={`
                  absolute 
                  top-0 
                  left-0 
                  right-0 
                  h-1 
                  ${item.accentColor.replace('border-', 'bg-')}
                  transform 
                  origin-left 
                  scale-x-0 
                  group-hover:scale-x-100 
                  transition-transform 
                  duration-300
                `}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 mb-6">
              Join us in shaping the future of India's workforce
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-6 py-3 bg-green-700 text-white rounded-md font-medium hover:bg-green-800 transition-colors duration-300 shadow-lg shadow-green-700/20">
                Start Your Journey
              </button>
              <button className="px-6 py-3 bg-white text-green-700 border border-green-200 rounded-md font-medium hover:bg-green-50 transition-colors duration-300">
                Become a Mentor
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logos */}
      <section className="mt-20">
        <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

        <div className="overflow-hidden mb-30 w-full relative max-w-5xl mx-auto select-none">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />
          <div
            className="marquee-inner flex will-change-transform min-w-[200%]"
            style={{ animationDuration: '15s' }}
          >
            <div className="flex">
              {[...companyLogos, ...companyLogos].map((company, index) => (
                <img
                  key={index}
                  src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                  alt={company}
                  className="w-full h-full object-cover mx-6"
                  draggable={false}
                />
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="text-center mb-30">
        <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
          <MessageSquareQuote className="w-4 h-4" />
          VOICES OF IMPACT
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Students Say
        </h1>
        <p className="text-sm md:text-base text-gray-500 mt-4">
          Join thousand of successful students who transformed their careers
          with us
        </p>
        <div className="flex flex-wrap justify-center gap-5 mt-16 text-left">
          <div className="w-80 flex flex-col items-start border border-gray-200 p-5 rounded-lg bg-white">
            <svg
              width="44"
              height="40"
              viewBox="0 0 44 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203"
                fill="#12831f"
              />
            </svg>
            <div className="flex items-center justify-center mt-3 gap-1">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
            </div>
            <p className="text-sm mt-3 text-gray-500">
              I've been using imagify for nearly two years, primarily for
              Instagram, and it has been incredibly user-friendly, making my
              work much easier.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img
                className="h-12 w-12 object-cover border-3 border-green-500 rounded-full"
                src="https://plus.unsplash.com/premium_photo-1722682239201-21c8173e776b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGluZGlhbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D"
                alt="userImage1"
              />
              <div>
                <h2 className="text-lg text-gray-900 font-medium">
                  Aditya Sharma
                </h2>
                <p className="text-sm text-gray-500">SWE 1 @ Amazon</p>
              </div>
            </div>
          </div>

          <div className="w-80 flex flex-col items-start border border-gray-200 p-5 rounded-lg bg-white">
            <svg
              width="44"
              height="40"
              viewBox="0 0 44 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203"
                fill="#12831f"
              />
            </svg>
            <div className="flex items-center justify-center mt-3 gap-1">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
            </div>
            <p className="text-sm mt-3 text-gray-500">
              I've been using imagify for nearly two years, primarily for
              Instagram, and it has been incredibly user-friendly, making my
              work much easier.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img
                className="h-12 w-12 object-cover border-3 border-green-500 rounded-full"
                src="https://plus.unsplash.com/premium_photo-1708271598513-d30915fcfbb4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGluZGlhbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D"
                alt="userImage2"
              />
              <div>
                <h2 className="text-lg text-gray-900 font-medium">
                  Khushi Chopra
                </h2>
                <p className="text-sm text-gray-500">SWE 2 @ Amazon</p>
              </div>
            </div>
          </div>

          <div className="w-80 flex flex-col items-start border border-gray-200 p-5 rounded-lg bg-white">
            <svg
              width="44"
              height="40"
              viewBox="0 0 44 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203"
                fill="#12831f"
              />
            </svg>
            <div className="flex items-center justify-center mt-3 gap-1">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
            </div>
            <p className="text-sm mt-3 text-gray-500">
              I've been using imagify for nearly two years, primarily for
              Instagram, and it has been incredibly user-friendly, making my
              work much easier.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img
                className="h-12 w-12 object-cover border-3 border-green-500 rounded-full"
                src="https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMGZhY2UlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D"
                alt="userImage3"
              />
              <div>
                <h2 className="text-lg text-gray-900 font-medium">
                  Akshat Gupta
                </h2>
                <p className="text-sm text-gray-500">SWE 2 @ Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact us */}
      <section>
        <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
          <img
            alt=""
            src="https://plus.unsplash.com/premium_photo-1674588218207-474f9ca6d3d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGlyYW5nYXxlbnwwfHwwfHx8MA%3D%3D"
            className="absolute inset-0 -z-10 size-full object-cover object-right opacity-10 md:object-center"
          />
          <div
            aria-hidden="true"
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#eb6207] to-[#00cb11] opacity-25"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-15"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
                <Mail className="w-4 h-4" />
                GET IN TOUCH
              </div>
              <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Contact Us
              </h2>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
                Have a question or looking to collaborate? We’re here to help
                and would love to hear from you. Reach out to us for any
                inquiries, partnerships, or support, we’ll get back to you soon.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <a key={link.name} href={link.href}>
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="flex flex-col items-center  space-y-6 py-12">
        {/* Main Image */}
        <div className="w-full max-w-3xl text-center">
          <div className="inline-flex uppercase mt-20 items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            OUR GALLERY
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Memories That Inspire Change
          </h1>
          <p className="text-sm md:text-base text-gray-500 mt-4 mb-20">
            Capturing real moments from the field that define our purpose and
            progress.
          </p>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-100">
            <img
              src={activeImage}
              alt="Main"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid w-full max-w-3xl grid-cols-4 gap-4">
          {images.map((img, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveImage(img)}
              className={`relative w-full overflow-hidden rounded-lg bg-gray-100 transition-all
              ${
                activeImage === img
                  ? 'ring-2 ring-black'
                  : 'hover:ring-2 hover:ring-black/40'
              }`}
            >
              {/* Force height + aspect */}
              <div className="aspect-[16/9] min-h-[70px] md:min-h-[100px]">
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Faq */}
      <section>
        <div className="max-w-xl mt-30 mb-20 mx-auto flex flex-col items-center justify-center px-4 md:px-0">
          <div className="inline-flex uppercase items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h1 className="text-3xl font-semibold text-center">
            Looking for answer?
          </h1>
          <p className="text-sm text-slate-500 mt-2 pb-8 text-center">
            Find quick answers to the most common questions about our programs,
            partnerships, and processes. Our FAQs are designed to give you
            clarity and help you get started with confidence.
          </p>
          {faqs.map((faq, index) => (
            <div
              className="border-b border-slate-200 py-4 cursor-pointer w-full"
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium">{faq.question}</h3>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    openIndex === index ? 'rotate-180' : ''
                  } transition-all duration-500 ease-in-out`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#1D293D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${
                  openIndex === index
                    ? 'opacity-100 max-h-75 translate-y-0 pt-4'
                    : 'opacity-0 max-h-0 -translate-y-2'
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
