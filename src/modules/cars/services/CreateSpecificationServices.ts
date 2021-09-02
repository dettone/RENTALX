import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
 }

class CreateSpecificationServices {

    constructor (private SpecificationsRepository: ISpecificationRepository) { }

    execute({name, description} : IRequest ) : void {
        const specificationAlreadyExists = this.SpecificationsRepository.findByName(name);
        if(specificationAlreadyExists) {
           throw new Error(`The specification ${name} already exists`);
        }  
        
        this.SpecificationsRepository.create({
                name, 
                description
        });
   
  
    } 
}

export { CreateSpecificationServices }