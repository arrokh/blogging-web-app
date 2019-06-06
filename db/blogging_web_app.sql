-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Jun 06, 2019 at 06:37 PM
-- Server version: 10.3.12-MariaDB
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogging_web_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `id` char(36) NOT NULL,
  `userId` char(36) NOT NULL,
  `title` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `url` varchar(255) NOT NULL,
  `voteUp` int(5) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `userId`, `title`, `content`, `url`, `voteUp`, `createdAt`, `updatedAt`) VALUES
('25716877-d953-4dc2-a23c-28c52b8a3106', '95f5a561-aaef-45fc-aa8a-27a72762ac3d', 'Throwing ApolloErrors in your resolvers', 'Imagine you want to prevent unauthenticated users from executing certain queries. In the resolver for the protected action, you can check for the user object in the query context, and throw an AuthenticationError if it is not available.', 'https://blog.apollographql.com/full-stack-error-handling-with-graphql-apollo-5c12da407210', 0, '2019-06-04 23:36:24', '2019-06-04 23:36:24'),
('272484c8-ebff-45c2-ae29-919fb3013e9f', '95f5a561-aaef-45fc-aa8a-27a72762ac3d', 'Accessing Request in Apollo Server 2 #1066', 'The context configuration parameter can be either an object, a function that returns the object, or a function that returns a promise to return the object. This function would get the HTTP request as a parameter, and could be defined like so.', 'https://github.com/apollographql/apollo-server/issues/1066', 0, '2019-06-04 23:37:12', '2019-06-04 23:37:12'),
('5a59717d-18b4-49e3-b0c7-b20d537dbf4e', 'f1abfa81-3a23-4e2f-9a42-59777d25519c', 'Introducing React Apollo 2.1', 'The wait is over! We’re super excited to announce React Apollo 2.1, a huge step forward in improving how you develop React applications with GraphQL. It features a new render prop API and much stronger TypeScript support, along with upgraded docs. It’s also 100% backwards compatible!', 'https://blog.apollographql.com/introducing-react-apollo-2-1-c837cc23d926', 37, '2019-06-04 17:49:08', '2019-06-05 00:49:08');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` char(36) NOT NULL,
  `name` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  `password` char(60) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
('013d4cc3-7765-4d7b-8b5a-bc7aac7ad456', 'Alvan', 'alvan@gmail.com', '$2a$10$7GWvn3g22yefh7vfw5ZB/uUCSQuWAtUZL7MNwchN6bsWe4UJHHl5O', '2019-06-04 22:42:30', '2019-06-04 22:42:30'),
('95f5a561-aaef-45fc-aa8a-27a72762ac3d', 'Alvin', 'alvin@gmail.com', '$2a$10$TlJy1FhXjDlk1xdQw6MRY.EQv.wLWy1bv72hJ3NHF63S82MLi80S2', '2019-06-04 22:37:00', '2019-06-04 22:37:00'),
('f1abfa81-3a23-4e2f-9a42-59777d25519c', 'Ubay', 'ubay@gmail.com', '$2a$10$FENd7/D16eM2YxUwc1zkgeUpRNMvNGdRvKT3gpeXG/YqkRYuhID3O', '2019-06-04 23:00:48', '2019-06-04 23:00:48');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
