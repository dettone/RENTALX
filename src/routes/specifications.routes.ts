import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationServices } from "../modules/cars/services/CreateSpecificationServices";

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();


specificationRoutes.post("/",(request, response) => {

    const { name, description } = request.body; 

    const specificationService = new CreateSpecificationServices(specificationRepository);

    specificationService.execute({name, description});

    return response.status(201).send();

});

specificationRoutes.get("/", (request, response) => {

    const specificationAll = specificationRepository.list();

   return response.json(specificationAll);
})


export { specificationRoutes }