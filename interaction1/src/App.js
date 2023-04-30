import "./App.scss";
import People from "./images/interaction-img-1.jpg";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import gsap, { TweenMax, Power2, TimelineLite } from "gsap";
import { useEffect, useRef, useState } from "react";
import { Timeline } from "gsap/gsap-core";

function App() {
  const container = useRef();
  const image = useRef();
  const tl = gsap.timeline();

  useEffect(() => {
    const imageReavel = CSSRulePlugin.getRule(".img-container:after");
    console.log(imageReavel);
    tl.to(container.current, 0, { css: { visibility: "visible" } })
      .to(imageReavel, 1.4, { width: "0%", ease: Power2.easeInOut })
      .from(image.current, 1.4, {
        scale: 1.6,
        easePower: Power2.ease,
        delay: -1.5,
      });
  }, []);

  return (
    <section className="main">
      <div ref={container} className="container">
        <>
          <div className="img-container">
            <img ref={image} src={People} />
          </div>
        </>
      </div>
    </section>
  );
}

export default App;
