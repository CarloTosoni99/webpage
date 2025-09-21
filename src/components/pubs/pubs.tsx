import { component$, useStyles$ } from '@builder.io/qwik';

import Article from '~/components/article/article';
import style from './pubs.css?inline';

import { listItem } from "~/data/pubsdata";



interface pubs {
  data: listItem[]
}

export default component$<pubs>((props) => {
  useStyles$(style);

  return (
    <div class='main'>
      <h1 class='title' id='title-pubs'>My Publications</h1>
      {props.data.map((item) => (
        item.ispub ? <Article key={item.pubsdata?.doi} data={item.pubsdata}/> : <div key={item.year} class="year"><h2>{item.year}</h2></div>
      ))} 
    </div>
  );
});