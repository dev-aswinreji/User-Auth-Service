import { log } from "console"
import pg from "pg"

const url = "postgres://luffy:ichigo@localhost:5432/microservice"
log(url,'it is showing undefined')

let client = new pg.Client(url)
client.connect()
//async function PostgresDB(params:type) {
    

//}
try {
    
client.query(`CREATE TABLE IF NOT EXISTS Users (
    name varchar(100),
    age int,
    password varchar(200)
    )`)

} catch (error) {
    console.log(error,'Error caught in postrges.ts');
    
}
 

export default client

