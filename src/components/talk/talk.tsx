import { component$, useStyles$ } from '@builder.io/qwik';

import style from './talk.css?inline';

import { presentation } from "~/data/presdata";

interface articledata {
  data: presentation
}

export default component$<articledata>((props) => {
  useStyles$(style);

  return (
    <div class='box talk'>
      <div class='talk-left-dim'>
        <h3 id='talk-header'><span id='talk-title'>Title: </span>{props.data.title}</h3>
        <p class='talk-section'><span class='talk-content'>Event: </span>{props.data.event}</p>
        <p class='talk-section'><span class='talk-content'>Venue: </span>{props.data.venue}</p>
        <p class='talk-section'><span class='talk-content'>Date: </span>{props.data.date}</p>
        <p class='talk-section'><span class='talk-content'>Description: </span>{props.data.description}</p>
      </div>
        <object class='talk-right-dim' id='talk-pdf' data="/presentations/SPIRE_2025.pdf" type="application/pdf" width="100%" height="500px">
          <p>Unable to preview, <a href="/presentations/SPIRE_2025.pdf">download</a> here instead.</p>
        </object>
    </div>
  );
});