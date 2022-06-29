#Proyecto de Node con jest.

```bash

npm init -y #la opción -y me responde automáticamente las preguntas de configuración
npm i -D jest #instalación de jest
npx jest --init #inicializamos jest.

    #Contestamos a las preguntas:
The following questions will help Jest to create a suitable configuration for your project
    Would you like to use Jest when running "test" script in "package.json"? ... yes
    √ Would you like to use Typescript for the configuration file? ... no
    √ Choose the test environment that will be used for testing » node
    √ Do you want Jest to add coverage reports? ... yes
    √ Which provider should be used to instrument code for coverage? » v8
    √ Automatically clear mock calls, instances, contexts and results before every test? ... yes

npm test para ejecutar un test