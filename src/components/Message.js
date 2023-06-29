import { Box, Badge, Text, Flex } from "@chakra-ui/react";

const Message = ({ message, author, socketID }) => {
	const isYou = localStorage.getItem(socketID) === author ? 'You' : author;

	const maxWidth = "40vw";
	const width = message.length > 100 ? "auto" : "fit-content"; 

	return (
		<Flex 
			flexDirection={"column"} 
			alignItems={isYou === 'You' ? "flex-end" : "flex-start"} 
			justifyContent={isYou === 'You' ? "flex-end" : "flex-start"} 
			mt={1}
		>
			<Badge 
        borderRadius='full' 
        px='2' 
        colorScheme='teal'
			>
				<Text>{author}</Text>
			</Badge>
			<Box
				p={2}
				borderRadius="md"
				maxWidth={maxWidth}
				width={width}
				bg={isYou === 'You' ? "blue.200" : "gray.200"}
				mt={1}
			>
				<Text>{message}</Text>
			</Box>
		</Flex>
	);
}

export default Message;