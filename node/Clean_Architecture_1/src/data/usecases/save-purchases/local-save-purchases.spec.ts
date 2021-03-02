import { ICacheStore } from "@/data/protocols/cache";
import { LocalSavePurchases } from "@/data/usecases";
import { SavePurchases } from "@/domain/usecases/save-purchases";

class CacheStoreSpy implements ICacheStore {
  deleteCallsCount = 0;
  insertCallsCount = 0;
  deleteKey: string;
  insertKey: string;
  insertValues: Array<SavePurchases.Params> = [];

  delete(deleteKey: string): void {
    this.deleteCallsCount++;
    this.deleteKey = deleteKey;
  }
  insert(insertKey: string, value: any): void {
    this.insertCallsCount++;
    this.insertKey = insertKey;
    this.insertValues = value;
  }
}

const mockPurchases = (): Array<SavePurchases.Params> => [
  {
    id: "1",
    date: new Date(),
    value: 50,
  },
  {
    id: "2",
    date: new Date(),
    value: 50,
  },
];

type SutTypes = {
  sut: LocalSavePurchases;
  cacheStore: CacheStoreSpy;
};

// factory helper method
const makeSut = (): SutTypes => {
  const cacheStore = new CacheStoreSpy();
  const sut = new LocalSavePurchases(cacheStore);
  return { sut, cacheStore };
};

describe("LocalSavePurchases", () => {
  test("Should not delete cache on sut.init", () => {
    const { cacheStore } = makeSut();
    expect(cacheStore.deleteCallsCount).toBe(0);
  });

  test("Should delete old cache on sut.init", async () => {
    const { cacheStore, sut } = makeSut();
    await sut.save(mockPurchases());
    expect(cacheStore.deleteCallsCount).toBe(1);
    expect(cacheStore.deleteKey).toBe("purchases");
  });

  test("Should not insert new Cache if delete fails", async () => {
    const { cacheStore, sut } = makeSut();
    jest.spyOn(cacheStore, "delete").mockImplementationOnce(() => {
      throw new Error();
    });
    const promise = sut.save(mockPurchases());
    expect(cacheStore.insertCallsCount).toBe(0);
    expect(promise).rejects.toThrow();
  });

  test("Should not insert new Cache if delete succeeds", async () => {
    const { cacheStore, sut } = makeSut();
    const purchases = mockPurchases();
    await sut.save(purchases);
    expect(cacheStore.deleteCallsCount).toBe(1);
    expect(cacheStore.insertCallsCount).toBe(1);
    expect(cacheStore.insertKey).toBe("purchases");
    expect(cacheStore.insertValues).toEqual(purchases);
  });
});
