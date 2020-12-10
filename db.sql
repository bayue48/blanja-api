-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2020 at 04:11 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blanja_products`
--

-- --------------------------------------------------------

--
-- Table structure for table `blacklist`
--

CREATE TABLE `blacklist` (
  `id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blacklist`
--

INSERT INTO `blacklist` (`id`, `token`) VALUES
(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVyaWNoIiwibGV2ZWwiOjIsImlhdCI6MTYwNzUxNjg4NX0.3xc4Po_LQZUoblzsETTybUBOcuDfeZpU-7dt7-AVbT8');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`) VALUES
(1, 'T-Shirt'),
(2, 'Shorts'),
(3, 'Jacket'),
(4, 'Pants'),
(5, 'Shoes'),
(6, 'High heels'),
(7, 'Wristwatch'),
(8, 'Handbag'),
(9, 'Bagpack'),
(10, 'Socks'),
(11, 'Glasses'),
(12, 'Cap'),
(13, 'Tie'),
(14, 'Dress'),
(15, 'Formal suit'),
(16, 'Accessories');

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `color_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `colors`
--

INSERT INTO `colors` (`id`, `color_name`) VALUES
(1, 'Black'),
(2, 'White'),
(3, 'Red'),
(4, 'Green'),
(5, 'Blue');

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `id` int(11) NOT NULL,
  `level_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `levels`
--

INSERT INTO `levels` (`id`, `level_name`) VALUES
(1, 'Seller'),
(2, 'Custommer');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_brand` varchar(255) NOT NULL,
  `product_rating` int(11) NOT NULL,
  `product_desc` longtext NOT NULL,
  `product_category` int(11) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_color` int(11) NOT NULL,
  `product_size` int(11) NOT NULL,
  `product_qty` int(11) NOT NULL,
  `product_img` mediumtext NOT NULL,
  `product_condition` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `product_brand`, `product_rating`, `product_desc`, `product_category`, `product_price`, `product_color`, `product_size`, `product_qty`, `product_img`, `product_condition`, `created_at`, `updated_at`) VALUES
(1, 'Men\'s formal suit', 'Zalora Cloth', 4, 'Jas Formal Limited Edition.', 15, 200000, 1, 4, 5, '', 'New', '2020-11-20 10:06:33', '2020-11-20 10:06:33'),
(2, 'Men\'s Jacket jeans', 'Zalora Cloth', 3, 'Jacket Limited Edition', 3, 200000, 1, 5, 4, '', 'New', '2020-11-23 09:15:55', '2020-11-23 09:15:55'),
(3, 'Baju Muslim Pria', 'Zalora Cloth', 4, 'Baju muslim Limited Edition', 1, 100000, 5, 3, 3, '', 'New', '2020-11-23 09:18:29', '2020-11-23 09:18:29'),
(5, 'Baju Kureji', 'Hololive', 3, 'Baju langka', 1, 150000, 3, 4, 2, '', 'New', '2020-11-23 14:25:00', '2020-12-10 07:09:03'),
(6, 'Kaos Gura', 'Hololive', 5, 'Kaos Gura', 1, 200000, 2, 3, 5, '', 'New', '2020-12-09 20:16:56', '2020-12-09 20:16:56'),
(7, 'Kaos Pekora', 'Hololive', 5, 'Kaosnya Pekora', 1, 200000, 2, 3, 2, '', 'New', '2020-12-09 20:16:56', '2020-12-09 20:16:56'),
(8, 'Sepatu Nike', 'Nike', 5, 'Sepatu Nike Langka', 5, 300000, 1, 9, 3, '', 'New', '2020-12-09 22:07:37', '2020-12-09 22:07:37'),
(11, 'Sepatu Nike Ardila', 'Nike', 5, 'Sepatu Nike Langka', 5, 300000, 1, 9, 3, '', 'New', '2020-12-09 22:22:39', '2020-12-09 22:27:07'),
(12, 'Sepatu Riker', 'Riker', 5, 'Sepatu Riker', 5, 300000, 1, 9, 3, '/images/product_img-1607556132626.jpg', 'New', '2020-12-10 06:22:14', '2020-12-10 06:22:14');

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `id` int(11) NOT NULL,
  `sizes_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`id`, `sizes_name`) VALUES
(1, 'XS'),
(2, 'S'),
(3, 'M'),
(4, 'L'),
(5, 'XL'),
(6, '38'),
(7, '39'),
(8, '40'),
(9, '41'),
(10, '42'),
(11, '43'),
(12, '44');

-- --------------------------------------------------------

--
-- Table structure for table `transactions_history`
--

CREATE TABLE `transactions_history` (
  `id` int(11) NOT NULL,
  `product` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `color` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transactions_history`
--

INSERT INTO `transactions_history` (`id`, `product`, `category`, `color`, `size`, `qty`, `price`, `created_at`) VALUES
(1, 1, 1, 3, 5, 3, 100000, '2020-12-09 22:44:21');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `level_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `level_id`) VALUES
(1, 'bayu', '$2b$10$FKca21w9UX6n9hiN6NVdAOkerE37gjSUkQ2duNboisPhDWKvUpsEC', 1),
(2, 'erich', '$2b$10$rzE9myNn84kVijuJrDgr6u92rNQkhJaPH83zpOK0GxhY2CMXI5.AC', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blacklist`
--
ALTER TABLE `blacklist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions_history`
--
ALTER TABLE `transactions_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blacklist`
--
ALTER TABLE `blacklist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `transactions_history`
--
ALTER TABLE `transactions_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
