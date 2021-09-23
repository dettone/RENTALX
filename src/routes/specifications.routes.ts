import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { CreateSpecificationUseCase } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase";

const specificationRoutes = Router();



specificationRoutes.post("/",(request, response) => {

  return createSpecificationController.handle(request, response)

});

specificationRoutes.get("/", (request, response) => {

})


export { specificationRoutes }