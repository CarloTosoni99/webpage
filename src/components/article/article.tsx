import { component$, useStyles$ } from '@builder.io/qwik';

import style from './article.css?inline';

import { article } from "~/data/pubsdata";

interface articledata {
  data?: article
}


const notAvailableString = "not available yet";
const doiUrl = "https://doi.org/";


export default component$<articledata>((props) => {
  useStyles$(style);

  return (
    <div>
      <div class='box pub' >
        <div class='pub-img'>
          <img class='pub-logo' src={props.data?.image} alt="SPIRE logo"/>
        </div>
        <div class='pub-content'>
          <h3>Title: <span class='pub-content-category'>{props.data?.title}</span></h3>
          <h3>Authors: <span class='pub-content-category'>{props.data?.authors}</span></h3>
          <h3>{props.data?.conference ? "Conference:" : "Journal:"} <span class='pub-content-category'>{props.data?.name}</span></h3>
          <h3>Date: <span class='pub-content-category'>{props.data?.date}</span> Doi: {props.data?.doi !== notAvailableString ? <a class="hyplink" href={`${doiUrl}${props.data?.doi}`} target="_blank">{props.data?.doi}</a> : <span class='pub-content-category'>{notAvailableString}</span>}</h3>
        </div>
      </div>
      <hr class="sep"/>
    </div>
  );
});