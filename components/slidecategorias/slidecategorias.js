export function initializeHeroSlide() {
  const categories = [
    {
      name: "PC Gamer para jugar GTA VI",
      image: "../../Img/pcgamercdmx.net/GTA-VI.jpeg",
      link: "#",
    },
    {
      name: "PC Gamer para Jugar Call of Duty Black Ops 6",
      image: "../../Img/pcgamercdmx.net/Call-of-Duty-Black-Ops 6.jpeg",
      link: "#",
    },
    {
      name: "PC Gamer para Fortnite",
      image:
        "../../Img/pcgamercdmx.net/MV5BNzU2YTY2OTgtZGZjZi00MTAyLThlYjUtMWM5ZmYzOGEyOWJhXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
      link: "#",
    },
    {
      name: "PC Gamer para Jugar OverWatch 2",
      image:
        "../../Img/pcgamercdmx.net/overwatch-2-beta-nasil-indirilir150146_0.jpg",
      link: "#",
    },
    {
      name: "PC Gamer para Jugar Genshin Impact",
      image: "../../Img/pcgamercdmx.net/81YqH88N8vL._SL1500_.jpg",
      link: "#",
    },
    {
      name: "PC Gamer para Jugar LOL",
      image: "../../Img/pcgamercdmx.net/CNTWUAMXZRF3BPIYPCNPFHOMJQ.jpg",
      link: "#",
    },
    {
      name: "PC Gamer para Streaming",
      image: "../../Img/pcgamercdmx.net/max-duzij-qAjJk-un3BI-unsplash-1.jpg",
      link: "#",
    },
    {
      name: "Pc para Inteligencia Artificial",
      image:
        "../../Img/pcgamercdmx.net/inteligencia-artificial-con-chip-ai-innovacion-tecnologica-futura.jpg",
      link: "#",
    },
    {
      name: "Computadoras para Edición de Video",
      image: "../../Img/pcgamercdmx.net/alex-mccarthy-imfPjidI-QA-unsplash.jpg",
      link: "#",
    },
    {
      name: "Computadora para Edición de Fotografía",
      image:
        "../../Img/pcgamercdmx.net/bailey-mahon-2b6K4uy0Hbc-unsplash-scaled.jpg",
      link: "#",
    },
    {
      name: "Workstation para Modelado y Diseño 3D",
      image: "../../Img/pcgamercdmx.net/pexels-mo-eid-8657665-scaled.jpg",
      link: "#",
    },
    {
      name: "Computadoras para Diseño gráfico",
      image:
        "../../Img/pcgamercdmx.net/emily-bernal-v9vII5gV8Lw-unsplash-scaled.jpg",
      link: "#",
    },
    {
      name: "Computadoras para Programación",
      image:
        "../../Img/pcgamercdmx.net/computer-screen-technology-web-internet-signage-670370-pxhere.com.jpg",
      link: "#",
    },
  ];

  const slider = document.getElementById("cardSlider");
  const btnLeft = document.getElementById("btnLeft");
  const btnRight = document.getElementById("btnRight");

  categories.forEach((category) => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = category.link;

    card.innerHTML = `
        <img src="${category.image}" 
        alt="${category.name}">
        <p>${category.name}</p>
      `;

    slider.appendChild(card);
  });

  // Navegación con botones
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  btnLeft.addEventListener("click", () => {
    slider.scrollBy({ left: -300, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    slider.scrollBy({ left: 300, behavior: "smooth" });
  });
}
