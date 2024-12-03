"use client";
import Image from "next/image";

export function HomeComponent() {
  return (
    <>
    <section className="home-page clip-path-custom-right ml-16 grid grid-rows-[20px_1fr_20px]  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <article className='w-1/2 h-16'>
        <h1 className="text-h1 font-regular">{}</h1>
        <p>{}</p>
        </article>
        </section>
        <section className="grid  grid-rows-[20px_1fr_20px] grid-cols-2 min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
        <article className="col-span-1 w-1/2 p-4 h-64 w-96 relative bg-clip-path-custom-right ">
        <Image
            src={"/images/01-tour-mtb.jpg"}
            alt="Picture of the author"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className="object-contain" // just an example
        />
        </article>
        <article className="col-span-1 w-1/2 h-16 p-4 ">
        <h2 className="text-h2 font-regular">Заглавие на секция 2</h2>
        <p>Текстът за секция 2 описва съдържанието и предоставя информация.</p>
        </article>
        </section>
        <section className="grid clip-path-custom-right grid-rows-[20px_1fr_20px] grid-cols-2 min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
        <article className="col-span-1 w-1/2 h-16 p-1">
        <h2 className="text-h2 font-regular">Заглавие на секция 3</h2>
        <p>Текстът за секция 2 описва съдържанието и предоставя информация.</p>
        </article>
        <article className="col-span-1 w-1/2 p-4 h-64 w-96 relative">
        <Image
            src={"/images/01-tour-mtb.jpg"}
            alt="Picture of the author"
            layout="fill" // required
            fill={true}  
            objectFit="cover" // change to suit your needs
            className="object-contain" // just an example
        />
        </article>
        </section>
    </>
  );
}



