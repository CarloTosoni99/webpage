import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Topbar from '../../components/topbar/topbar';
import Pubs from '../../components/pubs/pubs';

import publications from "~/data/pubsdata";



export default component$(() => {

  return(
    <section>
      <Topbar page={2}/>
      <Pubs data={publications} />        
    </section>
  );
});

export const head: DocumentHead = {
  title: "My publications",
  meta: [
    {
      name: "description",
      content: "A list of all my publications",
    },
  ],
};