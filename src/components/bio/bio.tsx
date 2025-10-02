import { component$, useStyles$ } from '@builder.io/qwik';
import Image from '../../imgs/io.jpeg?jsx';

import style from './bio.css?inline';

import { aboutPresentation } from "~/data/aboutdata"; 

interface blog {
  data: aboutPresentation
}

export default component$<blog>((props) => {
  useStyles$(style);

  return (
    <div id="maindiv">
      <div id='left-dim'>
        <div class='box'>
          <h1>{props.data.name}</h1>
          <p>{
            props.data.welcomePar.map((item) => (
              item.isText ? item.content : 
              <a class="hyplink" href={item?.hrefDest}>{item.content}</a>
          ))}</p>
        </div>
        <div class='box'>
          <h2>{props.data.title}</h2>
          <p>{props.data.phdPres1}</p>
          <p>{props.data.phdPres2}</p>
        </div>
      </div>
      <div id='right-dim'>
        <div class='box' id='right-div'>
          <Image id='io' alt="that's me!"></Image>
        </div>
      </div>
    </div>
  );
});