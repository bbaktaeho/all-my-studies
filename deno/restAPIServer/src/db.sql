CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "user" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "avatar" character varying(255),
    "displayName" character varying(128) NOT NULL,
    "active" boolean NOT NULL DEFAULT false,
    "email" character varying NOT NULL,
    "password" character varying NOT NULL,
    "birthDate" TIMESTAMP,
    CONSTRAINT "UQ_31235vbdyk645FSDFS3FSD3DFDF123" UNIQUE ("email"),
    CONSTRAINT "PK_453nkh5g3i5h3b243kl3i3p2g4j53h" PRIMARY KEY ("id")
);