import { Sequelize } from "sequelize";
import { RoleModel, UserModel, TypeRequest, RequirementsModel,locationsModel,AttractionsStatusModel, ConceptModel } from "../models";

const dbName: string | undefined = process.env.DATABASE_NAME
  ? process.env.DATABASE_NAME
  : "";
const dbPassword: string | undefined = process.env.DATABASE_PASSWORD
  ? process.env.DATABASE_PASSWORD
  : "";

const db = new Sequelize(dbName, "root", dbPassword, {
  dialect: "mysql",
  host: "localhost",
});

const User = db.define('users',UserModel);
const Role = db.define('roles',RoleModel);
const Concept = db.define('concepts',ConceptModel);
const AttractionsStatus = db.define('attractions_status', AttractionsStatusModel)
const Requirements = db.define('requirements', RequirementsModel);
const Locations = db.define('locations', locationsModel);

Role.hasMany(User, { foreignKey: 'role_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });

const syncModels = async () => {
  await db.sync({ alter: true });
  try {
   
  
  } catch (error) {
    console.error(error);
  }
};
syncModels();
export  { User, Role,Locations, TypeRequest, Requirements,AttractionsStatus, Concept,db };
