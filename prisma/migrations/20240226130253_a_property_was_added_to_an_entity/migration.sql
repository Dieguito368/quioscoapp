-- DropIndex
DROP INDEX `products_categoria_id_fkey` ON `products`;

-- AlterTable
ALTER TABLE `orders` ADD COLUMN `status_order` BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `categories`(`id_categoria`) ON DELETE RESTRICT ON UPDATE CASCADE;
