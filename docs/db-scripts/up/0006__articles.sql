
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
