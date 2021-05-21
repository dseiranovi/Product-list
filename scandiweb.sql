-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2021 at 12:08 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scandiweb`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `sku` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `weight` double NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'books'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

CREATE TABLE `content` (
  `ID` int(11) NOT NULL,
  `SKU` varchar(11) NOT NULL,
  `NAME` varchar(255) NOT NULL,
  `PRICE` decimal(6,2) NOT NULL,
  `TYPE` varchar(11) NOT NULL,
  `SIZE` varchar(11) DEFAULT NULL,
  `HEIGHT` varchar(11) DEFAULT NULL,
  `WIDTH` varchar(11) DEFAULT NULL,
  `LENGHT` varchar(11) DEFAULT NULL,
  `WEIGHT` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`ID`, `SKU`, `NAME`, `PRICE`, `TYPE`, `SIZE`, `HEIGHT`, `WIDTH`, `LENGHT`, `WEIGHT`) VALUES
(383, 'JSPIC001', 'DISC', '1.00', 'MB', '700', '', '', '', ''),
(390, 'GGWP007', 'War and Peace', '20.00', 'KG', '', '', '', '', '20'),
(391, 'TR1205555', 'Cair', '40.00', 'CM', '', '24', '45', '15', ''),
(395, 'TR1205555', 'Cair', '40.00', 'CM', '', '24', '45', '15', ''),
(439, 'TESTSKU', 'TESTNAME', '50.00', 'MB', '10', '', '', '', ''),
(440, 'TESTSKU', 'TESTNAME', '10.00', 'MB', '700', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `disks`
--

CREATE TABLE `disks` (
  `id` int(11) NOT NULL,
  `sku` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `size` int(11) NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'disks'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `furnitures`
--

CREATE TABLE `furnitures` (
  `id` int(11) NOT NULL,
  `sku` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `height` int(11) NOT NULL,
  `width` int(11) NOT NULL,
  `lenght` int(11) NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'furnitures'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `disks`
--
ALTER TABLE `disks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `furnitures`
--
ALTER TABLE `furnitures`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `content`
--
ALTER TABLE `content`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=441;

--
-- AUTO_INCREMENT for table `disks`
--
ALTER TABLE `disks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `furnitures`
--
ALTER TABLE `furnitures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=219;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
