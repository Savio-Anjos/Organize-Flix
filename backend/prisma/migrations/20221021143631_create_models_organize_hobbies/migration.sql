-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_ad" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_ad" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favorites" (
    "id" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "created_ad" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_ad" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "favorites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "seasons" INTEGER,
    "created_ad" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_ad" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "category_id" TEXT NOT NULL,
    "favorite_id" TEXT NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_favorite_id_fkey" FOREIGN KEY ("favorite_id") REFERENCES "favorites"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
