import { Box, Flex, Text, Link, Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <Box bg="gray.100" py={4} px={8}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="sm" color="gray.500">
          © 2023 My Company. All rights reserved.
        </Text>
        <Text fontSize="md" color="gray.500">
          Made with ❤️ by Sourav Bandyopadhyay
        </Text>
        {/* <Link
          href="https://github.com/SouravBandyopadhyay/Quiz-Game"
          isExternal
        >
          <Button
            leftIcon={<FaGithub />}
            colorScheme="gray"
            variant="outline"
            rounded="md"
            size="lg"
            height="3.5rem"
            fontSize="1.2rem"
          >
            Github
          </Button>
        </Link> */}
      </Flex>
    </Box>
  );
}

export default Footer;
