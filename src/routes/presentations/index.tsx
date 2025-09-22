import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Topbar from '../../components/topbar/topbar';
import Presentations from '../../components/presentations/presentations';

import presList from "~/data/presdata";


export default component$(() => {

  return(
    <section>
      <Topbar page={2}/>
      <Presentations data={presList} />
    </section>
  );
});

export const head: DocumentHead = {
  title: "My presentations",
  meta: [
    {
      name: "description",
      content: "Presentations given",
    },
  ],
};