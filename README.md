# food-shop-DmitriyM

# Запускаем api:
1)  cd ./api/
2)  npm i
3)  npm run develop



# Запускаем клиент в отдельном терминале:
1)  cd ./client/
2)  npm i
3) npm start


# Возможные ошибки и решения:

**Конфликт React и @material-ui**
Решение: 
1)удалить package-lock.json, node_modules
2)npm config set legacy-peer-deps true
