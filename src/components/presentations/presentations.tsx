import { component$, useStyles$ } from '@builder.io/qwik';

import style from './presentations.css?inline';
import Talk from '~/components/talk/talk';

import { presentation } from "~/data/presdata";

interface pres {
  data: presentation[]
}

export default component$<pres>((props) => {
  useStyles$(style);

  return (
    <div class='main'>
      <h1 class='title'>My Presentations</h1>
      <p>In this page you can find a selection of presentations given by me</p>
      {props.data.map((item) => (
        <Talk key={item.title} data={item} />
      ))} 
    </div>
  );
});