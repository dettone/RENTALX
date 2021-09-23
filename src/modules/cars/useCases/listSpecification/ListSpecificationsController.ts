import {Request, Response} from 'express';
import { ListSpecificationUseCase } from "./ListSpecificationsUseCase";
class ListSpecificationsController{

    constructor(private specificationUseCase : ListSpecificationUseCase){}

    handle(request : Request, response : Response) : Response{
        const all = this.specificationUseCase.execute();
        return response.json(all);
    }

}

export {ListSpecificationsController}
