import AssetRow from "@/components/AssetRow";
import { Asset } from "@/models";
import { Table, TableBody, TableHead, TableHeadCell } from "flowbite-react";

export async function getAssets(): Promise<Asset[]> {
  const url = `${process.env.URL_BACKEND}/assets`;
  const response = await fetch(url);
  return response.json();
}

export default async function AssetsList({
  searchParams,
}: {
  searchParams: Promise<{ wallet_id: string }>;
}) {
  const { wallet_id } = await searchParams;
  const assets = await getAssets();

  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <article className="format">
        <h1>Minha carteira</h1>
      </article>

      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Cotação</TableHeadCell>
            <TableHeadCell>Quantidade</TableHeadCell>
            <TableHeadCell>Comprar/Vender</TableHeadCell>
          </TableHead>
          <TableBody>
            {assets.map((asset, key) => (
              <AssetRow asset={asset} key={key} wallet_id={wallet_id} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
