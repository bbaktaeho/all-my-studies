import "reflect-metadata";
import chai from "chai";
import "mocha";
import { it } from "mocha";
import sinon, { SinonSandbox } from "sinon";
import sinonChai from "sinon-chai";
import { AuthController } from "../../src/entrypoint/controller/AuthController";
import { AuthServiceLocator } from "../../src/config/usecase/AuthServiceLocator";
import { FakeUserRepository } from "../helper/FakeRepository";
import { mockRequest, mockResponse } from "../helper/helper";

const { expect } = chai;
chai.use(sinonChai);

describe("Auth Controller", () => {
  let sut: AuthController;
  let sandbox: SinonSandbox = null;
  let serviceLocator: AuthServiceLocator;
  let fakeRepository: FakeUserRepository;

  const user = {
    email: "test@test",
    id: "1234",
    name: "ken",
    password: "pass",
    type: "email",
  };

  const req: any = mockRequest(user);
  const res: any = mockResponse();

  beforeEach(() => {
    fakeRepository = new FakeUserRepository();
    serviceLocator = new AuthServiceLocator(fakeRepository);
    sandbox = sinon.createSandbox();
    sut = new AuthController(serviceLocator);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("sign", () => {
    it("should return 400 on empty request", async () => {
      sandbox.spy(res, "status");
      sandbox.spy(res, "json");

      const emptyReq: any = { body: {} };
      await sut.signIn(emptyReq, res);
      expect(res.status).to.have.been.calledWith(400);
    });
  });
});
