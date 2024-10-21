"use client";
import React from "react";
import { User } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/table";
import { Pagination } from "@nextui-org/pagination";
import { Spinner } from "@nextui-org/spinner";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";
import { columns, users, statusOptions } from "./data";
import { TeamHeader } from "@/components/team-header";
export default function TeamPage() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasMore, setHasMore] = React.useState(false);

  let list = useAsyncList({
    async load({ signal, cursor }) {

      if (cursor) {
        setIsLoading(false);
      }

      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      const res = await fetch(cursor || "https://swapi.py4e.com/api/people/?search=", { signal });
      let json = await res.json();
      setHasMore(json.next !== null);

      return {
        items: json.results,
        cursor: json.next,
      };
    },
  });
  type ColumnKey = string;
  const renderCell = React.useCallback((user: { [x: string]: any; avatar: any; email: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | null | undefined; }, columnKey: string | number) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      default:
        return cellValue;
    }
  }, []);
  const [loaderRef, scrollerRef] = useInfiniteScroll({ hasMore, onLoadMore: list.loadMore });

  return (
    <div>
      <TeamHeader />
      <Table
        isHeaderSticky
        aria-label="Example table with infinite pagination"
        baseRef={scrollerRef}
        bottomContent={
          hasMore ? (
            <div className="flex w-full justify-center">
              <Spinner ref={loaderRef} color="white" />
            </div>
          ) : null
        }
        classNames={{
          base: "max-h-[820px] overflow-scroll",
          table: "min-h-[700px]",
        }}
      >
        <TableHeader>
          <TableColumn key="name">Name</TableColumn>
          {/* <TableColumn key="age">lv</TableColumn> */}
          <TableColumn key="age">team</TableColumn>
          <TableColumn key="status">status</TableColumn>
        </TableHeader>
        <TableBody
          isLoading={isLoading}
          items={users}
          loadingContent={<Spinner color="white" />}
        >
          {(item) => (
            <TableRow key={item.name}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}

        </TableBody>
      </Table>
    </div>
  );
}
