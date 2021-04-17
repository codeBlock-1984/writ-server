
ALTER TABLE "articles"
  ADD COLUMN "userid" INTEGER NOT NULL REFERENCES users (id);
