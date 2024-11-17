import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
// import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import bootstrapWhite from "../../assets/icons/bootstrap-white.svg";
import php from "../../assets/icons/php.svg";
import mysql from "../../assets/icons/mysql.svg";
import laravel from "../../assets/icons/laravel.svg";
// import axiosicon from "../../assets/icons/axiosicon.svg";
// import spotifyicon from "../../assets/icons/spotifyicon.svg";
// import netlifyicon from "../../assets/icons/netlifyicon.svg";
// import rendericon from "../../assets/icons/rendericon.svg";
// import jwticon from "../../assets/icons/jwticon.svg";
import vscode from "../../assets/icons/vscode.svg";
import composer from "../../assets/icons/composer.svg";
import filament from "../../assets/icons/FilamentLaravel.svg"
import git from "../../assets/icons/git.svg";
import github from "../../assets/icons/github.svg";
import githubWhite from "../../assets/icons/github-white.svg"
import Math from "../../assets/img/math.jpeg";
import resep from "../../assets/img/resep.jpeg";
import portfolio from "../../assets/img/portfolio.jpeg";
import musicPlayer from "../../assets/img/music-player.jpeg";
import miniGames from "../../assets/img/mini-game.jpeg"
import jadwal from "../../assets/img/apk-jadwal-guru.jpeg"
import deliRecipe from "../../assets/img/delirecipe.jpeg";
import recipeReact from "../../assets/img/recipereact.jpeg"
import film from "../../assets/img/film.jpeg";
import profilepicture from "../img/reyyy.jpeg";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiMail } from "react-icons/fi";
// import Imprint from "../../components/Imprint";
// import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    de: "Hai, Saya Reyhan",
    en: "Hi, I'm Reyhan",
  },
  subtitle: "Fullstack Developer ",
  description: {
    de: "Nama saya Reyhan, siswa kelas 11 di SMKN 1 Banjar jurusan Rekayasa Perangkat Lunak. Saya memiliki hasrat untuk menciptakan solusi perangkat lunak yang inovatif dan meningkatkan keterampilan coding saya.",
    en: "My name is Reyhan, an 11th-grade student at SMKN 1 Banjar specializing in Software Engineering. I have a passion for creating innovative software solutions and improving my coding skills.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Hubungi Saya",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Project Saya",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "music player",
    description:
      "Ini adalah website pemutar musik sederhana dengan javascript dan bootstrap.",
    description_EN:
      "This is a simple music player website with javascript and bootstrap.",
    technologies: [
      { name: "JavaScript", icon: javascripticon },
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Bootstrap", icon: bootstrap },
    ],
    image: musicPlayer,
    deploymenturl: "https://musicaudio.netlify.app/",
    githuburl: "https://github.com/Reyhansyah11/musik",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "rock paper scissors",
    description:
      "permainan batu, gunting, kertas sederhana dengan javascript dan bootstrap.",
    description_EN:
      "simple rock, scissors, paper game with javascript and bootstrap.",
    technologies: [
      { name: "JavaScript", icon: javascripticon },
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Bootstrap", icon: bootstrap },
    ],
    image: miniGames,
    deploymenturl: "https://permainansuit.netlify.app/",
    githuburl: "https://github.com/Reyhansyah11/",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "MATH EDUCATION",
    description:
      "website pertama saya yang membawakan tema kelas online matematika. Website yang memberikan beberapa fitur menarik dan pilihan kelas matematika.",
    description_EN:
      "My first website with a maths online class theme. A website that provides some interesting features and maths class options.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Bootstrap", icon: bootstrap },
    ],
    image: Math,
    deploymenturl: "https://kelas-math.vercel.app/",
    githuburl: "https://github.com/Reyhansyah11/kelas-math",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "List Film API",
    description:
      "project consume API. Yang membawakan materi list film.Website ini menggunakan teknologi react dan API dari themoviedb",
    description_EN:
      "project consume API. This website uses react technology and API from themoviedb.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Node.js", icon: nodejsicon },
      { name: "Tailwind", icon: tailwindcssicon },
      { name: "Api", icon: apiicon },
    ],
    image: film,
    deploymenturl: "https://list-film-sigma.vercel.app/",
    githuburl:
      "https://github.com/Reyhansyah11/list-film",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "ALS FOOD",
    description:
      "Website Pertama saya yang menggunakan database. Ini adalah website bertemakan daftar resep makanan, yang dimana resep di inputkan oleh user melalui form dan di simpan di database",
    description_EN:
      "My first website that uses a database. This is a website with the theme of a list of food recipes, where recipes are inputted by the user through a form and stored in the database.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "PHP", icon: php },
      { name: "Bootstrap", icon: bootstrap },
      { name: "mysql", icon: mysql },
    ],
    image: resep,
    deploymenturl: "https://resep.sinaukode.my.id/index.php",
    githuburl: "https://github.com/Reyhansyah11/buku_resepp",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Portfolio",
    description:
      "Website Portfolio Pertama saya yang menggunakan teknologi ReactJS.",
    description_EN: "My first portfolio website that uses ReactJS technology.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Node.js", icon: nodejsicon },
    ],
    image: portfolio,
    deploymenturl: "https://reyyyyy.vercel.app/",
    githuburl: "https://github.com/Reyhansyah11/reyy",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Lesson Schedule App",
    description:
      "Ini adalah Aplikasi Pertama. aplikasi ini di bangun untuk membuat jadwal pelajaran sesuai dengan jadwal pelajaran yang ada di sekolah. teknologi yang di gunakan berupa React Native dan tailwind css",
    description_EN:
      "This is the first application. this application is built to create a lesson schedule according to the existing lesson schedule at school. the technology used is React Native and tailwind css.",
    technologies: [
      { name: "JavaScript", icon: javascripticon },
      { name: "TypeScript", icon: typescripticon },
      { name: "Tailwind", icon: tailwindcssicon },
      { name: "React Native", icon: reacticon },
      { name: "Node.js", icon: nodejsicon },
    ],
    image: jadwal,
    deploymenturl: "/",
    githuburl: "https://github.com/Reyhansyah11/Aplikasi-Jadwal-Pelajaran",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "API Recipe",
    description:
      "Ini adalah api. website ini menyediakan halaman dashbord admin yang memilik fungsi CRUD untuk daftar resep makanan",
    description_EN:
      "This is an API. This website provides an admin dashbord page that has CRUD functionality for a list of food recipes",
    technologies: [
      { name: "Laravel", icon: laravel},
      { name: "Composer", icon: composer },
      { name: "Filament", icon: filament },
      { name: "mysql", icon: mysql },
      { name: "PHP", icon: php },
      { name: "Bootstrap", icon: bootstrap },
    ],
    image: deliRecipe,
    deploymenturl: "https://recipe.sinaukode.my.id/admin",
    githuburl: "https://github.com/Reyhansyah11/RecipeLaravel",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Deli Recipe",
    description:
      "project recipe part 2, menggunakan react js. dan API",
    description_EN:
      "project recipe part 2, using react js. and APIs",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "TypeScript", icon: typescripticon },
      { name: "React", icon: reacticon },
      { name: "Node.js", icon: nodejsicon },
      { name: "Tailwind", icon: tailwindcssicon },
      { name: "Api", icon: apiicon },
    ],
    image: recipeReact,
    deploymenturl: "https://recipe-psi-seven.vercel.app/",
    githuburl:
      "https://github.com/Reyhansyah11/recipe",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: "Lebih Banyak Proyek di Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Bootstrap",
        hash: "#Bootstrap",
        icon: [bootstrap, bootstrapWhite], // Array dengan 2 versi icon
        color: ["#000000", "#FFFFFF"], // Array dengan 2 warna
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "PHP",
        hash: "#PHP",
        icon: php,
        color: "#777BB4",
      },
      {
        title: "Laravel",
        hash: "#Laravel",
        icon: laravel,
        color: "#FF2D20",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Tools",
    skills: [
      {
        title: "VsCode",
        hash: "#VsCode",
        icon: vscode,
        color: "#21759B",
      },
      {
        title: "Git",
        hash: "#Git",
        icon: git,
        color: "#F24E1E",
      },
      {
        title: "Github",
        hash: "#Github",
        icon: [github, githubWhite], // Ubah menjadi array dengan 2 versi
        color: ["#171515", "#FFFFFF"], // Warna hitam untuk light mode, putih untuk dark mode
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Keterampilan", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Proyek", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Tentang saya", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Kontak", en: "Contact", hash: "#contact", icon: GoMail },
] as const;


export const sideBarRightMail = {
  link: "mailto:mr.reihansyah@gmail.com",
  text: "myemail@com",
} as const;

export const sideBarLeftSocials = [

  {
    link: "https://github.com/Reyhansyah11",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:mr.reihansyah@gmail.com",
    icon: FiMail,
    altimgname: "Gmail",
  },
] as const;

export const quotesData = [
  {
    de: '"Namun, untuk mengejar mimpi, kita harus menerima tantangan dan perjalanan yang diperlukan."',
    en: `"Yet, to chase dreams, we must embrace challenges and the required journey."`,
    author: "Reyhan",
  },
  {
    de: '"Web seperti kanvas, dan kode adalah catnya. Ciptakan karya Anda."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Tentang Saya",
  title_EN: "About me",
  description: "Beberapa cuplikan kode tentang saya",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Hobi Saya",
      description:
        "Di luar akademis, saya senang bermain bulu tangkis untuk tetap aktif dan fokus. Selamat datang di portofolio saya, di mana saya memamerkan proyek-proyek saya dan berbagi perjalanan saya di bidang teknologi.",
      icon: hardwareicon,
    },
    {
      title: "aplikasi mobile",
      description:
        "selain web development saya juga tertarik dengan mobile development akhir akhir ini saya belajar membuat aplikasi mobile menggunakan react native",
      icon: caricon,
    },
    {
      title: "Kegembiraan Penemuan sebagai Motto Hidup",
      description:
        "Perjalanan saya sebagai pengembang web hanyalah sebagian dari perjalanan hidup saya. Saya hidup dengan moto bahwa petualangan hanya dimulai ketika Anda meninggalkan yang sudah dikenal. Menemukan tempat dan budaya baru adalah bentuk inspirasi kreatif saya.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "My Hobbys",
      description:
        "Outside of academics, I enjoy playing badminton to stay active and focused. Welcome to my portfolio, where I showcase my projects and share my journey in technology.",
      icon: hardwareicon,
    },
    {
      title: "mobile apps",
      description:
        "besides web development I am also interested in mobile development lately I am learning to make mobile applications using react native.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Kontak",
    en: "Contact",
  },
  description: {
    de: "Tuliskan pesan kepada saya dan saya akan menghubungi Anda.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Nama Anda",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Silakan isi nama Anda",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "E-Mail Anda",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Silakan isi email Anda",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Subjek Anda",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Silakan isi subjek Anda",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Pesan anda",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Silakan isi pesan Anda",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Kirim",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Saya setuju bahwa Alpay dapat menggunakan data pribadi saya (nama dan alamat email) untuk menghubungi saya.",
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Dengan mengirimkan permintaan ini, Anda mengakui bahwa Anda telah membaca Kebijakan Pribadi",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Demo langsung akan segera dibuka. Memulai server...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Terima kasih atas email Anda. Saya akan menghubungi Anda kembali secepatnya",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Sayangnya, pengiriman email Anda tidak berhasil. Silakan coba lagi nanti",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Silakan isi nama Anda",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "ID",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
