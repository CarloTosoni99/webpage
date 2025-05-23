import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Topbar from '~/components/topbar/topbar';
import Presentation from '~/components/presentation/presentation';
import Duck from '~/components/duck/duck';

import dataAbout from "~/data/aboutdata";


export default component$(() => {
  return (
    <section>
      <Topbar page={3}/>
      <div class="main">
        <Duck media="duck-laptop"/>
        <Presentation data={dataAbout} />
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Carlo Tosoni's webpage",
  meta: [
    {
      name: "description",
      content: "This is my personal webpage!",
    },
  ],
};


