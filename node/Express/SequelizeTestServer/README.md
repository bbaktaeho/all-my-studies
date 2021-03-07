# Sequelize Test

### .sequelizerc 활용하기

- 폴더 구조 초기화

  - 기본 설정

    ```javascript
    // .sequelizerc
    const path = require('path');

    module.exports = {
      config: path.resolve('src/db/config/config.js'),
      'models-path': path.resolve('src/db/models'),
      'seeders-path': path.resolve('src/db/seeders'),
      'migrations-path': path.resolve('src/db/migrations'),
    };
    ```

  - 초기화

    ```bash
    npx sequelize init
    ```

  - 트리

    ```bash
        .
        ├── package.json
        ├── package-lock.json
        └── src
        ├── db
        │ ├── config
        │ │ └── config.js
        │ ├── migrations
        │ ├── models
        │ │ └── index.js
        │ └── seeders
        └── index.js
    ```

- config 설정하기!!

- 마이그레이션

  - 모델 구현

    ```bash
    npx sequelize model:generate --name Task --attributes taskName:string
    ```

    ```bash
    npx sequelize model:generate --name User --attributes name:string
    ```

    ```bash
    npx sequelize db:create
    npx sequelize db:migrate
    ```

- 시더

  - 더미데이터 삽입하기

    ```bash
    npx sequelize seed:generate --name task
    ```

    ```javascript
    // src/seeders/[시간]-task.js
    'use strict';

    module.exports = {
      up: (queryInterface, Sequelize) => {
        /*
        Add altering commands here.
        Return a promise to correctly handle asynchronicity.
        Example:
        return queryInterface.bulkInsert('People', [{
            name: 'John Doe',
            isBetaMember: false
        }], {});
        */
        return queryInterface.bulkInsert(
          'Tasks',
          [
            {
              taskName: 'This is task number one!',
            },
            {
              taskName: 'This is task number two!',
            },
            {
              taskName: 'This is task number three!',
            },
          ],
          {}
        );
      },

      down: (queryInterface, Sequelize) => {
        /*
        Add reverting commands here.
        Return a promise to correctly handle asynchronicity.
        Example:
        return queryInterface.bulkDelete('People', null, {});
        */
        return queryInterface.bulkDelete('Task');
      },
    };
    ```

    ```bash
    npx sequelize db:seed:all
    ```
