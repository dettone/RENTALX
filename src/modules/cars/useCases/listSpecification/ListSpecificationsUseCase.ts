
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";
import { Specification } from "../../model/Specification";
class ListSpecificationUseCase{
    constructor(private specificationRepository : ISpecificationRepository){}

    execute() : Specification [] { 
         const specificationList = this.specificationRepository.list();
         return specificationList;
    }


}


export {ListSpecificationUseCase}