import { useEffect } from "react";

export const MarketingSection = () => {
  useEffect(() => {
    const cardsContainer = document.querySelector(".cards");
    const cardsContainerInner = document.querySelector(".cards__inner");
    const cards = Array.from(document.querySelectorAll(".card"));
    const overlay = document.querySelector(".overlay");

    if (!cardsContainer || !overlay) return;

    const applyOverlayMask = (e: MouseEvent) => {
      const overlayEl = e.currentTarget as HTMLElement;
      const x = e.pageX - cardsContainer.getBoundingClientRect().left;
      const y = e.pageY - cardsContainer.getBoundingClientRect().top;

      overlayEl.style.setProperty("--opacity", "1");
      overlayEl.style.setProperty("--x", `${x}px`);
      overlayEl.style.setProperty("--y", `${y}px`);
    };

    const createOverlayCta = (overlayCard: HTMLElement, ctaEl: Element) => {
      const overlayCta = document.createElement("div");
      overlayCta.classList.add("cta");
      overlayCta.textContent = ctaEl.textContent;
      overlayCta.setAttribute("aria-hidden", "true");
      overlayCard.append(overlayCta);
    };

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = cards.indexOf(entry.target as HTMLElement);
        const width = entry.borderBoxSize[0].inlineSize;
        const height = entry.borderBoxSize[0].blockSize;

        if (cardIndex >= 0 && overlay.children[cardIndex]) {
          (overlay.children[cardIndex] as HTMLElement).style.width = `${width}px`;
          (overlay.children[cardIndex] as HTMLElement).style.height = `${height}px`;
        }
      });
    });

    const initOverlayCard = (cardEl: Element) => {
      const overlayCard = document.createElement("div");
      overlayCard.classList.add("card");
      createOverlayCta(overlayCard, cardEl.lastElementChild!);
      overlay.append(overlayCard);
      observer.observe(cardEl);
    };

    cards.forEach(initOverlayCard);
    document.body.addEventListener("pointermove", applyOverlayMask as any);

    return () => {
      observer.disconnect();
      document.body.removeEventListener("pointermove", applyOverlayMask as any);
    };
  }, []);

  return (
    <main className="main flow" id="marketing">
      <h1 className="main__heading">Seguimos con los precios de 2024. ¡Compra ahora!</h1>
      <div className="main__cards cards">
        <div className="cards__inner">
          <div className="cards__card card">
            <h2 className="card__heading">Básico</h2>
            <p className="card__price">$300.000</p>
            <ul role="list" className="card__bullets flow">
              <li>Redes Sociales</li>
              <li>Integración: Meta Business, Facebook, Instagram y WhatsApp</li>
              <li>Mantenimiento Sitio web **Servicio de mantenimiento exclusivo para nuestros clientes**</li>
            </ul>
            <a href="#basic" className="card__cta cta">¡Contrátalo!</a>
          </div>

          <div className="cards__card card">
            <h2 className="card__heading">Más Popular</h2>
            <p className="card__price">$600.000</p>
            <ul role="list" className="card__bullets flow">
              <li>Acceso a planes avanzados de marketing</li>
              <li>Soporte prioritario por correo electrónico</li>
              <li>Acceso exclusivo a sesiones de Q&A en vivo</li>
            </ul>
            <a href="#pro" className="card__cta cta">Actualizar a Pro</a>
          </div>

          <div className="cards__card card">
            <h2 className="card__heading">Premium</h2>
            <p className="card__price">$900.000</p>
            <ul role="list" className="card__bullets flow">
              <li>Acceso a todos los planes premium</li>
              <li>Soporte prioritario 24/7</li>
              <li>Sesión de coaching virtual mensual</li>
              <li>Contenido exclusivo y acceso anticipado a nuevas funciones</li>
            </ul>
            <a href="#ultimate" className="card__cta cta">Ir a Ultimate</a>
          </div>
        </div>
        <div className="overlay cards__inner"></div>
      </div>
    </main>
  );
};