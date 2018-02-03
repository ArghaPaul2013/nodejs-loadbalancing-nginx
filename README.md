# nodejs-loadbalancing-nginx
This repository runs multiple instances of node servers on different ports.

### nginx.conf

```
events {
    worker_connections  1024;
}

http {
    upstream my_app {
        least_conn;
        server 127.0.0.1:8090;      # NodeJS Server 1
        server 127.0.0.1:8091;      # NodeJS Server 2
        server 127.0.0.1:8092;      # NodeJS Server 3
    }

    server {
        listen dev.new-test.com:8000;
        server_name  dev.new-test.com;
        location / {
            proxy_pass http://my_app;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection keep-alive;
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
}
```

#### Also, add the domain dev.new-test.com to your host file.
