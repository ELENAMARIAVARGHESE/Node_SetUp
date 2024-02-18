import sinon, { SinonSpy } from 'sinon';
import filterProduct from '../../../src/controllers/products/filterProducts';;
import {Request, Response} from 'express';
 
//---------------------------COMMENT SECTION 1 BEGINS HERE--------------------------------
 
 
 
//Generally all the tests will run.
//If we give "it.only", only that function will run
//if we give "it.skip", that function will be skipped
 
// describe("random group for tests", () => {
//     let number = 2;
 
//     beforeEach(()=>{
//         number = 2;
//     })
//     afterEach(()=>{
//         number = 2;
//     })
   
//     it("random test", () => {
//         sinon.assert.match(2, number);
//     });
   
//     it.skip("random string", () => {
//         sinon.assert.match(number,3);
//     })
// })
 
 
//---------------------------COMMENT SECTION 1 ENDS HERE----------------------------------
 
 
let req : Partial<Request> = {
    query : {
        supplier_reg_id : "12345",
    }
}
 

 
let jsonSpy = sinon.spy();
 
let res : Partial<Response>= {
    status : sinon.stub().returnsThis(),
    json : jsonSpy,
}
 
console.log(res);
 
describe("testing filterProduct", async() => {
   
    let filterProductSpy : SinonSpy;
 
    beforeEach( () => {
        filterProductSpy = sinon.spy(filterProduct);
    });
 
    afterEach( () => {
        sinon.reset();
    });
 
    it("testing for 422", async() => {

        delete req.query?.supplier_reg_id;
        await filterProductSpy(req, res);
        sinon.assert.called(filterProductSpy);
        sinon.assert.calledWith(jsonSpy, {error : 'supplier Registration ID required in the Request'})
    })
})
 