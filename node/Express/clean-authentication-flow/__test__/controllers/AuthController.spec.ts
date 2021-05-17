import chai from "chai";
import "mocha";
import { it } from "mocha";
import sinon, { SinonSandbox } from "sinon";
import sinonChai from "sinon-chai";
import { AuthController } from "../../src/entrypoint/controllers/AuthController";
import { AuthServiceLocator } from "../../src/configuration/usercases/AuthServiceLocator";

const { expect } = chai;



describe("Auth Controller", () => {
  let sut: AuthController;
  let sandbox: SinonSandbox = null;
  let serviceLocator: AuthServiceLocator;
  let fakeRepository: FakeRepository;

  const user = {
    email: "test@test.com",
    id: "1234",
    name: "bbaktaeho",
    password: "1234",
    type: "email",
  };
});
