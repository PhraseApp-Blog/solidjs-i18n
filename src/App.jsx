import i18n from './i18n/config';
import {onMount, createSignal,} from "solid-js";
import {Show} from "solid-js";
import {I18nProvider} from "./components/I18nProvider";
import i18next from "i18next";
import Header from "./components/Header";
import Messages from "./components/Messages";
import {createI18n} from "./i18n/context";
const msgList = [
  {
    topic: "Event Cancelled",
    body: "The Fundraising event was cancelled"
  },
  {
    topic: "Notification send",
    body: "Check your email box for more information"
  }
]

function App() {
  const [loaded, setLoaded] = createSignal(false);
  const [i18nStore, updateStore] = createI18n(i18next);
  onMount(async () => {
    await i18n;
    updateStore(i18next);
    setLoaded(true);
  });

  const handleOnChange = (lang) => {
    i18next.changeLanguage(lang).then(() => {
      updateStore(i18next);
      setTimeout(null, 10);
    })
  }
  return (
    <Show
      when={loaded()}
    >
      <I18nProvider i18n={i18nStore}>
        <Header onChange={handleOnChange}/>
        <Messages messages={msgList}/>
      </I18nProvider>

    </Show>
  );
}

export default App;