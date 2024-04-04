# Genshin App
Приложение с персонажами компьютерной игры в жанре action-adventure с открытым миром и элементами RPG - Genshin Impact

## Функциональность
- Пользователь может создать учетную запись и авторизироваться в приложении
- Пользователь может смотреть и изучать карточки персонажей игры
- Пользователь может добавлять любимый персонажей в избранное
- Пользователь может искать нужного персонажа по имени и взаимодейстовать с историей поиска
- Пользователь может сменить цвет темы приложения как ему будет комфортнее
  
## Использованное API
- Ссылка на [GitHub](https://github.com/genshindev/api)
- Ссылка на [API](https://genshin.jmp.blue)

## Реализованные требования:

**1 уровень (обязательный - необходимый минимум)**
- [x] Реализованы **Требования к функциональности**.
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используется [Firebase](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/firebase.ts), и для сохранения входов/выходов пользователя [LocalStorage](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/utils/localStorage.ts)

**React**
- [x] **Функциональные компоненты c хуками** в приоритете над классовыми
- [x] Есть разделение на **[глупые](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/components/Container/Container.tsx)** и **[умные](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/components/SearchText/SearchText.tsx)** компоненты
- [x] Есть [**рендеринг списков**](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/pages/Home/Home.tsx)
- [x] Реализована хотя бы одна [**форма**](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/components/Form/Form.tsx)
- [x] Есть применение [**Контекст API**](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/context/ThemeCtx.tsx)
- [x] Есть применение [**предохранителя**](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/components/Error/ErrorBoundary.tsx)
- [x] Есть хотя бы один [**кастомный хук**](https://github.com/EvgenyRaevsky/AstonReact/tree/master/src/hooks)
- [x] Хотя бы несколько компонентов используют [**PropTypes**](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/components/HistoryCard/HistoryCard.tsx)
- [x] Поиск не должен триггерить много запросов к серверу [**(debounce)**](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/hooks/useDebounce.ts)
- [x] Есть применение [**lazy + Suspense**](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/components/MainRoutes/MainRoutes.tsx)

**Redux**
- [x] Используем [**Modern Redux with Redux Toolkit**](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/store/store.ts)
- [x] Используем [**слайсы**](https://github.com/EvgenyRaevsky/AstonReact/tree/master/src/store/slice)
- [x] Есть хотя бы одна [**кастомная мидлвара**](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/store/middlewares/userAuth.ts)
- [x] Используется [**RTK Query**](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/store/genshinApi.ts)
- [x] Используется [**Transforming Responses**](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/utils/transformHeroData.ts)

**2 уровень (необязательный)**
- [x] Использование [**TypeScript**](https://github.com/EvgenyRaevsky/AstonReact/blob/master/tsconfig.json)
- [x] Использование [**Firebase**](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/firebase.ts)
- [x] Используются [**мемоизированные селекторы**](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/store/selectors/history.ts)

**Дополнительно**
- [react-hook-form](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/components/Form/Form.tsx)
- [zod](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/components/Form/Form.tsx)
- [react-hot-toast](https://github.com/EvgenyRaevsky/AstonReact/blob/master/src/store/middlewares/userAuth.ts)
- [css modules](https://github.com/EvgenyRaevsky/AstonReact/tree/master/src/pages/Auth)
