import AssetRow from "@/components/AssetRow";
import { WalletList } from "@/components/WalletList";
import { Wallet } from "@/models";
import { Table, TableBody, TableHead, TableHeadCell } from "flowbite-react";

export async function getMyWallet(wallet_id: string): Promise<Wallet> {
  const url = `${process.env.URL_BACKEND}/wallets/${wallet_id}`;
  const response = await fetch(url);
  return response.json();
}

export default async function MyWalletList({
  searchParams,
}: {
  searchParams: Promise<{ wallet_id: string }>;
}) {
  const { wallet_id } = await searchParams;
  const wallet = await getMyWallet(wallet_id);

  if (!wallet_id || !wallet) {
    return <WalletList />;
  }

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
            {wallet.assets.map((walletAsset, key) => (
              <AssetRow
                asset={walletAsset.asset}
                key={key}
                wallet_id={wallet_id}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
