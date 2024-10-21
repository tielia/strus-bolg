// import Link from 'next/link';
// import { useRouter } from 'next/router';
// export const LanguageSwitcher = () => {
//   const { locale, locales, asPath } = useRouter();
//   return (
//     <div>
//     {locales.map((loc) => (
//       <Link href={asPath} locale={loc} key={loc}>
//         <button disabled={loc === locale}>{loc}</button>
//       </Link>
//     ))}
//   </div>
//   );
// }