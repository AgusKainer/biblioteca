const app = require("./app");

const server = async () => {
  try {
    app.listen(1234);
    console.log(`SERVER INICIADO EN EL PUERTO: 1234`);
  } catch (error) {
    console.log(`ÈRROR AL LEVANTAR EL SERVER: ${error}`);
  }
};

server();
