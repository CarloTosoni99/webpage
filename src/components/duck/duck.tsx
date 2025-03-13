import { component$, useStyles$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

import style from './duck.css?inline';

const leftAnim = "duck-left";
const rightAnim = "duck-right";

const duckAnimTime = 16000;

const duckBasePath = ["imgs/duck/duck", "imgs/duck/skeleduck"];
const duckEndPath = ["1.webp", "2.webp"];

let duckIndex = 0;
const duckChoice = Math.random();
if (duckChoice >= 0.99)
  duckIndex = 1;

export default component$(() => {
  useStyles$(style);

  const duckToTheLeft = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    duckToTheLeft.value = true;
    const duckDirection = setInterval(() => {
      duckToTheLeft.value = !duckToTheLeft.value;
    }, duckAnimTime);

    return () => clearInterval(duckDirection);
  });

  return (
    <div class={`duck-div ${duckToTheLeft.value ? leftAnim : rightAnim}`}>
      { duckToTheLeft.value ?
        <img class="duck" src={`${duckBasePath[duckIndex]}${duckEndPath[0]}`} alt="a duck!" /> :
        <img class="duck" src={`${duckBasePath[duckIndex]}${duckEndPath[1]}`} alt="a duck!" />
      }
    </div>
  );
});