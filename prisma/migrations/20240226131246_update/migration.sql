-- DropIndex
DROP INDEX `products_categoria_id_fkey` ON `products`;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `categories`(`id_categoria`) ON DELETE RESTRICT ON UPDATE CASCADE;
