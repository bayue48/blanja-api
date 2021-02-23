-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 23, 2021 at 06:06 AM
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
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address_name` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `zip` varchar(255) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `name`, `address_name`, `street`, `city`, `zip`, `phone`, `user_id`, `created_at`, `updated_at`) VALUES
(9, 'Erich', 'Home', 'Jl. Gajah Mada Gg. Merdeka No. 897', 'Tuban', '62315', 6281232123287, 15, '2021-02-17 16:46:19', '2021-02-17 16:46:19'),
(10, 'Bayu', 'House', '75 Moreland St', 'Grantville', '30220', 6281232123287, 15, '2021-02-22 12:54:51', '2021-02-22 12:54:51'),
(11, 'Angga', 'Office', '75 Moreland St', 'Grantville', '30220', 6281232123287, 15, '2021-02-22 12:57:14', '2021-02-22 12:57:14');

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
(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVyaWNoIiwibGV2ZWwiOjIsImlhdCI6MTYwNzUxNjg4NX0.3xc4Po_LQZUoblzsETTybUBOcuDfeZpU-7dt7-AVbT8'),
(2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RpbmciLCJsZXZlbCI6MCwiaWF0IjoxNjA4MDgyNDgwLCJleHAiOjE2MDgxNjg4ODB9.qGRfOcw2q7MHz8kxWRc3pEompKPUlBYnTINDqvDsdc0'),
(3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJ0ZXN0IiwiaWF0IjoxNjEzMTEyMzE3fQ.QTSUw-V29uInAhU7-yaKveXZl5RrjmevjLfHLJcZcJ8'),
(4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJ0ZXN0IiwiaWF0IjoxNjEzMTE5Mzg5fQ.JhTwJVcoGS684O-fguSzLOI8U16ZUOPg0RrkIB22YYA'),
(5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJ0ZXN0IiwiaWF0IjoxNjEzMzUzNzMyfQ.FxoMTWC35Eyso_8ysnjXRJ3M2VzDiLD5f9PfSs_cv10'),
(6, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJ0ZXN0IiwiaWF0IjoxNjEzMzU2OTMxfQ.bILpi-4qgjsr2x5W5uwNTXKt3GtJVyZVaOXKkVYgggY'),
(7, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJ0ZXN0IiwiaWF0IjoxNjEzNDQ0NzQ3fQ.CFCbRZdSQdbIp2YRSLgmfOZIQzCNhXB-Z6V_6P0Tdd4'),
(8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJ0ZXN0IiwiaWF0IjoxNjEzNDQ1NDU5fQ.t-vquWzPSOjkUgrpbCLNLH3Nc9Dj2BGHK2teCsYNjgs'),
(9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJ0ZXN0IiwiaWF0IjoxNjEzNTQ2NDIyfQ.iax1k15Fw_418I62LpIYhlOZ9acjArMzNzOQg6Bcw8Y'),
(10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiIiLCJpYXQiOjE2MTM5OTQxNDN9.0U2reaoKF8pH7LsxlJ7w9uByTm09X2VhRRQor00Ycio'),
(11, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJUZXN0IiwiaWF0IjoxNjEzOTk4MTYyfQ.ujOGUFxYG9L8Qq4mVzxYFP8yFjAammWQLqY7fR2Mr-Y'),
(12, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJUZXN0IiwiaWF0IjoxNjEzOTk5NDMyfQ.CE6jhU2nZZSKp8N1PRn1PasGf6ZHNPFvNhbtY4ldCko'),
(13, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJUZXN0IiwiaWF0IjoxNjEzOTk5ODAwfQ.GafV_qlKpYZNUq-5c-mkJuS5mhZ6E7VEEBHCxhH0laU'),
(14, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJUZXN0IiwiaWF0IjoxNjEzOTk5ODgwfQ.Mt2sB8MI5e_-m1LWMVcOFGKfVfv2t0JeJ2dBOSqiJY0'),
(15, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJUZXN0IiwiaWF0IjoxNjE0MDAwMDAxfQ.pDJIJLj-btRvuwIOGNBXb3EQiQAfMSD26gGRK_CmyXo'),
(16, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJUZXN0IiwiaWF0IjoxNjE0MDAwMDgxfQ.d5-wnynjcvk2jSyMsnVsRvvprwVPbdEw39FMYMrpFt4'),
(17, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJUZXN0IiwiaWF0IjoxNjE0MDAwMTQ2fQ.Z50SCIBIoJVO7fvr_3YNPIgO13e8Nvep7j0fwJC9Vi8'),
(18, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJUZXN0IiwiaWF0IjoxNjE0MDAwMTg2fQ.J0JS6bzaa2qLQLn8Ib06bhKDfdNts9hwVRlC6fNKABE'),
(19, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJUZXN0IiwiaWF0IjoxNjE0MDExODA4fQ.oU6TlBrmcg4iaTpGMbdBvuFs-w_jfohmdArH-kkVoxg'),
(20, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsIm5hbWUiOiJDb2JhIiwiaWF0IjoxNjE0MDIzMDc2fQ.vJX0sium5QfJODezshGe6CDCUjj0gORq_Dwg4-qRNOw'),
(21, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsIm5hbWUiOiJDb2JhIiwiaWF0IjoxNjE0MDIzMjI2fQ.rwVtZDPjbC_VrnTbcyxPzlqe_bhjlTlpO0WMIloNLqk'),
(22, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsIm5hbWUiOiJDb2JhIiwiaWF0IjoxNjE0MDIzOTQ5fQ.uGHNf5PRy1vOrYA-gF5rsTLvG9K7ngFW3h7YagY80ec'),
(23, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsIm5hbWUiOiJDb2JhIiwiaWF0IjoxNjE0MDI0MDI4fQ.AdqM6rdXbnZ9hIB2m0CxschscAi-g0kl8PXO8gaCp38');

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
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id` int(11) NOT NULL,
  `invoice_id` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `qty` int(11) NOT NULL,
  `price` int(11) DEFAULT NULL,
  `payment` varchar(211) NOT NULL,
  `o_status` int(11) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `updated` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id`, `invoice_id`, `user_id`, `qty`, `price`, `payment`, `o_status`, `created`, `updated`) VALUES
(25, 'INV/2021/1/3/BKB4JC', 15, 6, 2100000, 'Mastercard', 1, '2021-02-22 00:00:00', '2021-02-22 13:13:29'),
(26, 'INV/2021/1/3/W52CDH', 15, 1, 300000, 'POS', 2, '2021-02-22 00:00:00', '2021-02-22 13:13:29'),
(27, 'INV/2021/1/3/8F4C2Y', 15, 1, 300000, 'POS', 1, '2021-02-22 00:00:00', '2021-02-22 13:13:29'),
(28, 'INV/2021/1/3/3VV7D4', 15, 5, 1500000, 'Gopay', 3, '2021-02-22 00:00:00', '2021-02-22 13:13:29'),
(29, 'INV/2021/1/3/4U3V5V', 15, 2, 600000, 'Mastercard', 1, '2021-02-22 00:00:00', '2021-02-22 13:13:29'),
(30, 'INV/2021/1/3/JFKHEA', 15, 1, 250000, 'Gopay', 2, '2021-02-22 00:00:00', '2021-02-22 13:13:29'),
(31, 'INV/2021/1/3/81D002', 15, 2, 600000, 'POS', 2, '2021-02-22 00:00:00', '2021-02-22 13:13:29'),
(32, 'INV/2021/1/3/9HF7J2', 15, 1, 300000, 'POS', 1, '2021-02-22 00:00:00', '2021-02-22 13:13:29'),
(33, 'INV/2021/1/3/ZREOXP', 15, 2, 650000, 'Mastercard', 3, '2021-02-22 00:00:00', '2021-02-22 13:13:29'),
(34, 'INV/2021/1/22/4LAZ5F', 15, 2, 449999, 'POS', 3, '2021-02-22 00:00:00', '2021-02-22 15:25:56'),
(35, 'INV/2021/1/22/TV76HL', 15, 1, 634736, 'Mastercard', 3, '2021-02-22 00:00:00', '2021-02-22 15:28:08'),
(36, 'INV/2021/1/22/GGLS0H', 15, 1, 300000, 'Mastercard', 2, '2021-02-22 00:00:00', '2021-02-22 15:36:47'),
(37, 'INV/2021/1/22/CZTBEB', 15, 1, 100000, 'POS', 1, '2021-02-22 00:00:00', '2021-02-22 21:33:33');

-- --------------------------------------------------------

--
-- Table structure for table `item_order`
--

CREATE TABLE `item_order` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `product_img` varchar(255) NOT NULL,
  `invoive_id` varchar(255) NOT NULL,
  `payment` int(11) NOT NULL,
  `address` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `isReviewed` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Table structure for table `order_status`
--

CREATE TABLE `order_status` (
  `id` int(11) NOT NULL,
  `status_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_status`
--

INSERT INTO `order_status` (`id`, `status_name`) VALUES
(1, 'Order Placed'),
(2, 'On Process'),
(3, 'Delivered');

-- --------------------------------------------------------

--
-- Table structure for table `otp`
--

CREATE TABLE `otp` (
  `id` int(11) NOT NULL,
  `otp` int(11) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `otp`
--

INSERT INTO `otp` (`id`, `otp`, `created`) VALUES
(14, 659489, '2021-02-23 11:33:10'),
(15, 445086, '2021-02-23 11:50:42'),
(16, 333415, '2021-02-23 11:50:56'),
(17, 289061, '2021-02-23 12:03:47'),
(18, 255743, '2021-02-23 12:05:16');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT 1,
  `product_name` varchar(255) NOT NULL,
  `product_brand` varchar(255) DEFAULT NULL,
  `product_rating` int(11) DEFAULT 1,
  `product_desc` longtext NOT NULL,
  `product_category` int(11) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_color` int(11) DEFAULT 1,
  `product_size` int(11) DEFAULT 1,
  `product_qty` int(11) DEFAULT 1,
  `product_img` mediumtext DEFAULT NULL,
  `product_condition` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `user_id`, `product_name`, `product_brand`, `product_rating`, `product_desc`, `product_category`, `product_price`, `product_color`, `product_size`, `product_qty`, `product_img`, `product_condition`, `created_at`, `updated_at`) VALUES
(3, 1, 'Baju Muslim Pria', 'Zalora Cloth', 4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 1, 100000, 5, 3, 3, '/images/product_img-1613580791794.png', 'New', '2021-02-17 23:42:04', '2021-02-17 23:53:11'),
(6, 1, 'Kaos Gura', 'Hololive', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 1, 200000, 2, 3, 5, '/images/product_img-1607575424697.png,/images/product_img-1607575426349.png', 'New', '2020-12-09 20:16:56', '2020-12-09 20:16:56'),
(7, 1, 'Kaos Pekora', 'Hololive', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 1, 200000, 2, 3, 2, '/images/product_img-1607575424697.png,/images/product_img-1607575426349.png', 'New', '2020-12-09 20:16:56', '2020-12-09 20:16:56'),
(8, 1, 'Sepatu Nike', 'Nike', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 5, 300000, 1, 9, 3, '/images/product_img-1607556132626.jpg', 'New', '2020-12-09 22:07:37', '2020-12-09 22:07:37'),
(11, 1, 'Sepatu Nike Ardila', 'Nike', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 15, 300000, 1, 9, 3, '/images/product_img-1607556132626.jpg', 'New', '2020-12-09 22:22:39', '2020-12-09 22:27:07'),
(12, 1, 'Sepatu Riker', 'Riker', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 5, 300000, 1, 9, 3, '/images/product_img-1607556132626.jpg', 'New', '2020-12-10 06:22:14', '2020-12-10 06:22:14'),
(13, 1, 'Sepatu Rieker Limited', 'Rieker', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 5, 50000, 1, 9, 8, '/images/product_img-1607556132626.jpg', 'New', '2020-12-10 11:42:30', '2020-12-10 12:54:33'),
(14, 1, 'Kaos Jaket Langka', 'Jas', 4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 1, 100000, 1, 4, 3, '/images/product_img-1607575424697.png,/images/product_img-1607575426349.png', 'New', '2020-12-10 11:43:46', '2020-12-10 11:43:46'),
(15, 1, 'Kaos Jaket Limited', 'Jas', 4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 1, 100000, 1, 4, 3, '/images/product_img-1607575424697.png,/images/product_img-1607575426349.png', 'New', '2020-12-10 12:46:19', '2020-12-10 12:46:19'),
(16, 1, 'Kaos Jaket Super', 'Jas', 4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 1, 100000, 1, 4, 3, '/images/product_img-1607575424697.png,/images/product_img-1607575426349.png', 'New', '2020-12-10 12:46:40', '2020-12-10 12:46:40'),
(18, 15, 'Kaos Jaket Langka Super', 'Jas', 4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 1, 100000, 1, 4, 3, '/images/product_img-1607575424697.png,/images/product_img-1607575426349.png', 'New', '2020-12-16 08:40:52', '2020-12-16 08:40:52'),
(21, 1, 'Blouse Wanita', 'Adidas', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 1, 200000, 1, 3, 3, '/images/product_img-1609980559746.png', 'New', '2021-01-07 07:49:19', '2021-01-07 07:49:19'),
(22, 1, 'Kaos Wanita', 'Adidas', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 1, 200000, 1, 3, 3, '/images/product_img-1609980632709.png', 'New', '2021-01-07 07:50:32', '2021-01-07 07:50:32'),
(23, 1, 'Dress Wanita', 'Adidas', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 14, 200000, 1, 3, 3, '/images/product_img-1609980659256.png', 'New', '2021-01-07 07:50:59', '2021-01-07 07:50:59'),
(24, 1, 'Kaos Garis Wanita', 'Adidas', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 1, 250000, 1, 3, 3, '/images/product_img-1609980687425.png', 'New', '2021-01-07 07:51:27', '2021-01-07 07:51:27'),
(25, 1, 'Hem Wanita', 'Adidas', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 1, 250000, 1, 3, 3, '/images/product_img-1609980713180.png', 'New', '2021-01-07 07:51:53', '2021-01-07 07:51:53'),
(26, 1, 'Kaos Sport Wanita', 'Adidas', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 1, 250000, 1, 3, 3, '/images/product_img-1609980733655.png', 'New', '2021-01-07 07:52:13', '2021-01-07 07:52:13'),
(27, 1, 'Kaos Garis Lengan Panjang', 'Adidas', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 1, 300000, 1, 3, 3, '/images/product_img-1609980760340.png', 'New', '2021-01-07 07:52:40', '2021-01-07 07:52:40'),
(28, 1, 'Kaos Oblong Pria', 'Adidas', 5, 'Kaos Super Langka Limited Edition', 1, 300000, 1, 3, 3, '/images/product_img-1609980786615.png', 'New', '2021-01-07 07:53:06', '2021-01-07 07:53:06'),
(29, 1, 'Jacket Wanita', 'Adidas', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 3, 300000, 1, 3, 3, '/images/product_img-1609980809832.png', 'New', '2021-01-07 07:53:29', '2021-01-07 07:53:29'),
(30, 15, 'Baju Dress Wanita', 'Hololive', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 1, 349999, 3, 5, 4, '/images/product_img-1613971302945.png', 'Second', '2021-01-07 07:54:13', '2021-02-22 12:22:31'),
(31, 15, 'Dress Hitam Wanita', 'Adidas', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. \r\nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\r\n\r\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\r\n\r\nIn ultricies rutrum tempus. Mauris vel molestie orci.', 14, 350000, 1, 3, 3, '/images/product_img-1609980875903.png', 'New', '2021-01-07 07:54:35', '2021-01-07 07:54:35'),
(42, 15, 'Dresss Wanita Motif', 'Star', 0, 'Lorem Ipsum', 14, 634736, 3, 5, 13, '/images/product_img-1613972099643.png,/images/product_img-1613972099649.png', 'New', '2021-02-22 12:34:59', '2021-02-22 12:38:43');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `review` varchar(255) NOT NULL,
  `rating` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transactions_history`
--

INSERT INTO `transactions_history` (`id`, `product`, `category`, `color`, `size`, `qty`, `price`, `created_at`, `user_id`) VALUES
(1, 1, 1, 3, 5, 3, 100000, '2020-12-09 22:44:21', 1),
(2, 0, 0, 0, 0, 0, 0, '2021-01-28 19:08:49', 2),
(3, 0, 0, 0, 0, 0, 0, '2021-01-28 19:08:50', 2),
(4, 0, 0, 0, 0, 0, 0, '2021-01-28 19:08:53', 2),
(5, 0, 0, 0, 0, 0, 0, '2021-01-28 19:08:53', 2),
(6, 0, 0, 0, 0, 0, 0, '2021-01-28 19:08:53', 2),
(7, 0, 0, 0, 0, 0, 0, '2021-01-28 19:08:53', 2),
(8, 0, 0, 0, 0, 0, 0, '2021-01-28 19:08:53', 2),
(9, 0, 0, 0, 0, 0, 0, '2021-01-28 19:08:53', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `store` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `level_id` int(11) NOT NULL,
  `isVerified` tinyint(1) NOT NULL DEFAULT 1,
  `store_desc` varchar(255) DEFAULT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `updated` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `phone`, `store`, `img`, `level_id`, `isVerified`, `store_desc`, `created`, `updated`) VALUES
(1, '48yunyun@gmail.com', '$2b$10$a/zUBuNUoDyIy9UUvEx56O2MNtqQujXdegg1WVJmtkZ6fNptUjye6', 'Bayu', '0', '', '', 1, 1, NULL, '2021-02-22 14:34:49', '2021-02-22 14:34:49'),
(2, 'erich@gmail.com', '$2b$10$3GEdca3uStJ0.9UO13Y7mOI.ygTWOYZdbfGlxxs8Fld1QtYqzU91u', 'Erich', '0', '', '', 2, 1, NULL, '2021-02-22 14:34:49', '2021-02-22 14:34:49'),
(12, 'bayu.erich@gmail.com', '$2b$10$rbHk6zrQONmqJBC4WRWmJe1Ckom1OCmfijFnPquyBg3BS8ZkFSnhm', 'BAyu', NULL, 'Bayu Shop', NULL, 1, 1, NULL, '2021-02-22 14:34:49', '2021-02-22 14:34:49'),
(15, 'test@test.mail', '$2b$10$sR11WiPciI0nixqzNLBuguSh.jisGg9uWpL.b.rbetoLFcDkVWSqa', 'Test', '0475385835', '', '/images/img-1613992170914.jpg', 2, 1, '', '2021-02-22 14:34:49', '2021-02-22 22:52:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item_order`
--
ALTER TABLE `item_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `otp`
--
ALTER TABLE `otp`
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
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `blacklist`
--
ALTER TABLE `blacklist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

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
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `item_order`
--
ALTER TABLE `item_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `order_status`
--
ALTER TABLE `order_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `otp`
--
ALTER TABLE `otp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `transactions_history`
--
ALTER TABLE `transactions_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
