import { Order } from "@/models";
import { TableCell, TableRow } from "flowbite-react";
import { AssetShow } from "./AssetShow";
import { OrderTypeBadge } from "./OrderTypeBadge";
import { OrderStatusBadge } from "./OrderStatusBadge";

export default function OrderRow(props: { order: Order; key: number }) {
  const { order, key } = props;

  return (
    <TableRow key={key}>
      <TableCell>
        <AssetShow asset={order.asset} />
      </TableCell>
      <TableCell>R$ {order.price}</TableCell>
      <TableCell>{order.shares}</TableCell>
      <TableCell>
        <OrderTypeBadge type={order.type} />
      </TableCell>
      <TableCell>
        <OrderStatusBadge status={order.status} />
      </TableCell>
    </TableRow>
  );
}
