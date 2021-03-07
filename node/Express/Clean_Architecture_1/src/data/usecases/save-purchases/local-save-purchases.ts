import { ICacheStore } from "@/data/protocols/cache";
import { SavePurchases } from "@/domain/usecases/save-purchases";

export class LocalSavePurchases implements SavePurchases {
  constructor(private readonly cacheStore: ICacheStore) {}
  async save(purchases: Array<SavePurchases.Params>): Promise<void> {
    this.cacheStore.delete("purchases");
    this.cacheStore.insert("purchases", purchases);
  }
}
