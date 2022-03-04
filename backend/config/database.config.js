import mongooose from 'mongoose';
import  {logger}  from '../logger/logger.js';
class DBconnection {
    connection = () => {
        const url = process.env.URL;
        console.log(url);
        mongooose.connect(url)
            .then(() => {
                logger.info("Sucessfully connected to the database");
            })
            .catch((error) => {
                logger.error("Could not connected to the database.", error);
                process.exit();
            });
    }
}
export default new DBconnection();