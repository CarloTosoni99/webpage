import { component$, useStyles$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

import style from './duck.css?inline';

const leftAnim = "duck-left";
const rightAnim = "duck-right";

const duckBasePath = ["imgs/duck/duck", "imgs/duck/skeleduck"];
const duckEndPath = ["1.webp", "2.webp"];

let duckIndex = 0;
const duckChoice = Math.random();
if (duckChoice >= 0.99)
  duckIndex = 1;

interface duck_mq {
  media: string;
}

export default component$<duck_mq>((props) => {
  useStyles$(style);

  let duckAnimTime = 14400;
  if (props.media == "duck-phone") {
    duckAnimTime = 7200;
  }

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
    <div class={`duck-div ${duckToTheLeft.value ? leftAnim : rightAnim}`} id={props.media}>
      { duckToTheLeft.value ?
        <img class="duck" src={`${duckBasePath[duckIndex]}${duckEndPath[0]}`} alt="a duck!" /> :
        <img class="duck" src={`${duckBasePath[duckIndex]}${duckEndPath[1]}`} alt="a duck!" />
      }
    </div>
  );
});