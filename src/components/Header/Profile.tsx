import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Victor Lima</Text>
        <Text color="gray.300" fontSize="small">
          vitinhosouzajuatama@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Victor Lima"
        src="https://github.com/vitinhosouza.png"
      />
    </Flex>
  );
}
