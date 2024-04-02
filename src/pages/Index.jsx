import React from "react";
import { Box, VStack, HStack, Heading, Text, Image, Divider, IconButton, Spacer } from "@chakra-ui/react";
import { FaHome, FaMusic, FaUser, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <HStack align="start" spacing={0}>
      {/* Sidebar */}
      <VStack w="200px" h="100vh" bg="gray.100" p={4} spacing={8} align="stretch">
        <Heading size="md">My Music Blog</Heading>
        <VStack align="start" spacing={4}>
          <IconButton icon={<FaHome />} variant="ghost" size="lg" />
          <IconButton icon={<FaMusic />} variant="ghost" size="lg" />
          <IconButton icon={<FaUser />} variant="ghost" size="lg" />
          <IconButton icon={<FaEnvelope />} variant="ghost" size="lg" />
        </VStack>
        <Spacer />
        <Image borderRadius="full" boxSize="80px" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHNtaWxpbmclMjB3b21hbnxlbnwwfHx8fDE3MTIwNTYxMjF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile" />
        <Text fontSize="sm">Welcome, Sarah!</Text>
      </VStack>

      {/* Main Content */}
      <VStack align="start" p={8} spacing={8}>
        <Heading>Latest Posts</Heading>
        <VStack align="start" spacing={4} divider={<Divider />}>
          <Box>
            <Heading size="md">My Favorite Albums of 2023</Heading>
            <Text>June 15, 2023</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, velit eu pretium fermentum...</Text>
          </Box>
          <Box>
            <Heading size="md">Interview with John Doe</Heading>
            <Text>June 10, 2023</Text>
            <Text>Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor...</Text>
          </Box>
          <Box>
            <Heading size="md">Discovering New Indie Artists</Heading>
            <Text>June 5, 2023</Text>
            <Text>Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
          </Box>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default Index;
