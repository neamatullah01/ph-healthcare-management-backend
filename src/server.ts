import app from "./app";
import { envVars } from "./config/env";

const PORT = envVars.PORT;

const bootstrap = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server: ", error);
  }
};

bootstrap();
