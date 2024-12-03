
import Link from 'next/link';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { getDictionary } from '@/i18n/dictionaries';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/common/store/store';
import { setLocale } from '@/common/slices/initSlice';

export async function Header() {
  const dictionary = await getDictionary('en');


  return (
    <header className='top-nav sm lg container mx-auto flex flex-wrap items-center justify-between'>
    <nav className='top-nav justify-between'>
      <ul className='flex list-none ml-32'>
        <li><Link href="/">{dictionary.common.menu.home}</Link></li>
        <li><Link href="/posts">{dictionary.common.menu.posts}</Link></li>
        <li><Link href="/news">{dictionary.common.menu.news}</Link></li>
      </ul>
    </nav>
    <LanguageSwitcher />
  </header>
  )
  
};
