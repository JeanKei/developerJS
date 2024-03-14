### 1. New User:

```javascript
sudo adduser jean // add new root user

visudo // add permission 
Add new row "max ALL=(ALL:ALL)ALL" after "root ALL=(ALL:ALL) ALL"

sudo su - jean - change user
```

### 2. GIT
        
```javascript 
sudo apt update 
```
```javascript
// git
sudo apt-get install git-all 
```

### 3. Upload project

        
```javascript
// create ssh key
ssh-keygen -o -t rsa -C "ssh@github.com" 

// copy => paste to github account
cat id_rsa.pub
```

```javascript
git clone git@github.com:username/front.git
```
	
### 4. Database - PostgreSQL
        
```javascript
sudo apt update 
```
```javascript
sudo apt install postgresql postgresql-contrib

sudo -u postgres psql

// Create db and privileges user:
CREATE ROLE jeankei WITH LOGIN PASSWORD 'jeankei' CREATEDB;
CREATE DATABASE tg OWNER jeankei;
GRANT ALL PRIVILEGES ON DATABASE tg TO jeankei;
```

**Команды**

```javascript
\du // list of users 

\l //list of dbs 

\q //Exit
```

### 5. Install nvm, node, npm, install dep
        
```javascript
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
// Копируем (команду из сообщения)
```


```javascript
//test
nvm -v 
```

```javascript
nvm install node 21.6

// install same version as in your PC
nvm install 18.13.0 

// change node
nvm use 18.13.0 
```

install dep
change .env

### 6. Database - PostgreSQL


```javascript
// Подключитесь к вашей базе данных через psql:
psql -U jeankei -d tg -h localhost

// Выполните команду \copy:
\copy channelsp FROM 'channelsp.csv' WITH (FORMAT csv, HEADER true, DELIMITER ',');

// Проверка - первые 10 строк таблицы
SELECT * FROM channelsp LIMIT 10;
```

### 7. PM 2 (process manager)

```javascript
// for client and server
npm run build 
```

```javascript
// Установка
npm install pm2 -g

// React
pm2 serve /home/jean/uma/uma_frontend/dist 8080 --spa 

// Nest
pm2 start npm --name server -- start 
```
	
```javascript
// авто включение при перезагрузки, 
pm2 startup ubuntu 
// копируем строчку после ввода
```

- **Команды**
```javascript
pm2 save // сохранить 
pm2 stop all // остановка всех процессов
pm2 stop client // остановка клиента
pm2 delete client // удаление процесса
pm2 save // сохранение 
pm2 log // логи
pm2 flush // удалить логи
pm2 reload all // перезагрузка 
```
	
### 8. Nginx (web-server)

```javascript
// установка
sudo apt update
sudo apt-get install nginx
sudo systemctl status nginx
```

```javascript
// если вдруг стоит apache2 - УДАЛИТЬ:
sudo systemctl stop apache2
sudo systemctl disable apache2
sudo apt remove apache2
sudo apt autoremove
sudo apt purge apache2

```

```javascript
// Config
sudo nano /etc/nginx/sites-available/default
```

- **Команды**
```javascript
sudo service nginx restart // restart 

sudo nginx -t // test
```


```javascript
server {

        server_name uma.jeankei.ru;

        location /api {
                proxy_pass http://localhost:3001;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }

        location /{
                proxy_pass http://localhost:8080;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }  
 }
```



### 9. Frontend - меняем запрос к базе

```javascript
baseURL: 'http://localhost:3001/api', change to baseURL: 'http://uma.jeankei.ru/api', 
```

### 10. Домен

Привязать домен к VPS	

### 11. SSL (ставим через бота):

```javascript
sudo apt install certbot python3-certbot-nginx
sudo systemctl reload nginx

//change domain
sudo certbot --nginx -d uma.jeankei.ru

sudo systemctl status certbot.timer

//check for errors
sudo certbot renew --dry-run
```


### Команды Linux:

```javascript
mkdir // new folder

ll // file list

pwd // узнать путь

nano // редактор
```