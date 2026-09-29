/* ==========================================================
   Переключение языка сайта «Путешествия по России»
   ----------------------------------------------------------
   Разметка:
     data-i18n="ключ"            → текст элемента (textContent)
     data-i18n-alt="ключ"        → атрибут alt
     data-i18n-title="ключ"      → атрибут title
     data-i18n-aria-label="ключ" → атрибут aria-label
     data-lang="ru|en"           → кнопка переключения языка
   Ключ — путь в объекте translations через точку: "lead.title"
   ========================================================== */

const translations = {
  ru: {
    meta: {
      title: 'Путешествия по России',
    },
    header: {
      logoTitle: 'Россия',
      logoAlt: 'Логотип сайта',
      btnRu: 'Переключить на русский язык',
      btnEn: 'Переключить на английский язык',
    },
    lead: {
      title: 'Путешествия по России',
      subtitle: 'Настоящая страна не в выпусках новостей, а здесь.',
      imageAlt: 'Карта путешествия',
      caption: 'ваша полка — верхняя',
    },
    info: {
      title: 'Чего мы там не видели?',
      text:
        'По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36% планируют провести отпуск в родной стране. ' +
        'Мол, чего мы тут, дома, не видели? На самом деле, Россия — это целая вселенная с ласковым морем юга, густыми лесами Саян ' +
        'и суровыми льдами плато Путорана. А ещё увидеть все эти красоты можно без миллионов на счету, загранпаспорта и ' +
        'многочасовых перелетов. Как, например, Вера Башмакова — смелая молодая мама, которая взяла в охапку троих детей, ' +
        'усадила их в свою «Ладу» и проехала 20 тысяч километров по родной стране. Мы выбрали и описали некоторые интересные ' +
        'места, достойные вашего отпуска.',
      timeZones: 'Часовых поясов',
      naturalHeritage: 'Объектов природного наследия ЮНЕСКО',
      culturalHeritage: 'Объектов культурного наследия ЮНЕСКО',
      reserves: 'Природных заповедников',
      airports: 'Аэропортов',
    },
    photoGrid: {
      train: 'Поезд',
      atharvaTulsi: 'Атхарва Тулси',
      fog: 'Туман',
      sochi: 'Сочи',
      arisa: 'Ариса',
      baikal: 'Байкал',
      elbrus: 'Эльбрус',
      kondratiev: 'Кондратьев',
      kamchatka1: 'Камчатка 1',
      kamchatka2: 'Камчатка 2',
      baikal2: 'Байкал 2',
      ergaki: 'Эргаки',
    },
    places: {
      kosa: {
        title: 'Куршская коса',
        linkTitle: 'Куршская коса',
        imageAlt: 'Куршская коса',
        p1:
          'Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных горизонта — спокойного Куршского залива ' +
          'с одной стороны и подёрнутого рябью волн Балтийского моря с другой. Уникальная природная зона на краю российского анклава.',
        p2:
          'На этом Калининградская область не заканчивается. Для путешественника и исследователя там же по соседству — ' +
          'самая западная точка России, Балтийская коса, — и немецкое наследие россыпи небольших приморских городов. ' +
          'Атмосфера здешних мест исключает суету, окуная в спокойствие природы и запах стального, прохладного моря.',
      },
      kolsky: {
        title: 'Кольский',
        linkTitle: 'Смотреть на National Geographic',
        imageAlt: 'Кольский полуостров',
        p1:
          'Почти весь полуостров находится за Полярным кругом. Саамская тундра, от которой на юг — тайга, ' +
          'а на север — Ледовитый океан, прикидывающийся Баренцевым морем.',
        p2:
          'Возможно, вы смотрели Звягинцева и даже слышали историю арктического фестиваля в Териберке. ' +
          'Возможно, слово «Хибины» не осталось под снегом школьных воспоминаний об уроках географии. ' +
          'Возможно, вы не интересовались пронизывающей земную кору сверхглубокой скважиной, а от апатитов вас давно ' +
          'накрывает апатия. Но ваша мечта увидеть северное сияние начинает сбываться с билетом в Мурманск.',
      },
      altai: {
        title: 'Алтай',
        linkTitle: 'Открыть на Facebook',
        imageAlt: 'Алтай',
        p1:
          'Алтай — одно из красивейших мест в России. В первую очередь из-за гор: если ехать вдоль хребта, вы увидите склоны, ' +
          'усыпанные соснами, горные реки и озёра. А если вы откроете в автомобиле окна, сможете познакомиться ' +
          'с невидимым чудом здешних мест — горным воздухом.',
        p2:
          'Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом. Так вы увидите всё разнообразие местной ' +
          'флоры и фауны. По лесам Алтая бродят лоси, над хребтами летают орлы, а на равнинах пасутся косули. ' +
          'И знаменитые манулы — тоже обитатели Алтайского края.',
      },
      baikal: {
        title: 'Зимний Байкал',
        linkTitle: 'Открыть в VK',
        imageAlt: 'Зимний Байкал',
        p1:
          'Всем известен Байкал как крупнейшее озеро в мире. Многие также знают, что это самый большой источник ' +
          'пресной воды и одно из красивейших мест в России.',
        p2:
          'Конечно, это всё так. Но Байкал ещё идеальное место для соревнований по скийорингу. Это такой вид спорта, ' +
          'когда лыжник привязывает себя к мотоциклу, и тандем старается развить как можно бóльшую скорость на льду. ' +
          'В марте 2019 года на фестивале «Байкальская миля» был поставлен мировой рекорд — 197.011 км/ч.',
      },
      karelia: {
        title: 'Карелия',
        linkTitle: 'Карелия',
        imageAlt: 'Карелия',
        p1:
          'Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу сибирская лиственница не растёт западнее Водлозера. ' +
          'Зато здесь она вымахивает на 30 метров — леса карельских национальных парков из-за непроходимых болот ' +
          'никогда не знали топора. Некоторым соснам уже больше чем полтысячелетия. Прикоснитесь к живому существу, ' +
          'видевшему солнце раньше, чем увидал его Иван Грозный. В девственном лесу на сотню километров не встретишь тропы. ' +
          'А на редких тропинках деревья в паре метров от земли помечены медвежьими когтями. Чтобы все знали, кто тут хозяин.',
      },
    },
    cover: {
      title: 'До Байкала «на собаках»',
      subtitle: 'По мотивам учебной темы о Транссибе — путешествие от столицы до Байкала на электричках.',
    },
    footer: {
      maps: 'Карты',
      weather: 'Погода',
      schedule: 'Расписание',
      calendar: 'Календарь',
      travel: 'Путешествия',
    },
  },

  en: {
    meta: {
      title: 'Travel Around Russia',
    },
    header: {
      logoTitle: 'Russia',
      logoAlt: 'Site logo',
      btnRu: 'Switch to Russian',
      btnEn: 'Switch to English',
    },
    lead: {
      title: 'Travel Around Russia',
      subtitle: "The real country isn't on the news — it's right here.",
      imageAlt: 'Travel map',
      caption: 'your berth is the upper one',
    },
    info: {
      title: "What haven't we seen there?",
      text:
        'According to VCIOM polls, 95% of Russians dream of going somewhere, but only 36% plan to spend their vacation ' +
        "in their home country. As if to say, what haven't we seen here at home? In fact, Russia is a whole universe " +
        'with the gentle southern sea, the dense forests of the Sayan Mountains and the harsh ice of the Putorana Plateau. ' +
        'And you can see all this beauty without millions in the bank, a foreign passport or long flights. ' +
        'Like Vera Bashmakova, a brave young mother who gathered up her three children, put them in her Lada ' +
        'and drove 20,000 kilometers across her home country. We have chosen and described some interesting places ' +
        'worthy of your vacation.',
      timeZones: 'Time zones',
      naturalHeritage: 'UNESCO natural heritage sites',
      culturalHeritage: 'UNESCO cultural heritage sites',
      reserves: 'Nature reserves',
      airports: 'Airports',
    },
    photoGrid: {
      train: 'Train',
      atharvaTulsi: 'Atharva Tulsi',
      fog: 'Fog',
      sochi: 'Sochi',
      arisa: 'Arisa',
      baikal: 'Baikal',
      elbrus: 'Elbrus',
      kondratiev: 'Kondratiev',
      kamchatka1: 'Kamchatka 1',
      kamchatka2: 'Kamchatka 2',
      baikal2: 'Baikal 2',
      ergaki: 'Ergaki',
    },
    places: {
      kosa: {
        title: 'Curonian Spit',
        linkTitle: 'Curonian Spit',
        imageAlt: 'Curonian Spit',
        p1:
          'Here, amid forests and sand dunes, you can see two water horizons — the calm Curonian Lagoon on one side ' +
          'and the rippling Baltic Sea on the other. A unique natural area on the edge of the Russian enclave.',
        p2:
          "But the Kaliningrad region doesn't end there. For the traveler and explorer, right next door is " +
          'the westernmost point of Russia, the Baltic Spit, and the German heritage of a scattering of small seaside towns. ' +
          'The atmosphere of these places leaves no room for hustle, immersing you in the calm of nature ' +
          'and the scent of the steel-grey, cool sea.',
      },
      kolsky: {
        title: 'Kola Peninsula',
        linkTitle: 'View on National Geographic',
        imageAlt: 'Kola Peninsula',
        p1:
          'Almost the entire peninsula lies beyond the Arctic Circle. The Sami tundra, with the taiga to the south ' +
          'and the Arctic Ocean, disguised as the Barents Sea, to the north.',
        p2:
          "Perhaps you've watched Zvyagintsev's films and even heard the story of the Arctic festival in Teriberka. " +
          "Perhaps the word “Khibiny” hasn't stayed buried under the snow of school geography lessons. " +
          "Perhaps you've never been curious about the superdeep borehole piercing the Earth's crust, " +
          'and apatites have long left you apathetic. But your dream of seeing the northern lights ' +
          'starts coming true with a ticket to Murmansk.',
      },
      altai: {
        title: 'Altai',
        linkTitle: 'Open on Facebook',
        imageAlt: 'Altai',
        p1:
          'Altai is one of the most beautiful places in Russia. Above all because of the mountains: if you drive ' +
          'along the ridge, you will see slopes covered with pines, mountain rivers and lakes. And if you open ' +
          'the car windows, you will meet the invisible wonder of these places — the mountain air.',
        p2:
          'The climate in Altai is moderate, so summer is the best time to come. That way you will see the full ' +
          'diversity of local flora and fauna. Elk roam the Altai forests, eagles soar over the ridges, and roe deer ' +
          "graze on the plains. And the famous Pallas's cats live in the Altai region too.",
      },
      baikal: {
        title: 'Winter Baikal',
        linkTitle: 'Open on VK',
        imageAlt: 'Winter Baikal',
        p1:
          'Everyone knows Baikal as the largest lake in the world. Many also know that it is the largest source ' +
          'of fresh water and one of the most beautiful places in Russia.',
        p2:
          'Of course, all this is true. But Baikal is also a perfect place for skijoring competitions. ' +
          'It is a sport in which a skier ties himself to a motorcycle, and the tandem tries to reach the highest ' +
          'possible speed on the ice. In March 2019, at the Baikal Mile festival, a world record was set — 197.011 km/h.',
      },
      karelia: {
        title: 'Karelia',
        linkTitle: 'Karelia',
        imageAlt: 'Karelia',
        p1:
          'Siberia ends not in the Urals, but in Karelia: the Siberian larch that forms the taiga does not grow ' +
          'west of Vodlozero. But here it shoots up to 30 meters — thanks to impassable swamps, the forests ' +
          "of Karelia's national parks have never known an axe. Some pines are already more than half a millennium old. " +
          'Touch a living being that saw the sun before Ivan the Terrible did. In the virgin forest you will not come ' +
          'across a trail for a hundred kilometers. And on the rare paths, trees a couple of meters above the ground ' +
          "are marked with bear claws. So that everyone knows who's the boss here.",
      },
    },
    cover: {
      title: 'To Baikal by Commuter Trains',
      subtitle:
        'Inspired by a study topic on the Trans-Siberian Railway — a journey from the capital to Baikal by commuter trains.',
    },
    footer: {
      maps: 'Maps',
      weather: 'Weather',
      schedule: 'Schedule',
      calendar: 'Calendar',
      travel: 'Travel',
    },
  },
};

/* ==========================================================
   Логика смены языка
   ========================================================== */

const STORAGE_KEY = 'russian-travel-lang';
const DEFAULT_LANG = 'ru';
const TRANSLATED_ATTRS = ['alt', 'title', 'aria-label'];
const ACTIVE_BTN_CLASS = 'header__lang-link_active';

// Достаёт строку по пути "a.b.c" из словаря нужного языка
function getTranslation(lang, key) {
  const value = key.split('.').reduce((obj, part) => (obj ? obj[part] : undefined), translations[lang]);

  if (typeof value !== 'string') {
    console.warn(`[i18n] Нет перевода для ключа "${key}" (${lang})`);
    return null;
  }
  return value;
}

function getSavedLang() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (err) {
    return null;
  }
}

function saveLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (err) {
    // localStorage недоступен (приватный режим и т.п.) — просто не запоминаем
  }
}

function setLanguage(lang) {
  if (!translations[lang]) lang = DEFAULT_LANG;

  document.documentElement.lang = lang;

  // Текстовое содержимое
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const text = getTranslation(lang, el.dataset.i18n);
    if (text !== null) el.textContent = text;
  });

  // Атрибуты: alt, title, aria-label
  TRANSLATED_ATTRS.forEach((attr) => {
    const dataAttr = `data-i18n-${attr}`;
    document.querySelectorAll(`[${dataAttr}]`).forEach((el) => {
      const text = getTranslation(lang, el.getAttribute(dataAttr));
      if (text !== null) el.setAttribute(attr, text);
    });
  });

  // Состояние кнопок
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle(ACTIVE_BTN_CLASS, isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  saveLang(lang);
}

function initLanguageSwitcher() {
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  setLanguage(getSavedLang() || DEFAULT_LANG);
}

// Скрипт подключён с defer — DOM уже готов
initLanguageSwitcher();
