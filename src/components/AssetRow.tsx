import { Asset } from "@/models";
import { Button, TableCell, TableRow } from "flowbite-react";
import { AssetShow } from "./AssetShow";
import Link from "next/link";

export default function AssetRow(props: {
  asset: Asset;
  wallet_id: string;
  key: number;
}) {
  const { asset, wallet_id, key } = props;
  return (
    <TableRow key={key}>
      <TableCell>
        <AssetShow asset={asset} />
      </TableCell>
      <TableCell>R$ {asset.price}</TableCell>
      <TableCell>
        <Button
          color="light"
          as={Link}
          href={`/assets/${asset.symbol}?wallet_id=${wallet_id}`}
        >
          Comprar/Vender
        </Button>
      </TableCell>
    </TableRow>
  );
}
