import { component$, useStyles$, useSignal } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';

import style from './topbar.css?inline';


export default component$((props: {page: Number}) => {

  useStyles$(style)

  const showMenu = useSignal(false);

  return (
    <div class='bar'>
      <div class='bar-list'>
        <Link class={[
          'link', 'drop-down',
          props.page==1 ? 'current' : '',
          showMenu.value ? '' : 'dontshow',
        ]} href="/contacts/">Contacts</Link>
        <Link class={[
          'link', 'drop-down',
          props.page==2 ? 'current' : '',
          showMenu.value ? '' : 'dontshow',
        ]} href="/publications/">Publications</Link>
        <Link class={[
          'link', 'drop-down',
          props.page==3 ? 'current' : '',
          showMenu.value ? '' : 'dontshow',
        ]} href="/">About</Link>
        <div id='bar-button-div'>
          <button 
            class='drop-down' id='bar-button-menu'
            onClick$={() => showMenu.value = !showMenu.value}
          >
            Menu
          </button>
        </div>
      </div>
    </div>
  );
});