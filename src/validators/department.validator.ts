import { body, param } from "express-validator";

class DepartmentValidator {
  public validatedepartment = [
    body("name").notEmpty().withMessage("Name is required"),
    body("name").isString().withMessage("Name must be string"),
  ];
}
export { DepartmentValidator };
