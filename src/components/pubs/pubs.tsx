import { component$, useStyles$ } from '@builder.io/qwik';

import Article from '~/components/article/article';
import style from './pubs.css?inline';

import { listItem } from "~/data/pubsdata";



const arXivSearchLink = "https://arxiv.org/search/cs?searchtype=author&query=Tosoni,+C";

interface pubs {
  data: listItem[]
}

export default component$<pubs>((props) => {
  useStyles$(style);

  return (
    <div class='main'>
      <h1 class='title' id='pubs-title'>My Publications</h1>
      {props.data.map((item) => (
        item.ispub ? 
          <Article key={item.pubsdata?.url} data={item.pubsdata}/> :
          <div key={item.year} class="pub-year-container"><h2 class="pub-year">{item.year}</h2><hr class="sep"/></div>
      ))}
      <p id='pubs-arXiv-par'>Can't you access the articles? <a class="hyplink" href={arXivSearchLink} target="_blank">Download them from arXiv</a>!</p>
    </div>
  );
});