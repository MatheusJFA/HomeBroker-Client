import { Table, TableHead, TableHeadCell, TableBody } from "flowbite-react";
import { Order } from "@/models";
import OrderRow from "@/components/OrderRow";
import { WalletList } from "@/components/WalletList";

export async function getOrders(walletId: string): Promise<Order[]> {
  const response = await fetch(
    `${process.env.URL_BACKEND}/orders?walletId=${walletId}`
  );
  return response.json();
}

export default async function OrderList({
  searchParams,
}: {
  searchParams: Promise<{ wallet_id: string }>;
}) {
  const { wallet_id } = await searchParams;

  if (!wallet_id) {
    return <WalletList />;
  }

  const orders = await getOrders(wallet_id);

  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <article className="format">
        <h1>Minha ordens</h1>
      </article>

      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Preço</TableHeadCell>
            <TableHeadCell>Quantidade</TableHeadCell>
            <TableHeadCell>Tipo</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
            <TableHeadCell>Cotação</TableHeadCell>
            <TableHeadCell>Comprar/Vender</TableHeadCell>
          </TableHead>
          <TableBody>
            {orders.map((order, key) => (
              <OrderRow order={order} key={key} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
