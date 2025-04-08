import { component$, useStyles$ } from '@builder.io/qwik';
import Image from '../../imgs/io.jpeg?jsx';

import Duck from '~/components/duck/duck';

import style from './presentation.css?inline';


interface blog {
  data: {
    name: string,
    myPres: string, 
    title: string,
    phdPres1: string,
    phdPres2: string
  }
}

export default component$<blog>((props) => {
  useStyles$(style);

  return (
    <div id="maindiv">
      <Duck media="duck-phone"/>
      <div id='left_dim'>
        <div class='box'>
          <h1>{props.data.name}</h1>
          <p>{props.data.myPres}</p>
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