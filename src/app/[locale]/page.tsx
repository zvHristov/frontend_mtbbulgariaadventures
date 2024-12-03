
import { getDictionary } from '@/i18n/dictionaries';
import { HomeComponent } from '@/components/page-components';
import dynamic from "next/dynamic";

export default async function Home() {
  // const dict = await getDictionary(locale);
  // console.log(dict);
  return (
    <div className='min-h-screen'>
      <HomeComponent />
    </div>
  );
}

