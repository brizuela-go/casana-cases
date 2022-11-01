import clsx from 'clsx';

import {Heading} from '~/components';
import {WhatsApp, Mail, Messenger} from '~/assets/index';

const icons = {
  whatsapp: ['https://wa.me/522213321516', WhatsApp],
  mail: [
    'mailto:newshadessunglasses@gmail.com?Subject=Preguntas%20de%20Casana%20Cases',
    Mail,
  ],
  messenger: ['https://m.me/newshadessunglasses', Messenger],
};

export function PageHeader({
  children,
  className,
  heading,
  variant = 'default',
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  heading?: string;
  variant?: 'default' | 'blogPost' | 'allCollections';
  [key: string]: any;
}) {
  const variants: Record<string, string> = {
    default: 'grid w-full gap-8 p-6 py-8 md:p-8 lg:p-12 justify-items-start',
    blogPost:
      'grid md:text-center w-full gap-4 p-6 py-8 md:p-8 lg:p-12 md:justify-items-center',
    allCollections:
      'flex justify-between items-baseline gap-8 p-6 md:p-8 lg:p-12',
  };

  const styles = clsx(variants[variant], className);

  return (
    <>
      <header {...props} className={styles}>
        {heading && (
          <Heading
            as="h1"
            width="narrow"
            size="heading"
            className="inline-block"
          >
            {heading}
          </Heading>
        )}
        {children}
      </header>
      {heading === 'Contacto' && (
        <div className="flex flex-col items-center space-y-20 lg:space-y-0 md:space-y-0 lg:flex-row lg:justify-evenly md:justify-evenly md:flex-row lg:content-center md:content-center sm:content-center content-center">
          {Object.entries(icons).map(([key, [label, Icon]]) => (
            <a
              href={label}
              key={key}
              className="lg:hover:-translate-y-6 transform transition duration-400 ease-in-out lg:hover:scale-110 lg:hover:shadow-header focus:opacity-50 focus:bg-opacity-75"
            >
              <img
                src={Icon}
                alt="WhatsApp"
                className="lg:w-60 md:w-52 w-32 "
              />
            </a>
          ))}
        </div>
      )}
    </>
  );
}
