import { useQuery } from "@apollo/client/react";
import GET_COUNTRIES from "../graphql/getCountries.graphql";
import {
  Center,
  Spinner,
  Box,
  SimpleGrid,
  Image,
  Flex,
} from "@chakra-ui/react";
import { flagToCountry } from "emoji-flags-to-country";

const Country = () => {
  const { data, error, loading } = useQuery(GET_COUNTRIES);

  // useEffect(() => {
  //   if (data) {
  //     twemoji.parse(document.body);
  //   }
  // }, [data]);

  if (loading)
    return (
      <Center h="70vh">
        <Box pr={4} fontSize="lg" fontWeight="bold" as="h3">
          Loading...
        </Box>
        <Spinner size="lg" />
      </Center>
    );

  if (error) return <p>`Error :( ${error.message}`</p>;

  return (
    <>
      <Box pt={4} pl={4} mb={4} fontSize="2xl" fontWeight="bold" as="h1">
        Countries list with ReactJS | GraphQL | ChakraUI
      </Box>
      <SimpleGrid minChildWidth="250px" p={4} spacing="40px">
        {data.countries.map((country) => (
          <Flex
            key={country.name}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="20px"
            p={4}
            textAlign="center"
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Box
              fontWeight="semibold"
              fontSize="md"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {country.name}
            </Box>
            <Image
              w="65px"
              h="45px"
              border="1px"
              borderColor="gray.200"
              m="auto"
              src={`flags/${flagToCountry(country.emoji)?.toLowerCase()}.svg`}
              alt={`${country.emoji}`}
            />
            <Box textAlign="left">
              <Box as="h6" fontWeight="semibold" fontSize="sm">
                Capital: {country.capital}
              </Box>
              <Box as="h6" fontWeight="semibold" fontSize="sm">
                Currency: {country.currency}
              </Box>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Country;
