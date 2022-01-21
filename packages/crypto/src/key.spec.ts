import { Mnemonic } from "./mnemonic";
import { PrivKeySecp256k1 } from "./key";
import bech32 from "bech32";

describe("Test priv key", () => {
  it("priv key should generate the valid pub key", () => {
    const mnemonic =
      "business chair motor egg stick final core stone domain spot nasty busy";

    const privKey = new PrivKeySecp256k1(
      Mnemonic.generateWalletFromMnemonic(mnemonic, `m/44'/60'/0'/0/0`)
    );
    const pubKey = privKey.getPubKey();
    const words = bech32.toWords(pubKey.getAddress());
    const address = bech32.encode("inj", words);

    expect(address).toStrictEqual("inj1dnld7p400cwkf50sfuamc4vwgd2v5er2lxalj7");
  });
});
