
CREATE TABLE IF NOT EXISTS "clients" (
  "id" SERIAL NOT NULL,
  "name" VARCHAR(255) UNIQUE NOT NULL,
  "recordstatus" SMALLINT DEFAULT 0 NOT NULL,
  "createdat" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updatedat" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY ("id")
);


CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL NOT NULL,
  "userauthid" UUID UNIQUE NOT NULL,
  "firstname" VARCHAR(255) NULL,
  "lastname" VARCHAR(255) NULL,
  "username" VARCHAR(255) UNIQUE NOT NULL,
  "email" VARCHAR(255) UNIQUE NOT NULL,
  "phone" VARCHAR(255) NULL,
  "profilepic" VARCHAR(255) NULL,
  "recordstatus" SMALLINT DEFAULT 0 NOT NULL,
  "isverifiedemail" BOOLEAN DEFAULT FALSE NOT NULL,
  "isverifiedphone" BOOLEAN DEFAULT FALSE NOT NULL,
  "createdat" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updatedat" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY ("id")
);


CREATE TABLE IF NOT EXISTS "clientusers" (
  "id" SERIAL NOT NULL,
  "userid" INTEGER NOT NULL REFERENCES users (id),
  "clientid" INTEGER NOT NULL REFERENCES clients (id),
  "recordstatus" SMALLINT DEFAULT 0 NOT NULL,
  "createdat" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updatedat" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY ("userid","clientid")
);


CREATE TABLE IF NOT EXISTS "genres" (
  "id" SERIAL NOT NULL,
  "name" VARCHAR(255) UNIQUE NOT NULL,
  "recordstatus" SMALLINT DEFAULT 0 NOT NULL,
  "createdat" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updatedat" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY ("id")
);


CREATE TABLE IF NOT EXISTS "tags" (
  "id" SERIAL NOT NULL,
  "name" VARCHAR(255) UNIQUE NOT NULL,
  "recordstatus" SMALLINT DEFAULT 0 NOT NULL,
  "createdat" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updatedat" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY ("id")
);


CREATE TABLE IF NOT EXISTS "articles" (
  "id" SERIAL NOT NULL,
  "title" VARCHAR(255) NOT NULL,
  "slug" VARCHAR(255) UNIQUE NOT NULL,
  "content" TEXT NOT NULL,
  "userid" INTEGER NOT NULL REFERENCES users (id),
  "genreid" INTEGER NOT NULL REFERENCES genres (id),
  "recordstatus" SMALLINT DEFAULT 0 NOT NULL,
  "createdat" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updatedat" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY ("id")
);


CREATE TABLE IF NOT EXISTS "articletags" (
  "id" SERIAL NOT NULL,
  "articleid" INTEGER NOT NULL REFERENCES articles (id),
  "tagid" INTEGER NOT NULL REFERENCES tags (id),
  "recordstatus" SMALLINT DEFAULT 0 NOT NULL,
  "createdat" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updatedat" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY ("articleid","tagid")
);

