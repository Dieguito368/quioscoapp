/*
  Warnings:

  - You are about to drop the column `categoryId` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `product` table. All the data in the column will be lost.
  - Added the required column `categoria_ids` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_product` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_product` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_product` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Product_categoryId_fkey` ON `product`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `categoryId`,
    DROP COLUMN `image`,
    DROP COLUMN `name`,
    DROP COLUMN `price`,
    ADD COLUMN `categoria_ids` INTEGER NOT NULL,
    ADD COLUMN `image_product` VARCHAR(191) NOT NULL,
    ADD COLUMN `name_product` VARCHAR(191) NOT NULL,
    ADD COLUMN `price_product` DOUBLE NOT NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoria_ids_fkey` FOREIGN KEY (`categoria_ids`) REFERENCES `category`(`id_categoria`) ON DELETE RESTRICT ON UPDATE CASCADE;
