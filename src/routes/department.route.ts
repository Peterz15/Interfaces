import { Router } from "express";
import { validateFields } from "../middlewares";
import { DepartmentController } from "../controllers";
import { DepartmentValidator } from "../validators";
const router = Router();
const departmentValidator = new DepartmentValidator();
const departmentController=new DepartmentController();
router.get("/", departmentController.all);
router.get("/:id", departmentController.one);
router.post("/",departmentValidator.validatedepartment,validateFields, departmentController.createDepartment);
router.put("/:id",departmentValidator.validatedepartment,validateFields, departmentController.updateDepartment);
router.delete("/:id", departmentController.deleteDepartment);
export default router;

