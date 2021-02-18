create extension if not exists "uuid-ossp";  --superuser required

CREATE TABLE users(
  id uuid,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE credentials(
  id uuid DEFAULT uuid_generate_v4(),
  login VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
	user_id uuid REFERENCES users(id),
  PRIMARY KEY(id)
);
