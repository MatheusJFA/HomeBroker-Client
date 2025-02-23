import { Asset, OrderType } from "@/models";
import { Button, Label, TextInput } from "flowbite-react";

export function OrderForm(props: {
  asset: Asset;
  walletId: string;
  type: OrderType;
}) {
  const { asset, walletId, type } = props;

  const color = type === OrderType.BUY ? "text-blue-700" : "text-red-700";
  const text = type === OrderType.BUY ? "compra" : "venda";

  return (
    <form>
      <input type="hidden" name="assetId" defaultValue={asset._id} />
      <input type="hidden" name="walletId" defaultValue={walletId} />
      <input type="hidden" name="type" defaultValue={type} />

      <div>
        <div className="mb-2">
          <Label htmlFor="shares" value="Quantidade" className={color} />
        </div>
        <TextInput
          id="shares"
          name="shares"
          required
          type="number"
          min={1}
          step={1}
          defaultValue={1}
          color={type === OrderType.BUY ? "info" : "failure"}
        />
      </div>
      <br />
      <div>
        <div className="mb-2">
          <Label htmlFor="price" value="Preço R$" className={color} />
        </div>
        <TextInput
          id="price"
          name="price"
          required
          type="number"
          min={1}
          step={1}
          defaultValue={1}
          color={type === OrderType.BUY ? "info" : "failure"}
        />
      </div>
      <br />

      <Button type="submit" color={type === OrderType.BUY ? "blue" : "red"}>
        Confirmar
        {text}
      </Button>
    </form>
  );
}
