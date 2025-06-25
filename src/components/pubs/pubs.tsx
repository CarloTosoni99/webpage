import { component$, useStyles$ } from '@builder.io/qwik';

import Article from '~/components/article/article';
import style from './pubs.css?inline';


interface article {
  title: string;
  authors: string;
  conference: boolean;
  name: string;
  image: string;
  date: string;
  doi: string;
}

interface pubs {
  data: article[]
}

export default component$<pubs>((props) => {
  useStyles$(style);

  return (
    <div class='main'>
      <h1 class='title'>My Publications</h1>
      {props.data.map((article) => (
        <Article key={article.doi} data={article}/>
      ))} 
    </div>
  );
});