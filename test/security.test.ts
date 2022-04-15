const SwaggerParser = require('swagger-parser');


describe("openapispec tests", () => {
  let result = {"swagger":"2.0","info":{"version":"1.0.0","title":"Swagger Petstore","license":{"name":"MIT"}},"host":"petstore.swagger.io","basePath":"/v1","schemes":["http"],"consumes":["application/json"],"produces":["application/json"],"paths":{"/pets":{"get":{"summary":"List all pets","operationId":"listPets","tags":["pets"],"parameters":[{"name":"limit","in":"query","description":"How many items to return at one time (max 100)","required":false,"type":"integer","format":"int32"}],"responses":{"200":{"description":"A paged array of pets","headers":{"x-next":{"type":"string","description":"A link to the next page of responses"}},"schema":{"type":"array","items":{"type":"object","required":["id","name"],"properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"},"tag":{"type":"string"}}}}},"default":{"description":"unexpected error","schema":{"type":"object","required":["code","message"],"properties":{"code":{"type":"integer","format":"int32"},"message":{"type":"string"}}}}}},"post":{"summary":"Create a pet","operationId":"createPets","tags":["pets"],"responses":{"201":{"description":"Null response"},"default":{"description":"unexpected error","schema":{"type":"object","required":["code","message"],"properties":{"code":{"type":"integer","format":"int32"},"message":{"type":"string"}}}}}}},"/pets/{petId}":{"get":{"summary":"Info for a specific pet","operationId":"showPetById","tags":["pets"],"parameters":[{"name":"petId","in":"path","required":true,"description":"The id of the pet to retrieve","type":"string"}],"responses":{"200":{"description":"Expected response to a valid request","schema":{"type":"array","items":{"type":"object","required":["id","name"],"properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"},"tag":{"type":"string"}}}}},"default":{"description":"unexpected error","schema":{"type":"object","required":["code","message"],"properties":{"code":{"type":"integer","format":"int32"},"message":{"type":"string"}}}}}}}},"definitions":{"Pet":{"type":"object","required":["id","name"],"properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"},"tag":{"type":"string"}}},"Pets":{"type":"array","items":{"type":"object","required":["id","name"],"properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"},"tag":{"type":"string"}}}},"Error":{"type":"object","required":["code","message"],"properties":{"code":{"type":"integer","format":"int32"},"message":{"type":"string"}}}}};
  // beforeAll(async () => {
  //   const endpoint = 'https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v2.0/yaml/petstore.yaml';
  //   result = await SwaggerParser.validate(endpoint);
  // });

  describe('parse each path from result', () => {
    Object.keys(result.paths).forEach(path => {
      const methods = result.paths[path];
      Object.keys(methods).forEach(method => {
        it(`should hit ${method}:${path}`, () => {
          console.log(`should hit ${method}:${path}`);
        });
      })
      
    });
  })

  // it("should return full json", () => {
  //   console.log(JSON.stringify(result));
  //   expect(1).toBe(1);
  // });
});
