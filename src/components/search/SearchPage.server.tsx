import {Heading, Input, PageHeader} from '~/components';
import {Layout} from '~/components/index.server';

import {IconSearch} from '~/components';

export function SearchPage({
  searchTerm,
  children,
}: {
  searchTerm?: string | null;
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <PageHeader>
        <form className="relative flex w-full text-heading">
          <Input
            defaultValue={searchTerm}
            placeholder="Buscar…"
            type="search"
            variant="search"
            name="q"
          />
          <button className="absolute right-0 mt-5" type="submit">
            <IconSearch className="icon-search" />
          </button>
        </form>
      </PageHeader>
      {children}
    </Layout>
  );
}
