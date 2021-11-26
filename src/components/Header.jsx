import styles from "../App.module.css";
import {useI18n} from "../i18n/context";
import {createSelector} from "solid-js";

function Header(props) {
  const i18n = useI18n();
  const isSelected = createSelector(() => i18n.language);
  const availableLocales = () => [
    {title: 'English', code: 'en'},
    {title: 'Greek', code: 'el'}
  ];
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <a
          className={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          {i18n.t('title')}
        </a>
        <select className={styles.languageSwitcher} onChange={(e) => props.onChange(e.target.value)}>
          <For each={availableLocales()}>
            {(item) => <option value={item.code} selected={isSelected(item.code)} classList={{ active: isSelected(item.code) }}>{item.title}</option>}
          </For>
        </select>
      </header>
    </div>
  )
}

export default Header;