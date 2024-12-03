-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2024 at 06:39 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demo`
--

-- --------------------------------------------------------

--
-- Table structure for table `administrator`
--

CREATE TABLE `administrator` (
  `adminID` int(11) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `position` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bikes`
--

CREATE TABLE `bikes` (
  `bikeID` int(11) NOT NULL,
  `stationID` int(11) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `isAvailable` tinyint(1) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bikes`
--

INSERT INTO `bikes` (`bikeID`, `stationID`, `model`, `status`, `isAvailable`, `createdAt`, `updatedAt`) VALUES
(0, 0, 'model', 'status', 0, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(1, 5, 'Model_D12', 'Maintenance', 0, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(2, 6, 'Model_B7', 'Maintenance', 0, '2024-12-02 22:15:21', '2024-12-03 05:36:35'),
(3, 3, 'Model_C16', 'In Use', 0, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(4, 1, 'Model_D55', 'Maintenance', 0, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(5, 4, 'Model_B97', 'Maintenance', 0, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(6, 9, 'Model_D78', 'Available', 0, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(7, 8, 'Model_B53', 'Maintenance', 1, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(8, 3, 'Model_B44', 'Maintenance', 0, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(9, 9, 'Model_A54', 'In Use', 0, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(10, 9, 'Model_B72', 'Available', 1, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(11, 3, 'Model_B78', 'Maintenance', 0, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(12, 1, 'Model_B87', 'Available', 0, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(13, 4, 'Model_D39', 'In Use', 1, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(14, 6, 'Model_C16', 'Available', 1, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(15, 9, 'Model_D46', 'In Use', 0, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(16, 4, 'Model_D100', 'Available', 0, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(17, 8, 'Model_C8', 'Available', 0, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(18, 5, 'Model_A32', 'In Use', 1, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(19, 3, 'Model_D94', 'Maintenance', 0, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(20, 6, 'Model_A99', 'Maintenance', 1, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(21, 9, 'Model_C15', 'In Use', 1, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(22, 4, 'Model_C67', 'Available', 0, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(23, 1, 'Model_A15', 'Maintenance', 1, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(24, 5, 'Model_D93', 'In Use', 1, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(25, 3, 'Model_C64', 'In Use', 1, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(26, 5, 'Model_B18', 'In Use', 1, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(27, 10, 'Model_A41', 'In Use', 0, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(28, 9, 'Model_C43', 'Maintenance', 0, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(29, 9, 'Model_B68', 'Available', 1, '2024-12-02 22:15:21', '2024-12-02 22:15:21'),
(30, 4, 'Model_D76', 'In Use', 0, '2024-12-02 22:15:21', '2024-12-02 22:15:21');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedbackID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `bikeID` int(11) DEFAULT NULL,
  `rentID` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `comment` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `paymentID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `payDate` date DEFAULT NULL,
  `cardNumber` varchar(512) NOT NULL,
  `cardExpiry` varchar(512) NOT NULL,
  `cardCVC` varchar(128) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`paymentID`, `userID`, `amount`, `payDate`, `cardNumber`, `cardExpiry`, `cardCVC`, `createdAt`, `updatedAt`) VALUES
(1, 1, 123.00, NULL, '5a4c5a5a6f6ad4563fbea4787f984f9b', '4af0346b99fa84ca06a22d20c3c15a1dad6878ca35f9ab3010dc9c098db22def', '650e1ad856248824a46b9982b6715c71', '2024-12-03 05:24:28', '2024-12-03 05:24:28'),
(2, 1, 123.00, NULL, '4f0e774a95d8ecb454b0ed4884eb07c3', 'a14218c89294121e54491f7f645e13b3218be41857bd53193d9b2b0cb5951939', '502d8dcde5cc69ce941b774920a45060', '2024-12-03 05:31:43', '2024-12-03 05:31:43'),
(3, 1, 123.00, NULL, '2014cfbdfe6dcb20601e48c2e6bf0bb9', 'e8fcb419d805af019f20fc6e55f425e81dfdc9775c979e59dc3a29e5769ed78b', 'b336a6f349f80827d360d424900b6965', '2024-12-03 05:32:32', '2024-12-03 05:32:32'),
(4, 1, 123.00, NULL, 'ca749857510e52fd8c7237dd43afb635', 'a4dc97263257624f876efdb6ff331afbfa9bc6529a4b3fb005e340826fc430df', '780e3735cc5f312fe4a1ba07bd3fb307', '2024-12-03 05:36:35', '2024-12-03 05:36:35');

-- --------------------------------------------------------

--
-- Table structure for table `rents`
--

CREATE TABLE `rents` (
  `rentalID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `bikeID` int(11) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `startTime` datetime NOT NULL,
  `endTime` datetime DEFAULT NULL,
  `cost` decimal(10,2) DEFAULT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(20) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rents`
--

INSERT INTO `rents` (`rentalID`, `userID`, `bikeID`, `status`, `startTime`, `endTime`, `cost`, `destination`, `phoneNumber`, `createdAt`, `updatedAt`) VALUES
(0, 1, 2, 'rented', '2024-12-03 05:36:35', NULL, NULL, '1', 'home', '2024-12-03 05:36:35', '2024-12-03 05:36:35');

--
-- Triggers `rents`
--
DELIMITER $$
CREATE TRIGGER `before_insert_trigger_name` BEFORE INSERT ON `rents` FOR EACH ROW BEGIN
    -- Set startTime to the current datetime
    SET NEW.startTime = NOW();
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `before_update_trigger_name` BEFORE UPDATE ON `rents` FOR EACH ROW BEGIN
    -- Calculate cost if endTime is not NULL
    IF NEW.endTime IS NOT NULL THEN
        SET NEW.cost = TIMESTAMPDIFF(HOUR, NEW.startTime, NEW.endTime) * 2;
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `stations`
--

CREATE TABLE `stations` (
  `stationID` int(11) NOT NULL,
  `stationName` varchar(50) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stations`
--

INSERT INTO `stations` (`stationID`, `stationName`, `location`, `createdAt`, `updatedAt`) VALUES
(0, 'station_0', 'location', '2024-12-02 21:56:01', '2024-12-02 22:22:41'),
(1, 'Station_1', 'Location_8', '2024-12-02 21:56:01', '2024-12-02 21:56:01'),
(2, 'Station_2', 'Location_12', '2024-12-02 21:56:01', '2024-12-02 21:56:01'),
(3, 'Station_3', 'Location_33', '2024-12-02 21:56:01', '2024-12-02 21:56:01'),
(4, 'Station_4', 'Location_50', '2024-12-02 21:56:01', '2024-12-02 21:56:01'),
(5, 'Station_5', 'Location_26', '2024-12-02 21:56:01', '2024-12-02 21:56:01'),
(6, 'Station_6', 'Location_13', '2024-12-02 21:56:01', '2024-12-02 21:56:01'),
(7, 'Station_7', 'Location_26', '2024-12-02 21:56:01', '2024-12-02 21:56:01'),
(8, 'Station_8', 'Location_8', '2024-12-02 21:56:01', '2024-12-02 21:56:01'),
(9, 'Station_9', 'Location_8', '2024-12-02 21:56:01', '2024-12-02 21:56:01'),
(10, 'Station_10', 'Location_45', '2024-12-02 21:56:01', '2024-12-02 21:56:01');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` int(11) NOT NULL,
  `firstName` varchar(20) DEFAULT NULL,
  `lastName` varchar(20) DEFAULT NULL,
  `phoneNo` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `firstName`, `lastName`, `phoneNo`, `email`, `password`) VALUES
(1, 'John', 'Tester', '0000000000', 'johnTester@mail.com', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrator`
--
ALTER TABLE `administrator`
  ADD PRIMARY KEY (`adminID`);

--
-- Indexes for table `bikes`
--
ALTER TABLE `bikes`
  ADD PRIMARY KEY (`bikeID`),
  ADD KEY `stationID` (`stationID`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedbackID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `bikeID` (`bikeID`),
  ADD KEY `rentID` (`rentID`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`paymentID`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `rents`
--
ALTER TABLE `rents`
  ADD PRIMARY KEY (`rentalID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `bikeID` (`bikeID`);

--
-- Indexes for table `stations`
--
ALTER TABLE `stations`
  ADD PRIMARY KEY (`stationID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `paymentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bikes`
--
ALTER TABLE `bikes`
  ADD CONSTRAINT `bikes_ibfk_1` FOREIGN KEY (`stationID`) REFERENCES `stations` (`stationID`);

--
-- Constraints for table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`),
  ADD CONSTRAINT `feedback_ibfk_2` FOREIGN KEY (`bikeID`) REFERENCES `bikes` (`bikeID`),
  ADD CONSTRAINT `feedback_ibfk_3` FOREIGN KEY (`rentID`) REFERENCES `rents` (`rentalID`);

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`);

--
-- Constraints for table `rents`
--
ALTER TABLE `rents`
  ADD CONSTRAINT `rents_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`),
  ADD CONSTRAINT `rents_ibfk_2` FOREIGN KEY (`bikeID`) REFERENCES `bikes` (`bikeID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
