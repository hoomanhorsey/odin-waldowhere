/*
  Warnings:

  - Added the required column `mapId` to the `Characters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mapId` to the `Leaderboard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Characters" ADD COLUMN     "mapId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Leaderboard" ADD COLUMN     "mapId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Map" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "filename" TEXT NOT NULL,

    CONSTRAINT "Map_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Characters" ADD CONSTRAINT "Characters_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leaderboard" ADD CONSTRAINT "Leaderboard_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
