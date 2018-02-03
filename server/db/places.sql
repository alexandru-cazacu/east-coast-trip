-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Gen 30, 2018 alle 18:29
-- Versione del server: 10.1.28-MariaDB
-- Versione PHP: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `east-coast-trip`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `places`
--

CREATE TABLE `places` (
  `ID` int(11) NOT NULL,
  `city_name` varchar(256) COLLATE utf8_bin NOT NULL,
  `city_nick` varchar(256) COLLATE utf8_bin NOT NULL,
  `city_thumb_url` varchar(256) COLLATE utf8_bin NOT NULL,
  `city_bg_url` varchar(256) COLLATE utf8_bin NOT NULL,
  `city_desc` varchar(1024) COLLATE utf8_bin NOT NULL,
  `place1_img_url` varchar(256) COLLATE utf8_bin NOT NULL,
  `place1_name` varchar(256) COLLATE utf8_bin NOT NULL,
  `place1_desc` varchar(1024) COLLATE utf8_bin NOT NULL,
  `place2_img_url` varchar(256) COLLATE utf8_bin NOT NULL,
  `place2_name` varchar(256) COLLATE utf8_bin NOT NULL,
  `place2_desc` varchar(1024) COLLATE utf8_bin NOT NULL,
  `place3_img_url` varchar(256) COLLATE utf8_bin NOT NULL,
  `place3_name` varchar(256) COLLATE utf8_bin NOT NULL,
  `place3_desc` varchar(1024) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dump dei dati per la tabella `places`
--

INSERT INTO `places` (`ID`, `city_name`, `city_nick`, `city_thumb_url`, `city_bg_url`, `city_desc`, `place1_img_url`, `place1_name`, `place1_desc`, `place2_img_url`, `place2_name`, `place2_desc`, `place3_img_url`, `place3_name`, `place3_desc`) VALUES
(1, 'Chicago', 'The Murder City', 'Chicago.jpg', 'Chicago-city-view.jpg', 'Chicago is the third largest city in the United States, it is sometimes called the \"Windy City\".\nChicago was incorporated as a city in 1837, near a portage between the Great Lakes and the Mississippi River watershed, it was  named for the plants common along the Chicago River.\nToday The city is an international hub for finance, commerce, industry, telecommunications, and transportation. It is also known as \"The Murder Capital of the United States\"', 'St.MaryOfTheAngels.jpg', 'St. Mary Of The Angels', 'St. Mary of the Angels is an historic church located in Chicago\'s Bucktown neighborhood.\nIt has been acclaimed as one of the finest specimens of Roman Renaissance architecture in the United States.\nThe imposing brick edifice with its twin bell towers and magnificent dome was constructed at a cost of $400,000.', 'FederalReserveBank.jpg', 'Federal Reserve Bank of Chicago', 'The Federal Reserve Bank of Chicago is also known as the Chicago Fed and is one of the banks that make up the nation\'s central bank.\nIn the inside the bank\'s money museum can be found, the museum is free and open to the public year-round, all visitors must show a photo identification, walk through a metal detector and have their bags x-rayed before entering the Money Museum.', 'NavyPier.jpg', 'Navy Pier', 'Navy Pier, named to honor the naval veterans who served in the First World War, is a pier located on Chicago\'s shoreline of lake Michigan, it encompasses more than fifty acres of parks, gardens, shops, restaurants, family attractions and exhibition facilities and is the top leisure destination in the Midwestern United States.\nIt was opened to the public on July 15, 1916. \nOriginally the Navy Pier was to be a dock for freights, passenger traffic and a space for indoor and outdoor recreation for the public.'),
(2, 'Los Angeles', 'City of Angels', 'LosAngeles.jpg', 'LA-city-view.png', 'Los Angeles is the cultural, financial, and commercial center of Southern California, it is the second most populous city in the United States. The city was officially founded on September 4, 1781, by Spanish governor, it became a part of Mexico in 1821, but in 1848, at the end of the Mexican-American War, it was incorporated in the United States. \r\nNicknamed the \"City of Angels\" because of how its name translates from the Spanish is the home of Hollywood, a major center of the world entertainment industry.', 'GriffithObservatory.jpg', 'Griffith Observatory', 'Built in 1896, commands a view of the Los Angeles Basin, including Downtown Los Angeles to the southeast, Hollywood to the south, and the Pacific Ocean to the southwest. Griffith J. Griffith, who donated funds to build it, wanted to make astronomy accessible to everyone.', 'WalkOfFame.jpg', 'Hollywood Walk Of Fame', 'The Hollywood Walk of Fame comprises more than 2,600 stars embedded in the sidewalks of Hollywood Boulevard, The stars are monuments to achievement in the entertainment industry.', 'SantaMonicaBay.jpg', 'Santa Monica Bay', 'Santa Monica Bay, a bight of the Pacific Ocean in Southern California, is home to some of the most famous beaches in the world and is also a very popular fishing destination.'),
(3, 'New Orleans', 'Crescent City', 'NewOrleans.jpg', 'NewOrleans-city-view.jpg', 'New Orleans is a major United States port and the largest city and metropolitan area in the state of Louisiana.\nBefore Hurricane Katrina, Orleans Parish was the most populous parish in Louisiana.\nThe city is known for its distinct French and Spanish Creole architecture, as well as its cross-cultural and multilingual heritage, it is also famous for its cuisine, for being the birthplace of jazz music and for its annual celebrations and festivals.\nNew Orleans is located in southeastern Louisiana, and occupies both sides of the Mississippi River.', 'JacksonSquare.jpg', 'Jackson Square', 'Jackson Square is a historic park in the French Quarter of New Orleans, during the first half of the 19th century it was the former military plaza, then renamed Jackson Square, for the battle s victorious General Jackson, in the center of the park there is also a statue dedicated to the general.', 'AquariumOfAmericas.jpg', 'Aquarium Of Americas', 'It is located along the banks of the Mississippi River by the edge of the historic French Quarter off Canal Street, and it was opened in 1990. The aquarium specializes in aquatic life of the Americas, the exhibits feature regions throughout North and South America, with 10,000 animals representing 530 species.', 'SaintLouisCathedral.jpg', 'Saint Louis Cathedrals', 'Saint Louis Cathedrals is the seat of the Roman Catholic Archdiocese of New Orleans and is the oldest cathedral in the United States.\nIt is located next to Jackson Square and facing the Mississippi River in the heart of the city.\nIt is made of three churches, the first one was built in 1718, while the third was built in 1789 but it was raised to cathedral rank only in 1793.'),
(4, 'New York', 'The Big Apple', 'NewYorkCity.jpg', 'newyork-city-view.jpg', 'New York, also known as \"the big apple\", is the most populous city in the United States and the cultural, financial, and media capital of the world. New York City consists of five boroughs (Brooklyn, Queens, Manhattan, The Bronx and Staten Island), each of which is a separate county. \nNew York City was settled by the dutch in 1624 but the English took over the colony in 1664 during the second Anglo-Dutch War.\nNew York was named like this to honor the Duke of York. The city also has been the capital of the United States until 1790.', 'empireStateBuilding.jpg', 'Empire State Building', 'The Empire State Building is a skyscraper located in Midtown Manhattan, it has been the tallest in the world from 1931 to 1970 with a height of 443m. \nIts name comes from \"Empire State\", the nickname of New York. Nowadays is used as an office building and as an observation deck.', 'libertyStatue.jpg', 'Statue Of Liberty', 'The Statue of Liberty, located on Liberty Island, was built by Frederic Auguste Bartholdi and Gustave Eiffel and is made of copper.\r\nThe statue holds a torch above her head with her right hand, and in her left hand carries a tablet on which is inscribed a Roman number which is the date of the U.S. Declaration of Independence. \r\nThe statue is an icon of freedom and a welcoming sight to immigrants. ', 'centralPark.jpg', 'Central Park', 'Central Park is an urban park located in Manhattan and is the most visited urban park in the United States, it is also the most filmed location in the world. \nIt was opened in the 1857, Even thought it looks like a natural park it was Calvert Vaux to improve and expand the park with a plan titled the \"Greensward Plan\".\nCentral Park was designated a National Historic Landmark by the U.S. Department of the Interior in 1962, which in April 2017 placed it on the tentative list for UNESCO World Heritage sites.'),
(5, 'Philadelphia', 'The City of Brotherly Love', 'Philadelphia.jpg', 'philadelphia-city-view.jpg', 'Philadelphia is the largest city in and the sixth-most populous city in the United States, it was founded in 1682 to serve as capital of the Pennsylvania Colony. \nThe city played an important role in the American Revolution as a meeting place for the Founding Fathers of the United States, who signed the Declaration of Independence. \nNowadays it is known as a top study destination and for its arts since it is the most outdoor sculptures and murals than any other American city.', 'libertyBell.jpeg', 'Liberty Bell', 'The Liberty Bell is a symbol of American independence, it was cast with the lettering \"Proclaim LIBERTY Throughout all the Land unto all the Inhabitants Thereof\",it first cracked when rung after its arrival in Philadelphia. \nIn the past it was used to summon legislative sessions and to alert citizens about public meetings and proclamations.', 'museumOfArt.jpeg', 'Museum Of Art', 'The museum was completed in 1928 on Fairmount, a hill located at the northwest end of the Benjamin Franklin Parkway. \nIt contains over 240,000 objects that include sculpture, paintings, prints, drawings, photographs, armor, and decorative arts, this makesThe museum was completed in 1928 on Fairmount, a hill located at the northwest end of the Benjamin Franklin Parkway. \nIt contains over 240,000 objects that include sculpture, paintings, prints, drawings, photographs, armor, and decorative arts, this makes him one of the largest art museums in the world based on gallery space and one of the most visited. ', 'university.jpg', 'a university', 'The University of Pennsylvania is located in the University City section, it was chartered before the American Revolution.\nIt was one of the first academic institutions to follow a multidisciplinary model, the first school of medicine in North America and the first collegiate business school.'),
(6, 'Seattle', 'The Rattle', 'Seattle.jpg', 'Seattle-city-view.jpg', 'Seattle, a seaport city on the west coast, is the fourth-largest port in North America.\nThe Seattle area was previously inhabited by Native Americans for at least 4,000 years before the first permanent European settlers,\nThe settlement was moved to the eastern shore of Elliott Bay and named \"Seattle\" in 1852.\nLogging was the city s major industry until it had become a commercial and shipbuilding center as a gateway to Alaska, The Seattle area developed into a technology center beginning in the 1980s and  Amazon was founded in Seattle in 1994.\nThe city is also know for the jazz scene and as birthplace of many rock bands. ', 'SpaceNeedle.jpg', 'Space Needle', 'The Space Needle is an observation tower and an icon of Seattle, it was built in the Seattle Center for the 1962 World s Fair, it is 184m high and 42m wide, near the top an observation deck and a restaurant can be found.', 'OlympicSculpturePark.jpg', 'Olympic Sculpture Park', 'The Olympic Sculpture Park, situated at the northern end of the Seattle seawall, is a park, free and open to the public, opened in 2007. \nThe park consists of outdoor sculpture museum and beach.', 'MuseumOfFlight.jpg', 'Museum Of Flight', 'The Museum of Flight is a private space museum, It was established in 1965 and is the largest private air and space museum in the world.'),
(10, 'Washington', 'The District', 'Washington.jpg', 'washington-city-view.jpg', 'Washington, D.C., formally the District of Columbia, was founded in 1791 and is the capital of the United States.\nThe signing of the Residence Act on July 16, 1790, approved the creation of a capital district, which means that even thought the land was donated from the states of Maryland and Virginia, the district isn\'t part of any state.\nWashington is home to many national monuments and museums, which are primarily situated on or around the National Mall, \nit is also home of the federal government of the United States (Congress, President, and Supreme Court).', 'WhiteHouse.jpg', 'White House', 'The White House is the official residence and workplace of the President of the United States and has been the residence of every U.S. president since John Adams in 1800. \nThe Construction took place between 1792 and 1800 using Aquia Creek sandstone painted white. \nIn 1814, during the War of 1812 it was set ablaze by the British Army, destroying the interior and charring much of the exterior.\nReconstruction began almost immediately.', 'NationalMall.jpeg', 'National Mall', 'The National Mall is a landscaped park.\nIt contains museums of the Smithsonian Institution, art galleries, cultural institutions and various memorials, sculptures and statues. \nThe name is often taken to refer to the entire area between the Lincoln Memorial on the west, and east to the United States Capitol grounds, with the Washington Monument dividing the area slightly west of its midpoint.', 'LincolnMemorial.jpg', 'Lincoln Memorial', 'The Lincoln Memorial is a national monument built to honor the 16th President of the United States, Abraham Lincoln.\nThe building is in the form of a Greek Doric temple and contains a large seated sculpture of Abraham Lincoln and inscriptions of two speeches of the president, the memorial has been the site of many famous speeches, including Martin Luther King Jr.\'s \"I Have a Dream\". ');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `places`
--
ALTER TABLE `places`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `places`
--
ALTER TABLE `places`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
