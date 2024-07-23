import { DepartmentDB } from "../config";
import { DepartmentInterface } from "../interfaces";

export const getAll = async () => {
    try {
      //consultas a la base de datos van aca

      const departments = await DepartmentDB.findAll();
      return {
        message: `Departmentos encontrados`,
        status: 200,
        data: {
          departments,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        message: `Contact the administrator: error`,
        status: 500,
      };
    }
  };
  export const getOne = async (id: number) => {
    try {
      //consultas a la base de datos van aca
      const departments = await DepartmentDB.findOne({ where: { id } }); 
      if (departments === null) {
        console.log("No encontrado");
        return {
          message: `Departmento no encontrado`,
          status: 404,
          data: {
          },
        };
      } else {
        return {
          message: `Departmento encontrado`,
          status: 200,
          data: {
            departments,
          },
        };
      }
    } catch (error) {
      console.log(error);
      return {
        message: `Contact the administrator: error`,
        status: 500,
      };
    }
  };
  export const create = async (data: DepartmentInterface) => {
    try {
      //consultas a la base de datos van aca
      const departments = await DepartmentDB.create({
        ...data,
      });
  
      return {
        message: `Creacion de departmento exitoso`,
        status: 200,
        data: {
          departments,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        message: `Contact the administrator: error`,
        status: 500,
      };
    }
  };
  export const update = async (id: number, data: DepartmentInterface) => {
    try {
      //consultas a la base de datos van aca
      const departments = await DepartmentDB.update(
        {
          ...data,
        },
        {
          where: {
            id,
          },
          returning: true,
        }
      );
  
      return {
        message: `Actualización del departmento exitoso`,
        status: 200,
        data: {
          departments,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        message: `Contact the administrator: error`,
        status: 500,
      };
    }
  };
  export const deleted = async (id: number, data: DepartmentInterface) => {
    try {
      //consultas a la base de datos van aca
      const departments = await DepartmentDB.update(
        {
          status: false,
          deletedAt: new Date(),
        },
        {
          where: {
            id,
          },
          returning: true,
        }
      );
  
      return {
        message: `Eliminación del departmento exitoso`,
        status: 200,
        data: {
          departments,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        message: `Contact the administrator: error`,
        status: 500,
      };
    }
  };
  
  