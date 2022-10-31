// @ts-expect-error @headlessui/react incompatibility with node16 resolution
import {Disclosure} from '@headlessui/react';
import {Link} from '@shopify/hydrogen';

import {Heading, IconCaret} from '~/components';
import type {EnhancedMenu, EnhancedMenuItem} from '~/lib/utils';

/**
 * A server component that specifies the content of the footer on the website
 */
export function FooterMenu({menu}: {menu?: EnhancedMenu}) {
  const styles = {
    section: 'grid gap-4',
    nav: 'grid gap-2 pb-6',
  };

  return (
    <>
      <section className={styles.section}>
        <Disclosure>
          {/* @ts-expect-error @headlessui/react incompatibility with node16 resolution */}
          {({open}) => (
            <>
              <Disclosure.Button className="text-left md:cursor-default">
                <Heading className="flex justify-between" size="lead" as="h3">
                  Recursos
                  {/* {item?.items?.length > 0 && ( */}
                  <span className="md:hidden">
                    <IconCaret direction={open ? 'up' : 'down'} />
                  </span>
                  {/* )} */}
                </Heading>
              </Disclosure.Button>
              {/* {item?.items?.length > 0 && ( */}
              <div
                className={`${
                  open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`
                } overflow-hidden transition-all duration-300`}
              >
                <Disclosure.Panel static>
                  <nav className={styles.nav}>
                    {menu?.items
                      .map((subItem) => (
                        <Link
                          key={subItem.id}
                          to={subItem.to}
                          target={subItem.target}
                        >
                          {subItem.title}
                        </Link>
                      ))
                      .splice(0, 2)}
                  </nav>
                </Disclosure.Panel>
              </div>
              {/* )} */}
            </>
          )}
        </Disclosure>
      </section>
      <section className={styles.section}>
        <Disclosure>
          {/* @ts-expect-error @headlessui/react incompatibility with node16 resolution */}
          {({open}) => (
            <>
              <Disclosure.Button className="text-left md:cursor-default">
                <Heading className="flex justify-between" size="lead" as="h3">
                  Políticas
                  {/* {item?.items?.length > 0 && ( */}
                  <span className="md:hidden">
                    <IconCaret direction={open ? 'up' : 'down'} />
                  </span>
                  {/* )} */}
                </Heading>
              </Disclosure.Button>
              {/* {item?.items?.length > 0 && ( */}
              <div
                className={`${
                  open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`
                } overflow-hidden transition-all duration-300`}
              >
                <Disclosure.Panel static>
                  <nav className={styles.nav}>
                    {menu?.items
                      .map((subItem) => (
                        <Link
                          key={subItem.id}
                          to={subItem.to}
                          target={subItem.target}
                        >
                          {subItem.title}
                        </Link>
                      ))
                      .splice(2, 5)}
                  </nav>
                </Disclosure.Panel>
              </div>
              {/* )} */}
            </>
          )}
        </Disclosure>
      </section>
    </>
  );
}
