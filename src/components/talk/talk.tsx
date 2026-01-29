import { component$, useStyles$, useSignal } from '@builder.io/qwik';

import style from './talk.css?inline';

import { presentation } from "~/data/presdata";

interface articledata {
  data: presentation
}

export default component$<articledata>((props) => {
  useStyles$(style);

  const isVisible = useSignal(false);

  return (
    <div>
      <hr class="sep"/>
      <div class="box talk-box">
        <div id="talk-header-div">
          <h3>{props.data.title}</h3>
          <button class={`button talk-header-button ${isVisible.value ? "talk-header-button-clicked" : ""}`} 
            onClick$={() => isVisible.value = !isVisible.value}>
            {isVisible.value ? "shrink" : "expand"}
          </button>
        </div>
        <div class={`talk ${isVisible.value ? "talk-show" : ""}`}>
          <div class='talk-left-dim'>  
            <p class='talk-section'><span class='talk-content'>Event: </span>{props.data.event}</p>
            <p class='talk-section'><span class='talk-content'>Venue: </span>{props.data.venue}</p>
            <p class='talk-section'><span class='talk-content'>Date: </span>{props.data.date}</p>
            <p class='talk-section'><span class='talk-content'>Description: </span>{props.data.description}</p>
            <p id='talk-slide-link'><a class="hyplink" id="talk-hyplink" href={props.data.pdflocation} target="_blank">Download here the slides</a></p>
          </div>
          <object class='talk-right-dim' id='talk-pdf' data={props.data.pdflocation} type="application/pdf" width="100%" height="500px">
            <p>Unable to preview, <a href="/presentations/SPIRE_2025.pdf">download</a> here instead.</p>
          </object>
        </div>
      </div>
    </div>
  );
});